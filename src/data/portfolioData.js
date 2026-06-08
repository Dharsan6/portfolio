// ================================================================
// PORTFOLIO DATA — Single source of truth
// Dharsan S — Portfolio
// ================================================================

export const personal = {
  name: "Dharsan S",
  firstName: "Dharsan",
  headline: "Software Engineer · AI/ML Engineer",
  heroLine1: "Building Intelligent",
  heroLine2: "Software Systems",
  subheadline:
    "AI/ML Engineer focused on developing scalable software, intelligent applications, and impactful digital experiences.",
  location: "Coimbatore, India",
  email: "dharsan.s2024aiml@sece.ac.in",
  phone: "6374091213",
  domain: "Dharsan S",
  github: "https://github.com/Dharsan6",
  linkedin: "https://www.linkedin.com/in/dharsan-s-55702232a",
  leetcode: "https://leetcode.com/u/me_dharsan/",
  resumeUrl: "/resume.pdf",
};

export const about = {
  bio: [
    "I am Dharsan S, a third-year B.E. Artificial Intelligence and Machine Learning student at Sri Eshwar College of Engineering.",
    "I enjoy building intelligent software systems that combine machine learning, full-stack development, and real-world problem solving.",
    "My interests include AI-powered applications, software engineering, and creating products that deliver meaningful impact.",
    "Currently pursuing opportunities to grow as a Software Engineer while working on innovative AI and full-stack projects.",
  ],
  education: {
    degree: "B.E. Artificial Intelligence and Machine Learning",
    institution: "Sri Eshwar College of Engineering",
    years: "2024 – 2028",
    cgpa: "7.56",
  },
};

export const skills = [
  {
    category: "Programming",
    icon: "terminal",
    color: "#6366f1",
    items: ["Python", "C++", "Java"],
  },
  {
    category: "Frontend",
    icon: "layout",
    color: "#8b5cf6",
    items: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "server",
    color: "#38bdf8",
    items: ["Node.js", "Express.js", "Flask"],
  },
  {
    category: "Database",
    icon: "database",
    color: "#10b981",
    items: ["MongoDB Atlas"],
  },
  {
    category: "AI / ML",
    icon: "brain",
    color: "#a855f7",
    items: ["Machine Learning", "NLP", "BERT", "TF-IDF", "spaCy"],
  },
  {
    category: "Tools",
    icon: "tools",
    color: "#f59e0b",
    items: ["GitHub", "VS Code", "Vite", "Postman"],
  },
];

export const projects = [
  {
    id: 1,
    title: "LifeTracker",
    featured: true,
    tagline: "Personal productivity, reimagined.",
    description:
      "A full-stack habit, mood, and personal finance management platform that combines productivity tracking, emotional analytics, budgeting, and data visualization into a single ecosystem.",
    longDescription:
      "LifeTracker is a comprehensive personal productivity platform built with a modern full-stack architecture. It enables users to track daily habits, log mood patterns, manage budgets, and visualize personal analytics — all in one place with JWT-based authentication and real-time dashboards.",
    features: [
      "Habit tracking with streak visualization",
      "Mood analytics & trend charts",
      "Budget & expense management",
      "JWT authentication with bcryptjs",
      "Real-time analytics dashboard (Recharts)",
      "Fully responsive mobile-first UI",
    ],
    tech: ["React", "Vite", "TailwindCSS", "Framer Motion", "Recharts", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "bcryptjs"],
    github: "https://github.com/Dharsan6/Habit_tracker",
    live: "",
    accentColor: "#6366f1",
  },
  {
    id: 2,
    title: "Job Description Matching System",
    featured: false,
    tagline: "AI-powered resume intelligence.",
    description:
      "AI-powered resume screening and job recommendation platform using semantic similarity, TF-IDF scoring, skill extraction, and explainable AI insights.",
    longDescription:
      "An NLP-powered platform that automates resume screening using BERT-based semantic similarity and TF-IDF scoring. Recruiters can upload job descriptions and instantly rank candidates with explainable matching scores.",
    features: [
      "Resume parsing & skill extraction",
      "BERT-based semantic similarity",
      "TF-IDF keyword matching",
      "Job recommendation engine",
      "Explainable AI matching results",
    ],
    tech: ["Python", "Flask", "spaCy", "BERT", "TF-IDF", "Pandas"],
    github: "https://github.com/Dharsan6/Job_description-.git",
    live: "",
    accentColor: "#8b5cf6",
  },
  {
    id: 3,
    title: "Podverse",
    featured: false,
    tagline: "Discover podcasts, your way.",
    description:
      "Full-stack podcast discovery platform featuring search, authentication, favorites management, and podcast playback with an intuitive media-centric UI.",
    longDescription:
      "Podverse lets users explore podcasts, build personal libraries, and manage favourites with a clean, media-first interface. Built with a React frontend and Node/Express API backed by MongoDB.",
    features: [
      "Podcast search & discovery",
      "Personal library management",
      "Favourites & saved playlists",
      "JWT authentication",
      "RESTful API backend",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Dharsan6",
    live: "",
    accentColor: "#38bdf8",
  },
  {
    id: 4,
    title: "Agro Connect",
    featured: false,
    tagline: "Weather intelligence for farmers.",
    description:
      "Smart weather forecasting and agricultural advisory system for farmers, predicting weather conditions and delivering real-time rainfall and wind alerts.",
    longDescription:
      "Agro Connect empowers farmers with AI-assisted weather forecasting, providing hyper-local predictions for rainfall, wind speed, and temperature along with actionable agricultural advisories.",
    features: [
      "Real-time weather forecasting",
      "Rainfall & wind alerts",
      "Agricultural advisories",
      "Responsive farmer dashboard",
      "Location-based predictions",
    ],
    tech: ["Python", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dharsan6",
    live: "",
    accentColor: "#10b981",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Salesforce Agentforce Specialist",
    issuer: "Salesforce",
    date: "December 2025",
    emoji: "⚡",
    accentColor: "#00a1e0",
    description: "Certified specialist in AI-powered agent technology and automation on the Salesforce platform.",
  },
  {
    id: 2,
    title: "NPTEL Design Thinking — A Primer",
    issuer: "NPTEL",
    date: "2026",
    score: "75%",
    emoji: "🎓",
    accentColor: "#6366f1",
    description: "Completed NPTEL's design thinking certification with 75% score.",
  },
  {
    id: 3,
    title: "Introduction to Machine Learning",
    issuer: "NPTEL",
    date: "2025",
    emoji: "🤖",
    accentColor: "#8b5cf6",
    description: "NPTEL certification in foundational machine learning concepts and algorithms.",
  },
  {
    id: 4,
    title: "AI For ALL Healthcare Ideathon",
    issuer: "NIT Tiruchirappalli",
    emoji: "🏥",
    accentColor: "#10b981",
    description: "Participated in the AI For ALL Healthcare Ideathon.",
  },
];

export const achievements = [
  {
    id: 1,
    title: "3rd Place — SiteFix Competition",
    emoji: "🥉",
    description: "Developed innovative technical solutions and secured a podium finish among competing teams.",
    accentColor: "#f59e0b",
  },
  {
    id: 2,
    title: "2nd Place — NIT Technical Paper Presentation",
    emoji: "🥈",
    description: "Presented research-oriented technical concepts and achieved second place in a national-level academic competition.",
    accentColor: "#6366f1",
  },
  {
    id: 3,
    title: "3rd Place — Design Thinking Project Expo",
    emoji: "🥉",
    description: "Recognized for innovative problem-solving and product ideation at the Design Thinking Project Expo.",
    accentColor: "#8b5cf6",
  },
  {
    id: 4,
    title: "450+ Problems Solved",
    emoji: "💻",
    description: "Consistently solved 450+ programming challenges on Skillrack platform, building strong algorithmic foundations.",
    accentColor: "#10b981",
  },
];

export const codingProfiles = [
  {
    id: 1,
    platform: "LeetCode",
    handle: "me_dharsan",
    url: "https://leetcode.com/u/me_dharsan/",
    description: "Algorithmic problem solving and competitive programming",
    emoji: "⚡",
    accentColor: "#f59e0b",
  },
  {
    id: 2,
    platform: "GitHub",
    handle: "Dharsan6",
    url: "https://github.com/Dharsan6",
    description: "Open source projects, full-stack applications, and AI/ML experiments",
    emoji: "🐙",
    accentColor: "#e2e8f0",
  },
];

export const stats = [
  { value: "450", suffix: "+", label: "Problems Solved",  sub: "Skillrack",      color: "#6366f1" },
  { value: "6",   suffix: "+", label: "Projects Built",   sub: "Full-stack & AI",color: "#8b5cf6" },
  { value: "3",   suffix: "+", label: "Certifications",   sub: "Industry certs", color: "#38bdf8" },
  { value: "5",   suffix: "+", label: "Hackathons",       sub: "AI-focused",     color: "#10b981" },
];
