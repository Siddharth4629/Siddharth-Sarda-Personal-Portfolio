# Siddharth Sarda — Software Developer Portfolio

<p align="center">
  <img src="public/favicon.svg" width="68" height="68" alt="Siddharth Sarda Logo" />
</p>

<p align="center">
  <strong>Computer Science Undergraduate • B.Tech CSE (2023–2027) • Parul University</strong><br />
  <em>Software Developer | Full Stack Developer | AI Application Developer</em>
</p>

<p align="center">
  <a href="https://pesonal-portfolio-drab.vercel.app/"><img src="https://img.shields.io/badge/Live_Site-pesonal--portfolio--drab.vercel.app-8B5CF6?style=flat-square&logo=vercel" alt="Live Website" /></a>
  <a href="https://github.com/Siddharth4629"><img src="https://img.shields.io/badge/GitHub-Siddharth4629-18181B?style=flat-square&logo=github" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/siddharth-sarda-5090a1358/"><img src="https://img.shields.io/badge/LinkedIn-siddharth--sarda-06B6D4?style=flat-square&logo=linkedin" alt="LinkedIn" /></a>
  <a href="mailto:siddharthsarda742@gmail.com"><img src="https://img.shields.io/badge/Email-siddharthsarda742%40gmail.com-10B981?style=flat-square&logo=gmail" alt="Email" /></a>
  <a href="tel:+918788668577"><img src="https://img.shields.io/badge/Phone-%2B91--8788668577-F59E0B?style=flat-square" alt="Phone" /></a>
</p>

---

## 🌟 Executive Overview & Key Features

A modern, recruiter-focused personal portfolio engineered for **Siddharth Sarda**, Computer Science undergraduate (2023–2027) at Parul University. Built with React, Vite, Tailwind CSS, and Framer Motion, reflecting the latest November 2026 resume.

- **Design Philosophy**: High-end SaaS-inspired dark theme (`#09090B` background, `#111116` secondary background, `#18181B` card containers, `#8B5CF6` primary violet, and `#06B6D4` secondary cyan).
- **Typography Stack**:
  - **Space Grotesk**: Headings and titles for a distinctive technical aesthetic.
  - **Inter**: Crisp, readable body typography.
  - **JetBrains Mono**: Selected technical labels, tags, and metadata.
- **Dedicated Project Case Studies (`/projects/:slug`)**:
  - Full client-side SPA routing powered by `react-router-dom` with automatic scroll reset (`<ScrollToTop />`).
  - Comprehensive architectural breakdown for every primary project across 13 engineering sections (Problem Statement, Objective, Contributions, Architecture Flows, Tech Stack, Key Features, Challenges & Solutions, Visual Mockups, and Key Learnings).
- **Primary Featured Projects**:
  1. **GetCareerPilot (Flagship Project)**: AI-Powered Career Discovery Platform utilizing **Google Gemini 2.5 Flash** across 12 industry sectors, RIASEC aptitude assessment, career exploration, college discovery, entrance exam & scholarship guidance, personalized weekly roadmaps, resume skill-gap analysis, mock interview evaluation with structured JSON responses, Node.js/Express gateway, and Supabase PostgreSQL with LocalStorage offline fallback.
  2. **SkipLine (Full Stack Development)**: Smart University Queue Management System engineered with **React.js, Node.js, Express.js, PostgreSQL (Neon DB), Prisma ORM, Clerk authentication, Ably real-time WebSockets**, and ImageKit cloud storage for digital tokens and live queue throughput.
  3. **Student Management System (Academic Project)**: Academic CRUD database application with 3NF relational normalization in MySQL, role-based access control (Admin, Faculty, Student), and index-tuned SQL queries.
  - **Additional Exploratory Projects**: Dedicated expandable drawer featuring **CollabMind** (React 18, Vite, Socket.IO, Gemini API, MongoDB).
- **Live Active EmailJS Gateway**:
  - Pre-configured with active Service ID (`service_9xluspg`), Template ID (`template_q23codh`), and Public Key (`9chjyW5jdRDHGcviX`).
  - Form validation, dynamic dispatch state, celebration confetti (`canvas-confetti`), and direct one-click `mailto:` fallback.
- **ATS Resume Download & In-Browser Viewer**:
  - Authentic 55.6 KB compiled LaTeX PDF (`public/resume.pdf` & `public/Siddharth_Sarda_Resume.pdf`).
  - Dual-mode interactive modal (`ResumeModal.jsx`) toggling between responsive card view and embedded PDF document.
- **Verified Credentials**:
  - 4 primary highlighted certifications (IBM SkillsBuild AI Fundamentals, AWS Academy Cloud Foundations, Cisco Modern AI, Microsoft Azure Essentials).
  - In-app **Certificate Document Viewer modal** (`CertificateModal.jsx`) inspecting verified credentials.
- **SEO & Google Discoverability**:
  - Semantic HTML5, OpenGraph tags, `sitemap.xml`, `robots.txt`, and Schema.org `Person` JSON-LD structured data.

---

## 🛠️ Technical Skills Matrix

| Category | Technologies & Tools |
| :--- | :--- |
| **Programming Languages** | C++, Java, Python, JavaScript |
| **Core Computer Science** | Data Structures and Algorithms (100+ Solved), Object-Oriented Programming (OOP), DBMS, SQL, Operating Systems |
| **Frontend** | HTML5, CSS3, React.js, Tailwind CSS |
| **Backend** | Node.js, Express.js, RESTful APIs |
| **Databases** | PostgreSQL, MySQL, MongoDB |
| **AI & Generative AI** | Google Gemini API (Gemini 2.5 Flash), LLM Integration, Prompt Engineering, Structured JSON Outputs |
| **Platforms & Integrations** | Supabase, Neon DB, Prisma ORM, Clerk, Ably WebSockets, ImageKit CDN |
| **Development Tools** | VS Code, Git, GitHub, Postman, MongoDB Compass |

---

## 🚀 Dedicated Project Case Studies

| Project | Category | Technology Highlights | Route Link |
| :--- | :--- | :--- | :--- |
| **GetCareerPilot** | AI Application Development | JavaScript, Gemini 2.5 Flash, Node.js, Express.js, Supabase, LocalStorage | [`/projects/getcareerpilot`](https://pesonal-portfolio-drab.vercel.app/projects/getcareerpilot) |
| **SkipLine** | Full Stack Development | React.js, Node.js, Express.js, PostgreSQL (Neon DB), Prisma, Clerk, Ably, ImageKit | [`/projects/skipline`](https://pesonal-portfolio-drab.vercel.app/projects/skipline) |
| **Student Management System** | Academic Project | Node.js, Express.js, MySQL, SQL, Role-Based Access Control, 3NF Normalization | [`/projects/student-management-system`](https://pesonal-portfolio-drab.vercel.app/projects/student-management-system) |

---

## 📁 Project Directory Structure

```text
portfolio/
├── public/
│   ├── certificates/           # Verified certificate assets (PNG / JPG / PDF)
│   ├── favicon.svg             # Monogram SVG brand icon
│   ├── resume.pdf              # Verified downloadable resume PDF (55.6 KB)
│   ├── Siddharth_Sarda_Resume.pdf # Mirror downloadable resume
│   ├── robots.txt              # Search crawler instructions
│   └── sitemap.xml             # Search engine index with case study URLs
├── src/
│   ├── components/
│   │   ├── About.jsx           # Engineering profile, degree info & core focus areas
│   │   ├── Achievements.jsx    # Key achievements & highlighted certifications
│   │   ├── CertificateModal.jsx# Lightbox viewer for certificates
│   │   ├── Contact.jsx         # EmailJS dispatch form with validation & mailto fallback
│   │   ├── Education.jsx       # Academic timeline (Parul University & Shroff High School)
│   │   ├── Footer.jsx          # Brand info, social links & back-to-top button
│   │   ├── Hero.jsx            # Editorial 2-column hero with abstract developer visual
│   │   ├── Navbar.jsx          # Sticky navigation with hash scroll & route return
│   │   ├── ProjectMockupVisual.jsx # Interactive UI previews for projects
│   │   ├── ProjectModal.jsx    # Quick project overview dialog
│   │   ├── Projects.jsx        # Featured 3-project showcase & exploratory drawer
│   │   ├── ResumeModal.jsx     # Dual-mode on-screen / PDF viewer
│   │   ├── ScrollToTop.jsx     # Route change scroll reset handler
│   │   └── Skills.jsx          # Categorized icon matrices with filter tabs
│   ├── data/
│   │   ├── portfolioData.js    # Centralized personal info, skills & achievements
│   │   └── projectsCaseStudies.js # Detailed architectural data for case study pages
│   ├── pages/
│   │   ├── Home.jsx            # Main single-page portfolio layout
│   │   └── ProjectDetail.jsx   # Dedicated 13-section project case study page
│   ├── utils/
│   │   └── IconHelper.jsx      # Tree-shaken Lucide icon helper
│   ├── App.jsx                 # Client-side router & modal provider
│   ├── index.css               # Tailwind directives & Space Grotesk heading rules
│   └── main.jsx                # Application root entry point
├── .env.example                # EmailJS environment variable template
├── vercel.json                 # Vercel SPA rewrites & security headers
├── tailwind.config.js          # Color palette & font family extensions
└── package.json
```

---

## ⚙️ Configuration & Environment Variables

All personal details, URLs, social handles, and credentials are consolidated in **`src/data/portfolioData.js`** and **`.env`**:

```javascript
// src/data/portfolioData.js
export const personalInfo = {
  name: "Siddharth Sarda",
  title: "Computer Science Undergraduate | Aspiring Software Engineer",
  contactInfo: {
    phone: "+91-8788668577",
    email: "siddharthsarda742@gmail.com",
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
  },
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_9xluspg",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_q23codh",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "9chjyW5jdRDHGcviX",
};
```

---

## 💻 Local Development & Build

### 1. Prerequisites
- **Node.js** v18+ (tested on Node v22)
- **npm** v9+

### 2. Clone & Install
```bash
git clone https://github.com/Siddharth4629/Siddharth-Sarda-Personal-Portfolio.git
cd Siddharth-Sarda-Personal-Portfolio
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

### 4. Build for Production
```bash
npm run build
```
Generates an optimized, tree-shaken static bundle in `dist/`.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment to Vercel

Configured for zero-config SPA deployment on [Vercel](https://vercel.com):

1. Connect your repository (`Siddharth-Sarda-Personal-Portfolio`) to Vercel.
2. Framework Preset will be automatically detected as **Vite**.
3. Direct refresh of deep case study links (`/projects/getcareerpilot`, `/projects/skipline`, etc.) is fully handled via SPA rewrites in `vercel.json`:
   ```json
   {
     "framework": "vite",
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```
4. Click **Deploy**. Your site will be live with free global CDN and HTTPS.

---

## 📄 License & Attribution

Designed and engineered by **Siddharth Sarda** © 2026. All rights reserved.
