export const personalInfo = {
  name: "Karan Kumar",
  title: "Full Stack Developer",
  tagline: "MERN Stack · AI-Powered Applications",
  location: "Ghaziabad, U.P, India",
  email: "ambeydeep8052@gmail.com",
  phone: "+91-7985387237",
  resumeUrl: "/Karan_Kumar_Resume.pdf",
  linkedinUrl: "https://linkedin.com/in/karan-kumar-17736632a/",
  githubUrl: "https://github.com/Ambey8052",
  instagramUrl: "https://instagram.com/u/8jsxNU1VjO/",
};

export const stats = [
  { label: "Live Projects", value: "3+" },
  { label: "Internships", value: "2" },
  { label: "Certifications", value: "8+" },
  { label: "CGPA", value: "7.4" },
];

export const focusAreas = [
  "AI Automation",
  "DSA",
  "Web Development",
  "AI Agents",
  "DBMS",
  "OOPS Concepts",
  "Android Development",
  "CI/CD",
];

export const skills = {
  languages: {
    label: "Languages",
    items: ["Java", "JavaScript (ES6+)", "TypeScript", "Python", "C"],
  },
  frontend: {
    label: "Frontend",
    items: ["React.js", "Next.js", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  backend: {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Socket.IO", "Cloudinary", "Multer"],
  },
  databases: {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  tools: {
    label: "Developer Tools",
    items: ["Docker", "Git", "GitHub", "GitHub Actions", "VS Code", "n8n", "Android Studio", "Postman"],
  },
};

export const experience = [
  {
    id: 1,
    company: "Salasar Techno Engineering",
    role: "Full Stack Development Intern",
    location: "Pilkhuwa, Ghaziabad",
    duration: "July 2026 – Present",
    current: true,
    points: [
      "Contributing to a plant management system using the MERN stack to digitize operational workflows and streamline plant data management.",
      "Automating data workflows using n8n and integrating Google Drive/Excel data sources to minimize manual data entry and improve operational efficiency.",
      "Containerizing application components with Docker to simplify development, deployment, and environment management.",
    ],
    tags: ["MERN", "n8n", "Docker", "Automation"],
  },
  {
    id: 2,
    company: "Mira Tech Vision Pvt Ltd",
    role: "Full Stack Development Intern",
    location: "Noida, India",
    duration: "May 2026 – Jun 2026",
    current: false,
    points: [
      "Developed secure MERN applications following MVC architecture with JWT authentication and role-based authorization.",
      "Built RESTful APIs and integrated MongoDB, Cloudinary, and Multer for efficient data and media management.",
      "Implemented secure authentication workflows and optimized backend CRUD operations for scalable application development.",
    ],
    tags: ["MERN", "JWT", "MVC", "REST APIs"],
  },
];

export const projects = [
  {
    id: 1,
    title: "ResearchMind",
    description: "AI-powered platform to analyze research papers, identify research gaps, limitations, and areas for improvement — with a structured, responsive interface for research analysis.",
    technologies: ["React.js", "Node.js", "MongoDB", "AI", "REST APIs", "Tailwind CSS"],
    date: "Aug 2026",
    liveUrl: "",
    repoUrl: "",
    features: [
      "Analyzes research papers to surface research gaps, limitations, and efficiency insights",
      "Integrates AI-driven insights and recommendations into the analysis workflow",
      "Responsive Tailwind CSS interface built for structured, readable research output",
    ],
  },
  {
    id: 2,
    title: "SarkariSetu",
    description: "Full-stack platform for discovering and exploring Indian government jobs and schemes in one centralized place, with AI-powered opportunity matching.",
    technologies: ["MERN", "Docker", "Tailwind CSS", "Gemini API", "REST APIs"],
    date: "Aug 2026",
    liveUrl: "",
    repoUrl: "",
    features: [
      "Centralizes Indian government jobs and schemes for easy discovery",
      "AI-powered opportunity matching using the Gemini API",
      "Search, filtering, eligibility details, and deadline tracking",
      "Containerized with Docker for consistent deployment",
    ],
  },
  {
    id: 3,
    title: "Resume-BOT",
    description: "AI-powered resume builder with a conversational chatbot interface that collects user information and generates a downloadable, professional resume in real time.",
    technologies: ["React.js", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
    date: "Apr 2026",
    liveUrl: "",
    repoUrl: "",
    features: [
      "Conversational chatbot interface for collecting user information",
      "Secure JWT authentication and MongoDB CRUD operations",
      "Real-time resume preview with reusable React components",
      "PDF generation for downloading professional resumes",
    ],
  },
];

export const education = {
  degree: "B.Tech — Information Technology",
  institution: "Ajay Kumar Garg Engineering College",
  location: "Ghaziabad, U.P",
  duration: "09 2023 – 09 2027",
  cgpa: "7.4",
};

export const certifications = [
  { name: "Frontend Battle 2.0", issuer: "IIT Bhubaneswar", type: "Hackathon" },
  { name: "EY Hackathon", issuer: "EY", type: "Hackathon" },
  { name: "CodeClash 2.0", issuer: "Hackathon", type: "Hackathon" },
  { name: "Hackathon", issuer: "Jamia Millia Islamia", type: "Hackathon" },
  { name: "Java", issuer: "Infosys Springboard", type: "Certification" },
  { name: "TypeScript", issuer: "Coursera", type: "Certification" },
  { name: "GenAI Basics", issuer: "Coursera", type: "Certification" },
  { name: "Technology Job Simulation", issuer: "Deloitte", type: "Certification" },
];
