import fs from 'fs';

const pdfBody = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 1200 >>
stream
BT
/F1 18 Tf
50 740 Td
(SIDDHARTH SARDA) Tj
/F1 10 Tf
0 -18 Td
(Phone: +91-8788668577 | Email: siddharthsarda742@gmail.com) Tj
0 -14 Td
(LinkedIn: linkedin.com/in/siddharth-sarda | GitHub: github.com/Siddharth4629) Tj
0 -24 Td
(PROFILE SUMMARY) Tj
0 -14 Td
(Computer Science undergraduate with strong foundations in Data Structures, Algorithms,) Tj
0 -13 Td
(OOP, DBMS, and software development. Skilled in C++, Python, JavaScript, SQL, REST APIs,) Tj
0 -13 Td
(and backend development using Node.js and Express.js. Seeking a Graduate Software Engineer role.) Tj
0 -22 Td
(EDUCATION) Tj
0 -14 Td
(Parul University, Vadodara, Gujarat - B.Tech in Computer Science Engineering (2023 - 2027)) Tj
0 -13 Td
(Shroff High School and Junior College, Maharashtra - Class XII (2023) - Percentage: 83.17%) Tj
0 -22 Td
(TECHNICAL SKILLS) Tj
0 -14 Td
(Languages: Python, JavaScript, C, C++ | AI: Generative AI, LLMs, Gemini API, Prompt Eng.) Tj
0 -13 Td
(Core: Data Structures & Algorithms, OOP, DBMS, SQL, Operating Systems) Tj
0 -13 Td
(Backend & Web: Node.js, Express.js, Flask, REST APIs, HTML, CSS, React.js) Tj
0 -13 Td
(Databases & Tools: MySQL, MongoDB, VS Code, Git, GitHub, MongoDB Compass) Tj
0 -22 Td
(PROJECTS) Tj
0 -14 Td
(GetCareerPilot - AI-Powered Career Guidance Platform (2026)) Tj
0 -13 Td
(- Developed platform using JS & Google Gemini API for personalized career recommendations) Tj
0 -13 Td
(- Built personalized roadmaps, resume skill-gap analysis, and AI mentor chatbot) Tj
0 -15 Td
(Skipline - Smart University Queue Management System (2025 - Present)) Tj
0 -13 Td
(- Developed smart queue & ordering platform using MERN stack technologies) Tj
0 -13 Td
(- Implemented digital token generation & real-time queue tracking for campus services) Tj
0 -15 Td
(Student Management System (2024)) Tj
0 -13 Td
(- Developed CRUD application with role-based access control and optimized SQL queries) Tj
0 -22 Td
(CERTIFICATIONS & ACHIEVEMENTS) Tj
0 -14 Td
(- Bharatiya Antariksh Hackathon 2025 (ISRO / Hack2Skill) & Solved 100+ DSA Problems) Tj
0 -13 Td
(- AI Fundamentals (IBM SkillsBuild) | AWS Academy Graduate - Cloud Foundations) Tj
0 -13 Td
(- Introduction to Modern AI (Cisco Academy) | Microsoft Azure Essentials (Great Learning)) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000060 00000 n 
0000000117 00000 n 
0000000233 00000 n 
0000001485 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
1555
%%EOF`;

if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}
fs.writeFileSync('public/resume.pdf', pdfBody.trim());
console.log('Successfully updated public/resume.pdf with latest resume details.');
