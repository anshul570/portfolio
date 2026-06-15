const content = window.PORTFOLIO_CONTENT;
const allProjects = [...content.featuredWork, ...(content.exploratoryProjects ?? [])];

const params = new URLSearchParams(window.location.search);
const requestedSlug = params.get("slug");
const fallbackProject = allProjects[0];
const selectedProject = allProjects.find((item) => item.slug === requestedSlug) ?? fallbackProject;

const projectTag = document.getElementById("project-tag");
const projectTitle = document.getElementById("project-title");
const projectSummary = document.getElementById("project-summary");
const projectImpact = document.getElementById("project-impact");
const projectProofLink = document.getElementById("project-proof-link");
const projectLinksBlock = document.getElementById("project-links-block");
const projectLinksList = document.getElementById("project-links-list");
const projectMetricLabel = document.getElementById("project-metric-label");
const projectMetrics = document.getElementById("project-metrics");
const projectDetailLabel = document.getElementById("project-detail-label");
const projectDetailHeadline = document.getElementById("project-detail-headline");
const projectDetailOverview = document.getElementById("project-detail-overview");
const projectSections = document.getElementById("project-sections");
const projectDetailHighlights = document.getElementById("project-detail-highlights");
const projectDetailOutcome = document.getElementById("project-detail-outcome");

if (selectedProject) {
  document.title = `${selectedProject.title} | Anshul Shrivastava`;
  window.portfolioAnalytics?.capture?.("project viewed", {
    slug: selectedProject.slug,
    title: selectedProject.title,
    tag: selectedProject.tag,
  });
  projectTag.textContent = selectedProject.tag;
  projectTitle.textContent = selectedProject.title;
  projectSummary.textContent = selectedProject.summary;
  projectImpact.textContent = selectedProject.impact;
  const links = [...(selectedProject.links ?? [])];
  if (selectedProject.proof) {
    projectProofLink.hidden = false;
    projectProofLink.href = selectedProject.proof.url;
    projectProofLink.textContent = selectedProject.proof.label;
    if (!links.some((item) => item.url === selectedProject.proof.url)) {
      links.unshift(selectedProject.proof);
    }
  } else {
    projectProofLink.hidden = true;
  }

  if (links.length) {
    projectLinksBlock.hidden = false;
    projectLinksList.innerHTML = links
      .map(
        (item) =>
          `<a class="project-link-chip" href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>`,
      )
      .join("");
  } else {
    projectLinksBlock.hidden = true;
  }

  if (selectedProject.detail) {
    projectDetailLabel.textContent = selectedProject.detail.label;
    projectMetricLabel.textContent = selectedProject.detail.metricLabel ?? "Key Metrics";
    projectDetailHeadline.textContent = selectedProject.detail.headline;
    projectDetailOverview.textContent = selectedProject.detail.overview;
    projectMetrics.innerHTML = (selectedProject.detail.metrics ?? [])
      .map(
        (item) => `
          <article class="project-metric-card">
            <strong>${item.value}</strong>
            <span>${item.label}</span>
          </article>
        `,
      )
      .join("");
    projectSections.innerHTML = (selectedProject.detail.sections ?? [])
      .map(
        (section, index) => `
          <section class="project-section-block">
            <div class="project-section-heading">
              <span class="project-section-index">${String(index + 1).padStart(2, "0")}</span>
              <h3>${section.title}</h3>
            </div>
            <p>${section.body}</p>
          </section>
        `,
      )
      .join("");
    projectDetailHighlights.innerHTML = selectedProject.detail.highlights
      .map((item) => `<li>${item}</li>`)
      .join("");
    projectDetailOutcome.textContent = selectedProject.detail.outcome;
  }
}
