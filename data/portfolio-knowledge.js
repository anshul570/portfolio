const portfolioKnowledge = [
  {
    id: "profile-overview",
    title: "Anshul profile overview",
    url: "./index.html#story",
    tags: ["profile", "about", "overview", "product", "ai", "strategy"],
    text:
      "Anshul Shrivastava is a product-focused engineer and Cornell Tech MBA candidate graduating in May 2026. He has more than five years of experience building and scaling identity, authentication, fraud, and checkout systems at PayPal. His work spans platform engineering, customer experience, AI product thinking, and cross-functional execution. He is interested in product, AI, strategy, and high-scale user systems, and is currently open to opportunities.",
  },
  {
    id: "paypal-platform-work",
    title: "PayPal platform work",
    url: "./index.html#experience",
    tags: ["paypal", "identity", "fraud", "checkout", "platform", "engineering"],
    text:
      "At PayPal, Anshul worked across identity, fraud, authentication, and checkout. He led cross-functional teams, ran A-B experiments, and owned delivery across the product lifecycle. His focus was consistently on the customer experience: helping users log in more smoothly, complete checkout with less friction, and trust the platform more deeply. His PayPal work includes bot mitigation, passkeys, passwordless MFA, login performance measurement, compliance journeys, and checkout optimization.",
  },
  {
    id: "bot-mitigation",
    title: "Bot mitigation at PayPal",
    url: "./project.html?slug=bot-mitigation",
    tags: ["paypal", "bot", "fraud", "security", "identity", "datadome"],
    text:
      "Anshul led a bot-mitigation effort within PayPal Identity after seeing that a meaningful share of traffic was malicious and existing defenses were catching abuse too late. He ran a structured build-versus-buy evaluation across vendors such as DataDome and Radware, partnered with Cyber Security, and helped roll out an earlier detection approach across high-traffic flows like login and checkout. The work helped avoid about 20 million dollars in annual fraud loss, cut SMS-based attacks by about half, reduced account takeovers and fake account creation, and improved customer experience by reducing unnecessary challenges.",
  },
  {
    id: "passkeys",
    title: "Passkeys and passwordless MFA",
    url: "./project.html?slug=passkeys-platform",
    tags: ["paypal", "passkeys", "mfa", "identity", "checkout", "adoption"],
    text:
      "Anshul led passkey adoption across PayPal's identity platform by combining platform capability with product execution. He designed a reusable passkeys capability and SDK instead of a one-off feature, expanded coverage across browsers and environments, and integrated passkeys into login, checkout, and MFA journeys. The work delivered about 5 million dollars in annual platform-level impact, another 1.8 million dollars from conversion lift, and about a 9.3 percent increase in login success for affected journeys.",
  },
  {
    id: "gcp-compliance",
    title: "GCP compliance automation and Attest",
    url: "./project.html?slug=gcp-compliance-automation",
    tags: ["google", "gcp", "compliance", "rag", "agentic", "attest", "bigco"],
    text:
      "Through Google and Cornell Tech BigCo Studio, Anshul designed an AI-native compliance automation concept for regulated enterprise onboarding on Google Cloud. He framed the problem end to end, ran research across OSCAL, OpenSSF, and GCP documentation, designed a multi-agent RAG workflow for control mapping and evidence generation, and built an auditor-facing prototype called Attest. The concept is designed to compress a roughly 180-day manual compliance onboarding process, replace spreadsheet-based audit evidence gathering, and enable more continuous compliance monitoring.",
  },
  {
    id: "inboxiq",
    title: "InboxIQ AI life operating system",
    url: "./project.html?slug=ai-chief-of-staff",
    tags: ["inboxiq", "ai", "workflow", "email", "dashboard", "claude", "supabase"],
    text:
      "InboxIQ is Anshul's AI life operating system for MBA overload. It turns chaotic email across job search, academics, networking, and personal admin into a structured dashboard with action items, status tracking, and natural-language access. He built it end to end as a solo product builder across taxonomy design, prompt engineering, pipeline architecture, frontend, evaluation, deployment, and operations. The system processes more than 3,000 emails across two Gmail accounts, unifies four life domains, and has measured baseline classification accuracy of about 88 percent with ongoing improvement.",
  },
  {
    id: "batsignal",
    title: "BatSignal real-time sports analytics",
    url: "./project.html?slug=batsignal",
    tags: ["batsignal", "sports", "kafka", "cerebras", "llm", "streaming"],
    text:
      "BatSignal is a real-time sports commentary analytics prototype exploring how streaming systems, low-latency LLM inference, and live dashboards can work together in sports and entertainment. The architecture includes live commentary ingestion, Kafka for streaming, an LLM layer for real-time enrichment, analytics persistence, an API layer, and dashboard updates via WebSockets. It was built quickly as a team prototype and shows Anshul's interest in real-time AI systems and product experiences.",
  },
  {
    id: "trace-space",
    title: "Trace.Space growth strategy and interactive demo",
    url: "./project.html?slug=trace-space",
    tags: ["trace.space", "growth", "marketing", "startup", "systems engineering", "demo", "strategy"],
    text:
      "For Trace.Space, Anshul worked on a zero-budget campaign concept called #TraceTheRants aimed at helping an AI-native systems-engineering startup break through with skeptical technical buyers. The strategy started from real frustrations voiced by systems engineers in places like Reddit, translated those frustrations into structured requirements and test scenarios, showed how Space Agent could solve them, and invited the community into the conversation. He also helped build an interactive demo that made the response flow tangible instead of leaving it as a marketing idea on slides.",
  },
  {
    id: "portfolio-chatbot",
    title: "Portfolio website with RAG chatbot",
    url: "./project.html?slug=ask-anshul",
    tags: ["portfolio", "rag", "chatbot", "website", "knowledge"],
    text:
      "Anshul built a personal portfolio website and integrated a RAG-based chatbot concept so visitors could ask questions about his work, projects, leadership, and background conversationally. The goal is to turn a static portfolio into a conversational knowledge system grounded in structured project and resume data. The current direction is to use the portfolio writeups, resume, and supporting project context as the knowledge base.",
  },
  {
    id: "ipark",
    title: "iPark curbside parking assistant",
    url: "./project.html?slug=ai-parking-management",
    tags: ["ipark", "parking", "mobility", "ai", "product"],
    text:
      "iPark is an AI-powered curbside parking assistant concept designed to turn confusing street rules into plain-English guidance for drivers. The concept combines city data, curb signage, and driver context to answer whether a driver can legally park in a given spot and for how long. It reflects Anshul's product thinking around ambiguity, trust, liability, and turning complex rules into simple user experiences.",
  },
  {
    id: "microsoft-case",
    title: "Microsoft smart retail transformation case competition",
    url: "./project.html?slug=microsoft-smart-retail",
    tags: ["microsoft", "retail", "case competition", "ai", "strategy"],
    text:
      "Anshul worked on a Microsoft business case competition focused on smart retail transformation. The concept used Azure, Dynamics 365, Power BI, and computer vision to improve checkout, loss prevention, inventory visibility, and store layout optimization. It was framed as a business case and not a shipped production system, but it demonstrates AI strategy, enterprise transformation thinking, and structured problem solving.",
  },
  {
    id: "everon",
    title: "Everon Energies consulting project",
    url: "./index.html#experience",
    tags: ["everon", "consulting", "strategy", "solar", "market analysis"],
    text:
      "As a pro bono consultant for Everon Energies, Anshul developed a business expansion strategy through market and financial analysis, including recommendations for solar application integration. This work sits closer to consulting and applied strategy than pure engineering and shows range beyond platform product work.",
  },
  {
    id: "leadership",
    title: "Leadership and community work",
    url: "./index.html#leadership",
    tags: ["leadership", "cornell", "vp", "teaching", "ambassador"],
    text:
      "At Cornell Tech, Anshul serves as Vice President of the Product Builders Club, Graduate Teaching Assistant, and Tech MBA Student Ambassador. His leadership work includes building programming around AI-driven product management, organizing workshops and interview-prep sessions, supporting student project teams in the classroom, and representing the MBA program in admissions and outreach settings.",
  },
  {
    id: "education",
    title: "Education background",
    url: "./index.html",
    tags: ["education", "cornell", "bits", "mba", "computer science"],
    text:
      "Anshul is a Cornell Tech MBA merit scholar in New York and has a computer science background from BITS Pilani. His academic path combines engineering depth with business and product training, which shows up in how he approaches AI, platform systems, and strategy problems.",
  },
  {
    id: "skills",
    title: "Skill themes",
    url: "./index.html",
    tags: ["skills", "product", "ai", "consulting", "leadership"],
    text:
      "Anshul's strongest themes include product and strategy, identity and platform systems, AI systems, consulting and analytics, and leadership. The recurring capabilities across his portfolio are fraud mitigation, checkout optimization, passkeys and MFA, workflow automation, multi-agent design, research synthesis, competitive positioning, stakeholder management, and structured execution under ambiguity.",
  },
  {
    id: "behavioral-drive",
    title: "Behavioral story: drive under pressure",
    url: "./project.html?slug=bot-mitigation",
    tags: ["behavioral", "drive", "leadership", "pressure", "paypal"],
    text:
      "A strong example of how Anshul operates under pressure is the PayPal bot-mitigation rollout. When false positives started blocking legitimate users and leadership considered rolling the solution back, he treated the issue as a top priority, stabilized the system within about a week through rapid tuning and tighter flow targeting, and then pushed the organization to move from reactive flow-by-flow defense to proactive protection across major entry points. That story reflects persistence, judgment, and calm decision-making in high-stakes situations.",
  },
  {
    id: "behavioral-connection",
    title: "Behavioral story: influencing through evidence",
    url: "./index.html#experience",
    tags: ["behavioral", "influence", "connection", "metrics", "paypal", "stakeholder management"],
    text:
      "A strong example of Anshul handling disagreement is his work on PayPal latency measurement. When a senior architect believed a long-standing P95 latency metric was accurate, Anshul built an evidence-based case showing it mixed customer-perceived latency with backend work that users never saw. He piloted a new customer-perceived latency metric, validated it collaboratively, and helped roll it out across roughly 80 percent of major customer journeys, improving KPI accuracy by about 65 percent. It shows thoughtful influence, respect for data, and strong stakeholder management.",
  },
  {
    id: "behavioral-growth",
    title: "Behavioral story: rapid learning and adaptation",
    url: "./project.html?slug=passkeys-platform",
    tags: ["behavioral", "growth", "learning", "passkeys", "platform", "paypal"],
    text:
      "A strong growth example is Anshul's passkeys work at PayPal. With only about six weeks before the next planning cycle and no prior team experience, he quickly learned the underlying authentication model, device and browser differences, and integration implications. He initially leaned toward a fast checkout-only rollout, then adapted based on architectural feedback and reframed the work as a reusable platform capability. That mix of rapid learning, openness to feedback, and platform thinking is a recurring part of how he works.",
  },
];

module.exports = { portfolioKnowledge };
