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

function appendMessage(role, text) {
  const message = document.createElement("article");
  message.className = `chat-message ${role}`;
  message.innerHTML = `<p>${text}</p>`;
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function scoreKnowledgeEntry(query, entry) {
  const normalizedQuery = query.toLowerCase();
  return entry.keywords.reduce((score, keyword) => {
    return score + (normalizedQuery.includes(keyword) ? 2 : 0);
  }, entry.title.toLowerCase().split(" ").reduce((score, token) => {
    return score + (normalizedQuery.includes(token) ? 1 : 0);
  }, 0));
}

function buildAnswer(query) {
  const ranked = [...content.knowledge]
    .map((entry) => ({ entry, score: scoreKnowledgeEntry(query, entry) }))
    .sort((left, right) => right.score - left.score);

  const top = ranked[0];
  const secondary = ranked[1];

  if (!top || top.score === 0) {
    return "This setup knows the portfolio basics already, but it still needs more of Anshul's personal notes, project writeups, and life context to answer that well. That is a good candidate for the next knowledge drop.";
  }

  if (!secondary || secondary.score === 0 || secondary.entry.title === top.entry.title) {
    return top.entry.answer;
  }

  return `${top.entry.answer} Related angle: ${secondary.entry.answer}`;
}

function handleQuestion(question) {
  openChat();
  appendMessage("user", question);
  appendMessage("assistant", buildAnswer(question));
}

function openChat() {
  chatDrawer.classList.add("is-open");
  chatDrawer.setAttribute("aria-hidden", "false");
  chatOverlay.hidden = false;
}

function closeChat() {
  chatDrawer.classList.remove("is-open");
  chatDrawer.setAttribute("aria-hidden", "true");
  chatOverlay.hidden = true;
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = chatInput.value.trim();

  if (!question) {
    return;
  }

  handleQuestion(question);
  chatInput.value = "";
});

chatOpeners.forEach((button) => {
  button.addEventListener("click", () => {
    openChat();
    chatInput.focus();
  });
});

chatClose.addEventListener("click", closeChat);
chatOverlay.addEventListener("click", closeChat);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && chatDrawer.classList.contains("is-open")) {
    closeChat();
  }
});

document.querySelectorAll(".prompt-chip").forEach((button) => {
  button.addEventListener("click", () => {
    const prompt = button.dataset.prompt;
    if (prompt) {
      handleQuestion(prompt);
    }
  });
});

renderFeaturedWork();
renderExplorationProjects();
renderExperience();
renderLeadership();
renderEducation();
renderSkills();
