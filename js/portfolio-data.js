/**
 * ============================================================================
 * SAMUEL ADENIRAN - PORTFOLIO DATA CONFIGURATION
 * ============================================================================
 * Easily edit or add your information, projects, work experience, and certifications
 * without having to touch any HTML or CSS files.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Samuel Adeniran",
    preferredName: "Samuel",
    role: "Backend & Systems Engineer",
    secondaryRole: "Full-Stack Capable • Applied AI Explorer",
    location: "Lagos, Nigeria (Open to Remote Worldwide & Relocation)",
    availability: "Available for Backend, Full-Stack & Systems Roles",
    bio: "I am a backend developer passionate about building reliable web services, REST & WebSocket APIs, and scalable database architectures using Node.js, Express, NestJS, and TypeScript. I have practical experience developing healthcare platforms at Advantage Health Africa and formal backend training from AltSchool Africa. I work comfortably with PostgreSQL, MySQL, and MongoDB, have full-stack capability, and am actively exploring applied AI.",
    phone: "+234 916 286 8224",
    whatsapp: "2349162868224",
    email: "samueladeniran.dev@gmail.com", // update anytime
    avatar: "assets/image.png",
    github: "https://github.com/samuel2770",
    linkedin: "https://www.linkedin.com/in/adeniran-samuel-8432732b7",
    instagram: "https://instagram.com/samxdev01",
    stats: [
      { label: "Primary Focus", value: "Backend Systems" },
      { label: "Company", value: "Advantage Health" },
      { label: "Training", value: "AltSchool Africa" },
      { label: "Core Stack", value: "Node & TypeScript" }
    ]
  },

  skills: {
    backend: [
      { name: "Node.js", level: "Expert", desc: "Event loop, streams, clustering, async I/O" },
      { name: "Express.js", level: "Expert", desc: "RESTful architecture, custom middleware, security" },
      { name: "NestJS", level: "Advanced", desc: "Modular architecture, dependency injection, decorators" },
      { name: "TypeScript", level: "Advanced", desc: "Strict typing, interfaces, generics, compile-time safety" },
      { name: "JavaScript (ES6+)", level: "Expert", desc: "Modern syntax, promises, closures, functional design" }
    ],
    databases: [
      { name: "MongoDB & Mongoose", level: "Advanced", desc: "Document modeling, aggregation pipelines, indexing" },
      { name: "PostgreSQL", level: "Advanced", desc: "Relational schemas, foreign keys, ACID transactions" },
      { name: "MySQL", level: "Proficient", desc: "Complex joins, indexing, query optimization" },
      { name: "Database Design", level: "Advanced", desc: "Normalization, indexing strategies, performance tuning" }
    ],
    architecture: [
      { name: "RESTful API Design", level: "Expert", desc: "Idempotency, HTTP specs, rate-limiting, versioning" },
      { name: "WebSockets / Realtime", level: "Advanced", desc: "Socket.IO, event-driven communication, chat engines" },
      { name: "Authentication & Security", level: "Advanced", desc: "JWT, bcrypt, OAuth, RBAC, CORS, helmet" },
      { name: "API Documentation", level: "Advanced", desc: "Postman, Swagger/OpenAPI, endpoint specs" }
    ],
    foundations: [
      { name: "Java", level: "Academic", desc: "Object-oriented design, collections, JVM fundamentals" },
      { name: "C & C++", level: "Academic", desc: "Pointers, memory management, algorithmic problem-solving" },
      { name: "Data Structures", level: "Proficient", desc: "Arrays, trees, hash maps, complexity analysis (Big-O)" }
    ],
    appliedAI: [
      { name: "Conversational AI Chatbots", level: "Intermediate", desc: "NLP routing, session contexts, intent mapping" },
      { name: "LLM API Integrations", level: "Exploring / Hands-on", desc: "Prompt engineering, function calling, tool use" }
    ],
    frontend: [
      { name: "HTML5 & Semantic Web", level: "Advanced", desc: "Accessibility (a11y), clean DOM structure" },
      { name: "CSS3 & Modern Layouts", level: "Advanced", desc: "Flexbox, Grid, custom properties, animations" },
      { name: "Responsive Design", level: "Expert", desc: "Mobile-first, cross-device parity, clean UI" }
    ]
  },

  experience: [
    {
      company: "Advantage Health Africa",
      role: "Backend Developer Intern",
      location: "Lagos, Nigeria (Hybrid / Production Scale)",
      period: "2024 — Present",
      badge: "Healthcare Production",
      description: "Contributed to backend development of healthcare technology solutions, pharmacy Point of Sale (POS) systems, and multi-tenant vendor analytics using NestJS, TypeScript, PostgreSQL, and TypeORM.",
      highlights: [
        "Engineered the Pharmacy Vendor Partnership Statistics API (GET /v1/vendors/rx/{pharmacyId}/partnerships/stats), consolidating total, active, and inactive supplier data into a single low-latency endpoint.",
        "Contributed to Pharmacy POS backend services empowering pharmacists to select medications, calculate pricing, log sales transactions, and print itemized customer receipts.",
        "Modeled normalized relational schemas using TypeORM and PostgreSQL, enforcing strict foreign key constraints and multi-tenant isolation per pharmacy.",
        "Authored interactive OpenAPI/Swagger endpoint specifications and automated Postman test collections validating edge cases and auth guards.",
        "Collaborated across engineering, clinical, and QA teams using Git workflows to maintain resilient uptime and strict data integrity standards."
      ],
      stack: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "REST API", "Swagger", "Postman", "Git"]
    }
  ],

  education: [
    {
      institution: "AltSchool Africa",
      program: "Diploma in Software Engineering (Backend Specialization)",
      period: "2024 — 2025",
      status: "Completed • Verified Graduate (Pending Certificate Issuance)",
      highlights: [
        "Completed rigorous curriculum in distributed systems, advanced Node.js, NestJS, microservices, and system architecture.",
        "Architected enterprise capstone projects including the MedTrail Healthcare & Clinical API and microservice modules.",
        "Graduated with verified completion; official certificate credential awaiting delivery."
      ]
    },
    {
      institution: "University / Academic Background",
      program: "Computer Science & Engineering Foundations",
      period: "Foundational Academic Studies",
      status: "Completed",
      highlights: [
        "Core computing principles: C, C++, Java, Object-Oriented Programming (OOP), and algorithmic problem solving."
      ]
    }
  ],

  certifications: [
    {
      title: "AltSchool Africa Backend Engineering Diploma",
      issuer: "AltSchool Africa",
      status: "Completed • Verified Graduate",
      badgeType: "verified",
      date: "2025",
      verifyUrl: "#", // Update with official certificate link once issued
      description: "Comprehensive 1-year backend engineering diploma covering Node.js, Express, NestJS, Database Management, and Distributed Architecture."
    },
    {
      title: "HackerRank Verified Skill Assessment",
      issuer: "HackerRank",
      status: "Verified & Certified",
      badgeType: "verified",
      date: "September 2026",
      certificateId: "e6eaf8d24f9c",
      verifyUrl: "https://www.hackerrank.com/certificates/e6eaf8d24f9c",
      iframeUrl: "https://www.hackerrank.com/certificates/iframe/e6eaf8d24f9c",
      description: "Official timed coding assessment verified by HackerRank. Confirms algorithmic logic, data processing, and technical problem-solving capabilities."
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman Academy",
      status: "Active Pathway",
      badgeType: "recommended",
      date: "Active Pursuit",
      verifyUrl: "https://academy.postman.com/",
      description: "Industry-standard API creation, automated testing, mocking, and API documentation certification."
    },
    {
      title: "Back End Development and APIs",
      issuer: "freeCodeCamp",
      status: "Active Pathway",
      badgeType: "recommended",
      date: "Active Pursuit",
      verifyUrl: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
      description: "300 hours of hands-on Node.js, Express, MongoDB, Mongoose, and microservices projects."
    }
  ],

  projects: [
    {
      id: "medtrail-api",
      title: "MedTrail Healthcare & Clinical API",
      category: "backend",
      featured: true,
      tagline: "Enterprise Clinical Workflow & Multi-Role Prescription Management",
      description: "A comprehensive healthcare backend system engineered to digitize medical operations between doctors, pharmacists, administrators, and patients. Features electronic prescriptions, pharmacy dispensing verification, 4-tier RBAC, Redis caching, and transactional email onboarding.",
      liveUrl: "https://github.com/samuel2770/MedTrail-Api",
      githubUrl: "https://github.com/samuel2770/MedTrail-Api",
      stats: {
        architecture: "NestJS Modular Architecture",
        security: "4-Tier RBAC + JWT",
        caching: "Redis In-Memory Engine",
        docs: "Interactive Swagger / OpenAPI"
      },
      architecture: [
        "4-Tier Role-Based Access Control (Admin, Doctor, Pharmacist, Patient) with custom NestJS guards and signed JWT tokens",
        "Electronic prescription generation with pharmacy dispense tracking and clinical audit history",
        "Redis caching layer for high-throughput roster lookups and rate-limiting mitigation",
        "Automated user invitation lifecycle with secure, time-sensitive verification tokens via Nodemailer"
      ],
      tags: ["NestJS", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "JWT / RBAC", "Swagger", "Nodemailer"]
    },
    {
      id: "advantage-vendor-api",
      title: "Pharmacy POS & Vendor Partnership Stats API",
      category: "backend",
      featured: true,
      tagline: "Production Healthcare POS & Multi-Tenant Analytics Engine",
      description: "Engineered at Advantage Health Africa to power pharmacy POS systems and supplier management. Delivers real-time vendor analytics—total vendors, active partnerships, and inactive partnerships—through a single, highly-optimized NestJS endpoint.",
      liveUrl: "#case-study",
      githubUrl: "https://github.com/samuel2770",
      stats: {
        endpoint: "GET /v1/vendors/rx/:id/stats",
        framework: "NestJS + TypeORM",
        database: "PostgreSQL Relational",
        multiTenant: "Pharmacy-ID Scoped"
      },
      architecture: [
        "Pharmacy-scoped multi-tenant data isolation preventing cross-tenant supplier data leakage",
        "Clean Controller-Service separation ensuring high maintainability and testability",
        "Optimized TypeORM relational queries returning total, active, and inactive partnership counts in one roundtrip",
        "Contract-first OpenAPI/Swagger specification and automated Postman test collections"
      ],
      tags: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "REST API", "Swagger", "Healthcare POS"]
    },
    {
      id: "huddle-api",
      title: "Huddle Collaboration & Workspace API",
      category: "backend",
      featured: true,
      tagline: "Scalable Real-Time Workspace Engine & Chat Architecture",
      description: "A robust, high-concurrency backend system built to support real-time team collaboration, multi-tenant workspace provisioning, dynamic channel creation, and instant message distribution.",
      liveUrl: "https://huddle-api-90gn.onrender.com",
      githubUrl: "https://github.com/samuel2770",
      stats: {
        latency: "<45ms average response",
        protocol: "HTTP/REST + WebSockets",
        auth: "JWT & Refresh Tokens"
      },
      architecture: [
        "Multi-tenant workspace isolation with role-based permissions (Owner, Admin, Member)",
        "Bi-directional WebSocket event channels for real-time messaging and status pings",
        "MongoDB schema with indexed queries for message pagination and thread lookups",
        "Rate-limiting and request sanitization middleware protecting against DDoS and injections"
      ],
      tags: ["Node.js", "Express", "MongoDB", "WebSockets", "JWT", "REST API", "Render"]
    },
    {
      id: "restaurant-chatbot",
      title: "AI-Powered Restaurant Service Bot",
      category: "ai",
      featured: true,
      tagline: "Autonomous Conversational Agent for Orders & Inquiries",
      description: "A conversational backend assistant engineered for hospitality venues. Manages interactive customer dialogues, dynamic menu lookups, automated order placement, and booking pipelines.",
      liveUrl: "https://restaurant-chatbot-pq2j.onrender.com",
      githubUrl: "https://github.com/samuel2770",
      stats: {
        flow: "Stateful NLP Intent Engine",
        integration: "Webhook Ready",
        uptime: "Hosted on Render"
      },
      architecture: [
        "Session-based dialog manager maintaining order state across conversational turns",
        "Dynamic intent matching and menu extraction with fuzzy search fallback",
        "Asynchronous webhook dispatch for kitchen alerts and order confirmations",
        "Graceful fallback handling routing complex requests to human staff"
      ],
      tags: ["Node.js", "Express", "Conversational AI", "NLP", "State Machine", "Webhooks"]
    },
    {
      id: "todo-enterprise",
      title: "Task Lifecycle & Workflow Engine",
      category: "backend",
      featured: true,
      tagline: "High-Performance Task & State Machine API",
      description: "A clean, production-grade REST API demonstrating strict CRUD architecture, relational task status state transitions, query filtering, pagination, and data validation.",
      liveUrl: "https://todo-app-update.onrender.com",
      githubUrl: "https://github.com/samuel2770",
      stats: {
        architecture: "Strict RESTful",
        validation: "Joi / Schema Validation",
        db: "Mongoose ODM"
      },
      architecture: [
        "Strict input validation layers preventing malformed payloads",
        "Cursor and offset pagination for smooth infinite-scroll frontend integration",
        "Granular task status states (Pending, In-Progress, Blocked, Resolved, Archived)"
      ],
      tags: ["Node.js", "Express", "Mongoose", "REST", "CRUD", "Render"]
    },
    {
      id: "flashcollab",
      title: "FlashCollab Developer Platform",
      category: "fullstack",
      featured: false,
      tagline: "Collaborative Code & Resource Sharing Platform",
      description: "Full-stack developer utility designed for seamless peer collaboration, snippet sharing, and developer project networking.",
      liveUrl: "https://github.com/samuel2770/flashcollab",
      githubUrl: "https://github.com/samuel2770/flashcollab",
      stats: {
        type: "Full-Stack Project",
        repo: "Open Source"
      },
      architecture: [
        "Clean client-server contract with decoupled API endpoints",
        "Interactive UI designed for developer productivity and resource discovery"
      ],
      tags: ["Full Stack", "JavaScript", "Node.js", "UI/UX", "GitHub"]
    },
    {
      id: "pancake-website",
      title: "Pancake Responsive Brand Showcase",
      category: "frontend",
      featured: false,
      tagline: "Interactive Modern Frontend Application",
      description: "Demonstrates frontend versatility, responsive web design principles, fluid CSS animations, and polished UI component structure.",
      liveUrl: "https://github.com/samuel2770/pancake-website",
      githubUrl: "https://github.com/samuel2770/pancake-website",
      stats: {
        type: "Frontend Showcase",
        styling: "Custom CSS3"
      },
      architecture: [
        "Zero-dependency vanilla implementation for peak web performance",
        "Adaptive breakpoints catering to mobile, tablet, and widescreen desktop"
      ],
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Animation"]
    }
  ]
};

// Export to window for browser use
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
