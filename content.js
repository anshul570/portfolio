window.PORTFOLIO_CONTENT = {
  profile: {
    name: "Anshul Shrivastava",
    role: "Product-focused engineer across identity, fraud, checkout, AI, and strategy",
    location: "New York, NY",
    email: "anshul12.career@gmail.com",
    linkedin: "https://www.linkedin.com/in/anshul-shrivastava-bits/",
    github: "https://github.com/anshul570",
  },
  featuredWork: [
    {
      slug: "bot-mitigation",
      tag: "PayPal",
      title: "Built AI-powered bot protection for PayPal identity",
      summary:
        "Rolled out AI-powered bot protection across login and checkout while balancing fraud prevention, latency, and customer friction.",
      impact: "$20M fraud loss avoided, with about 50% lower SMS abuse and fewer account takeovers.",
      proof: {
        label: "External proof: DataDome customer story",
        url: "https://datadome.co/customers-stories/paypal-s-strategy-to-stop-ai-powered-bots-reduce-fraud/",
      },
      detail: {
        label: "Identity platform",
        metricLabel: "Key Metrics",
        headline: "Stopping malicious traffic earlier, before it became a customer problem",
        overview:
          "At PayPal, I led a bot-mitigation effort after seeing that a meaningful share of traffic was malicious and that our defenses were catching abuse too late. I drove a structured build-versus-buy evaluation, partnered with Cyber Security to shape a risk-based approach, and rolled the solution into high-traffic identity surfaces like login and checkout.",
        metrics: [
          {
            value: "16%",
            label: "of daily PayPal traffic better protected from malicious bot patterns",
          },
          {
            value: "$20M",
            label: "annual fraud loss avoided across protected identity flows",
          },
          {
            value: "~50%",
            label: "lower SMS abuse, fewer ATO attempts, and fewer fake-account attacks",
          },
        ],
        sections: [
          {
            title: "Problem",
            body:
              "A large share of traffic entering PayPal identity flows was malicious, including credential stuffing, fake account creation, SMS pumping, and brute-force attacks. The existing stack often detected abuse only after that traffic had already entered internal systems, which meant we were reacting late and paying for it in fraud exposure, infrastructure cost, and customer friction.",
          },
          {
            title: "My Role",
            body:
              "I led the effort inside the Identity platform, working across engineering, product, risk, and Cyber Security teams to design and roll out an earlier bot-detection solution that could operate at massive scale without hurting legitimate users.",
          },
          {
            title: "What Made It Hard",
            body:
              "The problem sat at the intersection of security, performance, and experience. Security wanted aggressive blocking, product wanted minimal friction, infrastructure wanted low latency, and all of it had to work across billions of requests per day. Early rollout also introduced false positives, and attackers kept adapting by shifting toward weaker entry points.",
          },
          {
            title: "Approach",
            body:
              "I reframed the problem around stopping malicious traffic earlier in the journey. I ran a build-versus-buy evaluation across vendors like DataDome and Radware, weighing detection quality, scalability, latency, and integration effort. From there, I helped shape a risk-based system that blocked clearly malicious traffic, challenged suspicious activity, and let legitimate users move through with minimal interruption.",
          },
          {
            title: "What Happened Next",
            body:
              "When false positives showed up in early rollout, I did not treat that as a reason to back away. I tuned the detection sensitivity, concentrated stricter checks on the highest-risk flows, and monitored fraud, latency, and login success in phased rollouts until the experience stabilized. Once login and checkout were under better control, I spotted attackers shifting toward weaker entry points like signup, password recovery, and merchant onboarding, and used that pattern to push the team from whack-a-mole fixes toward broader journey protection.",
          },
        ],
        highlights: [
          "Framed the core problem around detecting abuse earlier, before malicious traffic consumed internal systems and hurt customers.",
          "Ran a structured vendor evaluation across options like DataDome and Radware, weighing detection strength, scalability, latency, and integration feasibility.",
          "Designed a risk-based response model: block clearly malicious traffic, challenge suspicious activity, and keep legitimate users moving with minimal friction.",
          "Handled early false positives by tuning the rollout in phases instead of rolling it back, using fraud, latency, and login-success signals to stabilize both security and experience.",
          "Shifted the team from flow-by-flow defense to broader journey protection after spotting attackers move toward weaker entry points like signup and password recovery.",
        ],
        outcome:
          "The rollout helped avoid about $20M in annual fraud losses, cut SMS-based attacks by about half, reduced account takeovers and fake account creation, improved login success for legitimate users, reduced unnecessary CAPTCHA-style challenges, lowered infrastructure load, and strengthened trust in platform security without adding avoidable friction.",
      },
    },
    {
      slug: "passkeys-platform",
      tag: "Identity platform",
      title: "Scaled passkeys and passwordless MFA across PayPal",
      summary:
        "Built a reusable passkeys platform and expanded passwordless authentication across login, checkout, and MFA journeys.",
      impact: "$5M platform impact, plus about $1.8M from conversion lift and +9.3% login success.",
      detail: {
        label: "Passwordless authentication",
        metricLabel: "Key Metrics",
        headline: "Turning passkeys from a limited feature into a scalable platform capability",
        overview:
          "A large share of PayPal users could not use passkeys because of browser and device limitations, which pushed them back to passwords or OTP and created avoidable friction in login and checkout. I led a cross-functional effort to expand passkey availability, build a scalable platform for reuse, and drive real adoption through product and UX improvements.",
        metrics: [
          {
            value: "$5M",
            label: "annual platform-level revenue impact from broader passkey improvements",
          },
          {
            value: "$1.8M",
            label: "additional revenue from roughly 100bps checkout conversion lift",
          },
          {
            value: "+9.3%",
            label: "increase in login success for affected journeys",
          },
        ],
        sections: [
          {
            title: "Problem",
            body:
              "PayPal was seeing login friction across checkout journeys, which contributed to drop-offs and lost conversions. Passkeys offered a way to improve both security and user experience, but adoption was constrained by fragmented flows, limited browser and device coverage, and the practical challenge of rolling out a new authentication model across multiple services.",
          },
          {
            title: "Goal",
            body:
              "The goal was not just to ship passkeys in one place. It was to expand platform and browser coverage, reduce login friction and checkout drop-offs, improve secure MFA adoption, and strengthen PayPal's broader passwordless strategy while producing measurable business impact.",
          },
          {
            title: "My Role",
            body:
              "I led passkey adoption across PayPal's identity platform with a cross-functional group of roughly 3 to 5 engineers plus product, analytics, and QA partners. I drove both sides of the work: platform capability through reusable architecture and product-level improvement through experimentation and friction reduction.",
          },
          {
            title: "Approach",
            body:
              "Instead of solving for one narrow flow, I designed a reusable passkeys capability. That included a plug-and-play SDK, support for inline login to reduce redirects, and a more standardized way to handle passkeys across login and checkout. I also expanded support across browsers and environments, while keeping the work on an MVP timeline without sacrificing long-term scalability.",
          },
          {
            title: "Adoption",
            body:
              "I embedded passkeys into MFA journeys, reduced reliance on fallback methods for trusted users, and paired the rollout with A/B testing to improve accessibility and remove real user friction. That meant the project improved real usage and conversion, not just feature availability on paper.",
          },
        ],
        highlights: [
          "Built a reusable SDK-style capability instead of a one-off passkeys feature.",
          "Expanded coverage across browsers and environments, including key compatibility blockers.",
          "Integrated passkeys into MFA flows to make trusted-user authentication faster and lower friction.",
          "Used experimentation and UX improvements to drive real adoption and measurable business lift.",
        ],
        outcome:
          "The work delivered about $5M in annual platform-level impact, plus roughly $1.8M in additional revenue from checkout conversion lift. It also increased passkey adoption and coverage across key user journeys, reduced login friction, improved checkout completion, and strengthened PayPal's long-term passwordless strategy at scale.",
      },
    },
    {
      slug: "gcp-compliance-automation",
      tag: "Google Cloud x Cornell Tech",
      title: "Designed AI compliance automation for Google Cloud onboarding",
      summary:
        "Designed a multi-agent compliance workflow and auditor-facing prototype to replace manual mapping, evidence, and monitoring work.",
      impact: "Designed to compress a 180-day process and replace fragile spreadsheet-based audit workflows.",
      proof: {
        label: "Frontend prototype: Attest Compliance",
        url: "https://claude.ai/public/artifacts/a93e556a-6719-44be-b269-a19658463d47",
      },
      detail: {
        label: "AI compliance systems",
        metricLabel: "Designed Impact",
        headline: "Building a path from manual audits to continuous compliance automation",
        overview:
          "Enterprises onboarding to Google Cloud had no automated way to map regulatory controls to GCP services, collect audit evidence, or enforce compliance continuously. I framed the problem end to end, designed an AI-native solution architecture, and built an auditor-facing prototype called Attest to show how GCP could move from screenshot-based compliance work to a structured automation layer.",
        metrics: [
          {
            value: "180 days",
            label: "manual compliance onboarding timeline the system is designed to compress",
          },
          {
            value: "40%",
            label: "of GCP services with any existing mapping coverage today",
          },
          {
            value: "3-step",
            label: "proposed AI workflow across mapping, evidence, and policy generation",
          },
        ],
        sections: [
          {
            title: "Problem",
            body:
              "Enterprise teams had no end-to-end way to automate compliance onboarding on GCP. Control mapping coverage was incomplete, audit evidence lived in screenshots and spreadsheets, configuration drift often went undetected until annual audits, and policy-as-code was impractical to author at enterprise scale. That made compliance slow, brittle, and commercially painful for GCP in competitive enterprise deals.",
          },
          {
            title: "My Role",
            body:
              "I owned the work end to end: problem framing, research, AI solution architecture, multi-agent system design, auditor-facing frontend prototyping, competitive positioning, and the risk framework for hallucination and liability. I also ran primary research through expert interviews and synthesis of OSCAL, OpenSSF, and GCP documentation.",
          },
          {
            title: "What Made It Hard",
            body:
              "There was no real playbook. NIST 800-53 contains hundreds of controls, each needing to map across dozens of GCP services with no ground truth. Rule-based approaches broke down at that permutation count, which forced a shift toward LLM reasoning. But hallucination risk was unusually high-stakes: a wrong AI mapping could create a silent compliance gap with audit or regulatory consequences.",
          },
          {
            title: "Approach",
            body:
              "I decomposed the broader compliance failure into four gaps: control mapping, evidence collection, continuous monitoring, and policy-as-code. From there I designed a three-step AI pipeline: a Control-to-Service Mapping Agent grounded in GCP service manuals, NIST controls, and OSCAL history; a Test Definition and Evidence Agent for automated execution and audit artifact capture; and a future Rego Policy Generator Agent for policy-as-code at scale.",
          },
          {
            title: "Prototype and Positioning",
            body:
              "I built an auditor-facing prototype called Attest and paired it with a competitive analysis against AWS Security Hub, Prisma Cloud, and Azure Defender. That let me position the concept not just as a tooling fix, but as a differentiated GCP growth opportunity built around dynamic framework mapping instead of static rule authoring.",
          },
          {
            title: "Risk Framework",
            body:
              "Because AI errors in compliance can be materially dangerous, I designed the solution around human-in-the-loop approval, confidence scoring, golden-set evaluation, and an AI-as-draft posture. That kept the concept grounded in how regulated buyers and auditors would actually evaluate trust.",
          },
        ],
        highlights: [
          "Framed the problem as a GCP market share and onboarding issue, not just a compliance tooling inconvenience.",
          "Designed a multi-agent RAG workflow spanning mapping, evidence generation, monitoring, and future policy automation.",
          "Built a working auditor-facing prototype to make the concept tangible for technical and business stakeholders.",
          "Defined AI-specific risk mitigations for hallucination, liability, and audit trust before treating the solution as deployable.",
        ],
        outcome:
          "The concept was designed to replace manual control mapping with an automated RAG pipeline, shift evidence collection away from screenshot-based workflows, enable continuous monitoring instead of annual point-in-time validation, and make policy-as-code viable at enterprise scale. In product terms, it positions GCP to compete more effectively on compliance readiness in enterprise onboarding.",
      },
    },
  ],
  exploratoryProjects: [
    {
      slug: "ai-chief-of-staff",
      tag: "AI workflow",
      title: "InboxIQ",
      summary:
        "Built an AI life operating system for MBA overwhelm, turning chaotic email across job search, school, networking, and personal admin into one structured decision layer.",
      detail: {
        label: "Personal AI systems",
        metricLabel: "Key Metrics",
        headline: "Building a personal intelligence layer on top of email chaos",
        overview:
          "InboxIQ is an AI life operating system I built for the overloaded MBA experience. It turns unstructured email across job search, academics, networking, campus life, and personal admin into a structured dashboard that surfaces the right information at the right time with zero manual input.",
        metrics: [
          { value: "3,000+", label: "emails processed across two Gmail accounts, with ongoing ingestion" },
          { value: "4", label: "life domains unified in one operating dashboard" },
          { value: "88%", label: "measured baseline classification accuracy, improving iteratively" },
        ],
        sections: [
          {
            title: "Problem",
            body:
              "MBA life creates a flood of undifferentiated email across job search, school, networking, campus events, and personal admin. Important deadlines get lost, opportunities slip through, and manual spreadsheet tracking still fails after consuming hours each week. The core product problem was how to build a personal intelligence layer on top of email chaos that surfaces the right information at the right time with zero manual input.",
          },
          {
            title: "My Role",
            body:
              "I built the system end to end as a solo product builder. That included problem definition, taxonomy design, AI prompt engineering, backend pipeline architecture, database schema, frontend dashboard design, evaluation framework design, deployment, and operations.",
          },
          {
            title: "What Made It Hard",
            body:
              "The hard part was not just classifying email. It was doing so across multiple life domains with no labeled dataset, keeping trust high enough that surfaced actions were actually useful, unifying two Gmail accounts without contamination, handling historical backfill plus ongoing processing without duplication, and doing all of that under a sub-$10 monthly cost target while actively relying on the system during job search and school.",
          },
          {
            title: "Architecture",
            body:
              "I designed the full pipeline as Gmail APIs to n8n automation to Claude AI to Supabase to a Next.js dashboard on Vercel. I added timestamp-based dedup logic, Google Sheets sync as an offline backup and annotation layer, and a four-tab information architecture spanning Jobs, Networking, MBA Life, and Life Admin.",
          },
          {
            title: "AI Product Design",
            body:
              "I engineered a Claude Haiku classification system with explicit routing rules across 15+ email types, designed urgency scoring calibrated to real MBA priorities, filtered action items to prevent noise, and built a Sonnet-judges-Haiku evaluation workflow so prompt changes could be measured instead of guessed. I also added a RAG-based chatbot layer so users could ask natural-language questions about the dashboard and underlying database instead of only navigating the UI manually.",
          },
          {
            title: "Shipping and Use",
            body:
              "I backfilled more than 2,500 historical emails, deployed the dashboard on Vercel, self-hosted n8n locally to keep cost near zero, and used the system in my actual day-to-day workflow. This was not a mockup; it became the operating layer for my real applications, school deadlines, and networking follow-ups.",
          },
        ],
        highlights: [
          "Designed a taxonomy and evaluation framework from scratch instead of stopping at prompt experimentation.",
          "Built a four-domain information architecture spanning jobs, school, networking, and personal admin.",
          "Added a RAG-based chatbot that answers questions over the dashboard's live underlying data.",
          "Kept total infrastructure cost below $5 per month while measuring accuracy and shipping a live product.",
          "Used the system personally every day, which forced reliability, precision, and honest product decisions.",
        ],
        outcome:
          "InboxIQ reduced manual tracking time from roughly 3 to 4 hours per week to zero, processes more than 3,000 emails across two accounts with ongoing ingestion, surfaces action items and school deadlines automatically, creates an auto-populated networking CRM for follow-ups and relationship tracking, and adds a conversational layer for asking questions directly against the system's data. More importantly, it turned anxious inbox-checking into one dashboard that tells me what matters next.",
      },
    },
    {
      slug: "batsignal",
      tag: "Sports analytics",
      title: "BatSignal",
      summary:
        "Built a real-time AI sports analytics prototype that turns live baseball commentary into streaming predictions, insights, and dashboard updates.",
      proof: {
        label: "Project repo",
        url: "https://github.com/anshul570/realtime_sports_commentary_analytics",
      },
      detail: {
        label: "Real-time AI systems",
        metricLabel: "Architecture",
        headline: "Exploring how streaming systems and LLMs can power live fan engagement",
        overview:
          "BatSignal is a real-time sports commentary analytics prototype built to explore how live entertainment experiences could be enriched with AI instead of depending entirely on manual analyst teams to surface the right moments, stats, and predictions. We took it from idea to working prototype quickly, with a focus on streaming reliability, low-latency inference, and live dashboard updates.",
        metrics: [
          { value: "Kafka", label: "streaming backbone for continuous live commentary ingestion" },
          { value: "Cerebras", label: "low-latency Llama inference for live AI enrichment" },
          { value: "WebSockets", label: "dashboard delivery layer for real-time updates and signals" },
        ],
        sections: [
          {
            title: "Problem",
            body:
              "Live sports and entertainment generate continuous, high-velocity data streams, but many of the most engaging moments, stats, and contextual signals are still surfaced manually by dedicated teams. That creates a big opportunity: can AI deliver faster, richer live engagement at scale?",
          },
          {
            title: "Architecture",
            body:
              "We designed the system end to end around live baseball commentary ingestion, Kafka-based event streaming, an LLM consumer for real-time analysis, an analytics persistence and API layer, and WebSocket-driven dashboard updates. The goal was to create a live feedback loop from commentary stream to surfaced fan insight.",
          },
          {
            title: "AI and Platform",
            body:
              "The prototype used Meta Llama hosted on Cerebras for low-latency inference in live scenarios. We enriched streaming events in real time, wrote outputs to an analytics store, and built in fallback handling so the system could stay reliable even when inference or upstream signals were noisy.",
          },
          {
            title: "Product Thinking",
            body:
              "Rather than treating this as a pure infrastructure demo, we framed it as a fan-engagement product: real-time game-state updates, predictive signals like win probability and pitch insights, and analytics surfaced alongside the live commentary stream in a dashboard experience.",
          },
          {
            title: "Team and Delivery",
            body:
              "This was a collaborative prototype built quickly with a small team using tools like Cursor and Lovable to accelerate implementation. It shows how I work in fast, experimental environments where architecture, product framing, and execution all need to move together.",
          },
        ],
        highlights: [
          "Built around real-time streaming, low-latency inference, and live dashboard delivery.",
          "Used Kafka plus Llama on Cerebras to explore AI-native engagement in sports environments.",
          "Framed the work as a product opportunity in live entertainment, not just a technical demo.",
        ],
        outcome:
          "BatSignal acts as a proof point for how streaming systems, low-latency LLM inference, and real-time dashboards can converge in live sports environments. It demonstrates my interest in AI products that operate on live signals, not just static data, and in experiences where speed, architecture, and engagement all matter at once.",
      },
    },
    {
      slug: "ask-anshul",
      tag: "Portfolio AI",
      title: "Ask Anshul",
      summary:
        "Built a portfolio experience with a RAG-based chatbot that answers questions about my work, projects, leadership stories, and background.",
      detail: {
        label: "Portfolio systems",
        metricLabel: "System Design",
        headline: "Turning a personal portfolio into a conversational knowledge system",
        overview:
          "I built this portfolio as both a personal brand surface and a retrieval-driven product experience. Instead of relying only on static sections, I added a RAG-based chatbot that can answer questions about my background, featured projects, leadership stories, and the reasoning behind my work.",
        metrics: [
          { value: "RAG-based", label: "chat layer grounded in structured portfolio knowledge" },
          { value: "Interactive", label: "portfolio experience designed for both scanning and exploration" },
          { value: "Live", label: "chatbot embedded directly into the portfolio interface" },
        ],
        sections: [
          {
            title: "Problem",
            body:
              "Traditional portfolios are easy to scan but often hard to explore deeply without becoming cluttered. They show highlights, but they rarely let someone ask follow-up questions about why a project mattered, what was difficult, or how the person behind the work actually thinks.",
          },
          {
            title: "Approach",
            body:
              "I designed the portfolio with two layers: a clean visual surface for quick scanning, and a structured knowledge layer underneath for deeper exploration. The chatbot uses retrieval over project write-ups, experience details, and narrative context so visitors can ask natural-language questions instead of just navigating sections manually.",
          },
          {
            title: "System Design",
            body:
              "The project combines content architecture, frontend interaction design, and a lightweight RAG pattern. I structured the underlying data so projects, experience, leadership stories, and personal themes could all be surfaced contextually through chat while still keeping the main interface uncluttered.",
          },
          {
            title: "Why It Matters",
            body:
              "This project reflects how I think about AI in product experiences: not as a gimmick layered on top of a site, but as a way to make information more explorable, useful, and personal without sacrificing clarity or design quality.",
          },
        ],
        highlights: [
          "Built a RAG-based chatbot around structured portfolio knowledge rather than a generic assistant shell.",
          "Designed the site to support both recruiter-style scanning and deeper exploratory conversation.",
          "Integrated product storytelling, information architecture, and AI interaction into one system.",
        ],
        outcome:
          "Ask Anshul turns the portfolio into a more interactive product experience. It gives visitors a direct way to explore my work, ask follow-up questions, and understand the thinking behind each project, while also demonstrating a practical RAG-based interface built around personal knowledge retrieval.",
      },
    },
    {
      slug: "ai-parking-management",
      tag: "Urban mobility",
      title: "iPark",
      summary:
        "Designed an AI curbside parking assistant that turns confusing street rules into instant, plain-English parking guidance for drivers.",
      detail: {
        label: "Curbside AI",
        metricLabel: "Product Concept",
        headline: "Reimagining the curbside experience with AI-powered parking clarity",
        overview:
          "iPark is an AI-powered curbside parking assistant designed to make confusing street parking rules instantly understandable. The concept combines live city data, curb signage, and driver input to generate plain-English guidance like 'Park for 45 minutes' or 'No parking until 7 PM,' with dynamic updates and in-car support.",
        metrics: [
          { value: "5 sec", label: "target time to tell a driver whether parking is legal right now" },
          { value: "Live", label: "city feeds and temporary-rule updates reflected in real time" },
          { value: "CarPlay", label: "hands-free experience designed for safer in-car guidance" },
        ],
        sections: [
          {
            title: "Problem",
            body:
              "Street parking is a daily high-stakes decision problem. Drivers face fragmented signage, time limits, temporary restrictions, and inconsistent city rules, often under pressure. That leads to tickets, wasted time, cruising, double-parking, and a stressful curbside experience for both drivers and cities.",
          },
          {
            title: "Solution",
            body:
              "We designed iPark as a curbside companion app that integrates live city data, curb signage, and driver context, then uses AI to interpret parking legality in real time. Instead of forcing drivers to parse dense rules themselves, the product gives an immediate plain-English answer and keeps updating as rules change.",
          },
          {
            title: "User Experience",
            body:
              "The core value proposition is speed and trust: a 5-second 'OK until...' answer, ticket-protection style peace of mind, live temporary-rule sync, and optional Apple CarPlay support for voice-based, hands-free use. The product is designed to reduce stress while improving compliance and curb turnover.",
          },
          {
            title: "Customers and Platform Thinking",
            body:
              "The concept serves multiple customer groups: drivers who want clarity, travelers who need multilingual help, cities and DOTs that want fewer violations, and navigation platforms that could integrate a legality API. It also creates a cloud showcase opportunity for real-time edge-to-cloud AI workloads.",
          },
          {
            title: "Risk and Go-to-Market",
            body:
              "We explicitly designed around adoption, trust, and liability. That included ideas like immediate value without signup, ticket-guarantee trials, city and campus distribution channels, shadow-mode deployment before live guidance, and progressive rollout only in high-confidence areas to reduce early liability.",
          },
        ],
        highlights: [
          "Translated complex curbside rules into instant, plain-English parking guidance.",
          "Framed the product across drivers, cities, APIs, and cloud-platform stakeholders.",
          "Designed not just the AI layer, but the trust, liability, and adoption strategy around it.",
        ],
        outcome:
          "iPark shows how AI can be applied to an everyday urban friction point with real consumer and city value. More than a parking app, it is a product concept about trust, real-time interpretation, and reducing decision complexity in physical-world systems.",
      },
    },
    {
      slug: "everon-energies",
      tag: "Consulting",
      title: "Everon Energies",
      summary:
        "Developed a business expansion strategy grounded in market and financial analysis, including recommendations around solar application integration.",
      detail: {
        label: "Strategy consulting",
        metricLabel: "Project Focus",
        headline: "Building a data-backed expansion strategy for an energy business",
        overview:
          "For Everon Energies, I developed an expansion strategy using market and financial analysis to identify where growth could be most attractive and how solar application integration could strengthen the opportunity.",
        metrics: [
          { value: "Market", label: "strategy grounded in commercial and competitive analysis" },
          { value: "Financial", label: "recommendations shaped by business viability, not intuition alone" },
          { value: "Solar", label: "integration lens applied to expansion planning" },
        ],
        sections: [
          { title: "Problem", body: "The challenge was to define a practical expansion path rather than broad strategic advice with no decision framework behind it." },
          { title: "Approach", body: "I used market and financial analysis to evaluate opportunity spaces and translate them into concrete growth recommendations." },
          { title: "Why It Matters", body: "This project shows the strategy side of my work: framing ambiguous business questions, structuring analysis, and turning it into a recommendation with operating relevance." },
        ],
        highlights: [
          "Combined market analysis with financial reasoning.",
          "Translated broad strategy questions into practical recommendations.",
        ],
        outcome: "The project added consulting and commercial problem-structuring range to the broader portfolio.",
      },
    },
    {
      slug: "microsoft-smart-retail",
      tag: "Case competition",
      title: "Microsoft Smart Retail Transformation",
      summary:
        "Built a business case competition concept for an AI-powered retail transformation using Azure, Dynamics 365, and Power BI to reduce shrink, speed checkout, and improve inventory visibility.",
      proof: {
        label: "Research document",
        url: "https://docs.google.com/document/d/1F2XG6tKzB2VblrTT3wAvJ4RuSm_6yh4j/edit",
      },
      detail: {
        label: "Retail AI strategy",
        metricLabel: "Projected Impact",
        headline: "Using AI and unified store visibility to address the $165B invisible-loss problem",
        overview:
          "This case study focused on the operational and experience breakdowns created by fragmented retail data systems. We designed a Microsoft-centered AI transformation using Azure, Dynamics 365, and Power BI to automate checkout, inventory monitoring, loss prevention, and store-layout optimization in a unified smart-store model.",
        metrics: [
          {
            value: "20%",
            label: "projected reduction in retail shrink through AI-powered loss prevention",
          },
          {
            value: "80%",
            label: "faster checkout time, from more than 4 minutes to under 1 minute",
          },
          {
            value: "99.5%",
            label: "target inventory visibility in the proposed smart-store model",
          },
        ],
        sections: [
          {
            title: "Problem",
            body:
              "Retailers face major operational losses because store systems remain fragmented and underutilized. Despite investing in cameras, sensors, and POS infrastructure, many still lack real-time visibility into customer behavior, inventory conditions, and loss-prevention signals. That leads to long checkout lines, stockouts, shrink, poor staffing decisions, and missed profit opportunities at scale.",
          },
          {
            title: "Team and Role",
            body:
              "I worked on this Microsoft business case competition as part of a Cornell Tech MBA team with backgrounds in finance, product strategy, and software engineering. My contribution centered on AI and product strategy, helping shape the integrated solution design, business framing, and transformation logic behind the smart-store concept.",
          },
          {
            title: "Solution Design",
            body:
              "We structured the solution around four connected components: an autonomous checkout system using Azure Computer Vision and Dynamics 365, intelligent inventory management with real-time shelf monitoring and forecasting, AI-driven loss prevention with anomaly detection and alerting, and store-layout optimization using Power BI heatmaps and experimentation frameworks.",
          },
          {
            title: "Why It Was Interesting",
            body:
              "What made this work compelling was the need to integrate multiple AI and enterprise system layers into one operating model. The value came not from one isolated feature, but from creating a storewide intelligence system where transactions, computer vision, supply chain data, and analytics all fed into the same decision loop.",
          },
          {
            title: "Roadmap",
            body:
              "We mapped the rollout across three phases: a foundation pilot to validate autonomous checkout and shelf monitoring, a storewide scale-up layer with forecasting and loss prevention, and a final optimization phase that refined models and prepared multi-store rollout playbooks. This let us tie the strategy to a credible implementation path instead of treating it as a slide-only recommendation.",
          },
          {
            title: "What It Proves",
            body:
              "This project shows how I approach AI strategy problems that sit between technology and operating economics. It required translating user research, enterprise tooling, and implementation constraints into a coherent business case, not just proposing AI in the abstract.",
          },
        ],
        highlights: [
          "Designed an end-to-end autonomous checkout and smart-store operating model on the Microsoft stack.",
          "Framed the opportunity around shrink, stockouts, checkout friction, and store productivity rather than isolated AI use cases.",
          "Connected computer vision, forecasting, supply chain, and analytics into a single transformation roadmap.",
          "Built the case around implementation credibility, KPI validation, and executive ROI, not just concept appeal.",
        ],
        outcome:
          "The resulting strategy projected a 20% reduction in shrink, 80% faster checkout, 99.5% inventory visibility, 25% higher operational efficiency, and a 27-point improvement in checkout satisfaction, while delivering a modeled 916% five-year ROI with payback in just over five months.",
      },
    },
  ],
  professionalExperience: [
    {
      company: "PayPal",
      role: "Software Engineer 2, Project Lead, Identity Platform",
      period: "Dec 2023 - May 2025",
      location: "Bangalore, India",
      summary:
        "Led fraud mitigation, passkeys adoption, cross-functional execution, and customer journey improvements across authentication and checkout surfaces.",
    },
    {
      company: "PayPal",
      role: "Software Engineer 1, Identity Platform",
      period: "Jul 2021 - Dec 2023",
      location: "Bangalore, India",
      summary:
        "Redesigned authentication experiences, integrated Zettle merchant flows, improved login measurement, and standardized launch processes across web applications.",
    },
    {
      company: "PayPal",
      role: "Software Engineer Intern, Checkout",
      period: "Jan 2021 - Jul 2021",
      location: "Bangalore, India",
      summary:
        "Built a data-driven web application that helped merchant-facing teams troubleshoot checkout issues faster and reduce manual effort.",
    },
    {
      company: "BNY Mellon",
      role: "Graduate Summer Associate",
      period: "Aug 2020 - Dec 2020",
      location: "Pune, India",
      summary:
        "Automated and migrated testing processes to accelerate product delivery, reduce regression cycles, and improve time-to-market.",
    },
    {
      company: "Thinkonic",
      role: "Summer Intern",
      period: "May 2020 - Jul 2020",
      location: "Nagpur, India",
      summary:
        "Built an Android location tracker and SOS application using core mobile components and completed supporting coursework in Android development.",
    },
    {
      company: "Ascent Cyber Solutions",
      role: "Student Intern",
      period: "May 2018 - Jul 2018",
      location: "Pune, India",
      summary:
        "Worked with the data analytics team using MySQL to analyze sales and repair data and identify business trends.",
    },
  ],
  consultingExperience: [
    {
      company: "Google | Cornell Tech BigCo Studio",
      role: "Consultant",
      period: "Jan 2026 - Present",
      location: "New York, NY",
      summary:
        "Advising Google Cloud's CISO Office on AI-native compliance automation for regulated enterprise onboarding, including control mapping, audit evidence, and continuous monitoring.",
    },
    {
      company: "Everon Energies",
      role: "Pro Bono Consultant",
      period: "Aug 2024 - Sept 2024",
      location: "Remote",
      summary:
        "Developed a business expansion strategy through market and financial analysis, including recommendations for solar application integration.",
    },
  ],
  leadership: [
    {
      org: "Cornell Tech Product Builders Club",
      role: "Vice President",
      period: "Sep 2025 - Present",
      location: "New York, NY",
      summary:
        "Leading initiatives around AI-driven product management and technology strategy through workshops, product case discussions, and interview preparation.",
    },
    {
      org: "Cornell Tech",
      role: "Graduate Teaching Assistant",
      period: "Jan 2026 - Present",
      location: "New York, NY",
      summary:
        "Managing course operations, coordinating student project teams, and supporting structured problem-solving in a graduate classroom environment.",
    },
    {
      org: "Cornell Tech",
      role: "Tech MBA Student Ambassador",
      period: "Aug 2025 - Present",
      location: "New York, NY",
      summary:
        "Representing the MBA program at admissions events, panel discussions, and outreach initiatives while supporting prospective students.",
    },
  ],
  education: [
    {
      school: "Johnson Cornell Tech, SC Johnson College of Business",
      detail:
        "MBA, STEM designated, merit scholar. Graduate Teaching Assistant, Product Builders Club vice president, and student ambassador.",
      period: "May 2026",
    },
    {
      school: "Birla Institute of Technology and Science, Pilani",
      detail:
        "BE in Computer Science and MS in Chemistry. GPA 8.2/10.",
      period: "Aug 2021",
    },
  ],
  skills: [
    {
      label: "Product & Strategy",
      tone: "product",
      items: [
        "Product Strategy",
        "Product Roadmapping",
        "Product Analytics",
        "A/B Testing",
        "Experiment Design",
        "Stakeholder Management",
        "Problem Structuring",
        "Go-to-Market Thinking",
        "Business Case Development",
        "User Journey Optimization",
      ],
    },
    {
      label: "Identity & Platform",
      tone: "technical",
      items: [
        "Authentication Systems",
        "Fraud Mitigation",
        "Checkout Optimization",
        "Passkeys & MFA",
        "Platform Design",
        "System Design",
        "SQL",
        "APIs",
        "Data Modeling",
        "Developer Tooling",
      ],
    },
    {
      label: "AI Systems",
      tone: "ai",
      items: [
        "LLMs",
        "RAG",
        "Agentic AI",
        "Prompt Engineering",
        "Context Engineering",
        "AI Evals",
        "Workflow Automation",
        "Embeddings",
        "Vector Databases",
        "Multi-agent Design",
      ],
    },
    {
      label: "Consulting & Analytics",
      tone: "consulting",
      items: [
        "Market Analysis",
        "Competitive Positioning",
        "Financial Modeling",
        "Analytics Dashboards",
        "Tableau",
        "Looker",
        "Scenario Framing",
        "Research Synthesis",
      ],
    },
    {
      label: "Leadership",
      tone: "leadership",
      items: [
        "Cross-functional Leadership",
        "Communication",
        "Mentoring",
        "Decision Making",
        "Navigating Ambiguity",
        "Business Storytelling",
        "User Empathy",
      ],
    },
  ],
  knowledge: [
    {
      title: "PayPal fraud and bot protection",
      keywords: ["paypal", "fraud", "bot", "security", "datadome", "identity", "credential stuffing", "risk"],
      answer:
        "At PayPal, Anshul led a bot-mitigation effort inside Identity after recognizing that abuse was being caught too late in the journey. He ran a structured build-versus-buy evaluation, helped shape a risk-based detection model with Cyber Security, and drove rollout across login and checkout. When early false positives created customer friction, he tuned the system instead of backing off, then expanded the strategy beyond single flows after noticing attackers shifting toward weaker entry points. The work helped avoid an estimated $10M-$20M in annual fraud losses while cutting SMS-based attacks by about half.",
    },
    {
      title: "Passkeys and platform thinking",
      keywords: ["passkeys", "authentication", "sdk", "platform", "checkout", "retention", "login"],
      answer:
        "Rather than shipping passkeys as a one-off feature inside checkout, Anshul stepped back and proposed a reusable capability that multiple journeys could rely on. He defined a centralized abstraction layer, led two engineers through execution, and helped create a cleaner platform path for passkeys across login and checkout. The initiative expanded coverage, reduced duplicated logic, and was tied to roughly $5M in annual revenue gain.",
    },
    {
      title: "Latency measurement and product judgment",
      keywords: ["latency", "metric", "kpi", "dashboard", "p95", "performance", "measurement"],
      answer:
        "Anshul investigated a supposedly severe latency issue and found that the existing P95 metric bundled backend processing that users never saw. He built the case for a complementary customer-perceived latency metric, piloted it on login and checkout, and helped roll it out across most major journeys. That improved KPI accuracy by around 65% and changed how teams prioritized performance work.",
    },
    {
      title: "Cross-functional leadership",
      keywords: ["leadership", "teams", "cross-functional", "zettle", "ambiguity", "stakeholders", "alignment"],
      answer:
        "A repeated pattern in Anshul's work is leading without relying on formal authority. In the Zettle merchant onboarding work, for example, he helped product, engineering, and risk teams move from defensive disagreement into shared diagnosis by grounding the conversation in funnel data, assigning clear owners, and framing the work around shared outcomes instead of blame.",
    },
    {
      title: "Interview and behavioral context",
      keywords: ["drive", "connection", "growth", "behavioral", "leadership story", "pei", "challenge", "learning"],
      answer:
        "Anshul has strong behavioral material around resilience, evidence-based disagreement, rapid learning, and cross-functional leadership. Examples include stabilizing bot protection under revenue pressure, persuading a senior architect with data to redefine a latency metric, learning passkeys quickly enough to lead an MVP in a new area, and realigning multi-region teams during a post-launch onboarding issue.",
    },
    {
      title: "Education and current direction",
      keywords: ["cornell", "mba", "education", "bits", "new york", "career", "goals"],
      answer:
        "Anshul is currently at Cornell Tech pursuing an MBA with a STEM designation and merit scholarship, after previously studying Computer Science and Chemistry at BITS Pilani. The portfolio direction suggests someone operating at the intersection of engineering, product strategy, AI, identity, and business judgment.",
    },
  ],
};
