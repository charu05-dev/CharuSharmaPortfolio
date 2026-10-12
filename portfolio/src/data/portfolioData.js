// Source of Truth: charu_java_fullstack_resume.pdf
export const personalInfo = {
  name: "Charu Sharma",
  role: "Java Full-Stack Developer",
  tagline: "Building scalable web applications with Java, Spring Boot, React and MySQL.",
  bio: "Information Technology graduate and Java Full-Stack Developer with experience building full-stack applications using Java, Spring Boot, React, MySQL, REST APIs, JWT, Hibernate, and related technologies.",
  contact: {
    email: "charu05.dev@gmail.com",
    linkedin: "https://www.linkedin.com/in/charush05",
    linkedinDisplay: "charush05",
    github: "https://github.com/charu05-dev",
    githubDisplay: "charu05-dev",
    location: "India"
  }
};

export const techStack = [
  // LANGUAGE
  { name: "Java", category: "LANGUAGE", role: "Core programming language & OOP", color: "sunburst", rotation: "-3deg", logo: "java" },
  { name: "JavaScript", category: "LANGUAGE", role: "Dynamic scripting & ES6+", color: "sunburst", rotation: "4deg", logo: "javascript" },

  // FRONTEND
  { name: "React", category: "FRONTEND", role: "Component-driven frontend UI", color: "electric", rotation: "-2deg", logo: "react" },
  { name: "Tailwind CSS", category: "FRONTEND", role: "Utility-first modern styling", color: "mint", rotation: "3deg", logo: "tailwind" },
  { name: "HTML5", category: "FRONTEND", role: "Semantic web structure", color: "ember", rotation: "-4deg", logo: "html5" },
  { name: "CSS3", category: "FRONTEND", role: "Responsive styling & layout", color: "lavender", rotation: "2deg", logo: "css3" },
  { name: "JavaScript (ES6)", category: "FRONTEND", role: "Modern asynchronous JavaScript", color: "sunburst", rotation: "-3deg", logo: "javascript" },

  // BACKEND
  { name: "Spring Boot", category: "BACKEND", role: "Enterprise microservices & REST APIs", color: "mint", rotation: "-4deg", logo: "spring" },
  { name: "Spring", category: "BACKEND", role: "Dependency Injection & Core Framework", color: "mint", rotation: "2deg", logo: "spring" },
  { name: "Hibernate", category: "BACKEND", role: "ORM & relational persistence", color: "lavender", rotation: "-2deg", logo: "hibernate" },
  { name: "REST APIs", category: "BACKEND", role: "Stateless client-server communication", color: "electric", rotation: "4deg", logo: "rest" },
  { name: "JWT", category: "BACKEND", role: "Token-based auth & endpoint security", color: "ember", rotation: "-3deg", logo: "jwt" },
  { name: "JDBC", category: "BACKEND", role: "Low-level database connectivity", color: "concrete", rotation: "3deg", logo: "database" },
  { name: "JSP / Servlets", category: "BACKEND", role: "Java enterprise web components", color: "mist", rotation: "-2deg", logo: "server" },

  // DATABASE
  { name: "MySQL", category: "DATABASE", role: "Relational database & structured CRUD", color: "electric", rotation: "3deg", logo: "mysql" },

  // CORE
  { name: "Object-Oriented Programming", category: "CORE", role: "Encapsulation, Inheritance, Polymorphism", color: "violet", rotation: "-2deg", logo: "code" },
  { name: "Data Structures & Algorithms", category: "CORE", role: "Efficient problem solving & complexity analysis", color: "sunburst", rotation: "2deg", logo: "layers" },
  { name: "MVC Architecture", category: "CORE", role: "Model-View-Controller architectural separation", color: "mint", rotation: "-3deg", logo: "layout" }
];

export const heroStickers = [
  { name: "Java", role: "Core programming language", color: "sunburst", tilt: "-6deg", top: "12%", left: "6%", size: "lg", logo: "java" },
  { name: "Spring Boot", role: "Enterprise backend framework", color: "mint", tilt: "5deg", top: "18%", right: "8%", size: "lg", logo: "spring" },
  { name: "React", role: "Interactive frontend interface", color: "electric", tilt: "-4deg", bottom: "24%", left: "8%", size: "lg", logo: "react" },
  { name: "MySQL", role: "Relational database operations", color: "lavender", tilt: "7deg", bottom: "16%", right: "12%", size: "md", logo: "mysql" },
  { name: "JWT Auth", role: "Token-based security", color: "ember", tilt: "-8deg", top: "46%", left: "2%", size: "sm", logo: "jwt" },
  { name: "REST API", role: "Seamless client-server integration", color: "violet", tilt: "6deg", top: "42%", right: "4%", size: "sm", logo: "rest" },
  { name: "GitHub", role: "Version control & collaboration", color: "carbon", textLight: true, tilt: "-3deg", bottom: "34%", right: "6%", size: "sm", logo: "github" }
];

export const projects = [
  {
    id: "fashionselect",
    number: "01",
    title: "FASHIONSELECT",
    subtitle: "FASHION E-COMMERCE PLATFORM",
    date: "Jan 2026",
    badge: "FULL STACK",
    bgAccent: "sunburst",
    liveUrl: "https://fashionstore-4bch.onrender.com/home",
    githubUrl: "https://github.com/charu05-dev/FashionStore",
    screenshot: "/images/projects/fashionselect-main.png",
    videoUrl: null,
    description: "A full-stack fashion e-commerce application built with Java, Spring Boot, React, and SQL, with product browsing and REST API integration.",
    details: [
      "Developed a fashion e-commerce application using Spring Boot and React, with product browsing and backend REST API integration.",
      "Implemented JWT-based authentication and authorization to secure user access and protect application endpoints.",
      "Designed SQL-backed CRUD operations for users, products, orders, and related application data."
    ],
    technologies: ["Java", "Spring Boot", "React", "SQL", "REST API", "JWT"],
    architecture: {
      frontend: "React-based user interface for browsing the fashion catalog and interacting with product pages.",
      backend: "Spring Boot backend exposing REST endpoints for application functionality.",
      security: "JWT-based authentication and authorization for protected application resources.",
      database: "SQL relational data management for users, products, orders, and related records."
    },
    mockupFeatures: [
      { label: "CATALOG", value: "Product Browsing" },
      { label: "AUTH", value: "JWT Authentication" },
      { label: "DATABASE", value: "SQL CRUD Operations" }
    ]
  },
  {
    id: "codepath",
    number: "02",
    title: "CODEPATH",
    subtitle: "DSA LEARNING & ROADMAP PLATFORM",
    date: "In Development",
    badge: "IN DEVELOPMENT",
    bgAccent: "mint",
    githubUrl: "https://github.com/charu05-dev/codepath",
    screenshot: "/images/projects/codepath-main.png",
    videoUrl: null,
    description: "A DSA learning platform designed to organize coding practice with topic-wise roadmaps, progress analytics, and mistake tracking.",
    details: [
      "Building an interactive React and Vite frontend for a structured DSA learning experience, including dashboard, roadmap, practice, analytics, and mistake-tracking screens.",
      "Organizing coding practice and topic progress so learners can review their learning activity and identify areas for improvement.",
      "Planning a Java and Spring Boot backend, MySQL persistence, REST APIs, and LLM API integration for personalized roadmap generation."
    ],
    technologies: ["React", "JavaScript", "Vite", "CSS", "LocalStorage"],
    plannedTechnologies: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "MySQL", "REST APIs", "LLM API"],
    architecture: {
      frontend: "Implemented frontend: React + Vite screens for the dashboard, roadmap, practice, analytics, mistake tracking, and settings.",
      backend: "Planned: Java and Spring Boot REST APIs for application services and business logic.",
      security: "Planned: Spring Security for authentication and access control when backend integration is implemented.",
      database: "Planned: MySQL with Spring Data JPA and Hibernate for persistent user and learning-progress data."
    },
    mockupFeatures: [
      { label: "LEARN", value: "Topic-Wise Roadmaps" },
      { label: "PRACTICE", value: "DSA Problem Tracking" },
      { label: "PROGRESS", value: "Analytics & Mistakes" }
    ]
  }
];

export const experience = [
  {
    company: "TAP Academy",
    role: "Full Stack Developer Intern",
    period: "July 2026 – January 2027",
    color: "lavender",
    responsibilities: [
      "Developed and deployed full-stack applications using Java, Spring Boot, Hibernate, MySQL, React, and REST APIs, following clean and scalable architecture.",
      "Built backend modules with Spring Boot, implemented secure authentication, and optimized API performance.",
      "Designed responsive React components, improved page load speed, and enhanced overall user experience."
    ],
    skillsLearned: ["Java", "Spring Boot", "Hibernate", "MySQL", "React", "REST APIs", "Clean Architecture"]
  }
];

export const achievements = [
  {
    title: "3RD PLACE",
    event: "Technical Project Presentation 2025",
    description: "Secured 3rd place in Technical Project Presentation 2025 by demonstrating strong technical understanding, project implementation, and presentation skills.",
    color: "sunburst"
  }
];

export const education = [
  {
    institution: "Siddhant College of Engineering",
    degree: "B.E. in Information Technology",
    period: "2022 – 2026",
    score: "CGPA: 8.9",
    location: "Maharashtra, India",
    color: "sky"
  },
  {
    institution: "CRPF Public School",
    degree: "Senior Secondary Education",
    period: "2020 – 2022",
    score: "Percentage: 80%",
    location: "New Delhi, India",
    color: "mist"
  }
];
