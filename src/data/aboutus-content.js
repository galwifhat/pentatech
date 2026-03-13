// ─────────────────────────────────────────────
//  PentaTech — About Us Page Content
// ─────────────────────────────────────────────

export const ABOUT_US = {
  // Company Introduction
  introduction: {
    title: "About PentaTech",
    paragraphs: [
      "In today's rapidly evolving digital landscape, businesses need more than just technology—they need a strategic partner who understands both the technical and human sides of digital transformation. That's where PentaTech comes in.",

      "Founded with a clear vision to bridge the gap between complex technology and real-world business outcomes, PentaTech Consultancy Limited delivers comprehensive IT solutions that empower organizations to thrive in an increasingly connected world. With expertise spanning cloud computing, cybersecurity, software development, data analytics, and DevOps, we help businesses of all sizes navigate their unique digital journeys with confidence.",

      "What sets us apart is our unwavering commitment to understanding your business first. We don't believe in one-size-fits-all solutions. Instead, we take the time to learn about your challenges, goals, and aspirations—then architect technology strategies that drive measurable results. Whether you're a startup looking to build your first cloud infrastructure or an established enterprise seeking to modernize legacy systems, PentaTech brings the expertise, tools, and passion to help you succeed.",
    ],
  },

  // Mission Statement
  mission: {
    title: "Our Mission",
    content:
      "To empower businesses with innovative, reliable, and scalable technology solutions that drive growth, enhance security, and unlock new possibilities—all while building lasting partnerships based on trust and exceptional service.",
  },

  // Vision Statement
  vision: {
    title: "Our Vision",
    content:
      "To be East Africa's most trusted technology partner, recognized for excellence in IT consultancy and training, and to play a pivotal role in shaping a digitally empowered future for businesses and communities across the region.",
  },

  // What We Do - Summary of core services
  whatWeDo: {
    title: "What We Do",
    content:
      "PentaTech delivers end-to-end technology solutions that help businesses operate more efficiently, securely, and competitively. From migrating critical infrastructure to the cloud and fortifying digital assets against emerging threats, to building custom software and transforming raw data into actionable insights—we provide the technical expertise and strategic guidance organizations need to innovate and grow. Our integrated approach ensures that every solution we deliver is not just technically sound, but strategically aligned with your business objectives.",
  },

  // Why Choose Us - Key strengths
  whyChooseUs: {
    title: "Why Choose Us",
    points: [
      {
        title: "Deep Technical Expertise",
        description:
          "Our consultants hold top-tier certifications across cloud platforms, security frameworks, development methodologies, and DevOps practices, bringing real-world experience to every engagement.",
      },
      {
        title: "Proven Reliability",
        description:
          "With hundreds of successful projects delivered across diverse industries, we've built a reputation for delivering on time, within budget, and above expectations.",
      },
      {
        title: "Innovation-Driven Mindset",
        description:
          "We stay ahead of emerging technologies and industry trends so our clients benefit from cutting-edge solutions that provide a competitive advantage.",
      },
      {
        title: "Security First Approach",
        description:
          "Every solution we design is built with security at its core, protecting your data, systems, and reputation in an increasingly threat-filled digital world.",
      },
      {
        title: "Scalable Solutions",
        description:
          "Whether you're a growing startup or an established enterprise, our solutions are designed to scale seamlessly with your business.",
      },
      {
        title: "Genuine Partnership",
        description:
          "We measure our success by your success. That means transparent communication, responsive support, and a genuine commitment to your long-term growth.",
      },
    ],
  },

  // Our Approach - How we work with clients
  approach: {
    title: "Our Approach",
    content:
      "We believe the best technology solutions emerge from true collaboration. That's why every engagement begins with listening—understanding your unique challenges, goals, and constraints before we ever write a line of code or architect a single server. From there, we combine technical excellence with strategic thinking to design solutions that not only solve today's problems but position you for tomorrow's opportunities. Throughout the process, we keep you informed, involved, and empowered, ensuring complete transparency and alignment every step of the way.",
  },

  // Closing Statement / Call to Action
  closing: {
    title: "Let's Build Something Extraordinary Together",
    content:
      "Technology has the power to transform businesses, unlock new possibilities, and create lasting impact. At PentaTech, we're passionate about helping organizations harness that power to achieve remarkable things.",
    cta: "Contact Us Today",
    ctaDescription:
      "to schedule a conversation with one of our technology consultants.",
  },

  // Optional: Team/Leadership section if needed
  leadership: {
    title: "Our Leadership Team",
    members: [
      {
        name: "Dr. James Kimani",
        role: "CTO & Lead Architect",
        expertise: "Cloud Architecture",
        bio: "15+ years in cloud computing, AWS Certified Solutions Architect Professional, Azure Expert, and former Cloud Architect at Microsoft.",
        avatar: "👨‍🏫",
      },
      {
        name: "Sarah Wanjiku",
        role: "Head of Training",
        expertise: "Cybersecurity",
        bio: "CISSP, CEH, 12+ years in information security, former Security Consultant at Deloitte.",
        avatar: "👩‍🏫",
      },
      {
        name: "Michael Ochieng",
        role: "Senior Consultant",
        expertise: "DevOps & Networking",
        bio: "CCIE #4XXXX, 15+ years in enterprise networking, former Network Architect at Safaricom.",
        avatar: "👨‍🏫",
      },
      {
        name: "Grace Mwende",
        role: "Training Lead",
        expertise: "Software Development",
        bio: "10+ years in software development, Google Developer Expert, former Senior Engineer at Andela.",
        avatar: "👩‍🏫",
      },
    ],
  },

  // Optional: Stats/Highlights section
  stats: [
    { value: "500+", label: "Clients Served" },
    { value: "8", label: "Service Domains" },
    { value: "50+", label: "Certifications Offered" },
    { value: "98%", label: "Satisfaction Rate" },
  ],

  // Optional: Company values
  values: [
    {
      title: "Excellence",
      description: "We pursue the highest standards in everything we do.",
    },
    {
      title: "Integrity",
      description:
        "We operate with honesty, transparency, and ethical practices.",
    },
    {
      title: "Innovation",
      description:
        "We embrace change and continuously seek better ways to solve problems.",
    },
    {
      title: "Collaboration",
      description: "We succeed together—with our clients and within our team.",
    },
  ],
};


// Individual exports for more specific imports
export const COMPANY_INTRODUCTION = ABOUT_US.introduction;
export const COMPANY_MISSION = ABOUT_US.mission;
export const COMPANY_VISION = ABOUT_US.vision;
export const COMPANY_WHY_CHOOSE_US = ABOUT_US.whyChooseUs;
export const COMPANY_APPROACH = ABOUT_US.approach;
export const COMPANY_CLOSING = ABOUT_US.closing;
export const COMPANY_LEADERSHIP = ABOUT_US.leadership;
export const COMPANY_STATS = ABOUT_US.stats;
export const COMPANY_VALUES = ABOUT_US.values;