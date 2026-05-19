# Portfolio Setup

This is a local-first portfolio starter for Anshul Shrivastava.

Files:

- `index.html`: Main portfolio page
- `styles.css`: Visual system and layout
- `content.js`: Structured source content used by the page and chatbot
- `app.js`: Rendering logic and live chat UI behavior
- `data/portfolio-knowledge.js`: V1 knowledge chunks for the portfolio assistant
- `api/chat.js`: Vercel serverless endpoint for retrieval and LLM answers

Why this setup:

- Opens directly as a local file without a dev server
- Keeps the portfolio easy to edit while content is still evolving
- Lets the V1 chatbot use structured in-repo docs before moving to a vector database later

Chatbot V1:

1. Portfolio docs live in `data/portfolio-knowledge.js` as small curated chunks.
2. `api/chat.js` scores those chunks against the incoming question.
3. The top matching chunks are sent to Claude if `ANTHROPIC_API_KEY` is present.
4. If no Claude key is configured yet, the API still returns a grounded retrieval-only fallback answer.
5. Later, this can be upgraded to embeddings plus a vector database without changing the UI.

Environment variables for live Claude answers:

- `ANTHROPIC_API_KEY`
- `ANTHROPIC_MODEL` (optional)

Next content upgrades:

1. Add GitHub projects and links once the exact repos to feature are chosen
2. Add personal notes, hobbies, and longer-form background to the chatbot knowledge
3. Add resume text as an additional source document
4. Swap keyword retrieval for embeddings and a vector database when the content base gets larger
