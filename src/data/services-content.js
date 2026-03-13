// ─────────────────────────────────────────────
//  PentaTech — Service Detail Content
//  Full detail data for each service
// ─────────────────────────────────────────────

export const SERVICE_DETAILS = {
  "cloud-computing": {
    slug: "cloud-computing",
    icon: "☁️",
    title: "Cloud Computing",
    tagline: "Move faster, scale smarter, spend less.",
    fullDescription:
      "We design, migrate, and manage cloud environments across AWS, Microsoft Azure, and Google Cloud Platform. Whether you're moving your first workload to the cloud or optimising a complex multi-cloud architecture, our certified cloud architects deliver end-to-end solutions that cut costs, improve resilience, and accelerate innovation.",
    highlights: [
      { icon: "🚀", label: "Avg. deployment time", value: "2–4 weeks" },
      { icon: "💰", label: "Typical cost savings", value: "Up to 40%" },
      { icon: "⚡", label: "Uptime SLA", value: "99.9%+" },
      { icon: "🌍", label: "Cloud platforms", value: "AWS · Azure · GCP" },
    ],
    whatWeOffer: [
      {
        title: "Cloud Strategy & Assessment",
        description:
          "Baseline your existing infrastructure, map workloads, and produce a phased migration roadmap with a clear business case.",
      },
      {
        title: "Cloud Migration",
        description:
          "Lift-and-shift, re-platforming, or full re-architecture migrations executed with zero unplanned downtime.",
      },
      {
        title: "Multi-Cloud Management",
        description:
          "Unified governance, cost visibility, and security posture across AWS, Azure, and GCP from a single pane of glass.",
      },
      {
        title: "Cloud-Native Development",
        description:
          "Microservices, serverless architectures, and containerised applications built for elastic scale.",
      },
      {
        title: "FinOps & Cost Optimisation",
        description:
          "Right-sizing, Reserved Instance planning, and FinOps tooling to cut cloud spend without sacrificing performance.",
      },
      {
        title: "Managed Cloud Services",
        description:
          "24/7 monitoring, patching, and incident response so your team can focus on building, not babysitting.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        desc: "Audit existing infrastructure and define cloud readiness.",
      },
      {
        step: "02",
        title: "Architecture",
        desc: "Design target-state architecture aligned with your goals.",
      },
      {
        step: "03",
        title: "Migration",
        desc: "Execute phased migration with validation gates at every stage.",
      },
      {
        step: "04",
        title: "Optimise",
        desc: "Continuously tune performance, security, and cost post-migration.",
      },
    ],
    technologies: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Docker",
      "CloudFormation",
    ],
    outcomes: [
      "Reduced infrastructure costs by 30–40%",
      "Improved application availability and resilience",
      "Faster time-to-market for new features",
      "Scalable infrastructure that grows with your business",
      "Enhanced disaster recovery and business continuity",
    ],
    caseStudy: {
      client: "Regional Bank",
      result:
        "Migrated 120 workloads to Azure in 8 weeks with zero production incidents, reducing monthly infrastructure spend by 38%.",
    },
    relatedServices: [
      "cybersecurity",
      "networking-devops",
      "systems-architecture",
    ],
    contactSubject: "Cloud Computing Enquiry",
  },

  "software-development": {
    slug: "software-development",
    icon: "💻",
    title: "Software Development",
    tagline: "Custom software built to last — and to scale.",
    fullDescription:
      "From MVPs to enterprise platforms, our development teams build robust, maintainable software that solves real business problems. We cover the full stack — web, mobile, APIs, and enterprise systems — using modern frameworks and agile delivery practices.",
    highlights: [
      { icon: "📱", label: "Platforms", value: "Web · Mobile · API" },
      { icon: "⏱️", label: "MVP turnaround", value: "4–6 weeks" },
      { icon: "👥", label: "Dedicated squads", value: "Available" },
      { icon: "🔁", label: "Delivery model", value: "Agile sprints" },
    ],
    whatWeOffer: [
      {
        title: "Web Application Development",
        description:
          "Full-stack web apps built with React, Next.js, Node.js, and Django — from marketing sites to complex SaaS platforms.",
      },
      {
        title: "Mobile App Development",
        description:
          "Cross-platform (React Native, Flutter) and native iOS/Android applications with polished UX.",
      },
      {
        title: "API & Backend Engineering",
        description:
          "RESTful and GraphQL APIs, microservices architectures, and event-driven backends built for reliability at scale.",
      },
      {
        title: "Enterprise Systems Integration",
        description:
          "Connect ERP, CRM, payment gateways, and third-party platforms through robust integration layers.",
      },
      {
        title: "Legacy Modernisation",
        description:
          "Safely re-architect or extend legacy codebases using strangler-fig patterns and incremental migration strategies.",
      },
      {
        title: "Quality Assurance",
        description:
          "Automated test suites, CI/CD pipelines, and performance testing baked in from day one.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Requirements",
        desc: "Deep-dive workshops to capture functional and non-functional requirements.",
      },
      {
        step: "02",
        title: "Design",
        desc: "UX prototypes and system design reviewed and approved before coding starts.",
      },
      {
        step: "03",
        title: "Build",
        desc: "Two-week sprints with demos, retrospectives, and continuous deployment.",
      },
      {
        step: "04",
        title: "Launch & Support",
        desc: "Production release, hypercare period, and optional ongoing maintenance.",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Django",
      "Flutter",
      "React Native",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
    ],
    outcomes: [
      "Production-grade software delivered on time and on budget",
      "Scalable architecture that handles growth without rework",
      "Comprehensive documentation and knowledge transfer",
      "Automated test coverage for long-term maintainability",
      "Dedicated support and SLA-backed maintenance options",
    ],
    caseStudy: {
      client: "Logistics Startup",
      result:
        "Delivered a multi-tenant fleet management platform in 12 weeks that now processes over 50,000 deliveries per day across 3 countries.",
    },
    relatedServices: [
      "cloud-computing",
      "data-analytics",
      "digital-transformation",
    ],
    contactSubject: "Software Development Enquiry",
  },

  cybersecurity: {
    slug: "cybersecurity",
    icon: "🛡️",
    title: "Cybersecurity",
    tagline: "Protect what matters before attackers find it first.",
    fullDescription:
      "Our cybersecurity practice helps organisations assess, strengthen, and continuously monitor their security posture. From penetration testing to full security programme management, we bring offensive and defensive expertise to keep your data, systems, and reputation safe.",
    highlights: [
      {
        icon: "🔍",
        label: "Avg. vulnerabilities found per audit",
        value: "40+",
      },
      { icon: "⏰", label: "Mean time to detect (managed)", value: "< 1 hour" },
      {
        icon: "📋",
        label: "Compliance frameworks",
        value: "ISO 27001 · GDPR · PCI-DSS",
      },
      { icon: "🏆", label: "Certified experts", value: "CISSP · CEH · CISM" },
    ],
    whatWeOffer: [
      {
        title: "Penetration Testing",
        description:
          "Network, web application, mobile, and social engineering assessments that find real vulnerabilities before attackers do.",
      },
      {
        title: "Security Architecture Review",
        description:
          "Evaluate your existing controls, identify gaps, and produce a prioritised remediation roadmap.",
      },
      {
        title: "Security Operations (SOC-as-a-Service)",
        description:
          "24/7 threat monitoring, detection, and incident response managed by our certified security analysts.",
      },
      {
        title: "Compliance & Governance",
        description:
          "Achieve and maintain ISO 27001, GDPR, PCI-DSS, and local regulatory compliance with minimal disruption.",
      },
      {
        title: "Security Awareness Training",
        description:
          "Phishing simulations, e-learning modules, and workshops that turn your employees into a human firewall.",
      },
      {
        title: "Incident Response",
        description:
          "Rapid containment, forensic investigation, and post-incident hardening when you need it most.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Scoping",
        desc: "Define assets, threat model, and rules of engagement.",
      },
      {
        step: "02",
        title: "Assessment",
        desc: "Execute tests, audits, or monitoring deployment.",
      },
      {
        step: "03",
        title: "Reporting",
        desc: "Detailed findings with risk ratings and remediation guidance.",
      },
      {
        step: "04",
        title: "Remediate & Verify",
        desc: "Support remediation and re-test to confirm fixes hold.",
      },
    ],
    technologies: [
      "Nessus",
      "Burp Suite",
      "Metasploit",
      "Splunk",
      "Microsoft Sentinel",
      "CrowdStrike",
      "Palo Alto NGFW",
      "Snort",
      "Wireshark",
    ],
    outcomes: [
      "Measurable reduction in attack surface",
      "Faster detection and response to real incidents",
      "Regulatory compliance achieved and maintained",
      "Board-ready reporting and risk quantification",
      "Security-aware culture across your organisation",
    ],
    caseStudy: {
      client: "Financial Services Firm",
      result:
        "Uncovered 3 critical vulnerabilities in a payment system during a red team exercise, preventing a potential breach estimated at KES 50M in losses.",
    },
    relatedServices: [
      "cloud-computing",
      "networking-devops",
      "systems-architecture",
    ],
    contactSubject: "Cybersecurity Enquiry",
  },

  "data-analytics": {
    slug: "data-analytics",
    icon: "📊",
    title: "Data Analytics",
    tagline: "Turn raw data into decisions that drive growth.",
    fullDescription:
      "We help organisations build the data infrastructure, analytics capabilities, and AI/ML models needed to make faster, smarter decisions. From data warehouse design to interactive dashboards and predictive models, our data engineers and analysts deliver end-to-end analytics solutions.",
    highlights: [
      { icon: "📈", label: "Avg. reporting time reduction", value: "70%" },
      { icon: "🤖", label: "AI/ML capabilities", value: "Included" },
      {
        icon: "🗄️",
        label: "Data platforms",
        value: "BigQuery · Snowflake · Redshift",
      },
      { icon: "📊", label: "BI tools", value: "Power BI · Tableau · Looker" },
    ],
    whatWeOffer: [
      {
        title: "Data Strategy & Roadmap",
        description:
          "Define your data vision, governance model, and a pragmatic roadmap for becoming a data-driven organisation.",
      },
      {
        title: "Data Engineering",
        description:
          "Design and build reliable ETL/ELT pipelines, data lakes, and modern cloud data warehouses.",
      },
      {
        title: "Business Intelligence",
        description:
          "Interactive dashboards and self-service BI tools that give every team access to the insights they need.",
      },
      {
        title: "Advanced Analytics & AI/ML",
        description:
          "Predictive models, recommendation engines, NLP, and computer vision solutions deployed to production.",
      },
      {
        title: "Data Governance",
        description:
          "Data cataloguing, lineage tracking, quality monitoring, and role-based access controls.",
      },
      {
        title: "Real-Time Analytics",
        description:
          "Streaming data pipelines with Apache Kafka, Flink, and cloud-native tools for instant operational insights.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        desc: "Audit data sources, quality, and current analytics maturity.",
      },
      {
        step: "02",
        title: "Architecture",
        desc: "Design the target data platform and governance framework.",
      },
      {
        step: "03",
        title: "Build",
        desc: "Implement pipelines, models, and dashboards iteratively.",
      },
      {
        step: "04",
        title: "Empower",
        desc: "Training, documentation, and hand-off to your internal team.",
      },
    ],
    technologies: [
      "Python",
      "Apache Spark",
      "Kafka",
      "dbt",
      "Airflow",
      "BigQuery",
      "Snowflake",
      "Power BI",
      "Tableau",
      "TensorFlow",
      "scikit-learn",
    ],
    outcomes: [
      "Single source of truth for business metrics",
      "Automated reporting saving hundreds of analyst-hours monthly",
      "Predictive models that improve decision quality",
      "Data-driven culture embedded across business units",
      "Scalable infrastructure that handles data growth",
    ],
    caseStudy: {
      client: "Retail Chain",
      result:
        "Built a demand forecasting model that reduced overstock by 25% and cut stockouts by 32% across 80 stores within 6 months of deployment.",
    },
    relatedServices: [
      "cloud-computing",
      "software-development",
      "digital-transformation",
    ],
    contactSubject: "Data Analytics Enquiry",
  },

  "networking-devops": {
    slug: "networking-devops",
    icon: "🌐",
    title: "Networking & DevOps",
    tagline: "Ship faster, break less, recover instantly.",
    fullDescription:
      "We design enterprise-grade networks and build the automation pipelines that let your engineering teams deploy with confidence. From SD-WAN and zero-trust network access to fully automated CI/CD and infrastructure-as-code, we remove the friction between development and production.",
    highlights: [
      { icon: "⚡", label: "Deployment frequency increase", value: "10×" },
      { icon: "🔄", label: "CI/CD pipeline setup", value: "From 1 week" },
      { icon: "🌐", label: "Network certifications", value: "CCIE · CCNP" },
      { icon: "🐳", label: "Container platforms", value: "K8s · Docker · ECS" },
    ],
    whatWeOffer: [
      {
        title: "Enterprise Network Design",
        description:
          "LAN/WAN, SD-WAN, and zero-trust network architectures designed for performance, redundancy, and security.",
      },
      {
        title: "CI/CD Pipeline Implementation",
        description:
          "Design and deploy automated build, test, and release pipelines using GitHub Actions, GitLab CI, Jenkins, and ArgoCD.",
      },
      {
        title: "Infrastructure as Code",
        description:
          "Provision and manage infrastructure consistently with Terraform, Pulumi, and Ansible across any cloud or on-premises environment.",
      },
      {
        title: "Container Orchestration",
        description:
          "Design, deploy, and operate Kubernetes clusters and Docker-based environments with full observability stacks.",
      },
      {
        title: "Monitoring & Observability",
        description:
          "End-to-end visibility with Prometheus, Grafana, Datadog, and ELK Stack — metrics, logs, and traces in one place.",
      },
      {
        title: "Network Security",
        description:
          "Firewall policy review, micro-segmentation, SASE implementation, and network access control (NAC) deployment.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Assessment",
        desc: "Review current network topology, CI/CD maturity, and pain points.",
      },
      {
        step: "02",
        title: "Design",
        desc: "Produce architecture diagrams and automation blueprints.",
      },
      {
        step: "03",
        title: "Implement",
        desc: "Configure, automate, and test in a staged rollout.",
      },
      {
        step: "04",
        title: "Handover",
        desc: "Knowledge transfer, runbooks, and optional managed operations.",
      },
    ],
    technologies: [
      "Kubernetes",
      "Docker",
      "Terraform",
      "Ansible",
      "Jenkins",
      "GitHub Actions",
      "ArgoCD",
      "Prometheus",
      "Grafana",
      "Cisco IOS",
      "Palo Alto",
      "Fortinet",
    ],
    outcomes: [
      "Release cycles shortened from weeks to hours",
      "Near-zero unplanned downtime through automation",
      "Network performance and reliability improvements",
      "Reduced manual toil for engineering teams",
      "Complete infrastructure auditability and repeatability",
    ],
    caseStudy: {
      client: "Telco Provider",
      result:
        "Reduced deployment time from 2 weeks to 4 hours through a fully automated GitOps pipeline, cutting release-related incidents by 85%.",
    },
    relatedServices: [
      "cloud-computing",
      "cybersecurity",
      "systems-architecture",
    ],
    contactSubject: "Networking & DevOps Enquiry",
  },

  "digital-transformation": {
    slug: "digital-transformation",
    icon: "🔄",
    title: "Digital Transformation",
    tagline: "Modernise your business — people, process, and technology.",
    fullDescription:
      "Digital transformation is as much about people and process as it is technology. We partner with leadership teams to develop transformation strategies, redesign business processes, and implement the technology changes needed to stay competitive in a rapidly evolving landscape.",
    highlights: [
      { icon: "🗺️", label: "Typical programme duration", value: "3–18 months" },
      {
        icon: "👥",
        label: "Stakeholders engaged per programme",
        value: "C-suite to front-line",
      },
      { icon: "📊", label: "Average productivity improvement", value: "35%" },
      {
        icon: "🏢",
        label: "Industries served",
        value: "Finance · Retail · Gov · Health",
      },
    ],
    whatWeOffer: [
      {
        title: "Digital Strategy & Roadmap",
        description:
          "Facilitated workshops with leadership to define your digital ambition, assess maturity, and build a phased transformation roadmap.",
      },
      {
        title: "Process Redesign & Automation",
        description:
          "Map and re-engineer business processes, then automate repetitive tasks with RPA, workflow tools, and AI-powered solutions.",
      },
      {
        title: "Change Management",
        description:
          "Structured change management frameworks, communication plans, and training programmes to drive adoption.",
      },
      {
        title: "Technology Selection & Procurement",
        description:
          "Vendor-neutral guidance on selecting the right ERP, CRM, HRMS, or platform — without the bias of a reseller.",
      },
      {
        title: "Digital Workplace",
        description:
          "Microsoft 365 and Google Workspace deployment, collaboration tooling, and hybrid work enablement.",
      },
      {
        title: "Innovation Labs",
        description:
          "Structured innovation sprints using design thinking to identify and prototype high-value digital opportunities.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Diagnose",
        desc: "Assess digital maturity, process gaps, and stakeholder readiness.",
      },
      {
        step: "02",
        title: "Strategise",
        desc: "Co-create a transformation roadmap with clear milestones and KPIs.",
      },
      {
        step: "03",
        title: "Execute",
        desc: "Deliver in agile waves, each producing measurable business value.",
      },
      {
        step: "04",
        title: "Sustain",
        desc: "Embed capabilities internally and track outcomes against the business case.",
      },
    ],
    technologies: [
      "Microsoft 365",
      "Power Platform",
      "Salesforce",
      "SAP",
      "ServiceNow",
      "UiPath",
      "Power BI",
      "SharePoint",
      "Dynamics 365",
    ],
    outcomes: [
      "Clear, board-approved digital strategy",
      "Measurable productivity and efficiency gains",
      "Reduced manual processing and associated errors",
      "Higher employee and customer digital experience scores",
      "Organisation-wide capability to sustain transformation",
    ],
    caseStudy: {
      client: "Government Ministry",
      result:
        "Digitised 14 paper-based citizen services in 6 months, reducing average processing time from 14 days to 48 hours and improving satisfaction scores by 60%.",
    },
    relatedServices: [
      "software-development",
      "data-analytics",
      "managed-it-support",
    ],
    contactSubject: "Digital Transformation Enquiry",
  },

  "systems-architecture": {
    slug: "systems-architecture",
    icon: "🏗️",
    title: "Systems Architecture",
    tagline: "Build on foundations that won't fail you at scale.",
    fullDescription:
      "We design the technical blueprints that enterprise systems are built on. Our principal architects bring experience from large-scale distributed systems, high-availability financial platforms, and complex integrations to ensure your architecture is resilient, maintainable, and future-proof.",
    highlights: [
      { icon: "⚖️", label: "Architecture reviews conducted", value: "200+" },
      { icon: "🔒", label: "Availability targets", value: "99.99% achievable" },
      {
        icon: "📐",
        label: "Frameworks",
        value: "TOGAF · AWS Well-Architected",
      },
      { icon: "⚡", label: "Typical review turnaround", value: "5–10 days" },
    ],
    whatWeOffer: [
      {
        title: "Architecture Review & Assessment",
        description:
          "Independent review of your existing architecture against well-known frameworks, identifying risks and improvement opportunities.",
      },
      {
        title: "Solution Architecture Design",
        description:
          "End-to-end architecture design for new systems: component diagrams, data flows, integration patterns, and technology selection.",
      },
      {
        title: "High Availability & Resilience Design",
        description:
          "Design multi-region, active-active, and disaster-recovery architectures that meet stringent SLA requirements.",
      },
      {
        title: "Integration Architecture",
        description:
          "API gateways, event buses, ESBs, and data integration patterns that connect disparate systems cleanly.",
      },
      {
        title: "Security Architecture",
        description:
          "Zero-trust, defence-in-depth, and secure-by-design architecture patterns embedded at the blueprint stage.",
      },
      {
        title: "Architecture Governance",
        description:
          "Establish Architecture Review Boards (ARBs), standards documentation, and technology radar processes.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Understand",
        desc: "Capture business requirements, constraints, and non-functional requirements.",
      },
      {
        step: "02",
        title: "Design",
        desc: "Produce candidate architectures, evaluate trade-offs, and select optimal design.",
      },
      {
        step: "03",
        title: "Validate",
        desc: "Proof-of-concept builds, load testing, and peer review.",
      },
      {
        step: "04",
        title: "Document",
        desc: "Architecture Decision Records (ADRs) and living documentation handed over.",
      },
    ],
    technologies: [
      "AWS Well-Architected",
      "TOGAF",
      "ArchiMate",
      "OpenAPI",
      "AsyncAPI",
      "Apache Kafka",
      "Kong API Gateway",
      "Istio",
      "Envoy",
    ],
    outcomes: [
      "Architectures that meet availability, performance, and cost targets",
      "Reduced technical debt and future rework",
      "Development teams with clear, unambiguous blueprints",
      "Architecture governance processes that scale with the organisation",
      "Documented decisions that survive team changes",
    ],
    caseStudy: {
      client: "Insurance Platform",
      result:
        "Redesigned a monolithic policy management system into event-driven microservices, enabling a 5× increase in transaction throughput and 99.99% availability.",
    },
    relatedServices: [
      "cloud-computing",
      "software-development",
      "networking-devops",
    ],
    contactSubject: "Systems Architecture Enquiry",
  },

  "managed-it-support": {
    slug: "managed-it-support",
    icon: "🤝",
    title: "Managed IT Support",
    tagline: "Your extended IT team — 24/7, 365 days a year.",
    fullDescription:
      "We act as your outsourced IT department or supplement your internal team with specialist capacity. From helpdesk and end-user support to proactive infrastructure monitoring and vendor management, our managed services free your business to focus on what it does best.",
    highlights: [
      { icon: "⏰", label: "Support availability", value: "24/7 / 365" },
      { icon: "📞", label: "First-call resolution rate", value: "87%" },
      { icon: "⚡", label: "Avg. first response time", value: "< 15 minutes" },
      { icon: "🌍", label: "Remote & on-site", value: "Nairobi + remote" },
    ],
    whatWeOffer: [
      {
        title: "Helpdesk & End-User Support",
        description:
          "Tier 1–3 helpdesk services via phone, email, and chat. Hardware troubleshooting, software support, and on-site visits.",
      },
      {
        title: "Proactive Infrastructure Monitoring",
        description:
          "24/7 monitoring of servers, networks, and cloud resources with automated alerting and incident response.",
      },
      {
        title: "Patch Management",
        description:
          "Scheduled vulnerability patching for operating systems, middleware, and applications across your entire estate.",
      },
      {
        title: "Backup & Disaster Recovery",
        description:
          "Automated backup solutions with regular restore testing and documented DR procedures to meet your RPO/RTO targets.",
      },
      {
        title: "Vendor Management",
        description:
          "Act as your single point of contact for ISP, hardware, software, and cloud vendor relationships.",
      },
      {
        title: "IT Asset Management",
        description:
          "Full lifecycle management of hardware and software assets — procurement, deployment, tracking, and disposal.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Onboarding",
        desc: "Document your environment, set up monitoring, and establish support channels.",
      },
      {
        step: "02",
        title: "Baseline",
        desc: "Identify quick wins and remediate critical gaps within 30 days.",
      },
      {
        step: "03",
        title: "Operate",
        desc: "Ongoing proactive management with monthly service reviews.",
      },
      {
        step: "04",
        title: "Improve",
        desc: "Quarterly improvement cycles to optimise service quality and reduce incidents.",
      },
    ],
    technologies: [
      "Microsoft 365",
      "Intune",
      "Jamf",
      "Zabbix",
      "PagerDuty",
      "Freshdesk",
      "Veeam",
      "Acronis",
      "NinjaRMM",
      "ConnectWise",
    ],
    outcomes: [
      "Reduced IT incident volume through proactive maintenance",
      "Faster resolution times and higher end-user satisfaction",
      "Complete visibility into your IT estate",
      "Predictable monthly IT spend",
      "Access to senior expertise without full-time hiring costs",
    ],
    caseStudy: {
      client: "SME Manufacturing Firm",
      result:
        "Reduced monthly helpdesk tickets by 42% in 6 months through proactive patching and root-cause elimination, while cutting IT support costs by 28%.",
    },
    relatedServices: [
      "cybersecurity",
      "cloud-computing",
      "digital-transformation",
    ],
    contactSubject: "Managed IT Support Enquiry",
  },
};
