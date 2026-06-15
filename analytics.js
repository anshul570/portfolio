const POSTHOG_PROJECT_API_KEY = "phc_nfsQVNyYXDFMDivkcP92vvhok38fDbufQXZGfDCd8CLL";
const POSTHOG_API_HOST = "https://us.i.posthog.com";

function loadPostHog() {
  if (!POSTHOG_PROJECT_API_KEY) {
    return;
  }

  if (window.location.protocol === "file:") {
    return;
  }

  if (window.location.host.includes("localhost") || window.location.host.includes("127.0.0.1")) {
    return;
  }

  !(function (t, e) {
    let o;
    let n;
    let p;
    let r;
    if (e.__SV) {
      return;
    }
    window.posthog = e;
    e._i = [];
    e.init = function (i, s, a) {
      function g(target, methodName) {
        const parts = methodName.split(".");
        if (parts.length === 2) {
          target = target[parts[0]];
          methodName = parts[1];
        }
        target[methodName] = function () {
          target.push([methodName].concat(Array.prototype.slice.call(arguments, 0)));
        };
      }

      (p = t.createElement("script")).type = "text/javascript";
      p.crossOrigin = "anonymous";
      p.async = true;
      p.src = `${s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com")}/static/array.js`;
      (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);

      const instance = a !== undefined ? (e[a] = []) : e;
      if (a === undefined) {
        a = "posthog";
      }
      instance.people = instance.people || [];
      instance.toString = function (stub) {
        let name = "posthog";
        if (a !== "posthog") {
          name += `.${a}`;
        }
        if (!stub) {
          name += " (stub)";
        }
        return name;
      };
      instance.people.toString = function () {
        return `${instance.toString(1)}.people (stub)`;
      };

      o = "init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(
        " ",
      );
      for (n = 0; n < o.length; n += 1) {
        g(instance, o[n]);
      }
      e._i.push([i, s, a]);
    };
    e.__SV = 1;
  })(document, window.posthog || []);

  window.posthog.init(POSTHOG_PROJECT_API_KEY, {
    api_host: POSTHOG_API_HOST,
    defaults: "2026-01-30",
    capture_pageleave: true,
  });
}

function capturePostHogEvent(eventName, properties = {}) {
  if (!window.posthog || typeof window.posthog.capture !== "function") {
    return;
  }
  window.posthog.capture(eventName, properties);
}

function textFromElement(element) {
  return (element?.textContent || "").replace(/\s+/g, " ").trim();
}

function setupPortfolioEvents() {
  document.addEventListener("click", (event) => {
    const clicked = event.target instanceof Element ? event.target : null;
    if (!clicked) {
      return;
    }

    const resumeLink = clicked.closest('a[href$=".pdf"]');
    if (resumeLink) {
      capturePostHogEvent("resume clicked", {
        href: resumeLink.getAttribute("href") || "",
        label: textFromElement(resumeLink),
        page_path: window.location.pathname,
      });
      return;
    }

    const projectCard = clicked.closest(".work-card, .exploration-card");
    if (projectCard) {
      capturePostHogEvent("project card clicked", {
        title: textFromElement(projectCard.querySelector("h3")),
        href: projectCard.getAttribute("href") || "",
        section: projectCard.classList.contains("work-card") ? "featured" : "exploration",
      });
      return;
    }

    const artifactLink = clicked.closest(".project-link-chip, .project-proof-link");
    if (artifactLink) {
      capturePostHogEvent("project artifact clicked", {
        label: textFromElement(artifactLink),
        href: artifactLink.getAttribute("href") || "",
        project_slug: new URLSearchParams(window.location.search).get("slug") || "",
      });
      return;
    }

    const emailLink = clicked.closest('a[href^="mailto:"]');
    if (emailLink) {
      capturePostHogEvent("contact email clicked", {
        label: textFromElement(emailLink),
        location: window.location.pathname,
      });
      return;
    }

    const socialLink = clicked.closest('a[href*="linkedin.com"], a[href*="github.com"]');
    if (socialLink) {
      capturePostHogEvent("profile link clicked", {
        label: textFromElement(socialLink),
        href: socialLink.getAttribute("href") || "",
      });
    }
  });
}

window.portfolioAnalytics = {
  capture: capturePostHogEvent,
};

loadPostHog();
setupPortfolioEvents();
