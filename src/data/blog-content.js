// ─────────────────────────────────────────────
//  PentaTech — Blog Page Content
// ─────────────────────────────────────────────

export const BLOG = {
  hero: {
    title: "PentaTech Blog",
    subtitle:
      "Insights, tutorials, and industry news from our team of certified technology experts.",
  },

  categories: [
    "All",
    "Cloud",
    "Cybersecurity",
    "DevOps",
    "Training",
    "AI & Data",
  ],

  posts: [
    {
      id: "zero-trust-east-africa",
      slug: "zero-trust-security-east-africa",
      title:
        "Zero Trust Security: Why East African Enterprises Can't Afford to Wait",
      excerpt:
        "Perimeter-based security is dead. We break down the Zero Trust model and why adopting it is now a business imperative — not just a best practice — for organisations operating in Kenya and beyond.",
      category: "Cybersecurity",
      date: "March 5, 2026",
      readTime: "8 min read",
      author: {
        name: "Sarah Wanjiku",
        role: "Head of Cybersecurity",
        avatar: "👩‍💻",
      },
      tags: ["Zero Trust", "Enterprise Security", "Kenya"],
      featured: true,
    },
    {
      id: "azure-vs-aws-2026",
      slug: "azure-vs-aws-africa-2026",
      title: "Azure vs AWS in Africa: Which Cloud Platform Wins in 2026?",
      excerpt:
        "With Microsoft and AWS both expanding their African infrastructure, we compare pricing, latency, compliance, and support to help you make the right call for your organisation.",
      category: "Cloud",
      date: "February 20, 2026",
      readTime: "11 min read",
      author: {
        name: "Dr. James Kimani",
        role: "CTO & Cloud Architect",
        avatar: "👨‍💻",
      },
      tags: ["Azure", "AWS", "Cloud Strategy"],
      featured: true,
    },
    {
      id: "kubernetes-beginners",
      slug: "kubernetes-beginners-guide-2026",
      title: "Kubernetes Demystified: A Practical Beginner's Guide for 2026",
      excerpt:
        "Containers are table stakes. Orchestration is where the real power lies. This step-by-step guide walks you from zero to running your first Kubernetes cluster — with real-world examples.",
      category: "DevOps",
      date: "February 10, 2026",
      readTime: "14 min read",
      author: {
        name: "Michael Ochieng",
        role: "Senior DevOps Consultant",
        avatar: "👨‍🔧",
      },
      tags: ["Kubernetes", "Docker", "DevOps"],
      featured: false,
    },
    {
      id: "ai-jobs-africa",
      slug: "ai-reshaping-tech-jobs-africa",
      title:
        "How AI Is Reshaping Tech Jobs in Africa — And What to Do About It",
      excerpt:
        "Generative AI is automating tasks, not eliminating roles. We explore which skills are rising in demand, which are declining, and the certifications that will keep you ahead of the curve.",
      category: "AI & Data",
      date: "January 28, 2026",
      readTime: "9 min read",
      author: {
        name: "Grace Mwende",
        role: "Training Lead",
        avatar: "👩‍🏫",
      },
      tags: ["AI", "Career", "Upskilling"],
      featured: false,
    },
    {
      id: "pmp-certification-guide",
      slug: "pmp-certification-guide-2026",
      title: "Your Complete 2026 PMP Certification Roadmap",
      excerpt:
        "PMP remains the world's most recognised project management credential. Here's everything you need — eligibility, application, exam strategy, and study resources — in one place.",
      category: "Training",
      date: "January 15, 2026",
      readTime: "12 min read",
      author: {
        name: "Grace Mwende",
        role: "Training Lead",
        avatar: "👩‍🏫",
      },
      tags: ["PMP", "Certification", "Project Management"],
      featured: false,
    },
    {
      id: "devsecops-culture",
      slug: "building-devsecops-culture",
      title:
        "Building a DevSecOps Culture: Security as a Shared Responsibility",
      excerpt:
        "Bolting security on at the end of the SDLC is a recipe for breaches. We share the frameworks, tools, and mindset shifts needed to embed security into every stage of your pipeline.",
      category: "DevOps",
      date: "January 3, 2026",
      readTime: "10 min read",
      author: {
        name: "Sarah Wanjiku",
        role: "Head of Cybersecurity",
        avatar: "👩‍💻",
      },
      tags: ["DevSecOps", "SDLC", "Security"],
      featured: false,
    },
    {
      id: "cloud-cost-optimisation",
      slug: "cloud-cost-optimisation-strategies",
      title: "8 Cloud Cost Optimisation Strategies That Actually Work",
      excerpt:
        "Cloud bills spiralling out of control? You're not alone. Our architects share the tactics — from right-sizing to Reserved Instances to FinOps tooling — that have saved our clients millions.",
      category: "Cloud",
      date: "December 18, 2025",
      readTime: "7 min read",
      author: {
        name: "Dr. James Kimani",
        role: "CTO & Cloud Architect",
        avatar: "👨‍💻",
      },
      tags: ["FinOps", "Cloud Costs", "AWS", "Azure"],
      featured: false,
    },
    {
      id: "python-data-analysis",
      slug: "python-data-analysis-business",
      title: "Python for Business Data Analysis: A No-Fluff Guide",
      excerpt:
        "You don't need a data science degree to extract business value from your data. This guide walks through pandas, matplotlib, and real-world datasets to give you actionable skills fast.",
      category: "AI & Data",
      date: "December 5, 2025",
      readTime: "13 min read",
      author: {
        name: "Grace Mwende",
        role: "Training Lead",
        avatar: "👩‍🏫",
      },
      tags: ["Python", "Data Analysis", "Business Intelligence"],
      featured: false,
    },
  ],

  newsletter: {
    title: "Stay Ahead of the Curve",
    description:
      "Get our latest articles, training guides, and industry insights delivered to your inbox — no spam, unsubscribe any time.",
    placeholder: "Enter your email address",
    cta: "Subscribe Free",
  },
};
