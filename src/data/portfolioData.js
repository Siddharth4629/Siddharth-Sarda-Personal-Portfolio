/**
 * Siddharth Sarda - Centralized Portfolio Configuration
 * Update your personal information, links, and credentials here.
 */

export const personalInfo = {
  name: "Siddharth Sarda",
  title: "Software Developer | Full Stack Developer | AI Enthusiast",
  tagline: "I turn ideas into digital experiences through code.",
  intro:
    "I'm a Computer Science undergraduate passionate about building practical software solutions, developing scalable applications and exploring intelligent technologies.",
  about: {
    paragraph1:
      "I'm a Computer Science undergraduate pursuing B.Tech in Computer Science and Engineering (2023–2027). I enjoy solving problems through programming and building applications that address real-world challenges.",
    paragraph2:
      "I have hands-on experience with frontend development, backend development, databases and AI-powered application development. Through my projects, I've explored technologies such as React, Node.js, Express.js, PostgreSQL, MongoDB and Google Gemini API.",
    paragraph3:
      "I'm continuously improving my problem-solving skills and looking for opportunities to contribute to meaningful software engineering projects.",
  },
  availability: {
    status: "Available",
    badgeText: "Available for Internships & Projects",
    subtext: "Seeking Software Engineering & Full-Stack Internships (2025–2026)",
    isAvailable: true,
  },
  socialLinks: {
    github: "https://github.com/Siddharth4629",
    linkedin: "https://linkedin.com/in/siddharth-sarda", // Editable placeholder
    email: "siddharthsarda742@gmail.com",
  },
  resume: {
    downloadUrl: "/resume.pdf", // Place your resume PDF in public/resume.pdf
    fileName: "Siddharth_Sarda_Resume.pdf",
  },
  areasOfInterest: [
    "Full-Stack Web Development",
    "Generative AI & LLM Applications",
    "Distributed Systems & Cloud Architecture",
    "Database Engineering & Query Optimization",
    "Developer Tooling & System Design",
  ],
};

export const skillsData = [
  {
    category: "Programming Languages",
    description: "Languages used for system building, algorithmic problem solving, and application logic.",
    items: [
      { name: "C++", icon: "Code2", tag: "DSA & Problem Solving", color: "#00599C" },
      { name: "Java", icon: "Coffee", tag: "OOP & Systems", color: "#ED8B00" },
      { name: "Python", icon: "Terminal", tag: "Scripting & AI", color: "#3776AB" },
      { name: "C", icon: "Cpu", tag: "Low-level & Memory", color: "#A8B9CC" },
      { name: "JavaScript", icon: "FileCode2", tag: "ES6+ & Modern Web", color: "#F7DF1E" },
    ],
  },
  {
    category: "Frontend",
    description: "Modern component-driven interfaces, responsive design, and state management.",
    items: [
      { name: "React.js", icon: "Layers", tag: "Component Architecture", color: "#61DAFB" },
      { name: "Angular", icon: "Shield", tag: "SPA Framework", color: "#DD0031" },
      { name: "HTML", icon: "Globe", tag: "Semantic Markup", color: "#E34F26" },
      { name: "CSS", icon: "Palette", tag: "Styling & Animations", color: "#1572B6" },
      { name: "Tailwind CSS", icon: "Wind", tag: "Utility-first Styling", color: "#38B2AC" },
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
      { name: "MongoDB", icon: "HardDrive", tag: "NoSQL & Document", color: "#47A248" },
      { name: "MySQL", icon: "FolderGit2", tag: "Relational DB", color: "#4479A1" },
    ],
  },
  {
    category: "Tools & Workflow",
    description: "Version control, collaboration, debugging, and API testing tools.",
    items: [
      { name: "Git", icon: "GitBranch", tag: "Version Control", color: "#F05032" },
      { name: "GitHub", icon: "Github", tag: "Code Collaboration", color: "#FFFFFF" },
      { name: "VS Code", icon: "Code", tag: "Primary Editor", color: "#007ACC" },
      { name: "Postman", icon: "Send", tag: "API Testing & Docs", color: "#FF6C37" },
    ],
  },
  {
    category: "Core Computer Science",
    description: "Foundational computer science principles applied in architectural decisions.",
    items: [
      { name: "Data Structures & Algorithms", icon: "Workflow", tag: "Complexity & Optimization", color: "#8B5CF6" },
      { name: "Object-Oriented Programming", icon: "Box", tag: "SOLID & Design Patterns", color: "#06B6D4" },
      { name: "Database Management Systems", icon: "TableProperties", tag: "Transactions & Indexing", color: "#10B981" },
      { name: "SQL", icon: "Binary", tag: "Relational Queries & DDL", color: "#F59E0B" },
    ],
  },
];

export const projectsData = [
  {
    id: "skipline",
    title: "SkipLine",
    category: "Final Year Project",
    tagline: "Smart Queue & Ordering Platform",
    featured: true,
    shortDescription:
      "A Smart Queue and Ordering Platform designed to reduce physical queues in canteens, cafes, food courts and small businesses.",
    fullDescription:
      "SkipLine transforms customer waiting experiences in high-density environments like college canteens and crowded food courts. Customers browse menus, place orders, receive instant digital queue tokens, and track preparation status in real-time, eliminating physical congestion.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Ably",
      "ImageKit",
    ],
    features: [
      "Vendor discovery & live digital menus with dynamic availability",
      "Digital queue tokens with tamper-proof validation",
      "Live queue tracking with millisecond status synchronisation",
      "Estimated waiting times calculated dynamically from kitchen throughput",
      "Real-time notifications via Ably WebSockets when orders are ready",
      "Comprehensive vendor management dashboard for order fulfillment",
    ],
    architectureHighlights: [
      "Real-time pub/sub messaging engine powered by Ably",
      "Relational schema with Prisma ORM and PostgreSQL transactions",
      "Enterprise authentication and session management via Clerk",
      "Cloud image transformation and CDN delivery through ImageKit",
    ],
    githubUrl: "https://github.com/siddharthsarda/skipline", // Editable placeholder
    liveUrl: "", // Editable placeholder (empty indicates live link pending or self-hosted)
    badge: "Final Year Capstone",
    accentColor: "#8B5CF6",
  },
  {
    id: "collabmind",
    title: "CollabMind",
    category: "AI-Assisted Project Management",
    tagline: "Intelligent Team Workspace & Task Automation",
    featured: true,
    shortDescription:
      "An AI-assisted project management platform designed to improve team collaboration, project organization and productivity.",
    fullDescription:
      "CollabMind integrates intelligent workflow automation into standard agile boards. Teams collaborate in real time while Google Gemini API assists in decomposing complex project requirements into granular action items, auto-generating user stories, and summarizing sprint retrospectives.",
    technologies: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Socket.IO",
      "Google Gemini API",
    ],
    features: [
      "Multi-user real-time board collaboration powered by Socket.IO",
      "Gemini AI prompt engineering for automatic task breakdown and sprint planning",
      "Role-based access control with secure JWT authentication",
      "Interactive Kanban workflow with instantaneous cross-client updates",
      "AI-generated sprint summaries and risk detection",
    ],
    architectureHighlights: [
      "Bi-directional Socket.IO events for optimistic UI state synchronization",
      "Token-bucket rate limiting for Gemini API endpoints",
      "Mongoose schema design optimized for rapid nested task hierarchies",
    ],
    githubUrl: "https://github.com/siddharthsarda/collabmind", // Editable placeholder
    liveUrl: "",
    badge: "AI Powered",
    accentColor: "#06B6D4",
  },
  {
    id: "getcareerpilot",
    title: "GetCareerPilot",
    category: "AI Career Guidance Platform",
    tagline: "Career Readiness & Skill-Gap Analysis Engine",
    featured: true,
    shortDescription:
      "An AI-powered career guidance application that helps users plan their learning journey and understand their career readiness.",
    fullDescription:
      "GetCareerPilot serves as a personal AI career strategist for students and transitioning professionals. It ingests user resumes and target job descriptions to compute readiness scores, detect missing competencies, and chart actionable weekly study milestones.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "AI / LLM Integration",
      "REST APIs",
    ],
    features: [
      "Automated resume parsing and competency extraction",
      "Job description skill-gap matrix identifying high-priority deficiencies",
      "Personalized weekly learning roadmaps tailored to user schedule",
      "AI chatbot mentor for mock technical interviews and domain queries",
      "Learning progress tracking dashboard with milestone verification",
    ],
    architectureHighlights: [
      "Structured JSON schema outputs from LLM prompt pipelines",
      "Client-side caching for fast roadmap navigation without redundant API calls",
      "Modular scoring algorithm weighing hard vs. soft skills against industry data",
    ],
    githubUrl: "https://github.com/siddharthsarda/getcareerpilot", // Editable placeholder
    liveUrl: "",
    badge: "AI Guidance",
    accentColor: "#8B5CF6",
  },
  {
    id: "gramshiksha-ai",
    title: "GramShiksha AI",
    category: "AI for Education",
    tagline: "Offline AI Study Partner for Rural Learners",
    featured: true,
    shortDescription:
      "An Offline AI Study Partner designed to support students in rural areas through accessible AI-assisted learning.",
    fullDescription:
      "Bridging the digital divide for students in connectivity-constrained environments. GramShiksha AI focuses on resilient, low-bandwidth and offline-first interactive learning assistance, ensuring rural students have 24/7 access to high quality academic tutoring.",
    technologies: [
      "React",
      "Tailwind CSS",
      "PWA / Offline Storage",
      "JavaScript",
      "AI Integration",
    ],
    implementedFeatures: [
      "Offline localized question-answering cache for foundational STEM concepts",
      "Progressive Web App (PWA) architecture with Service Workers and IndexedDB",
      "Interactive multi-subject practice exercises with instant feedback",
      "Lightweight, low-bandwidth UI designed for budget mobile devices",
      "Multi-lingual prompt templates supporting vernacular explanations",
    ],
    plannedFeatures: [
      "On-device Small Language Model (SLM) inference using WebGPU / ONNX Runtime",
      "Local voice-to-text audio tutoring module for low-literacy students",
      "Peer-to-peer mesh synchronization for classroom settings with zero internet",
      "Physical textbook photo-to-explanation conversion via local edge vision models",
    ],
    architectureHighlights: [
      "Strict separation of offline-cached knowledge base vs. cloud enhancement pipeline",
      "Zero-latency IndexedDB retrieval ensuring accessibility in dead zones",
      "Designed specifically to solve educational inequality in rural communities",
    ],
    githubUrl: "https://github.com/siddharthsarda/gramshiksha-ai", // Editable placeholder
    liveUrl: "",
    badge: "Social Impact AI",
    accentColor: "#10B981",
  },
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Computer Science and Engineering",
    duration: "2023 – 2027",
    score: "CGPA: 6.75",
    highlight: "Graduating in 2027",
    status: "In Progress",
    description:
      "Focused on Core Computer Science: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering.",
    currentYear: "Undergraduate (3rd Year equivalent)",
  },
  {
    degree: "Higher Secondary Certificate (HSC - 12th)",
    institution: "Shroff High School and Junior College",
    board: "Maharashtra State Board",
    duration: "2023",
    score: "83.17%",
    highlight: "Science Stream (PCM)",
    status: "Completed",
    description:
      "Comprehensive coursework in Physics, Chemistry, Mathematics, and Computer Science with strong analytical foundations.",
  },
  {
    degree: "Secondary School Examination (SSC - 10th)",
    institution: "Podar International School",
    board: "CBSE",
    duration: "2021",
    score: "83.67%",
    highlight: "All-Round Academic Distinction",
    status: "Completed",
    description:
      "Strong academic foundation with special focus on Mathematics, Science, and Information Technology.",
  },
];

export const achievementsData = {
  hackathons: [
    {
      id: "technoverse-2026",
      title: "Technoverse Hackathon 2026",
      role: "Team Developer & Architect",
      year: "2026",
      description:
        "Participated in building rapid prototype solutions addressing real-world software and technological challenges under intensive time constraints.",
      technologies: ["React", "Node.js", "AI Integration"],
      badge: "Hackathon Entry",
      status: "Verified Participation",
      isEditable: true,
    },
  ],
  certifications: [
    {
      title: "Full-Stack Web Development Coursework",
      issuer: "Academic & Self-Directed Labs",
      year: "2024",
      description:
        "Completed hands-on practical implementations of RESTful APIs, relational schema design, state management, and full-stack integration.",
      badge: "Technical Training",
    },
    {
      title: "Data Structures & Algorithms Foundations",
      issuer: "Computer Science Curriculum",
      year: "2023 - 2024",
      description:
        "Rigorous training in linear & non-linear data structures, algorithmic paradigms, recursion, and time-space complexity analysis.",
      badge: "Core Foundations",
    },
  ],
  technicalTraining: [
    {
      topic: "Relational Database Design & SQL Optimization",
      focus: "PostgreSQL, MySQL, indexing strategies, normalization, and ACID compliance.",
      year: "2024",
    },
    {
      topic: "Modern Frontend Architecture with React & Tailwind",
      focus: "Hooks, component lifecycles, performance profiling, responsive design systems.",
      year: "2024",
    },
    {
      topic: "AI / LLM API Integration & Prompt Engineering",
      focus: "Google Gemini API, structured JSON parsing, real-time context injection.",
      year: "2024",
    },
  ],
  internships: [
    {
      title: "Software Engineering Internships",
      company: "Seeking Summer / Fall 2025-2026 Opportunities",
      status: "Active Applicant",
      description:
        "Actively preparing and interviewing for Software Development and Full-Stack Engineering roles. Equipped with strong fundamentals in DSA, modern web stacks, and passion for product-centric engineering.",
      isPlaceholder: true,
    },
  ],
};

export const emailjsConfig = {
  // Replace these with your actual EmailJS credentials from https://dashboard.emailjs.com
  // They are safe to use with client-side public keys.
  serviceId: "service_portfolio_sid",
  templateId: "template_portfolio_sid",
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
  // If no valid EmailJS key is provided, the form falls back to simulated instant delivery
  // and provides a 1-click direct mailto copy option so no message is ever lost!
};
