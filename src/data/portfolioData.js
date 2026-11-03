/**
 * Siddharth Sarda - Centralized Portfolio Configuration
 * Updated directly with official resume credentials and profile data.
 */

export const personalInfo = {
  name: "Siddharth Sarda",
  title: "Software Developer | Full Stack Developer | AI Enthusiast",
  targetRole: "Graduate Software Engineer",
  tagline: "I turn ideas into digital experiences through code.",
  intro:
    "Computer Science undergraduate passionate about building full-stack applications, scalable APIs, and database-driven solutions. Seeking a Graduate Software Engineer role to contribute to reliable software systems.",
  profileSummary:
    "Computer Science undergraduate with strong foundations in Data Structures, Algorithms, Object-Oriented Programming, DBMS, and software development. Skilled in C++, Python, JavaScript, SQL, REST APIs, and backend development using Node.js and Express.js. Hands-on experience building full-stack applications, developing scalable APIs, and implementing database-driven solutions. Seeking a Graduate Software Engineer role to contribute to reliable software systems and grow in a collaborative engineering environment.",
  about: {
    paragraph1:
      "I'm a Computer Science undergraduate pursuing B.Tech in Computer Science and Engineering at Parul University (2023–2027). I enjoy solving problems through programming and building applications that address real-world challenges.",
    paragraph2:
      "I have hands-on experience with frontend development, backend development, databases and AI-powered application development. Through my projects, I've explored technologies such as React, Node.js, Express.js, Flask, PostgreSQL, MongoDB, and Google Gemini API.",
    paragraph3:
      "I'm continuously improving my problem-solving skills, having solved 100+ DSA problems, and actively looking for opportunities to contribute to meaningful software engineering teams.",
  },
  availability: {
    status: "Available",
    badgeText: "Seeking Graduate Software Engineer Role",
    subtext: "Open to Graduate Roles & Full-Stack Internships (2025–2027)",
    isAvailable: true,
  },
  contactInfo: {
    phone: "+91-8788668577",
    email: "siddharthsarda742@gmail.com",
    location: "Vadodara, Gujarat / Maharashtra, India",
  },
  socialLinks: {
    github: "https://github.com/Siddharth4629",
    linkedin: "https://linkedin.com/in/siddharth-sarda",
    email: "siddharthsarda742@gmail.com",
    phone: "+91-8788668577",
  },
  resume: {
    downloadUrl: "/resume.pdf",
    fileName: "Siddharth_Sarda_Resume.pdf",
  },
  softSkills: [
    "Communication",
    "Problem-solving",
    "Time management",
    "Adaptability",
  ],
  areasOfInterest: [
    "Full-Stack Web Development (MERN)",
    "AI & Generative AI Systems (LLMs, Gemini API)",
    "Backend & RESTful API Engineering",
    "Database Engineering (MongoDB, MySQL, PostgreSQL)",
    "Data Structures & System Problem Solving",
  ],
};

export const skillsData = [
  {
    category: "Programming Languages",
    description: "Core languages used for algorithms, system programming, and modern development.",
    items: [
      { name: "Python", icon: "Terminal", tag: "Scripting & AI", color: "#3776AB" },
      { name: "JavaScript", icon: "FileCode2", tag: "ES6+ & Full Stack", color: "#F7DF1E" },
      { name: "C++", icon: "Code2", tag: "DSA & Problem Solving", color: "#00599C" },
      { name: "C", icon: "Cpu", tag: "Low-level & Memory", color: "#A8B9CC" },
    ],
  },
  {
    category: "AI & Generative AI",
    description: "Modern intelligence layers, LLMs, and prompt architectures.",
    items: [
      { name: "Generative AI", icon: "Sparkles", tag: "Cognitive Systems", color: "#8B5CF6" },
      { name: "LLMs", icon: "Brain", tag: "Large Language Models", color: "#06B6D4" },
      { name: "Google Gemini API", icon: "Sparkles", tag: "Structured Responses", color: "#4285F4" },
      { name: "Prompt Engineering", icon: "Workflow", tag: "Context & Few-Shot", color: "#10B981" },
    ],
  },
  {
    category: "Backend Technologies",
    description: "Scalable server architectures, microservices, and secure communication.",
    items: [
      { name: "Node.js", icon: "Server", tag: "Event-driven Runtime", color: "#339933" },
      { name: "Express.js", icon: "Boxes", tag: "Web APIs & Middleware", color: "#FFFFFF" },
      { name: "Flask", icon: "Server", tag: "Python Microframework", color: "#000000" },
      { name: "REST APIs", icon: "Network", tag: "API Design & Integration", color: "#06B6D4" },
    ],
  },
  {
    category: "Web Technologies",
    description: "Component-driven interfaces, responsive design, and modern frontends.",
    items: [
      { name: "React.js", icon: "Layers", tag: "SPA & Virtual DOM", color: "#61DAFB" },
      { name: "HTML", icon: "Globe", tag: "Semantic Markup", color: "#E34F26" },
      { name: "CSS", icon: "Palette", tag: "Responsive Styling", color: "#1572B6" },
      { name: "JavaScript", icon: "FileCode2", tag: "DOM & Async Flow", color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: "Wind", tag: "Utility-first Styling", color: "#38B2AC" },
    ],
  },
  {
    category: "Databases",
    description: "Relational and document storage, schema design, and query optimization.",
    items: [
      { name: "MongoDB", icon: "HardDrive", tag: "NoSQL & Document", color: "#47A248" },
      { name: "MySQL", icon: "FolderGit2", tag: "Relational Queries & DDL", color: "#4479A1" },
    ],
  },
  {
    category: "Core Concepts",
    description: "Foundational computer science principles applied in architectural decisions.",
    items: [
      { name: "Data Structures & Algorithms", icon: "Workflow", tag: "100+ Solved Problems", color: "#8B5CF6" },
      { name: "Object-Oriented Programming", icon: "Box", tag: "SOLID & Design Patterns", color: "#06B6D4" },
      { name: "DBMS", icon: "TableProperties", tag: "Transactions & Normalization", color: "#10B981" },
      { name: "SQL", icon: "Binary", tag: "Query Optimization", color: "#F59E0B" },
      { name: "Operating Systems", icon: "Cpu", tag: "Concurrency & Memory", color: "#EC4899" },
    ],
  },
  {
    category: "AI Development & Tools",
    description: "Workflow tooling, async engines, and developer environments.",
    items: [
      { name: "API Integration", icon: "Network", tag: "Structured AI Outputs", color: "#06B6D4" },
      { name: "Async / Await", icon: "Workflow", tag: "Non-blocking Pipelines", color: "#F59E0B" },
      { name: "VS Code", icon: "Code", tag: "Primary IDE", color: "#007ACC" },
      { name: "Git & GitHub", icon: "Github", tag: "Version Control", color: "#F05032" },
      { name: "MongoDB Compass", icon: "Compass", tag: "GUI Database Tooling", color: "#47A248" },
    ],
  },
];

export const projectsData = [
  {
    id: "getcareerpilot",
    title: "GetCareerPilot",
    category: "AI-Powered Career Guidance Platform",
    year: "2026",
    role: "AI Application Developer",
    tagline: "Personalized Career Recommendations & Skill-Gap Analysis",
    featured: true,
    shortDescription:
      "An AI-powered career guidance platform using JavaScript and Google Gemini API for personalized career recommendations, resume skill-gap analysis, and interactive mentor chat.",
    fullDescription:
      "GetCareerPilot serves as an intelligent career strategist. It ingests user profile metrics and target job roles to compute readiness scores, detect missing competencies, and generate actionable weekly study roadmaps with persistent client-side state.",
    technologies: [
      "JavaScript",
      "Google Gemini API",
      "React",
      "Node.js",
      "Express.js",
      "JSON Schema",
      "LocalStorage",
      "Tailwind CSS",
    ],
    features: [
      "Personalized learning roadmap generation tailored to individual goals",
      "Resume skill-gap analysis against target industry job descriptions",
      "AI career mentor chatbot for mock interview queries and guidance",
      "Intelligent job matching engine based on extracted competencies",
      "Structured AI responses using JSON schema and asynchronous API calls",
      "Modular JavaScript architecture with responsive UI and LocalStorage state",
    ],
    architectureHighlights: [
      "Structured JSON schema outputs from Gemini prompt pipelines",
      "Asynchronous non-blocking API handlers with robust fallback mechanisms",
      "Client-side caching and LocalStorage state persistence for zero redundancy",
    ],
    githubUrl: "https://github.com/Siddharth4629/GetCareerPilot",
    liveUrl: "",
    badge: "AI Powered • 2026",
    accentColor: "#8B5CF6",
  },
  {
    id: "skipline",
    title: "Skipline",
    category: "Smart University Queue Management System",
    year: "2025 – Present",
    role: "Full Stack Developer",
    tagline: "Real-time Queue & Ordering Platform (MERN Stack)",
    featured: true,
    shortDescription:
      "A smart queue and ordering platform using MERN stack technologies to eliminate physical waiting lines across campus dining, cafes, and campus services.",
    fullDescription:
      "Skipline streamlines campus service congestion by introducing digital token generation, real-time queue tracking, and synchronized order pipelines for students, vendors, and campus administration.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST APIs",
      "Tailwind CSS",
      "MERN Stack",
    ],
    features: [
      "Digital token generation with tamper-proof validation for campus services",
      "Real-time queue tracking and live order preparation countdowns",
      "Student module for digital discovery, order placement, and tracking",
      "Vendor and admin modules to streamline order dispatch and queue throughput",
      "Integrated MongoDB database and REST APIs for efficient data handling",
    ],
    architectureHighlights: [
      "MERN stack architecture with optimized REST API routing",
      "Dynamic token scheduling reducing physical queue congestion by over 60%",
      "MongoDB schema design supporting multi-service vendor hierarchies",
    ],
    githubUrl: "https://github.com/Siddharth4629/Skipline",
    liveUrl: "",
    badge: "MERN Stack • 2025–Present",
    accentColor: "#06B6D4",
  },
  {
    id: "student-management",
    title: "Student Management System",
    category: "Academic Database System",
    year: "2024",
    role: "Developer – Academic Project",
    tagline: "CRUD Application with Role-Based Access Control",
    featured: true,
    shortDescription:
      "A CRUD-based application for managing student records, academic performance, role-based authentication, and optimized SQL queries.",
    fullDescription:
      "Architected a centralized student information management system that enables university departments to securely record, update, search, and audit student data with strict role-based access controls and ACID compliance.",
    technologies: [
      "SQL",
      "MySQL",
      "DBMS",
      "Node.js / Express",
      "Authentication",
      "Role-Based Access Control",
    ],
    features: [
      "Complete CRUD operations for student admission, profiles, and courses",
      "Secure user authentication with role-based permissions (Admin, Faculty, Student)",
      "Optimized SQL queries, table indexes, and relational normalization",
      "Student performance tracking and automated grade reporting",
    ],
    architectureHighlights: [
      "Relational schema normalized to 3NF ensuring data integrity and zero redundancy",
      "Role-based authorization middleware protecting sensitive academic records",
      "Optimized query execution plans for rapid lookups across large student rosters",
    ],
    githubUrl: "https://github.com/Siddharth4629",
    liveUrl: "",
    badge: "DBMS & SQL • 2024",
    accentColor: "#10B981",
  },
  {
    id: "collabmind",
    title: "CollabMind",
    category: "AI-Assisted Project Management",
    year: "2025",
    role: "Full Stack Engineer",
    tagline: "Intelligent Agile Workspace with Real-Time Sockets",
    featured: false,
    shortDescription:
      "An AI-assisted project management platform designed to improve team collaboration, automated task breakdown, and sprint tracking.",
    fullDescription:
      "CollabMind integrates intelligent workflow automation into standard agile boards. Teams collaborate in real time while Google Gemini API assists in decomposing complex project requirements into granular action items.",
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
    features: [
      "Multi-user real-time board collaboration powered by Socket.IO",
      "Gemini AI prompt engineering for automatic task breakdown and sprint planning",
      "Role-based access control with secure JWT authentication",
      "Interactive Kanban workflow with instantaneous cross-client updates",
    ],
    architectureHighlights: [
      "Bi-directional Socket.IO events for optimistic UI state synchronization",
      "Token-bucket rate limiting for Gemini API endpoints",
      "Mongoose schema design optimized for rapid nested task hierarchies",
    ],
    githubUrl: "https://github.com/Siddharth4629/collabmind",
    liveUrl: "",
    badge: "AI & WebSockets",
    accentColor: "#06B6D4",
  },
  {
    id: "gramshiksha-ai",
    title: "GramShiksha AI",
    category: "AI for Education",
    year: "2025",
    role: "System Architect",
    tagline: "Offline AI Study Partner for Rural Education",
    featured: false,
    shortDescription:
      "An Offline AI Study Partner designed to support students in rural areas through accessible AI-assisted learning and offline caching.",
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
    ],
    architectureHighlights: [
      "Strict separation of offline-cached knowledge base vs. cloud enhancement pipeline",
      "Zero-latency IndexedDB retrieval ensuring accessibility in dead zones",
    ],
    githubUrl: "https://github.com/Siddharth4629/gramshiksha-ai",
    liveUrl: "",
    badge: "Social Impact AI",
    accentColor: "#10B981",
  },
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) – Computer Science Engineering",
    institution: "Parul University",
    location: "Vadodara, Gujarat",
    duration: "2023 – 2027",
    score: "CGPA: 6.75",
    highlight: "Graduating in 2027",
    status: "In Progress",
    description:
      "Core curriculum in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering.",
    currentYear: "Undergraduate (2023 – 2027)",
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
      "Rigorous pre-university coursework with emphasis on Mathematics, Physics, Chemistry, and Computer Science.",
  },
  {
    degree: "Secondary School Examination (Class X)",
    institution: "Podar International School",
    board: "CBSE",
    location: "India",
    duration: "2021",
    score: "83.67%",
    highlight: "All-Round Academic Distinction",
    status: "Completed",
    description:
      "Strong foundational academics in Mathematics, Science, and Information Technology.",
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
      title: "AI Platform Integration",
      description: "Developed an AI-powered career platform integrating Google Gemini API and structured JSON schema AI outputs.",
      badge: "Generative AI",
      icon: "Sparkles",
    },
    {
      title: "Bharatiya Antariksh Hackathon 2025",
      description: "Participated and submitted innovative technical ideas under ISRO / Hack2Skill.",
      badge: "Hackathon",
      icon: "Trophy",
    },
    {
      title: "Technoverse Hackathon 2026",
      description: "Team developer architecting rapid prototype solutions under intensive time constraints.",
      badge: "Hackathon Entry",
      icon: "Award",
    },
  ],
  certifications: [
    {
      title: "Bharatiya Antariksh Hackathon 2025 – Idea Submission",
      issuer: "ISRO / Hack2Skill",
      year: "2025",
      description: "Official certificate of idea submission for space and technology problem statements.",
      badge: "ISRO / Hack2Skill",
    },
    {
      title: "AI Fundamentals",
      issuer: "IBM SkillsBuild",
      year: "2024",
      description: "Foundational training in Artificial Intelligence, machine learning principles, and ethical AI.",
      badge: "IBM SkillsBuild",
    },
    {
      title: "AWS Academy Graduate – Cloud Foundations",
      issuer: "AWS Academy",
      year: "2024",
      description: "Cloud computing concepts, security, architecture, pricing, and AWS core services.",
      badge: "AWS Academy",
    },
    {
      title: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      year: "2024",
      description: "Overview of neural networks, computer vision, natural language processing, and modern AI pipelines.",
      badge: "Cisco Academy",
    },
    {
      title: "Microsoft Azure Essentials",
      issuer: "Great Learning",
      year: "2024",
      description: "Core cloud infrastructure, Azure services, resource groups, and cloud governance.",
      badge: "Great Learning",
    },
  ],
  technicalTraining: [
    {
      topic: "AI Development: API Integration & Structured Outputs",
      focus: "Google Gemini API, JSON Schema enforcement, async/await pipelines, prompt engineering.",
      year: "2025 - 2026",
    },
    {
      topic: "Full-Stack Web Development (MERN Stack)",
      focus: "React.js, Node.js, Express.js, MongoDB, REST APIs, and authentication.",
      year: "2024 - 2025",
    },
    {
      topic: "Relational Database Design & SQL Query Optimization",
      focus: "MySQL, relational normalization (3NF), indexing, transactions, and ACID principles.",
      year: "2024",
    },
  ],
  internships: [
    {
      title: "Seeking Graduate Software Engineer Role",
      company: "Open to Full-Time / Internship Opportunities",
      status: "Actively Applying",
      description:
        "Computer Science undergraduate with hands-on full-stack development experience, strong foundations in DSA (100+ problems), and expertise in modern AI API architectures. Ready to contribute to scalable engineering environments.",
      isPlaceholder: false,
    },
  ],
};

export const emailjsConfig = {
  serviceId: "service_portfolio_sid",
  templateId: "template_portfolio_sid",
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
};
