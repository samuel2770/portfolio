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
      role: "Backend Developer Intern (SIWES)",
      location: "Lagos, Nigeria",
      period: "Jul 2026 – Oct 2026",
      badge: "Healthcare Production",
      description: "Contributed to backend development of healthcare technology solutions, pharmacy Point of Sale (POS) systems, and vendor analytics using NestJS, TypeScript, PostgreSQL, and TypeORM.",
      highlights: [
        "Built pharmacy backend features in NestJS, TypeORM and PostgreSQL: batch editing (quantity, prices, batch number), a staff list per pharmacy, and a live staff-online count.",
        "Developed the Pharmacy Vendor Partnership Statistics endpoint, returning total, active and inactive suppliers in a single request.",
        "Researched ML features and evaluation metrics for reorder-quantity recommendations and expiry-risk scoring (LightGBM) as part of the AI/ML effort.",
        "Worked through Git branches and code review, with each task reviewed by the engineering lead before merging.",
        "Documented endpoints with Swagger and tested them with Postman."
      ],
      stack: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "REST API", "Swagger", "Postman", "Git"]
    }
  ],

  education: [
    {
      institution: "Thomas Adewumi University, Oko-Irese, Kwara State",
      program: "B.Sc. Software Engineering",
      period: "Session 2025/2026",
      status: "In Progress",
      highlights: [
        "Core computing foundations: C, C++, Java, OOP, Data Structures & Algorithms, Operating Systems.",
        "Active Member, Nigeria Association of Computing Students (NACOS)."
      ]
    },
    {
      institution: "AltSchool Africa",
      program: "Backend Engineering Diploma",
      period: "2025 – 2026",
      status: "Completed • Verified Graduate",
      highlights: [
        "Rigorous software engineering curriculum covering Node.js, Express, NestJS, MongoDB, PostgreSQL, system design, and Git.",
        "Architected enterprise capstone projects including the MedTrail Healthcare & Medication Management API."
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
      title: "MedTrail: Medication Management System for Hospitals",
      category: "backend",
      featured: true,
      tagline: "Live Role-Based Medication Platform for Nigerian Hospitals",
      description: "Capstone platform for Nigerian hospitals, built by a two-person backend team and used by four roles: Admin, Doctor, Pharmacist and Patient. Implemented role-based access with custom guards and JWT, prescription verification, audit logging, and cloud deployment.",
      liveUrl: "https://www.medtrail.com.ng",
      githubUrl: null, // Private enterprise repository (protecting IP during development)
      stats: {
        architecture: "NestJS Modular Architecture",
        security: "4-Tier RBAC + JWT",
        caching: "Redis In-Memory Engine",
        liveDomain: "www.medtrail.com.ng"
      },
      architecture: [
        "Implemented role-based access with custom guards and JWT; admins invite users, doctors prescribe, pharmacists verify and dispense, and patients view their own records",
        "Added validated DTOs, audit logging and PostgreSQL schema design, and deployed the system to the cloud",
        "Redis caching layer for high-throughput roster lookups and rate-limiting mitigation"
      ],
      tags: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "JWT", "Redis"]
    },
    {
      id: "eventful-api",
      title: "Eventful: Event Ticketing API",
      category: "backend",
      featured: true,
      tagline: "Secure Ticketing & QR-Code Verification Engine",
      description: "Deployed API with Paystack payment processing, QR-code ticket scanning, fraud protection, scheduled event notifications, and Redis-cached analytics. Fully documented with interactive Swagger.",
      liveUrl: "https://github.com/samuel2770",
      githubUrl: "https://github.com/samuel2770",
      stats: {
        payments: "Paystack Gateway",
        queues: "BullMQ Job Queues",
        cache: "Redis Analytics",
        docs: "Swagger / OpenAPI"
      },
      architecture: [
        "Integrated Paystack payment gateway with automated webhook verification and idempotent transaction handling",
        "QR-code ticket generation and verification engine with anti-tampering fraud checks",
        "Background task queues with BullMQ for scheduled notifications and event reminders"
      ],
      tags: ["NestJS", "MongoDB", "Redis", "BullMQ", "Paystack", "Swagger"]
    },
    {
      id: "huddle-api",
      title: "Huddle: Team Collaboration Backend",
      category: "backend",
      featured: true,
      tagline: "Slack-Style Real-Time Workspace & Channel API",
      description: "Slack-style workspace and channel API; resolved merge conflicts and integrated a teammate's auth module. Features bi-directional WebSocket channels for real-time team messaging and presence pings.",
      liveUrl: "https://huddle-api-90gn.onrender.com",
      githubUrl: "https://github.com/samuel2770/Huddle-API",
      stats: {
        architecture: "NestJS + Socket.IO",
        db: "PostgreSQL Relational",
        channels: "Real-time WebSockets"
      },
      architecture: [
        "Slack-style workspace and channel API; resolved merge conflicts and integrated a teammate's auth module",
        "Bi-directional WebSocket event channels for real-time messaging and status pings",
        "Relational PostgreSQL schema with indexed queries for message pagination and thread lookups"
      ],
      tags: ["NestJS", "TypeScript", "PostgreSQL", "Socket.IO"]
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
