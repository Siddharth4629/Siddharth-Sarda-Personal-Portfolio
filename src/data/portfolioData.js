/**
 * Centralized Portfolio Data Configuration for Siddharth Sarda
 * Source of Truth: Latest Resume (November 2026)
 */

export const personalInfo = {
  name: "Siddharth Sarda",
  title: "Software Developer",
  heroLabel: "HELLO, I'M",
  tagline: "Building full-stack applications and AI-powered solutions.",
  intro:
    "I'm a Computer Science undergraduate at Parul University, graduating in 2027. I enjoy building reliable software applications, developing backend systems and creating AI-powered products that solve practical problems.",
  profileSummary:
    "Computer Science undergraduate with strong foundations in Data Structures, Algorithms, Object-Oriented Programming, and DBMS. Skilled in C++, Java, Python, JavaScript, and backend development using Node.js and Express.js. Experienced in building full-stack applications, REST APIs, database-driven solutions, and AI-powered applications using Google Gemini API. Seeking a Graduate Software Engineer role to develop reliable and scalable software systems.",
  about: {
    heading: "About Me",
    narrative:
      "I'm a Computer Science and Engineering undergraduate at Parul University with a strong interest in software development, backend engineering and AI-powered applications. I enjoy transforming ideas into practical applications and solving problems through programming. Through my projects, I've gained hands-on experience in frontend development, backend APIs, database integration, authentication, real-time communication and Generative AI. I'm continuously strengthening my data structures, algorithms and software engineering fundamentals while preparing for professional software development opportunities.",
    degree: "B.Tech Computer Science and Engineering",
    university: "Parul University, Vadodara, Gujarat",
    graduationYear: "2027",
    coreInterests: [
      "Software Engineering",
      "Full Stack Development",
      "AI Application Development",
      "Backend & RESTful APIs",
      "Relational & Cloud Databases",
    ],
  },
  techHighlights: [
    "C++",
    "Java",
    "JavaScript",
    "React.js",
    "Node.js",
    "PostgreSQL",
    "Generative AI",
  ],
  availability: {
    status: "Available",
    badgeText: "Seeking Graduate Software Engineer Role",
    subtext: "Open to Graduate Roles, Software Developer & Full Stack Opportunities (2025–2027)",
    isAvailable: true,
  },
  contactInfo: {
    email: "siddharthsarda742@gmail.com",
    phone: "+91-8788668577",
    location: "Vadodara, Gujarat / Maharashtra, India",
  },
  socialLinks: {
    github: "https://github.com/Siddharth4629",
    linkedin: "https://www.linkedin.com/in/siddharth-sarda-5090a1358/",
    email: "siddharthsarda742@gmail.com",
    phone: "+91-8788668577",
  },
  resume: {
    downloadUrl: "/resume.pdf",
    fileName: "Siddharth_Sarda_Resume.pdf",
    lastUpdated: "November 2026",
  },
  softSkills: [
    "Communication",
    "Problem-solving",
    "Time management",
    "Adaptability",
  ],
};

export const skillsData = [
  {
    category: "Programming Languages",
    description: "Core languages used for algorithms, system programming, and application logic.",
    items: [
      { name: "C++", icon: "Code2", tag: "DSA & Problem Solving", color: "#00599C" },
      { name: "Java", icon: "Coffee", tag: "OOP & System Architecture", color: "#ED8B00" },
      { name: "Python", icon: "Terminal", tag: "Scripting & AI Workflows", color: "#3776AB" },
      { name: "JavaScript", icon: "FileCode2", tag: "ES6+ & Full Stack", color: "#F7DF1E" },
    ],
  },
  {
    category: "Core Computer Science",
    description: "Foundational computer science principles applied in architectural decisions.",
    items: [
      { name: "Data Structures and Algorithms", icon: "Workflow", tag: "100+ Solved Problems", color: "#8B5CF6" },
      { name: "Object-Oriented Programming", icon: "Box", tag: "SOLID & Design Patterns", color: "#06B6D4" },
      { name: "DBMS", icon: "TableProperties", tag: "Transactions & ACID", color: "#10B981" },
      { name: "SQL", icon: "Binary", tag: "Query Optimization", color: "#F59E0B" },
      { name: "Operating Systems", icon: "Cpu", tag: "Concurrency & Memory", color: "#EC4899" },
    ],
  },
  {
    category: "Frontend",
    description: "Component-driven interfaces, responsive design systems, and modern frontends.",
    items: [
      { name: "HTML5", icon: "Globe", tag: "Semantic Markup", color: "#E34F26" },
      { name: "CSS3", icon: "Palette", tag: "Responsive Styling", color: "#1572B6" },
      { name: "React.js", icon: "Layers", tag: "Component Architecture", color: "#61DAFB" },
    ],
  },
  {
    category: "Backend",
    description: "Scalable server architectures, microservices, and secure communication.",
    items: [
      { name: "Node.js", icon: "Server", tag: "Event-driven Runtime", color: "#339933" },
      { name: "Express.js", icon: "Boxes", tag: "Web APIs & Middleware", color: "#FFFFFF" },
      { name: "REST APIs", icon: "Network", tag: "API Design & Integration", color: "#06B6D4" },
    ],
  },
  {
    category: "Databases",
    description: "Relational and document storage, schema design, and query optimization.",
    items: [
      { name: "PostgreSQL", icon: "Database", tag: "Relational & ACID", color: "#4169E1" },
      { name: "MySQL", icon: "FolderGit2", tag: "Relational Modeling", color: "#4479A1" },
      { name: "MongoDB", icon: "HardDrive", tag: "NoSQL & Document", color: "#47A248" },
    ],
  },
  {
    category: "AI and Generative AI",
    description: "Modern intelligence layers, LLMs, prompt architectures, and structured outputs.",
    items: [
      { name: "Google Gemini API", icon: "Sparkles", tag: "Gemini 2.5 Flash", color: "#4285F4" },
      { name: "LLM Integration", icon: "Brain", tag: "Cognitive Pipelines", color: "#8B5CF6" },
      { name: "Prompt Engineering", icon: "Workflow", tag: "Context & System Prompts", color: "#10B981" },
      { name: "Structured JSON Outputs", icon: "Binary", tag: "Schema Enforcement", color: "#06B6D4" },
    ],
  },
  {
    category: "Platforms and Integrations",
    description: "Cloud database backends, authentication, real-time messaging, and CDN storage.",
    items: [
      { name: "Supabase", icon: "Database", tag: "PostgreSQL & Auth", color: "#3ECF8E" },
      { name: "Neon DB", icon: "Database", tag: "Serverless Postgres", color: "#00E599" },
      { name: "Prisma", icon: "TableProperties", tag: "Type-safe ORM", color: "#2D3748" },
      { name: "Clerk", icon: "Lock", tag: "Auth & User Management", color: "#6C47FF" },
      { name: "Ably", icon: "Radio", tag: "Real-time WebSockets", color: "#FF5416" },
      { name: "ImageKit", icon: "Image", tag: "Cloud CDN Image Delivery", color: "#0066FF" },
    ],
  },
  {
    category: "Development Tools",
    description: "Version control, collaboration, debugging, and API testing tools.",
    items: [
      { name: "VS Code", icon: "Code", tag: "Primary Editor", color: "#007ACC" },
      { name: "Git", icon: "GitBranch", tag: "Version Control", color: "#F05032" },
      { name: "GitHub", icon: "Github", tag: "Collaboration & CI/CD", color: "#FFFFFF" },
      { name: "Postman", icon: "Send", tag: "API Testing & Docs", color: "#FF6C37" },
      { name: "MongoDB Compass", icon: "Compass", tag: "Database GUI", color: "#47A248" },
    ],
  },
];

export const featuredProjects = [
  {
    id: "getcareerpilot",
    slug: "getcareerpilot",
    title: "GetCareerPilot",
    subtitle: "AI-Powered Career Discovery Platform",
    category: "AI Application Development",
    year: "2026",
    role: "AI Application Developer",
    featuredBadge: "Flagship Project • Gemini 2.5 Flash",
    tagline: "Personalized Career Recommendations, Skill-Gap Diagnostics & Structured AI Mentorship",
    shortDescription:
      "An AI-powered career guidance platform designed to support personalized career discovery across 12 industry sectors and help users make informed education and career decisions.",
    fullDescription:
      "GetCareerPilot serves as an intelligent career strategist developed using JavaScript and Google Gemini 2.5 Flash. It features RIASEC-based aptitude assessments, career exploration, stream selection, college discovery, and entrance exam/scholarship guidance, powered by a secure Node.js/Express AI gateway and Supabase PostgreSQL with LocalStorage offline fallback.",
    technologies: [
      "JavaScript",
      "Google Gemini 2.5 Flash",
      "Node.js",
      "Express.js",
      "Supabase PostgreSQL",
      "LocalStorage",
      "JSON Schema",
      "Tailwind CSS",
    ],
    showcaseFeatures: [
      "RIASEC-based aptitude assessment across diverse cognitive domains",
      "Career exploration covering 12 major industry sectors",
      "Stream selection, college discovery, entrance exam & scholarship guidance",
      "AI-powered personalized career roadmaps and milestones",
      "Resume skill-gap analysis with actionable improvement recommendations",
      "Mock interview evaluation using structured JSON responses",
    ],
    technicalHighlights: [
      "Secure Node.js/Express AI gateway isolating Gemini API keys and rate limits",
      "Guaranteed structured JSON responses enforced through Gemini response schemas",
      "Supabase cloud synchronization paired with LocalStorage offline fallback",
      "AI-powered personalized guidance designed for student and graduate accessibility",
    ],
    caseStudyUrl: "/projects/getcareerpilot",
    githubUrl: "https://github.com/Siddharth4629/GetCareerPilot",
    liveUrl: "https://pesonal-portfolio-drab.vercel.app/",
    accentColor: "#8B5CF6",
    isPrimaryHero: true,
  },
  {
    id: "skipline",
    slug: "skipline",
    title: "SkipLine",
    subtitle: "Smart University Queue Management System",
    category: "Full Stack Development",
    year: "2025 – Present",
    role: "Full Stack Developer",
    featuredBadge: "Real-Time Systems • Neon PostgreSQL",
    tagline: "Real-time Queue & Ordering Platform (PostgreSQL, Prisma, Clerk, Ably)",
    shortDescription:
      "A smart queue and ordering platform designed to reduce physical waiting times and improve the service experience in university and campus environments.",
    fullDescription:
      "SkipLine transforms campus service congestion by introducing digital token generation, real-time queue tracking, estimated waiting times, and vendor management. Integrated with PostgreSQL (Neon DB), Prisma ORM, Clerk authentication, Ably real-time messaging, and ImageKit for cloud image storage.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL (Neon DB)",
      "Prisma ORM",
      "Clerk",
      "Ably",
      "ImageKit",
      "Tailwind CSS",
    ],
    showcaseFeatures: [
      "Digital token generation with tamper-proof tracking for campus dining and services",
      "Real-time queue tracking powered by Ably WebSockets",
      "Dynamic estimated waiting times based on vendor queue depth",
      "Vendor management portal for order status dispatch and fulfillment",
      "Role-based authentication via Clerk separating students and merchant vendors",
      "ImageKit cloud CDN integration for optimized food item imagery",
    ],
    technicalHighlights: [
      "Relational schema on Neon DB serverless PostgreSQL with Prisma type-safe queries",
      "Millisecond real-time token synchronization across devices powered by Ably WebSockets",
      "Clerk enterprise authentication and session management",
      "Cloud image transformation and CDN delivery through ImageKit",
    ],
    caseStudyUrl: "/projects/skipline",
    githubUrl: "https://github.com/Siddharth4629/Skipline",
    liveUrl: "",
    accentColor: "#06B6D4",
    isPrimaryHero: false,
  },
  {
    id: "student-management-system",
    slug: "student-management-system",
    title: "Student Management System",
    subtitle: "Academic Relational Database Management System",
    category: "Academic Project",
    year: "2024",
    role: "Developer – Academic Project",
    featuredBadge: "Relational DBMS • ACID Compliant",
    tagline: "CRUD Application with Role-Based Access Control & Optimized SQL Queries",
    shortDescription:
      "A CRUD-based application designed to manage student records efficiently.",
    fullDescription:
      "Architected a centralized student information management system that enables university departments to securely record, update, search, and audit student data with strict role-based access controls and optimized SQL queries.",
    technologies: [
      "SQL",
      "MySQL",
      "DBMS",
      "Node.js",
      "Express.js",
      "Authentication",
      "Role-Based Access Control",
    ],
    showcaseFeatures: [
      "Student record management with complete CRUD operations",
      "Secure authentication and role-based access control (Admin, Faculty, Student)",
      "Optimized SQL queries, table indexes, and 3NF relational normalization",
      "Academic performance tracking and course enrollment handling",
    ],
    technicalHighlights: [
      "Relational schema normalized to 3NF ensuring data integrity and zero redundancy",
      "Role-based authorization middleware protecting sensitive academic records",
      "Optimized query execution plans for rapid lookups across large student rosters",
    ],
    caseStudyUrl: "/projects/student-management-system",
    githubUrl: "https://github.com/Siddharth4629",
    liveUrl: "",
    accentColor: "#10B981",
    isPrimaryHero: false,
  },
];

export const additionalProjects = [
  {
    id: "collabmind",
    slug: "collabmind",
    title: "CollabMind",
    category: "AI-Assisted Project Management",
    year: "2025",
    role: "Full Stack Engineer",
    badge: "Exploratory Project",
    shortDescription:
      "An AI-assisted project management platform designed to improve team collaboration, automated task breakdown, and sprint tracking.",
    technologies: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Google Gemini API",
    ],
    githubUrl: "https://github.com/Siddharth4629/collabmind",
    accentColor: "#8B5CF6",
  },
  {
    id: "gramshiksha-ai",
    slug: "gramshiksha-ai",
    title: "GramShiksha AI",
    category: "AI for Education",
    year: "2025",
    role: "System Architect",
    badge: "Exploratory Project",
    shortDescription:
      "An Offline AI Study Partner designed to support students in rural areas through accessible AI-assisted learning and offline caching.",
    technologies: [
      "React",
      "Tailwind CSS",
      "PWA / Offline Storage",
      "JavaScript",
      "IndexedDB",
    ],
    githubUrl: "https://github.com/Siddharth4629/gramshiksha-ai",
    accentColor: "#10B981",
  },
];

// Compatibility export
export const projectsData = featuredProjects;

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) – Computer Science and Engineering",
    institution: "Parul University",
    location: "Vadodara, Gujarat",
    duration: "2023 – 2027",
    score: "CGPA: 6.75",
    highlight: "Graduating in 2027",
    status: "In Progress",
    description:
      "Curriculum focused on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering.",
  },
  {
    degree: "Higher Secondary Certificate (Class XII)",
    institution: "Shroff High School and Junior College",
    board: "Maharashtra State Board",
    location: "Maharashtra, India",
    duration: "2023",
    score: "83.17%",
    highlight: "Class XII Distinction",
    status: "Completed",
    description:
      "Pre-university coursework with rigorous foundations in Mathematics, Physics, Chemistry, and Computer Science.",
  },
];

export const primaryCertifications = [
  {
    id: "ibm-ai-fundamentals",
    title: "AI Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2025",
    verifyUrl: "https://www.credly.com/badges/ba45ab09-07b3-44d6-b14d-4124668c0d25",
    fileUrl: "/certificates/ibm-ai-fundamentals.jpg",
    description: "Foundational training in Artificial Intelligence concepts, natural language processing, computer vision, and ethical AI.",
    badge: "IBM SkillsBuild",
    accentColor: "#8B5CF6",
  },
  {
    id: "aws-cloud-foundations",
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "AWS Academy",
    year: "2025",
    verifyUrl: "https://www.credly.com/go/y7RDyWUB",
    fileUrl: "/certificates/aws-cloud-foundations.png",
    description: "Core architectural knowledge of AWS cloud computing, security, compliance, compute, storage, and networking.",
    badge: "AWS Academy",
    accentColor: "#06B6D4",
  },
  {
    id: "cisco-modern-ai",
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    year: "2025",
    fileUrl: "/certificates/cisco-modern-ai.pdf",
    description: "Comprehensive study of modern AI architectures, machine learning models, neural networks, and applications.",
    badge: "Cisco Academy",
    accentColor: "#10B981",
  },
  {
    id: "azure-essentials",
    title: "Microsoft Azure Essentials",
    issuer: "Great Learning",
    year: "2024",
    verifyUrl: "https://www.mygreatlearning.com/certificate/JYVSBUFW",
    fileUrl: "/certificates/azure-essentials.jpg",
    description: "Cloud concepts, Azure architecture, virtual machines, resource groups, storage, and cloud governance.",
    badge: "Great Learning",
    accentColor: "#3B82F6",
  },
];

export const achievementsData = {
  achievementsList: [
    {
      title: "Solved 100+ DSA Problems",
      description: "Demonstrated strong algorithmic foundations across arrays, strings, stacks, queues, and sorting algorithms.",
      badge: "Algorithms",
      icon: "Code2",
    },
    {
      title: "Bharatiya Antariksh Hackathon 2025",
      description: "Participated and submitted innovative technical ideas under ISRO / Hack2Skill.",
      badge: "ISRO / Hack2Skill",
      icon: "Trophy",
    },
  ],
  certifications: primaryCertifications,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};
