// ─────────────────────────────────────────────
//  PentaTech — Site Content & Data
// ─────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Why Us", href: "/why-us" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
];

export const STATS = [
  { target: 500, label: "Clients Served", suffix: "+" },
  { target: 8, label: "Service Domains", suffix: "" },
  { target: 50, label: "Certifications Offered", suffix: "+" },
  { target: 98, label: "% Satisfaction Rate", suffix: "%" },
];

export const SERVICES = [
  {
    icon: "☁️",
    title: "Cloud Computing",
    description:
      "End-to-end cloud strategy, migration, and managed services across AWS, Azure, and GCP platforms.",
    slug: "cloud-computing",
  },
  {
    icon: "💻",
    title: "Software Development",
    description:
      "Custom software solutions, web applications, APIs, and enterprise systems built for scale.",
    slug: "software-development",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    description:
      "Threat assessment, penetration testing, compliance, and security architecture for your infrastructure.",
    slug: "cybersecurity",
  },
  {
    icon: "📊",
    title: "Data Analytics",
    description:
      "Business intelligence, data pipelines, visualization, and machine learning solutions.",
    slug: "data-analytics",
  },
  {
    icon: "🌐",
    title: "Networking & DevOps",
    description:
      "Network design, CI/CD pipelines, containerization, and infrastructure automation.",
    slug: "networking-devops",
  },
  {
    icon: "🔄",
    title: "Digital Transformation",
    description:
      "Strategic advisory to modernize operations, processes, and technology ecosystems.",
    slug: "digital-transformation",
  },
  {
    icon: "🏗️",
    title: "Systems Architecture",
    description:
      "Designing robust, scalable, and resilient IT architectures aligned with your business goals.",
    slug: "systems-architecture",
  },
  {
    icon: "🤝",
    title: "Managed IT Support",
    description:
      "24/7 technical support, helpdesk services, and proactive system monitoring.",
    slug: "managed-it-support",
  },
];

export const WHY_ITEMS = [
  {
    title: "Industry-Aligned Expertise",
    description:
      "Our consultants hold top certifications across cloud, security, networking, and development domains.",
  },
  {
    title: "Tailored Solutions",
    description:
      "We don't believe in one-size-fits-all. Every engagement is customized to your unique objectives.",
  },
  {
    title: "Ethical Practices",
    description:
      "We uphold the highest standards of professionalism, data integrity, and ethical IT practices.",
  },
  {
    title: "Global Technology Partnerships",
    description:
      "Strategic alliances with leading technology providers, institutions, and employers.",
  },
  {
    title: "Sustainable Growth Focus",
    description:
      "We measure our success by your long-term growth, profitability, and digital resilience.",
  },
];

export const FLOAT_CARDS = [
  {
    icon: "🏆",
    title: "Award-Winning Training",
    description:
      "Industry-recognized programs trusted by top organizations across East Africa and beyond.",
  },
  {
    icon: "⚡",
    title: "Rapid Deployment",
    description:
      "Agile teams that deliver quality solutions on time, every time.",
  },
  {
    icon: "🎓",
    title: "Certified Instructors",
    description:
      "Learn from practitioners with real-world enterprise experience.",
  },
];

export const COURSE_DETAILS = {
  "cloud-computing-training": {
    icon: "☁️",
    title: "Cloud Computing Certification Program",
    fullDescription:
      "Master cloud computing with hands-on training across AWS, Microsoft Azure, and Google Cloud Platform. Prepare for industry-recognized certifications and real-world cloud architecture.",
    slug: "cloud-computing-training",
    duration: "8 weeks (2 sessions/week)",
    level: "Beginner to Advanced",
    format: "Live online + Self-paced labs",
    prerequisites: "Basic IT knowledge recommended",
    price: "KES 45,000",
    learnTopics: [
      "Cloud concepts and architecture",
      "AWS services (EC2, S3, VPC, Lambda)",
      "Azure infrastructure and services",
      "Google Cloud Platform fundamentals",
      "Multi-cloud strategy and management",
      "Cloud security and compliance",
      "Cost optimization techniques",
      "Hands-on lab exercises",
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        level: "Associate",
        badge: "AWS",
      },
      { name: "Microsoft Azure Fundamentals", level: "AZ-900", badge: "Azure" },
      {
        name: "Google Cloud Associate Engineer",
        level: "Associate",
        badge: "GCP",
      },
      { name: "CompTIA Cloud+", level: "Intermediate", badge: "CompTIA" },
    ],
    modules: [
      {
        title: "Module 1: Cloud Computing Fundamentals",
        duration: "1 week",
        topics: [
          "Introduction to cloud computing",
          "Deployment models (Public, Private, Hybrid)",
          "Service models (IaaS, PaaS, SaaS)",
          "Cloud economics and pricing",
          "AWS global infrastructure",
        ],
      },
      {
        title: "Module 2: AWS Core Services",
        duration: "2 weeks",
        topics: [
          "Compute: EC2, Lambda, Elastic Beanstalk",
          "Storage: S3, EBS, EFS, Glacier",
          "Networking: VPC, Route 53, CloudFront",
          "Databases: RDS, DynamoDB, Aurora",
          "Identity: IAM, Cognito",
        ],
      },
      {
        title: "Module 3: Microsoft Azure",
        duration: "2 weeks",
        topics: [
          "Azure architecture and services",
          "Virtual Machines and App Services",
          "Azure Storage and Databases",
          "Azure Networking and Security",
          "Azure DevOps integration",
        ],
      },
      {
        title: "Module 4: Google Cloud Platform",
        duration: "1 week",
        topics: [
          "GCP compute options",
          "Cloud Storage and BigQuery",
          "Kubernetes Engine (GKE)",
          "GCP networking and security",
        ],
      },
      {
        title: "Module 5: Multi-Cloud & Advanced Topics",
        duration: "2 weeks",
        topics: [
          "Multi-cloud architecture patterns",
          "Cloud security best practices",
          "Disaster recovery and business continuity",
          "Cost optimization strategies",
          "Exam preparation and practice tests",
        ],
      },
    ],
    dates: [
      { start: "March 15, 2024", status: "Enrolling" },
      { start: "April 12, 2024", status: "Available" },
      { start: "May 10, 2024", status: "Early Bird" },
    ],
    instructor: {
      name: "Dr. James Kimani",
      title: "Cloud Architecture Lead",
      avatar: "👨‍🏫",
      bio: "15+ years in cloud computing, AWS Certified Solutions Architect Professional, Azure Expert, and former Cloud Architect at Microsoft.",
    },
  },

  "cybersecurity-training": {
    icon: "🔐",
    title: "Cybersecurity Professional Track",
    fullDescription:
      "Comprehensive cybersecurity training covering network security, ethical hacking, incident response, and certification preparation.",
    slug: "cybersecurity-training",
    duration: "10 weeks",
    level: "Intermediate",
    format: "Live online + Lab access",
    prerequisites: "Networking fundamentals",
    price: "KES 55,000",
    learnTopics: [
      "Network security fundamentals",
      "Ethical hacking and penetration testing",
      "Security operations and incident response",
      "Compliance and governance",
      "Cryptography and PKI",
      "Identity and access management",
      "Security tools and technologies",
      "Certification exam preparation",
    ],
    certifications: [
      { name: "CompTIA Security+", level: "Core", badge: "CompTIA" },
      {
        name: "CEH (Certified Ethical Hacker)",
        level: "Advanced",
        badge: "EC-Council",
      },
      { name: "CISSP", level: "Expert", badge: "ISC²" },
    ],
    modules: [
      {
        title: "Module 1: Security Fundamentals",
        duration: "2 weeks",
        topics: [
          "Security principles and concepts",
          "Risk management",
          "Network security basics",
          "Operating system security",
        ],
      },
      {
        title: "Module 2: Ethical Hacking",
        duration: "3 weeks",
        topics: [
          "Reconnaissance techniques",
          "Scanning and enumeration",
          "System hacking",
          "Web application penetration testing",
        ],
      },
      {
        title: "Module 3: Defense & Response",
        duration: "3 weeks",
        topics: [
          "Security monitoring",
          "Incident response",
          "Digital forensics",
          "Security tools implementation",
        ],
      },
      {
        title: "Module 4: Certification Prep",
        duration: "2 weeks",
        topics: [
          "Exam strategies",
          "Practice tests",
          "Lab exercises",
          "Career guidance",
        ],
      },
    ],
    dates: [
      { start: "March 20, 2024", status: "Enrolling" },
      { start: "April 18, 2024", status: "Available" },
    ],
    instructor: {
      name: "Sarah Wanjiku",
      title: "Cybersecurity Lead",
      avatar: "👩‍🏫",
      bio: "CISSP, CEH, 12+ years in information security, former Security Consultant at Deloitte.",
    },
  },

  "networking-training": {
    icon: "🌐",
    title: "Networking Professional Track",
    fullDescription:
      "Master modern networking technologies from fundamentals to advanced enterprise networking. Prepare for CCNA, CompTIA Network+, and other industry certifications.",
    slug: "networking-training",
    duration: "8 weeks",
    level: "Beginner to Advanced",
    format: "Live online + Lab access",
    prerequisites: "Basic computer knowledge",
    price: "KES 45,000",
    learnTopics: [
      "Network fundamentals and architecture",
      "Routing and switching concepts",
      "TCP/IP protocol suite",
      "Network security basics",
      "Wireless networking",
      "Network troubleshooting",
      "SDN and network automation",
      "Cloud networking",
    ],
    certifications: [
      { name: "Cisco CCNA", level: "Associate", badge: "Cisco" },
      { name: "CompTIA Network+", level: "Core", badge: "CompTIA" },
      { name: "JNCIA-Junos", level: "Associate", badge: "Juniper" },
    ],
    modules: [
      {
        title: "Module 1: Networking Fundamentals",
        duration: "2 weeks",
        topics: [
          "OSI and TCP/IP models",
          "IP addressing and subnetting",
          "Ethernet and switching",
          "Network topologies",
        ],
      },
      {
        title: "Module 2: Routing Technologies",
        duration: "2 weeks",
        topics: [
          "Static and dynamic routing",
          "OSPF and EIGRP",
          "BGP fundamentals",
          "Routing protocols comparison",
        ],
      },
      {
        title: "Module 3: Switching & VLANs",
        duration: "2 weeks",
        topics: [
          "VLANs and trunking",
          "STP and EtherChannel",
          "Switch security",
          "Multilayer switching",
        ],
      },
      {
        title: "Module 4: Advanced Topics",
        duration: "2 weeks",
        topics: [
          "Network automation",
          "SDN concepts",
          "Cloud networking",
          "CCNA exam prep",
        ],
      },
    ],
    dates: [
      { start: "March 25, 2024", status: "Enrolling" },
      { start: "April 22, 2024", status: "Available" },
    ],
    instructor: {
      name: "Michael Ochieng",
      title: "Networking Lead",
      avatar: "👨‍🏫",
      bio: "CCIE #4XXXX, 15+ years in enterprise networking, former Network Architect at Safaricom.",
    },
  },

  "software-dev-training": {
    icon: "💻",
    title: "Full-Stack Software Development",
    fullDescription:
      "Become a professional full-stack developer. Master modern frameworks, databases, and DevOps practices through hands-on projects.",
    slug: "software-dev-training",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    format: "Live online + Project-based",
    prerequisites: "Basic programming knowledge helpful",
    price: "KES 65,000",
    learnTopics: [
      "HTML5, CSS3, and JavaScript",
      "React and modern frontend frameworks",
      "Node.js and Express",
      "Python and Django",
      "Database design (SQL and NoSQL)",
      "RESTful API development",
      "Git and version control",
      "DevOps basics",
    ],
    certifications: [
      { name: "Meta Frontend Developer", level: "Professional", badge: "Meta" },
      { name: "AWS Developer", level: "Associate", badge: "AWS" },
      { name: "MongoDB Developer", level: "Associate", badge: "MongoDB" },
    ],
    modules: [
      {
        title: "Module 1: Frontend Development",
        duration: "3 weeks",
        topics: [
          "HTML5 and CSS3",
          "JavaScript ES6+",
          "React fundamentals",
          "State management",
        ],
      },
      {
        title: "Module 2: Backend Development",
        duration: "3 weeks",
        topics: [
          "Node.js and Express",
          "RESTful APIs",
          "Authentication",
          "Testing",
        ],
      },
      {
        title: "Module 3: Databases",
        duration: "2 weeks",
        topics: [
          "SQL databases",
          "MongoDB and NoSQL",
          "Database design",
          "ORM/ODM",
        ],
      },
      {
        title: "Module 4: Full-Stack Project",
        duration: "4 weeks",
        topics: [
          "Project planning",
          "Full-stack integration",
          "Deployment",
          "Best practices",
        ],
      },
    ],
    dates: [
      { start: "April 1, 2024", status: "Enrolling" },
      { start: "May 6, 2024", status: "Early Bird" },
    ],
    instructor: {
      name: "Grace Mwende",
      title: "Software Development Lead",
      avatar: "👩‍🏫",
      bio: "10+ years in software development, Google Developer Expert, former Senior Engineer at Andela.",
    },
  },

  "data-analytics-training": {
    icon: "📊",
    title: "Data Analytics & Science Program",
    fullDescription:
      "Transform data into actionable insights. Learn data analysis, visualization, and machine learning from industry experts.",
    slug: "data-analytics-training",
    duration: "10 weeks",
    level: "Intermediate",
    format: "Live online + Hands-on projects",
    prerequisites: "Basic statistics recommended",
    price: "KES 50,000",
    learnTopics: [
      "Data analysis with Python",
      "SQL for data analysis",
      "Data visualization",
      "Statistical analysis",
      "Machine learning fundamentals",
      "Big data concepts",
      "Business intelligence tools",
      "Real-world projects",
    ],
    certifications: [
      { name: "Google Data Analytics", level: "Professional", badge: "Google" },
      { name: "Microsoft Power BI", level: "Associate", badge: "Microsoft" },
      { name: "Tableau Desktop", level: "Specialist", badge: "Tableau" },
    ],
    modules: [
      {
        title: "Module 1: Data Analysis Fundamentals",
        duration: "2 weeks",
        topics: [
          "Python for data analysis",
          "Pandas and NumPy",
          "Data cleaning",
          "Exploratory analysis",
        ],
      },
      {
        title: "Module 2: SQL and Databases",
        duration: "2 weeks",
        topics: [
          "SQL fundamentals",
          "Advanced queries",
          "Database design",
          "Data warehousing",
        ],
      },
      {
        title: "Module 3: Data Visualization",
        duration: "2 weeks",
        topics: [
          "Matplotlib and Seaborn",
          "Tableau",
          "Power BI",
          "Dashboard design",
        ],
      },
      {
        title: "Module 4: Machine Learning",
        duration: "4 weeks",
        topics: [
          "ML fundamentals",
          "Regression and classification",
          "Clustering",
          "Model evaluation",
        ],
      },
    ],
    dates: [
      { start: "April 5, 2024", status: "Enrolling" },
      { start: "May 10, 2024", status: "Available" },
    ],
    instructor: {
      name: "Dr. Faith Akinyi",
      title: "Data Science Lead",
      avatar: "👩‍🔬",
      bio: "PhD in Data Science, 8+ years in analytics, former Data Scientist at IBM Research.",
    },
  },

  "corporate-training": {
    icon: "🏢",
    title: "Corporate Training Programs",
    fullDescription:
      "Custom-designed training solutions for organizations. We develop and deliver programs tailored to your team's specific needs and goals.",
    slug: "corporate-training",
    duration: "Customizable",
    level: "All levels",
    format: "On-site or Virtual",
    prerequisites: "Varies by program",
    price: "Custom quote",
    learnTopics: [
      "Custom curriculum design",
      "Team upskilling",
      "Technology adoption",
      "Leadership in tech",
      "Agile transformation",
      "DevOps culture",
      "Security awareness",
      "Cloud migration training",
    ],
    certifications: [
      {
        name: "Custom Certification",
        level: "Organization",
        badge: "PentaTech",
      },
      { name: "Partner Certifications", level: "Various", badge: "Multiple" },
    ],
    modules: [
      {
        title: "Phase 1: Needs Assessment",
        duration: "1 week",
        topics: [
          "Skills gap analysis",
          "Team assessment",
          "Goal setting",
          "Curriculum design",
        ],
      },
      {
        title: "Phase 2: Custom Development",
        duration: "2-4 weeks",
        topics: [
          "Content creation",
          "Hands-on exercises",
          "Real-world scenarios",
          "Assessment design",
        ],
      },
      {
        title: "Phase 3: Delivery",
        duration: "Custom",
        topics: [
          "Expert instruction",
          "Interactive sessions",
          "Project work",
          "Continuous feedback",
        ],
      },
      {
        title: "Phase 4: Follow-up",
        duration: "Ongoing",
        topics: [
          "Post-training support",
          "Progress tracking",
          "Additional resources",
          "Refresher sessions",
        ],
      },
    ],
    dates: [
      { start: "Flexible scheduling", status: "Available" },
      { start: "Custom dates", status: "Contact us" },
    ],
    instructor: {
      name: "PentaTech Team",
      title: "Corporate Training Team",
      avatar: "👥",
      bio: "Our corporate training team consists of industry experts with decades of combined experience in enterprise technology training.",
    },
  },

  bootcamps: {
    icon: "🎪",
    title: "Tech Bootcamps & Seminars",
    fullDescription:
      "Intensive, focused training programs designed to quickly upskill teams and individuals in specific technologies and methodologies.",
    slug: "bootcamps",
    duration: "1-4 weeks",
    level: "Various",
    format: "Immersive in-person or virtual",
    prerequisites: "Varies by bootcamp",
    price: "KES 25,000 - 85,000",
    learnTopics: [
      "Intensive hands-on learning",
      "Real-world projects",
      "Industry best practices",
      "Networking opportunities",
      "Career guidance",
      "Certification prep",
      "Portfolio development",
      "Expert mentorship",
    ],
    certifications: [
      { name: "Bootcamp Certificate", level: "Completion", badge: "PentaTech" },
    ],
    modules: [
      {
        title: "Upcoming Bootcamps",
        duration: "Various",
        topics: [
          "Cloud Engineering Bootcamp (2 weeks)",
          "Cybersecurity Intensive (1 week)",
          "DevOps Immersion (3 weeks)",
          "Data Science Accelerator (4 weeks)",
          "Full-Stack Crash Course (2 weeks)",
        ],
      },
      {
        title: "Seminars & Workshops",
        duration: "1-3 days",
        topics: [
          "Cloud Strategy Seminar",
          "Security Awareness Workshop",
          "Agile Leadership",
          "Digital Transformation",
        ],
      },
    ],
    dates: [
      { start: "Monthly", status: "View calendar" },
      { start: "Custom dates", status: "Request" },
    ],
    instructor: {
      name: "Industry Experts",
      title: "Guest Instructors",
      avatar: "🎯",
      bio: "Our bootcamps feature guest instructors from leading tech companies and industry experts.",
    },
  },

  "curriculum-design": {
    icon: "📝",
    title: "Curriculum Design Services",
    fullDescription:
      "Professional curriculum development for educational institutions, training providers, and corporate learning departments.",
    slug: "curriculum-design",
    duration: "4-12 weeks",
    level: "All levels",
    format: "Consulting service",
    prerequisites: "Educational goals defined",
    price: "Custom quote",
    learnTopics: [
      "Needs analysis",
      "Learning objectives",
      "Content development",
      "Assessment design",
      "Hands-on exercises",
      "Lab development",
      "Instructor materials",
      "Quality assurance",
    ],
    certifications: [
      { name: "Custom Curriculum", level: "Accredited", badge: "PentaTech" },
    ],
    modules: [
      {
        title: "Phase 1: Discovery",
        duration: "1-2 weeks",
        topics: [
          "Stakeholder interviews",
          "Skills assessment",
          "Goal alignment",
          "Scope definition",
        ],
      },
      {
        title: "Phase 2: Development",
        duration: "2-6 weeks",
        topics: [
          "Content creation",
          "Exercise development",
          "Lab design",
          "Assessment creation",
        ],
      },
      {
        title: "Phase 3: Review",
        duration: "1-2 weeks",
        topics: [
          "Pilot testing",
          "Feedback collection",
          "Revision",
          "Quality assurance",
        ],
      },
      {
        title: "Phase 4: Launch",
        duration: "1-2 weeks",
        topics: [
          "Trainer training",
          "Materials delivery",
          "Launch support",
          "Evaluation setup",
        ],
      },
    ],
    dates: [
      { start: "Project-based", status: "Flexible" },
      { start: "Custom timeline", status: "Available" },
    ],
    instructor: {
      name: "Curriculum Team",
      title: "Learning Designers",
      avatar: "📚",
      bio: "Our curriculum designers have extensive experience in educational design, instructional technology, and technical training.",
    },
  },
};

export const TRAINING_PROGRAMS = [
  {
    icon: "☁️",
    title: "Cloud Computing",
    description: "AWS, Azure & GCP certification pathways for all levels",
    slug: "cloud-computing-training",
  },
  {
    icon: "🔐",
    title: "Cybersecurity",
    description: "CompTIA Security+, CEH, CISSP preparation tracks",
    slug: "cybersecurity-training",
  },
  {
    icon: "🌐",
    title: "Networking",
    description: "CCNA, CompTIA Network+ and advanced networking",
    slug: "networking-training",
  },
  {
    icon: "💻",
    title: "Software Dev",
    description: "Full-stack development, DevOps, and modern frameworks",
    slug: "software-dev-training",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    description: "Data science, BI tools, machine learning bootcamps",
    slug: "data-analytics-training",
  },
  {
    icon: "🏢",
    title: "Corporate Programs",
    description: "Custom curriculum development for enterprise teams",
    slug: "corporate-training",
  },
  {
    icon: "🎪",
    title: "Bootcamps & Seminars",
    description: "Intensive technical workshops and industry events",
    slug: "bootcamps",
  },
  {
    icon: "📝",
    title: "Curriculum Design",
    description: "Learning content creation for institutions and trainers",
    slug: "curriculum-design",
  },
];

export const FOOTER_LINKS = {
  Services: [
    { name: "Cloud Computing", link: "/services/cloud-computing" },
    { name: "Cybersecurity", link: "/services/cybersecurity" },
    { name: "Software Development", link: "/services/software-development" },
    { name: "Data Analytics", link: "/services/data-analytics" },
    { name: "DevOps & Networking", link: "/services/networking-devops" },
  ],
  Training: [
    { name: "Certification Programs", link: "/training" },
    { name: "Corporate Training", link: "/training/category/corporate" },
    { name: "Bootcamps", link: "/training/category/bootcamps" },
    { name: "Workshops & Seminars", link: "/training/category/workshops" },
    { name: "Curriculum Design", link: "/training/category/curriculum" },
  ],
  Company: [
    { name: "About Us", link: "/about" },
    { name: "Our Partners", link: "/partners" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ],
};

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    icon: "in",
    url: "https://linkedin.com/company/pentatech-ke",
    aria: "Visit our LinkedIn page",
  },
  {
    label: "Twitter",
    icon: "𝕏",
    url: "https://twitter.com/pentatech_ke",
    aria: "Follow us on Twitter/X",
  },
  {
    label: "Facebook",
    icon: "f",
    url: "https://facebook.com/pentatech.ke",
    aria: "Like our Facebook page",
  },
  {
    label: "YouTube",
    icon: "▶",
    url: "https://youtube.com/@pentatechke",
    aria: "Subscribe to our YouTube channel",
  },
  {
    label: "Instagram",
    icon: "📷",
    url: "https://instagram.com/pentatech_ke",
    aria: "Follow us on Instagram",
  },
  {
    label: "GitHub",
    icon: "⌨️",
    url: "https://github.com/pentatech-ke",
    aria: "View our GitHub repositories",
  },
];

export const CONTACT_INFO = {
  email: "info@pentatech.co.ke",
  phone: "+14793353453",
  address: "Nairobi, Kenya",
  whatsapp: "https://wa.me/14793353453",
};

export const CUBE_FACES = ["☁️", "🔐", "💻", "📊", "🌐", "⚙️"];

export const TRAINING_CATEGORIES = {
  corporate: {
    title: "Corporate Training",
    description:
      "Custom training solutions designed for organizations to upskill their teams and drive business growth.",
    icon: "🏢",
    programs: [TRAINING_PROGRAMS[5]], // Corporate Programs
    features: [
      "Custom curriculum design",
      "On-site or virtual delivery",
      "Team-based learning",
      "Progress tracking",
      "Post-training support",
    ],
  },
  bootcamps: {
    title: "Tech Bootcamps",
    description:
      "Intensive, immersive training programs designed to quickly upskill individuals and teams in specific technologies.",
    icon: "⚡",
    programs: [TRAINING_PROGRAMS[6]], // Bootcamps
    features: [
      "Intensive hands-on learning",
      "Real-world projects",
      "Industry expert instructors",
      "Career guidance",
      "Portfolio development",
    ],
  },
  workshops: {
    title: "Workshops & Seminars",
    description:
      "Short-term focused training sessions on specific technologies, tools, and methodologies.",
    icon: "🎯",
    programs: [], // You can add workshop-specific programs here
    features: [
      "Half-day to multi-day sessions",
      "Hands-on exercises",
      "Expert-led discussions",
      "Networking opportunities",
      "Take-home materials",
    ],
    upcomingWorkshops: [
      {
        title: "Cloud Strategy Workshop",
        date: "April 15, 2024",
        duration: "2 days",
        description: "Strategic planning for cloud adoption and migration",
      },
      {
        title: "Cybersecurity Awareness Seminar",
        date: "April 22, 2024",
        duration: "1 day",
        description: "Essential security practices for modern organizations",
      },
      {
        title: "Agile Leadership Workshop",
        date: "May 5, 2024",
        duration: "3 days",
        description: "Leading agile teams and transformations",
      },
    ],
  },
  curriculum: {
    title: "Curriculum Design Services",
    description:
      "Professional learning content development for educational institutions, training providers, and corporate L&D departments.",
    icon: "📝",
    programs: [TRAINING_PROGRAMS[7]], // Curriculum Design
    features: [
      "Needs analysis and gap assessment",
      "Custom content development",
      "Hands-on lab design",
      "Assessment creation",
      "Instructor materials",
    ],
    process: [
      "Discovery & Requirements Gathering",
      "Curriculum Architecture Design",
      "Content Development",
      "Review & Iteration",
      "Final Delivery & Training",
    ],
  },
};

// You can also add more categories as needed
export const WORKSHOP_TYPES = {
  technical: "Technical Workshops",
  leadership: "Leadership & Management",
  softSkills: "Professional Skills",
  certification: "Certification Prep",
};
