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
  { label: "Live Projects", value: "5+" },
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

// Flattened, de-duplicated list for the tech marquee strip
export const techStack = Array.from(
  new Set(Object.values(skills).flatMap((category) => category.items))
);

// Inspired by the "developer lifecycle" framing: what actually happens end-to-end on a project
export const buildPhases = [
  {
    phase: "Phase 1",
    title: "Design & Interface",
    icon: "layout",
    tools: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
    focus: "Responsive UI, interactive elements, client-side state.",
  },
  {
    phase: "Phase 2",
    title: "Logic & Data",
    icon: "server",
    tools: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis"],
    focus: "Secure REST APIs, JWT authentication, MVC architecture.",
  },
  {
    phase: "Phase 3",
    title: "AI Enhancement",
    icon: "sparkles",
    tools: ["Gemini API", "AI Agents", "Python"],
    focus: "Intelligent opportunity matching, conversational chatbots, automated data analysis.",
  },
  {
    phase: "Phase 4",
    title: "Automation & Deployment",
    icon: "package",
    tools: ["Docker", "n8n", "GitHub Actions", "CI/CD"],
    focus: "Containerization, workflow automation, seamless delivery.",
  },
];

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
    flow: [
      { label: "Raw Plant Data", sub: "Google Drive / Excel", icon: "fileSpreadsheet" },
      { label: "n8n Automation", sub: "Workflow + webhooks", icon: "workflow" },
      { label: "MERN Application", sub: "Digitized plant system", icon: "layers" },
      { label: "Docker", sub: "Containerized delivery", icon: "container" },
    ],
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
    flow: [
      { label: "Secure Gateway", sub: "JWT + role-based auth", icon: "shield" },
      { label: "Controller", sub: "REST APIs · MVC", icon: "gitBranch" },
      { label: "MongoDB", sub: "App + text data", icon: "database" },
      { label: "Cloudinary", sub: "Media via Multer", icon: "image" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "ResearchMind",
    description: "AI-powered platform to analyze research papers, identify research gaps, limitations, and areas for improvement — with a structured, responsive interface for research analysis.",
    problem: "Academic paper analysis & efficiency",
    aiIntegration: "Analytical AI identifying research gaps via an AI-driven insights engine",
    technologies: ["React.js", "Node.js", "MongoDB", "AI", "REST APIs", "Tailwind CSS"],
    date: "Aug 2026",
    liveUrl: "https://research-gap-finder-eight.vercel.app/",
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
    problem: "Centralizing government jobs & schemes",
    aiIntegration: "Matching engine powered by the Gemini API for filtering & deadline tracking",
    technologies: ["MERN", "Docker", "Tailwind CSS", "Gemini API", "REST APIs"],
    date: "Aug 2026",
    liveUrl: "https://government-jobs-one.vercel.app/",
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
    problem: "Automated, conversational resume building",
    aiIntegration: "Conversational chatbot with real-time React preview & PDF generation",
    technologies: ["React.js", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
    date: "Apr 2026",
    liveUrl: "https://resume-builder-frontend-indol-nu.vercel.app/",
    repoUrl: "",
    features: [
      "Conversational chatbot interface for collecting user information",
      "Secure JWT authentication and MongoDB CRUD operations",
      "Real-time resume preview with reusable React components",
      "PDF generation for downloading professional resumes",
    ],
  },
  {
    id: 4,
    title: "Certificate Generator",
    description: "Full-stack tool for generating and distributing custom certificates on demand, with hosted media delivery for instant download and sharing.",
    problem: "Automated certificate creation & distribution",
    highlight: "Dynamic PDF certificate generation with Cloudinary-hosted assets",
    technologies: ["MERN", "Cloudinary", "REST APIs", "Tailwind CSS"],
    date: "2026",
    liveUrl: "https://certificate-generator-theta-two.vercel.app/",
    repoUrl: "",
    features: [
      "Generates custom certificates from user-submitted details",
      "Cloudinary-hosted media for fast, reliable delivery",
      "Downloadable, shareable output built with reusable REST APIs",
    ],
  },
  {
    id: 5,
    title: "Live Chat Application",
    description: "Real-time messaging application supporting instant, bidirectional communication between users over WebSockets.",
    problem: "Real-time messaging between users",
    highlight: "WebSocket-based real-time communication with Socket.IO",
    technologies: ["MERN", "Socket.IO", "REST APIs", "Tailwind CSS"],
    date: "2026",
    liveUrl: "https://live-chat-application-two.vercel.app/",
    repoUrl: "",
    features: [
      "Real-time, bidirectional messaging powered by Socket.IO",
      "Persistent chat history backed by MongoDB",
      "Responsive chat UI built with reusable React components",
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

// Inspired by the resume's core-CS-fundamentals framing
export const coreProficiencies = [
  "Data Structures & Algorithms (DSA)",
  "Object-Oriented Programming (OOPS)",
  "Database Management Systems (DBMS)",
];

export const terminalStatus = [
  { key: "System Status", value: "End-to-End Product Builder" },
  { key: "Core Capabilities", value: "MERN Stack | AI Agents | DevOps Automation" },
  { key: "Location", value: personalInfo.location },
];
