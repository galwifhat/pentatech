// ─────────────────────────────────────────────
//  PentaTech — Partners Page Content
// ─────────────────────────────────────────────

export const PARTNERS = {
  hero: {
    title: "Our Partners",
    subtitle:
      "We collaborate with world-class technology leaders to deliver best-in-class solutions to our clients.",
  },

  intro:
    "PentaTech's strength lies in the alliances we've forged with the industry's most innovative technology companies. These partnerships allow us to offer certified expertise, access to cutting-edge tools, and preferred pricing — ensuring our clients always receive the highest standard of service.",

  tiers: [
    {
      tier: "Strategic Partners",
      description:
        "Our deepest relationships — joint go-to-market programs, co-delivered solutions, and shared engineering resources.",
      partners: [
        {
          name: "Microsoft",
          logo: "🪟",
          category: "Cloud & Productivity",
          description:
            "Gold Microsoft Partner delivering Azure cloud architecture, Microsoft 365 deployment, and enterprise identity management across East Africa.",
          badges: ["Azure", "Microsoft 365", "Gold Certified"],
          url: "https://microsoft.com",
        },
        {
          name: "Amazon Web Services",
          logo: "☁️",
          category: "Cloud Infrastructure",
          description:
            "AWS Select Tier Partner specialising in cloud migration, serverless architectures, and cost-optimised AWS infrastructure design.",
          badges: ["AWS Select", "Cloud Migration", "DevOps"],
          url: "https://aws.amazon.com",
        },
        {
          name: "Cisco",
          logo: "🔗",
          category: "Networking & Security",
          description:
            "Authorised Cisco partner for enterprise networking, CCNA/CCNP training delivery, and cybersecurity infrastructure deployment.",
          badges: ["Authorised Partner", "Networking", "Security"],
          url: "https://cisco.com",
        },
      ],
    },
    {
      tier: "Technology Partners",
      description:
        "Integrated technology alliances that extend our service capabilities and training curriculum.",
      partners: [
        {
          name: "Google Cloud",
          logo: "🌐",
          category: "Cloud Platform",
          description:
            "Google Cloud Partner offering GCP infrastructure, BigQuery analytics, and AI/ML solution deployment.",
          badges: ["GCP Partner", "AI/ML", "Analytics"],
          url: "https://cloud.google.com",
        },
        {
          name: "CompTIA",
          logo: "🎓",
          category: "IT Certifications",
          description:
            "Authorised CompTIA training partner. Our instructors are CompTIA Certified Technical Trainers (CTT+) delivering A+, Network+, Security+, and CySA+ programmes.",
          badges: ["Authorised", "Security+", "A+ & Network+"],
          url: "https://comptia.org",
        },
        {
          name: "Palo Alto Networks",
          logo: "🛡️",
          category: "Cybersecurity",
          description:
            "Next-generation firewall deployment, SASE architecture, and Palo Alto certified training for enterprise security teams.",
          badges: ["NGFW", "SASE", "Cortex XDR"],
          url: "https://paloaltonetworks.com",
        },
        {
          name: "Red Hat",
          logo: "🎩",
          category: "Linux & OpenShift",
          description:
            "Red Hat Business Partner delivering RHEL administration, Ansible automation, and OpenShift container platform training.",
          badges: ["RHEL", "Ansible", "OpenShift"],
          url: "https://redhat.com",
        },
      ],
    },
    {
      tier: "Training & Certification Partners",
      description:
        "Accreditation and examination bodies that validate and certify our training programmes.",
      partners: [
        {
          name: "EC-Council",
          logo: "⚔️",
          category: "Ethical Hacking",
          description:
            "Accredited Training Centre (ATC) for CEH, CPENT, and CHFI certifications — the industry's leading ethical hacking credentials.",
          badges: ["ATC", "CEH", "CPENT"],
          url: "https://eccouncil.org",
        },
        {
          name: "PMI",
          logo: "📋",
          category: "Project Management",
          description:
            "Authorised Training Partner (ATP) for PMP, CAPM, and PMI-ACP preparation programmes aligned with the latest PMI Examination Content Outline.",
          badges: ["ATP", "PMP Prep", "CAPM"],
          url: "https://pmi.org",
        },
        {
          name: "ISACA",
          logo: "🔒",
          category: "IT Governance",
          description:
            "ISACA Authorised Training Organisation delivering CISA, CISM, and CRISC exam preparation for information security professionals.",
          badges: ["ATO", "CISA", "CISM"],
          url: "https://isaca.org",
        },
      ],
    },
  ],

  stats: [
    { value: "20+", label: "Technology Partners" },
    { value: "15+", label: "Years of Alliances" },
    { value: "40+", label: "Joint Certifications" },
    { value: "6", label: "Countries Covered" },
  ],

  becomePartner: {
    title: "Become a Partner",
    description:
      "Are you a technology company looking to expand your reach across East Africa? We're always open to new strategic alliances that create value for businesses in the region.",
    benefits: [
      "Access to our network of 500+ enterprise clients",
      "Joint marketing and co-branded campaigns",
      "Shared training delivery and certification programmes",
      "Preferred partner pricing and referral incentives",
    ],
    cta: "Get in Touch",
  },
};
