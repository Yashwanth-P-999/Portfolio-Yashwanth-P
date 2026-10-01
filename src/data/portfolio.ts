import {
  PersonalInfo,
  SkillCategory,
  Project,
  Experience,
  Education,
  Certification,
  Achievement,
  CreativeDiscipline,
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Yashwanth P",
  role: "Computer Science Engineer",
  titleTag: "Full-Stack Developer • Machine Learning • Computer Vision",
  shortBio:
    "Computer Science Engineer with a strong foundation in Full-Stack Web Development, Machine Learning, and Computer Vision. Experienced in building end-to-end web applications, developing scalable REST APIs, and training predictive models. Passionate about solving complex real-world challenges through intelligent systems and clean, user-centric software design.",
  fullBio: [
    "I am an engineer driven by the intersection of intelligent computing and reliable full-stack architecture. With a strong academic background in Computer Science and Engineering at SJB Institute of Technology, my focus lies in crafting performant web systems, deploying applied machine learning models, and building computer vision solutions.",
    "My hands-on experience spans developing reactive client interfaces with React and TypeScript, engineering performant backends with FastAPI and Flask, and implementing explainable AI pipelines with SHAP and OCR for real-world document processing.",
    "Beyond software engineering, I maintain a strong passion for visual communication, technical poster design, and brand identity systems—bringing aesthetic balance and clarity to technical products."
  ],
  location: "Bangalore, Karnataka, India",
  email: "yashonesjbit@gmail.com",
  phone: "+91 9019677741",
  linkedin: "https://www.linkedin.com/in/yashwanth-p-24392936b",
  github: "https://github.com/Yashwanth-P-999",
  resumeUrl: "/resume.pdf", // Configurable path to resume PDF
  status: {
    availableForOpportunities: true,
    currentFocus: "Machine Learning, Computer Vision & Scalable REST APIs",
  },
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: [
      {
        name: "Python",
        description: "Primary language for Machine Learning pipelines, automated data analysis, OCR scripting, and FastAPI/Flask backend services.",
        highlight: true,
      },
      {
        name: "JavaScript",
        description: "Modern ES6+ syntax, asynchronous programming, event handling, and dynamic DOM manipulation.",
        highlight: true,
      },
      {
        name: "TypeScript",
        description: "Strong typing, interfaces, strict generics, and type-safe architecture across React applications.",
        highlight: true,
      },
      {
        name: "C++",
        description: "Object-oriented programming, standard template library (STL), algorithmic problem solving, and memory management.",
      },
      {
        name: "C",
        description: "Procedural systems programming, memory allocation, pointers, and foundational computer architecture concepts.",
      },
      {
        name: "SQL",
        description: "Relational database querying, multi-table joins, subqueries, indexing, and transactional integrity.",
      },
    ],
  },
  {
    id: "web-apis",
    title: "Web Frameworks & APIs",
    skills: [
      {
        name: "React.js",
        description: "Component-based UI architecture, functional hooks, custom state management, and modern SPA lifecycle orchestration.",
        highlight: true,
      },
      {
        name: "FastAPI",
        description: "High-performance asynchronous Python web framework for microservices, Pydantic validation, and OpenAPI documentation.",
        highlight: true,
      },
      {
        name: "Flask",
        description: "Lightweight, modular Python web framework for structuring RESTful endpoints and microservices.",
        highlight: true,
      },
      {
        name: "REST API",
        description: "HTTP status protocols, JSON payload serialization, endpoint routing, authentication headers, and CRUD workflows.",
        highlight: true,
      },
      {
        name: "HTML5 & CSS3",
        description: "Semantic document structure, responsive layouts, CSS Grid, Flexbox, transitions, and modern Tailwind CSS styling.",
      },
      {
        name: "Node.js",
        description: "Server-side JavaScript runtime environment, npm package management, and basic HTTP backend execution.",
      },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        description: "Advanced open-source relational database management, schema normalization, ACID compliance, and structured queries.",
        highlight: true,
      },
      {
        name: "MySQL",
        description: "Relational table modeling, foreign key constraints, view generation, and relational query optimization.",
      },
      {
        name: "SQLite",
        description: "Serverless, self-contained relational storage engine utilized for local development and embedded application tests.",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: [
      {
        name: "Git & GitHub",
        description: "Distributed version control, branching strategies, code reviews, pull requests, and open-source project management.",
        highlight: true,
      },
      {
        name: "Postman",
        description: "API testing, automated endpoint collections, request payload validation, and HTTP response inspection.",
      },
      {
        name: "Docker",
        description: "Containerization principles, Dockerfile creation, reproducible environments, and multi-service development setup.",
      },
      {
        name: "Linux",
        description: "Command line interface (Bash), file system navigation, permissions, process management, and remote server access.",
      },
      {
        name: "Vite",
        description: "Lightning-fast frontend build tooling, hot module reloading, bundler optimization, and TypeScript integration.",
      },
      {
        name: "VS Code",
        description: "Integrated development environment configured with debugging suites, linters, and productive extensions.",
      },
    ],
  },
  {
    id: "core",
    title: "Core Subjects & Practices",
    skills: [
      {
        name: "Data Structures & Algorithms",
        description: "Arrays, trees, graphs, sorting, searching, hashing, recursion, and computational complexity (Big O analysis).",
        highlight: true,
      },
      {
        name: "Object-Oriented Programming (OOP)",
        description: "Encapsulation, inheritance, polymorphism, abstraction, modular design patterns, and clean architecture.",
      },
      {
        name: "Database Management Systems (DBMS)",
        description: "Relational database design, Entity-Relationship modeling, normalization (1NF to 3NF), and transaction protocols.",
      },
      {
        name: "Operating Systems",
        description: "Process synchronization, threading, memory paging, scheduling algorithms, and file system primitives.",
      },
      {
        name: "Computer Networks",
        description: "TCP/IP and OSI stack layers, routing, HTTP/HTTPS protocols, DNS resolution, and socket communication.",
      },
      {
        name: "Software Engineering",
        description: "Software development lifecycle (SDLC), agile methodology, automated testing, and modular system design.",
      },
    ],
  },
  {
    id: "soft",
    title: "Soft Skills",
    skills: [
      {
        name: "Problem Solving",
        description: "Structured analytical reasoning to deconstruct ambiguous technical challenges into testable solutions.",
        highlight: true,
      },
      {
        name: "Technical Mentorship",
        description: "Demonstrated ability to guide participants, debug technical issues, and explain complex concepts during events like AXIOM.",
        highlight: true,
      },
      {
        name: "Team Collaboration",
        description: "Cooperative cross-functional workflow, communicative code reviews, and shared ownership of software deliverables.",
      },
      {
        name: "Analytical Thinking",
        description: "Data-driven decision making, quantitative validation of machine learning metrics, and architecture trade-off analysis.",
      },
      {
        name: "Visual Communication & Design",
        description: "Translating conceptual ideas into compelling graphic layouts, event posters, logos, and clear UI presentation.",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "expense-tracker",
    title: "Expense Tracker Web Application",
    technologies: ["React.js", "Flask", "REST API", "HTML/CSS"],
    shortDescription:
      "A full-stack web application designed for personal finance tracking, budget categorization, and real-time expense analytics.",
    overview:
      "The Expense Tracker Web Application provides users with an intuitive, unified platform to monitor daily financial expenditures, categorize spending habits, and maintain personal fiscal control through instantaneous client updates and dependable REST services.",
    problem:
      "Individuals frequently lose track of scattered daily expenses, struggle with unorganized receipts, and lack immediate visual feedback on which categories consume the largest portions of their budget.",
    solution:
      "Built a modern single-page application combining a reactive React frontend with a lightweight Flask REST API backend, providing dynamic expense logging, instant balance calculations, and clean visual summaries.",
    keyFeatures: [
      "Dynamic expense logging with interactive transaction tables and itemized details",
      "Automatic category classification (Housing, Groceries, Transport, Utilities, Leisure)",
      "Instantaneous budget summary calculating total expenses and remaining balance",
      "Decoupled REST API architecture with clear endpoint contracts for CRUD operations",
      "Responsive, clean UI accessible across mobile smartphones, tablets, and desktop devices"
    ],
    implementationDetails:
      "Developed using React functional components with custom hooks for state synchrony. The Python Flask server exposes standardized RESTful endpoints to process incoming transactions and calculate aggregate metrics with low latency.",
    githubUrl: undefined, // Configurable: User can link repo in portfolio.ts
    liveUrl: undefined,
    featured: true,
    category: "Full-Stack Development",
  },
  {
    id: "corporate-lending",
    title: "Intelligent Corporate Lending Automation",
    status: "Ongoing",
    technologies: [
      "Python",
      "FastAPI",
      "React.js",
      "TypeScript",
      "PostgreSQL",
      "SHAP",
      "OCR"
    ],
    shortDescription:
      "An AI-driven corporate credit evaluation system automating borrower financial document processing, extraction, risk scoring, and explainable AI insights.",
    overview:
      "An enterprise-grade underwriting automation platform that replaces manual corporate credit checks with an AI-assisted pipeline. The system extracts data from financial documentation, computes creditworthiness, and surfaces explainable model attribution for underwriters.",
    problem:
      "Corporate credit underwriting involves parsing voluminous unstructured balance sheets, profit-and-loss statements, and audit reports. Manual data ingestion is slow and error-prone, while standard black-box machine learning models fail regulatory explainability demands.",
    solution:
      "Designing an end-to-end automation engine combining Optical Character Recognition (OCR) for document parsing, machine learning classifiers for risk scoring, and SHAP (SHapley Additive exPlanations) to provide transparent feature attribution for every lending recommendation.",
    keyFeatures: [
      "Automated OCR extraction pipeline for corporate financial statements and balance sheet scans",
      "Predictive machine learning risk assessment evaluating borrower default probabilities",
      "SHAP-powered explainable AI visualizations detailing key positive and negative risk factors",
      "High-throughput asynchronous REST API backend engineered with Python FastAPI",
      "Robust relational database modeling on PostgreSQL for audit logs and company records",
      "Interactive TypeScript and React dashboard displaying borrower profiles and credit metrics"
    ],
    implementationDetails:
      "The architecture integrates an OCR preprocessing module that converts financial PDFs into structured tabular data, followed by predictive Scikit-learn/PyTorch models. SHAP values are calculated to deliver interpretable feature importance graphs directly to loan officers via a FastAPI service.",
    githubUrl: undefined, // Ongoing project
    liveUrl: undefined,
    featured: true,
    category: "Machine Learning & AI",
  },
];

export const experience: Experience[] = [
  {
    id: "young-mind-creations",
    role: "Machine Learning Intern",
    company: "Young Mind Creations",
    location: "Bangalore, India",
    duration: "July 2026 – Present",
    status: "Current",
    responsibilities: [
      "Developing, training, and optimizing machine learning models for predictive analysis and automated classification tasks.",
      "Performing data preprocessing, exploratory data analysis (EDA), and feature engineering across structured and unstructured datasets.",
      "Implementing computer vision pipelines and integrating trained models with backend RESTful services for live inference.",
      "Evaluating model performance using quantitative metrics (precision, recall, F1-score) and refining inference pipelines.",
      "Collaborating with senior engineers to implement scalable software best practices and modular pipeline architecture."
    ],
    technologies: ["Python", "Machine Learning", "Computer Vision", "Scikit-learn", "NumPy", "Pandas", "REST APIs"],
  },
];

export const education: Education[] = [
  {
    id: "sjbit",
    institution: "SJB Institute of Technology",
    degree: "B.E., Computer Science and Engineering",
    duration: "2023 – 2026",
    scoreLabel: "CGPA",
    scoreValue: "8.6 / 10",
    details:
      "Affiliated with Visvesvaraya Technological University (VTU). Comprehensive coursework in Data Structures, Machine Learning, Operating Systems, Database Management Systems, Computer Networks, and Software Engineering.",
    location: "Bangalore, Karnataka",
  },
  {
    id: "pu-college",
    institution: "Excellent PU College, Sunnari",
    degree: "P.U.C. (PCMB)",
    duration: "2021 – 2023",
    scoreLabel: "Percentage",
    scoreValue: "95%",
    details:
      "Pre-University Course with specialization in Physics, Chemistry, Mathematics, and Biology (PCMB). Graduated with distinction.",
    location: "Sunnari, Karnataka",
  },
];

export const certifications: Certification[] = [
  {
    id: "udemy-fullstack",
    title: "Full Stack Web Development Bootstrap",
    issuer: "Udemy",
    date: "Completed",
    description:
      "Comprehensive training covering modern full-stack web development principles, responsive UI architecture, frontend-to-backend REST API integration, and database fundamentals.",
    credentialUrl: undefined, // Configurable: add link when available
  },
  {
    id: "hackerrank-problem-solving",
    title: "Problem Solving (Basics)",
    issuer: "HackerRank",
    date: "Certified",
    description:
      "Verified certification assessing fundamental algorithmic proficiency, data structure manipulation, mathematical reasoning, and logical problem-solving accuracy.",
    credentialUrl: undefined, // Configurable: add link when available
  },
];

export const achievements: Achievement[] = [
  {
    id: "axiom-mentor",
    title: "Technical Mentorship at 'AXIOM'",
    category: "Mentorship & Leadership",
    description:
      "Mentored student participants at the college flagship technical event 'AXIOM', guiding project problem-solving approaches, debugging implementations, and presentation quality.",
    context: "SJB Institute of Technology Technical Fest",
    tags: ["Technical Mentorship", "Student Leadership", "Problem Solving"],
  },
  {
    id: "poster-design",
    title: "Technical & Event Poster Design",
    category: "Visual Design",
    description:
      "Designed high-impact visual posters for departmental symposiums, guest lectures, and competitive technical hackathons with strong typographic and layout discipline.",
    context: "Academic & Tech Event Collateral",
    tags: ["Graphic Design", "Typography", "Visual Communication"],
  },
  {
    id: "logo-creation",
    title: "Official Logo & Emblem Creation",
    category: "Branding",
    description:
      "Conceptualized and created official logos and identity marks representing student initiatives, technical symposiums, and departmental committees.",
    context: "Brand Identity",
    tags: ["Logo Design", "Identity Systems", "Vector Art"],
  },
  {
    id: "promotional-marketing",
    title: "Promotional Creatives & Content Marketing",
    category: "Marketing & Media",
    description:
      "Produced digital marketing collateral, social media announcements, and promotional copy that drove student engagement across campus technical events.",
    context: "Event Media Outreach",
    tags: ["Content Creation", "Event Marketing", "Digital Assets"],
  },
];

export const creativeDisciplines: CreativeDiscipline[] = [
  {
    id: "poster-design",
    title: "Poster Design",
    role: "Visual Designer",
    description:
      "Crafting expressive technical posters and event collateral with precise typographic scale, geometric structure, and focused editorial contrast.",
    concept: "Architectural layouts & Swiss-inspired typographic discipline for academic hackathons.",
    visualTheme: "High-contrast dark obsidian canvas with warm champagne (#EADCB0) highlights.",
    deliverables: ["Event Posters", "Symposium Collateral", "Digital Display Graphics"],
  },
  {
    id: "logo-design",
    title: "Logo Design",
    role: "Identity Designer",
    description:
      "Designing minimalist monograms, geometric emblems, and memorable brand marks for tech symposiums and academic organizations.",
    concept: "Clean geometric symmetry, vector precision, and scalable iconographic marks.",
    visualTheme: "Monochrome minimalism with terracotta (#DC5C3F) accent anchors.",
    deliverables: ["Vector Monograms", "Event Emblems", "Brand Guides"],
  },
  {
    id: "creative-direction",
    title: "Creative Direction",
    role: "Design Lead",
    description:
      "Establishing holistic visual languages, color harmonies, and layout consistency across collegiate event campaigns.",
    concept: "Cohesive aesthetic vision unifying physical posters, digital banners, and presentation decks.",
    visualTheme: "Systematic design tokens ensuring visual harmony across multi-channel media.",
    deliverables: ["Visual Guidelines", "Theme Systems", "Presentation Decks"],
  },
  {
    id: "content-creation",
    title: "Content Creation",
    role: "Marketing & Media",
    description:
      "Producing promotional graphics, announcements, and narrative content for technical symposiums and workshop series.",
    concept: "Clear, concise storytelling tailored to developer and engineering student audiences.",
    visualTheme: "Punchy headline hierarchy paired with functional technical highlights.",
    deliverables: ["Social Media Assets", "Promotional Copy", "Campaign Banners"],
  },
];
