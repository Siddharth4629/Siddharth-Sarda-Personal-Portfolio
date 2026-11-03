/**
 * In-depth Case Study Information for Siddharth Sarda's Projects
 * Used by dedicated route pages: /projects/:slug
 */

export const projectsCaseStudies = {
  getcareerpilot: {
    id: "getcareerpilot",
    slug: "getcareerpilot",
    title: "GetCareerPilot",
    subtitle: "AI-Powered Career Discovery Platform",
    category: "AI Application Development",
    year: "2026",
    role: "AI Application Developer",
    status: "Live & Continuously Maintained",
    tagline: "Personalized Career Recommendations, Skill-Gap Diagnostics & Structured AI Mentorship",
    overview:
      "GetCareerPilot is an AI-powered career discovery and guidance application engineered using JavaScript and Google Gemini 2.5 Flash. Covering 12 major industry sectors, the platform bridges the gap between educational aspirations and industry realities by diagnosing student aptitude through RIASEC assessments, recommending target career paths, discovering universities and scholarships, and providing AI-guided learning roadmaps with automated mock interview evaluations.",
    problemStatement:
      "High school graduates and college undergraduates face fragmented, conflicting career advice. Traditional career counseling is prohibitively expensive or inaccessible, while generic search engines overwhelm students with unstructured information. Furthermore, learners lack objective tools to evaluate their current resume against specific job descriptions or receive realistic interview practice.",
    projectObjective:
      "Architect an intelligent, interactive, and resilient career discovery system that delivers structured, deterministic guidance across 12 industry sectors using modern LLM APIs, provides offline caching for uninterrupted access, and maintains strict secret isolation with backend proxy gateways.",
    myContribution:
      "Engineered the end-to-end system architecture: designed Gemini 2.5 Flash prompt workflows with JSON schema output enforcement; constructed a secure Node.js and Express AI proxy gateway; built a dual-layer data persistence mechanism utilizing Supabase PostgreSQL for cloud synchronizations and LocalStorage for zero-latency offline fallbacks; and designed the interactive UI dashboard with responsive career roadmaps.",
    technologies: [
      "JavaScript",
      "Google Gemini 2.5 Flash",
      "Node.js",
      "Express.js",
      "Supabase (PostgreSQL)",
      "LocalStorage API",
      "JSON Schema Enforcement",
      "Tailwind CSS",
      "RESTful APIs",
    ],
    architecture: {
      type: "Layered AI Gateway Architecture",
      diagram: [
        { step: "1. Client UI Layer", desc: "Interactive RIASEC assessment & career exploration dashboard" },
        { step: "2. Offline Caching Engine", desc: "LocalStorage persistence for active sessions & saved roadmaps" },
        { step: "3. Node/Express AI Gateway", desc: "Isolates Gemini API credentials, enforces rate limits, validates payloads" },
        { step: "4. Google Gemini 2.5 Flash", desc: "Generates structured JSON schema responses for skill-gaps & mock interviews" },
        { step: "5. Supabase PostgreSQL", desc: "Cloud synchronization of user progress, benchmark roadmaps & assessments" },
      ],
    },
    keyFeatures: [
      {
        title: "RIASEC-Based Aptitude Assessment",
        description:
          "Standardized psychological aptitude questionnaire mapping user inclinations (Realistic, Investigative, Artistic, Social, Enterprising, Conventional) to concrete software and industry roles.",
      },
      {
        title: "Comprehensive Career & College Discovery",
        description:
          "Exploration modules across 12 industry sectors, providing actionable insights into stream selection, entrance examinations, college discovery, and scholarship opportunities.",
      },
      {
        title: "Personalized AI Learning Roadmaps",
        description:
          "Algorithmic generation of weekly milestones, recommended technical skills, and project milestones tailored to the user's current baseline and target role.",
      },
      {
        title: "Resume Skill-Gap Analysis & Mock Interviewer",
        description:
          "Automated comparison between user resumes and target job profiles, generating structured scores, identified deficiencies, and simulated technical interview questions with instant critique.",
      },
      {
        title: "Hybrid Data Synchronization",
        description:
          "Instant client responsiveness backed by LocalStorage, with asynchronous cloud state synchronization to Supabase PostgreSQL when internet connectivity is active.",
      },
    ],
    technicalChallenges: [
      {
        challenge: "Inconsistent and Hallucinated LLM Output Formats",
        solution:
          "Configured Gemini 2.5 Flash with strict `responseSchema` parameters and rigorous JSON schema validation, ensuring downstream frontend components receive guaranteed data types without parsing failures.",
      },
      {
        challenge: "Securing API Credentials on Client-Facing Applications",
        solution:
          "Built a dedicated Node.js/Express proxy gateway server. The client never communicates directly with Google's API, keeping private keys secure on the backend while rate-limiting abusive requests.",
      },
      {
        challenge: "Maintaining Usability During Intermittent Connectivity",
        solution:
          "Architected an offline-first state pipeline: assessment progress, generated roadmaps, and profile data are immediately cached to LocalStorage before attempting Supabase cloud synchronization.",
      },
    ],
    learningOutcomes: [
      "Mastery of prompt engineering and structured JSON outputs with Google Gemini 2.5 Flash.",
      "Experience designing secure backend proxy gateways to shield third-party AI APIs.",
      "Hands-on architectural knowledge of dual-layer offline caching and cloud database synchronization.",
      "Understanding psychological aptitude frameworks (RIASEC) and their algorithmic translation into software recommendations.",
    ],
    githubUrl: "https://github.com/Siddharth4629/GetCareerPilot",
    liveUrl: "",
    accentColor: "#8B5CF6",
  },

  skipline: {
    id: "skipline",
    slug: "skipline",
    title: "SkipLine",
    subtitle: "Smart University Queue Management System",
    category: "Full Stack Development",
    year: "2025 – Present",
    role: "Full Stack Developer",
    status: "Active Development",
    tagline: "Real-time Queue & Ordering Platform (PostgreSQL, Prisma, Clerk, Ably)",
    overview:
      "SkipLine is a modern full-stack queue management and ordering platform engineered to eliminate physical waiting lines across university canteens, cafes, and campus service centers. Built with React.js, Node.js, and Express.js, SkipLine leverages PostgreSQL (Neon DB) with Prisma ORM for type-safe relational data management, Clerk for role-based authentication, Ably for millisecond real-time WebSocket state synchronization, and ImageKit for high-performance cloud image delivery.",
    problemStatement:
      "University dining halls and campus administrative counters experience severe physical congestion during lunch breaks and class intervals. Students endure 20–40 minute physical queues without transparency on preparation times, while vendors face chaotic order taking, frequent errors, and unorganized peak-hour rushes.",
    projectObjective:
      "Develop a synchronized, real-time digital queue system that allows students to discover campus vendors, generate digital tokens, track queue progression live, receive dynamic wait-time estimates, and pick up orders without physical waiting.",
    myContribution:
      "Architected the full-stack system: designed normalized relational schemas in PostgreSQL (hosted on serverless Neon DB) with Prisma ORM; configured Clerk multi-role authentication distinguishing students from vendor merchants; implemented Ably WebSockets for instantaneous token state broadcasts; integrated ImageKit CDN for optimized food item imagery; and developed the responsive vendor fulfillment dashboard.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL (Neon DB)",
      "Prisma ORM",
      "Clerk Authentication",
      "Ably WebSockets",
      "ImageKit CDN",
      "Tailwind CSS",
      "RESTful APIs",
    ],
    architecture: {
      type: "Event-Driven Real-Time Full Stack Architecture",
      diagram: [
        { step: "1. Client Apps (Student / Vendor)", desc: "React.js SPAs with Clerk session tokens & role guards" },
        { step: "2. Real-Time Channel (Ably)", desc: "Bi-directional WebSocket pub/sub for millisecond token state updates" },
        { step: "3. Express API Gateway", desc: "Validates order placement, verifies Clerk JWTs, computes dynamic wait times" },
        { step: "4. Prisma ORM & Neon DB", desc: "Type-safe relational database queries with connection pooling on PostgreSQL" },
        { step: "5. ImageKit Cloud CDN", desc: "Automated image optimization, compression, and delivery for vendor menus" },
      ],
    },
    keyFeatures: [
      {
        title: "Digital Token Generation",
        description:
          "Tamper-proof digital tokens generated automatically upon order placement, assigned sequential numbers per vendor queue.",
      },
      {
        title: "Real-Time Queue Tracking",
        description:
          "Live queue counter powered by Ably WebSockets, showing exactly how many tokens are currently being prepared ahead of the student.",
      },
      {
        title: "Dynamic Estimated Waiting Times",
        description:
          "Algorithmic calculation of estimated wait intervals based on current vendor queue depth, historical preparation velocity, and active kitchen load.",
      },
      {
        title: "Vendor Management & Order Dispatch",
        description:
          "Dedicated merchant portal enabling campus vendors to update order statuses (Preparing, Ready, Picked Up) with instantaneous student push alerts.",
      },
      {
        title: "Secure Clerk Authentication",
        description:
          "Enterprise-grade authentication with distinct role permissions, ensuring vendors only access their store data while students manage their personal order history.",
      },
    ],
    technicalChallenges: [
      {
        challenge: "Sub-Second State Synchronization Across Disparate Devices",
        solution:
          "Integrated Ably real-time messaging using dedicated vendor topic channels, enabling instant updates when order statuses change without relying on battery-draining HTTP polling.",
      },
      {
        challenge: "Preventing Order Concurrency Collisions & Double-Booking",
        solution:
          "Leveraged Prisma ORM transactions on PostgreSQL with serializable isolation guarantees, ensuring sequential token numbering remained strictly atomic even during peak order bursts.",
      },
      {
        challenge: "Bandwidth & Image Optimization on Campus WiFi",
        solution:
          "Configured ImageKit CDN to handle automated WebP format negotiation and on-the-fly thumbnail generation for cafeteria menu photos.",
      },
    ],
    learningOutcomes: [
      "In-depth experience architecting relational data models on PostgreSQL using Prisma ORM migrations.",
      "Practical mastery of real-time event-driven programming with Ably WebSockets.",
      "Implementing multi-tenant role-based access control with Clerk in a production React environment.",
      "Optimizing cloud media delivery pipelines using modern image CDNs.",
    ],
    githubUrl: "https://github.com/Siddharth4629/Skipline",
    liveUrl: "",
    accentColor: "#06B6D4",
  },

  "student-management-system": {
    id: "student-management-system",
    slug: "student-management-system",
    title: "Student Management System",
    subtitle: "Academic Relational Database Management System",
    category: "Academic Project",
    year: "2024",
    role: "Developer – Academic Project",
    status: "Completed Academic Project",
    tagline: "CRUD Application with Role-Based Access Control & Optimized SQL Queries",
    overview:
      "The Student Management System is an academic full-stack database application designed to manage university student records, course registrations, and academic evaluation data with strict role-based access controls and optimized relational SQL queries. Built with Node.js, Express.js, and MySQL, the application demonstrates foundational computer science principles including 3NF database normalization, ACID transaction integrity, and index-tuned query execution.",
    problemStatement:
      "Educational institutions managing student records via spreadsheets face data redundancy, lack of concurrency control, accidental overwrites, and security risks when faculty and administrators require differing levels of data access.",
    projectObjective:
      "Build a reliable, normalized relational database system that provides complete CRUD functionality for student profiles, courses, and grades, while enforcing role-based permissions and ensuring data consistency under simultaneous operations.",
    myContribution:
      "Designed the 3NF relational database schema in MySQL; wrote optimized SQL queries, stored procedures, and table indexes; engineered the Node.js/Express REST API endpoints; and implemented token-based authentication with role authorization middleware.",
    technologies: [
      "SQL",
      "MySQL",
      "DBMS",
      "Node.js",
      "Express.js",
      "Authentication",
      "Role-Based Access Control",
      "HTML5 / CSS3",
      "RESTful APIs",
    ],
    architecture: {
      type: "Classic 3-Tier Client-Server Architecture",
      diagram: [
        { step: "1. Presentation Layer", desc: "Responsive administrative portal for managing student and course rosters" },
        { step: "2. Authorization Middleware", desc: "Validates user role privileges (Admin, Faculty, Student) before routing" },
        { step: "3. Express Controller Layer", desc: "Parses request inputs, sanitizes parameters, executes business rules" },
        { step: "4. Database Access Layer", desc: "Parameterized SQL queries with connection pooling against MySQL" },
        { step: "5. MySQL Relational Engine", desc: "3NF normalized schema with foreign keys, cascading constraints, and indexes" },
      ],
    },
    keyFeatures: [
      {
        title: "Comprehensive Student CRUD Operations",
        description:
          "Create, read, update, and archive student admission records, academic profiles, contact details, and department allocations.",
      },
      {
        title: "Role-Based Access Control (RBAC)",
        description:
          "Granular permission hierarchy: Administrators possess full system privileges, Faculty manage grading and course rosters, and Students can view their personal records.",
      },
      {
        title: "Optimized SQL Queries & Indexing",
        description:
          "Relational queries optimized with indexed join conditions on enrollment numbers, keeping execution latency minimal even under expanded dataset sizes.",
      },
      {
        title: "ACID Transactional Integrity",
        description:
          "Guaranteed transactional consistency for multi-table updates (e.g. course registration and roster capacity deduction).",
      },
      {
        title: "Secure Parameterized Inputs",
        description:
          "Protection against SQL injection vulnerabilities through parameterized statement execution across all data access pathways.",
      },
    ],
    technicalChallenges: [
      {
        challenge: "Preventing Unauthorized Privilege Escalation Across Roles",
        solution:
          "Created modular Express middleware that decrypts session tokens and validates role permissions against route manifests before allowing controller execution.",
      },
      {
        challenge: "Eliminating Data Redundancy Across Courses and Enrollments",
        solution:
          "Applied Third Normal Form (3NF) relational design principles, decomposing tables into Students, Courses, Departments, and Enrollments with enforced foreign key cascades.",
      },
      {
        challenge: "Query Performance on Large Relational Joins",
        solution:
          "Analyzed query execution plans using `EXPLAIN` and established composite B-tree indexes on frequently joined columns (`student_id`, `course_code`).",
      },
    ],
    learningOutcomes: [
      "Practical implementation of 3NF database normalization and relational schema design.",
      "Deep understanding of SQL query optimization, indexes, and transaction management.",
      "Building secure RESTful endpoints with role-based access control middleware in Node.js.",
      "Hands-on enforcement of ACID guarantees in academic data software.",
    ],
    githubUrl: "https://github.com/Siddharth4629",
    liveUrl: "",
    accentColor: "#10B981",
  },
};
