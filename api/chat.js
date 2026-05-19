const { portfolioKnowledge } = require("../data/portfolio-knowledge.js");

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL || "claude-3-5-haiku-latest";

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return normalize(text)
    .split(" ")
    .filter((token) => token.length > 1);
}

function uniqueTokens(text) {
  return [...new Set(tokenize(text))];
}

function scoreDocument(question, doc) {
  const questionText = normalize(question);
  const questionTokens = uniqueTokens(question);
  const haystack = normalize(`${doc.title} ${doc.tags.join(" ")} ${doc.text}`);

  let score = 0;

  for (const token of questionTokens) {
    if (doc.tags.some((tag) => normalize(tag).includes(token))) {
      score += 5;
    }
    if (normalize(doc.title).includes(token)) {
      score += 4;
    }
    if (haystack.includes(token)) {
      score += 2;
    }
  }

  if (questionText.includes("paypal") && doc.tags.includes("paypal")) {
    score += 8;
  }
  if (questionText.includes("cornell") && (doc.tags.includes("cornell") || doc.text.toLowerCase().includes("cornell"))) {
    score += 6;
  }
  if ((questionText.includes("lead") || questionText.includes("leadership")) && doc.tags.includes("leadership")) {
    score += 8;
  }
  if ((questionText.includes("product") || questionText.includes("pm")) && doc.tags.includes("product")) {
    score += 5;
  }
  if (questionText.includes("ai") && doc.tags.includes("ai")) {
    score += 5;
  }

  return score;
}

function retrieveDocuments(question, limit = 4) {
  return portfolioKnowledge
    .map((doc) => ({ ...doc, score: scoreDocument(question, doc) }))
    .filter((doc) => doc.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function buildContext(docs) {
  return docs
    .map((doc, index) => {
      return [
        `Source ${index + 1}: ${doc.title}`,
        `URL: ${doc.url}`,
        `Tags: ${doc.tags.join(", ")}`,
        `Content: ${doc.text}`,
      ].join("\n");
    })
    .join("\n\n");
}

function buildFallbackAnswer(question, docs) {
  if (!docs.length) {
    return {
      answer:
        "I do not have enough grounded portfolio context for that yet. Try asking about PayPal, passkeys, Google Cloud compliance, InboxIQ, leadership at Cornell Tech, or what roles fit me best.",
      sources: [],
      mode: "fallback",
    };
  }

  const lead = docs[0];
  const supporting = docs.slice(1, 3);
  const supportingText = supporting.length
    ? ` Related context: ${supporting.map((doc) => doc.text).join(" ")}`
    : "";

  return {
    answer: `${lead.text}${supportingText}`,
    sources: docs.map((doc) => ({ title: doc.title, url: doc.url })),
    mode: "fallback",
  };
}

async function askClaude(question, docs) {
  const context = buildContext(docs);
  const system = [
    "You are Ask Anshul, the portfolio assistant for Anshul Shrivastava.",
    "Answer only from the provided portfolio context.",
    "If the context is incomplete, say that briefly instead of inventing facts.",
    "Write in a warm, sharp, recruiter-friendly voice.",
    "Prefer concise paragraphs or bullets.",
    "When helpful, synthesize across sources instead of repeating them one by one.",
  ].join(" ");

  const user = [
    `Question: ${question}`,
    "",
    "Portfolio context:",
    context,
  ].join("\n");

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: ANTHROPIC_MODEL,
      max_tokens: 500,
      system,
      messages: [{ role: "user", content: user }],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Anthropic request failed: ${response.status} ${errorText}`);
  }

  const payload = await response.json();
  const answer = (payload.content || [])
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("\n")
    .trim();

  return {
    answer:
      answer ||
      "I found relevant portfolio context, but I could not turn it into a clean answer just yet.",
    sources: docs.map((doc) => ({ title: doc.title, url: doc.url })),
    mode: "anthropic",
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const question = String(body.question || "").trim();

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    const docs = retrieveDocuments(question, 4);

    if (!ANTHROPIC_API_KEY) {
      return res.status(200).json(buildFallbackAnswer(question, docs));
    }

    const result = await askClaude(question, docs);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      error: "Chat request failed",
      detail: error.message,
    });
  }
};
