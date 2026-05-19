const content = window.PORTFOLIO_CONTENT;

const featuredWorkRoot = document.getElementById("featured-work");
const explorationProjectsRoot = document.getElementById("exploration-projects");
const experienceRoot = document.getElementById("experience-list");
const consultingRoot = document.getElementById("consulting-list");
const leadershipRoot = document.getElementById("leadership-list");
const educationRoot = document.getElementById("education-list");
const skillsRoot = document.getElementById("skills-list");
const chatLog = document.getElementById("chat-log");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatDrawer = document.getElementById("chat-drawer");
const chatOverlay = document.getElementById("chat-overlay");
const chatClose = document.getElementById("chat-close");
const chatOpeners = document.querySelectorAll("[data-open-chat]");
const chatPrompts = document.querySelectorAll("[data-chat-prompt]");
let chatBusy = false;
let pendingHeroQuestion = "";
let conversationStarted = false;

function renderFeaturedWork() {
  featuredWorkRoot.innerHTML = content.featuredWork
    .map(
      (item) => `
        <a class="work-card" href="./project.html?slug=${item.slug}">
          <div>
            <span class="work-tag">${item.tag}</span>
            <h3>${item.title}</h3>
          </div>
          <div>
            <p>${item.summary}</p>
            <p><strong>${item.impact}</strong></p>
            ${item.proof ? `<p class="work-proof">${item.proof.label}</p>` : ""}
            <div class="work-cta-row">
              <p class="work-cta">Open case study</p>
              <span class="work-cta-arrow" aria-hidden="true">↗</span>
            </div>
          </div>
        </a>
      `,
    )
    .join("");
}

function renderExplorationProjects() {
  explorationProjectsRoot.innerHTML = content.exploratoryProjects
    .map(
      (item) => `
        <a class="exploration-card" href="./project.html?slug=${item.slug}">
          <span class="work-tag">${item.tag}</span>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <div class="work-cta-row">
            <p class="work-cta">Open project</p>
            <span class="work-cta-arrow" aria-hidden="true">↗</span>
          </div>
        </a>
      `,
    )
    .join("");
}

function renderExperience() {
  experienceRoot.innerHTML = content.professionalExperience
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-meta">
            <strong>${item.company}</strong>
            <span>${item.period}</span>
            <span>${item.location}</span>
          </div>
          <div class="timeline-summary">
            <h3>${item.role}</h3>
            <p>${item.summary}</p>
          </div>
        </article>
      `,
    )
    .join("");

  consultingRoot.innerHTML = content.consultingExperience
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-meta">
            <strong>${item.company}</strong>
            <span>${item.period}</span>
            <span>${item.location}</span>
          </div>
          <div class="timeline-summary">
            <h3>${item.role}</h3>
            <p>${item.summary}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderLeadership() {
  leadershipRoot.innerHTML = content.leadership
    .map(
      (item) => `
        <article class="leadership-card">
          <div class="leadership-card-top">
            <div>
              <p class="leadership-org">${item.org}</p>
              <h3>${item.role}</h3>
            </div>
            <p class="leadership-period">${item.period}</p>
          </div>
          <p class="leadership-location">${item.location}</p>
          <p class="leadership-summary">${item.summary}</p>
        </article>
      `,
    )
    .join("");
}

function renderEducation() {
  educationRoot.innerHTML = content.education
    .map(
      (item) => `
        <article class="stack-item">
          <h3>${item.school}</h3>
          <p>${item.detail}</p>
          <p><strong>${item.period}</strong></p>
        </article>
      `,
    )
    .join("");
}

function renderSkills() {
  skillsRoot.innerHTML = content.skills
    .map(
      (group) => `
        <article class="skills-group skills-group-${group.tone}">
          <div class="skills-group-heading">
            <h3>${group.label}</h3>
          </div>
          <div class="skills-tags">
            ${group.items.map((skill) => `<span>${skill}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function appendMessage(role, text, options = {}) {
  const message = document.createElement("article");
  message.className = `chat-message ${role}`;
  const safeText = String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
  const sourcesMarkup =
    role === "assistant" && options.sources?.length
      ? `
        <div class="chat-sources">
          ${options.sources
            .map(
              (source) =>
                `<a class="chat-source-link" href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a>`,
            )
            .join("")}
        </div>
      `
      : "";
  const warningMarkup =
    role === "assistant" && options.warning
      ? `<p class="chat-warning">${options.warning}</p>`
      : "";
  message.innerHTML = `<p>${safeText}</p>${warningMarkup}${sourcesMarkup}`;
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
  return message;
}

function setChatBusy(nextBusy) {
  chatBusy = nextBusy;
  chatInput.disabled = nextBusy;
  const submitButton = chatForm.querySelector("button");
  submitButton.disabled = nextBusy;
  submitButton.textContent = nextBusy ? "Thinking..." : "Ask";
}

function markConversationStarted() {
  if (conversationStarted) {
    return;
  }
  conversationStarted = true;
  chatDrawer.classList.add("has-conversation");
}

function getApiBase() {
  if (window.location.protocol === "file:") {
    return null;
  }
  return `${window.location.origin}/api/chat`;
}

async function handleQuestion(question) {
  const trimmed = question.trim();
  if (!trimmed || chatBusy) {
    return;
  }

  openChat();
  markConversationStarted();
  appendMessage("user", trimmed);
  chatInput.value = "";
  setChatBusy(true);

  const typingMessage = appendMessage("assistant secondary", "Thinking through the most relevant portfolio context...");

  try {
    const endpoint = getApiBase();

    if (!endpoint) {
      throw new Error("Local file preview cannot call the chat API. Use the deployed site or `vercel dev`.");
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: trimmed }),
    });

    const payload = await response.json();
    typingMessage.remove();

    if (!response.ok) {
      throw new Error(payload.detail || payload.error || "The portfolio assistant could not answer that right now.");
    }

    appendMessage("assistant", payload.answer, {
      sources: payload.sources,
      warning: payload.warning,
    });
  } catch (error) {
    typingMessage.remove();
    appendMessage(
      "assistant secondary",
      "I hit a temporary issue answering that. Try again in a moment, or ask a narrower question about PayPal, passkeys, Google Cloud, or leadership.",
    );
  } finally {
    setChatBusy(false);
    chatInput.focus();
  }
}

function openChat() {
  chatDrawer.classList.add("is-open");
  chatDrawer.setAttribute("aria-hidden", "false");
  chatOverlay.hidden = false;
  document.body.classList.add("chat-open");
  requestAnimationFrame(() => {
    chatInput.focus();
    if (pendingHeroQuestion) {
      chatInput.value = pendingHeroQuestion;
      pendingHeroQuestion = "";
    }
  });
}

function closeChat() {
  chatDrawer.classList.remove("is-open");
  chatDrawer.setAttribute("aria-hidden", "true");
  chatOverlay.hidden = true;
  document.body.classList.remove("chat-open");
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  handleQuestion(chatInput.value);
});

chatOpeners.forEach((button) => {
  button.addEventListener("click", () => {
    const prompt = button.dataset.chatPrompt || button.textContent || "";
    if (button.classList.contains("hero-chat-preview-prompt") && prompt) {
      pendingHeroQuestion = prompt.trim();
    }
    openChat();
  });
});

chatPrompts.forEach((button) => {
  button.addEventListener("click", () => {
    handleQuestion(button.dataset.chatPrompt || button.textContent || "");
  });
});

chatClose.addEventListener("click", closeChat);
chatOverlay.addEventListener("click", closeChat);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && chatDrawer.classList.contains("is-open")) {
    closeChat();
  }
});

renderFeaturedWork();
renderExplorationProjects();
renderExperience();
renderLeadership();
renderEducation();
renderSkills();
