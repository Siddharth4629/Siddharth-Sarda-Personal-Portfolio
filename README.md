# Siddharth Sarda – Premium Personal Developer Portfolio

A responsive personal developer portfolio website for **Siddharth Sarda**, Computer Science undergraduate (B.Tech 2023–2027), built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Highlights & Key Features

- **Theme & Aesthetic**: Premium dark-mode design (`#09090B` background, `#18181B` card containers, `#8B5CF6` primary violet, and `#06B6D4` secondary cyan accents).
- **Hero Section**: Dynamic headline, customizable availability badge, animated entrance with Framer Motion, quick resume download & online preview, and an interactive developer config visual.
- **About Me**: Verbatim academic background narrative, CS principles, and structured areas of interest.
- **Technical Skills**: Organized into clean visual categories (Languages, Frontend, Backend, Databases, Tools, and Core CS Concepts) with contextual badges—**no fake skill percentages**.
- **Featured Projects**:
  - **SkipLine**: Smart Queue and Ordering Platform (Final Year Project).
  - **CollabMind**: AI-Assisted Project Management powered by Google Gemini API & Socket.IO.
  - **GetCareerPilot**: AI Career Guidance & Resume Skill-Gap Engine.
  - **GramShiksha AI**: Offline-first AI Study Partner for rural students, with explicit separation of implemented vs. roadmap features.
  - Interactive **Project Details Modal** with architecture highlights for deep technical dives.
- **Education Timeline**: Structured timeline featuring B.Tech CSE (2023–2027), Higher Secondary (83.17%), and Secondary School (83.67%).
- **Honest Achievements & Milestones**: Categorized tabs for Hackathons (including **Technoverse Hackathon 2026**), Technical Training, Certifications, and active Internship seeking status.
- **Contact Section**: Complete validation, EmailJS integration ready, with graceful fallback, realistic feedback, celebration confetti (`canvas-confetti`), and pre-filled email client (`mailto:`) button.
- **ATS Resume Preview & Download**: Interactive modal for on-screen CV preview plus direct download of `public/resume.pdf`.

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg             # Custom monogram SVG favicon
│   └── resume.pdf              # Downloadable resume document
├── src/
│   ├── assets/                 # Static visual assets
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glassmorphic navigation with active scroll tracking
│   │   ├── Hero.jsx            # Hero section with animated developer card & CTAs
│   │   ├── About.jsx           # Narrative, core values & areas of interest
│   │   ├── Skills.jsx          # Visual categorized skill matrices with filter tabs
│   │   ├── Projects.jsx        # Project cards with tag filters & interactive previews
│   │   ├── ProjectMockupVisual.jsx # Domain-specific UI previews for projects
│   │   ├── ProjectModal.jsx    # In-depth architectural breakdown dialog
│   │   ├── Education.jsx       # Academic timeline with credentials
│   │   ├── Achievements.jsx    # Hackathons, technical training & internships
│   │   ├── Contact.jsx         # Form with validation, EmailJS & 1-click fallback
│   │   ├── Footer.jsx          # Brand info, social links & back-to-top button
│   │   └── ResumeModal.jsx     # On-screen CV viewer & printer
│   ├── data/
│   │   └── portfolioData.js    # Single centralized config for all personal details
│   ├── utils/
│   │   └── IconHelper.jsx      # High-performance tree-shaken Lucide icons
│   ├── App.jsx                 # Main layout & modal controller
│   ├── index.css               # Tailwind directives & custom glassmorphism styles
│   └── main.jsx                # Vite entry point
├── vercel.json                 # Vercel deployment configuration
├── tailwind.config.js          # Extended theme colors & animations
└── package.json
```

---

## ⚙️ Centralized Configuration (`src/data/portfolioData.js`)

All personal details, URLs, social links, and credentials can be updated in **one single file**:

- **Personal Info**: Update name, headline, bio, or availability badge text.
- **Social Links**: Replace placeholder URLs for GitHub and LinkedIn.
- **Resume**: Update filename or replace `public/resume.pdf` with your updated PDF.
- **Projects**: Edit descriptions, add live links, or append new repositories.
- **EmailJS Configuration**:
  ```js
  export const emailjsConfig = {
    serviceId: "your_service_id",
    templateId: "your_template_id",
    publicKey: "your_public_key", // Safe client-side key
  };
  ```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** v18+ (tested on Node v22)
- **npm** v9+

### 2. Installation
```bash
npm install
```

### 3. Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
```
Generates an optimized, tree-shaken static bundle in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

This portfolio is configured for zero-config deployment to [Vercel](https://vercel.com):

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of Siddharth Sarda portfolio"
   git remote add origin https://github.com/Siddharth4629/Pesonal_Portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **"Deploy"**. Your portfolio will be live with free global CDN and HTTPS!
