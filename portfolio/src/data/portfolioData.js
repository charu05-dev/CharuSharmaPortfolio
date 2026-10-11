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
    liveUrl: "https://fashionstore-4bch.onrender.com",
    number: "01",
    title: "FASHIONSELECT",
    subtitle: "FASHION E-COMMERCE PLATFORM",
    date: "Jan 2026",
    badge: "FULL STACK",
    bgAccent: "sunburst",
    description: "A full-stack fashion e-commerce application built using Spring Boot and React, enabling users to browse products and interact with the application through RESTful APIs.",
    details: [
      "Developed a full-stack fashion e-commerce application using Spring Boot and React, enabling users to browse products and interact with the application through RESTful APIs.",
      "Implemented JWT-based authentication and authorization to secure user access and protect application endpoints.",
      "Designed and integrated a SQL database with backend services to manage users, products, orders, and application data using structured CRUD operations."
    ],
    technologies: ["Java", "Spring Boot", "React", "SQL", "REST API", "JWT"],
    architecture: {
      frontend: "React SPA with componentized catalog, product filter pills, shopping cart state, and protected checkout routes.",
      backend: "Spring Boot RESTful micro-architecture with MVC controllers, service business logic, and security filter chains.",
      security: "JWT stateless authentication tokens signed and validated per request.",
      database: "MySQL relational schema tracking users, roles, apparel catalogs, inventories, and placed orders."
    },
    mockupFeatures: [
      { label: "CATALOG", value: "Curated Apparel Grid" },
      { label: "AUTH", value: "JWT Bearer Token Guard" },
      { label: "DATABASE", value: "Relational Order Management" }
    ]
  },
  {
    id: "foodserve",
    number: "02",
    title: "FOODSERVE",
    subtitle: "ONLINE FOOD DELIVERY APPLICATION",
    date: "May 2026",
    badge: "FULL STACK",
    bgAccent: "mint",
    description: "A full-stack food service application built using Spring Boot and React, implementing RESTful APIs for seamless communication between frontend and backend.",
    details: [
      "Built a full-stack food service application using Spring Boot and React, implementing RESTful APIs for seamless communication between frontend and backend.",
      "Implemented JWT authentication and authorization to provide secure user login and controlled access to application resources.",
      "Integrated SQL database operations with backend business logic to manage users, food items, orders, and related application data efficiently."
    ],
    technologies: ["Java", "Spring Boot", "React", "SQL", "REST API", "JWT"],
    architecture: {
      pipeline: "FOOD → ORDER → API → DATABASE",
      frontend: "React ordering interface with live cart calculations, category tabs, and order confirmation states.",
      backend: "Spring Boot controllers orchestrating restaurant menus, cart validation, and transactional order dispatch.",
      security: "JWT authentication with customer and admin access controls.",
      database: "SQL database executing structured CRUD operations for dishes, active orders, customer profiles, and timestamps."
    },
    mockupFeatures: [
      { label: "FLOW", value: "Menu → Order → Cart → Dispatch" },
      { label: "SECURITY", value: "Role-Based JWT Authorization" },
      { label: "DATA", value: "Real-time SQL Order Tracking" }
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
