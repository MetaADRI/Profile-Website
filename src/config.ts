// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  language: string;
  brandName: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  brandName: "Bwalya Adrian Mange",
};

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  links: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "/skills" },
    { label: "About", href: "/about" },
  ],
  ctaText: "Connect",
};

// ============================================================
// Hero
// ============================================================

export interface HeroConfig {
  title: string;
  subtitleLine1: string;
  subtitleLine2: string;
  ctaText: string;
}

export const heroConfig: HeroConfig = {
  title: "Bwalya Adrian Mange",
  subtitleLine1: "Cybersecurity & Full-Stack Developer building secure, scalable applications,",
  subtitleLine2: "IT Support Professional pursuing global tech roles.",
  ctaText: "View My Projects",
};

// ============================================================
// Capabilities (Curriculum section)
// ============================================================

export interface CapabilityItem {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface CapabilitiesConfig {
  sectionLabel: string;
  items: CapabilityItem[];
}

export const capabilitiesConfig: CapabilitiesConfig = {
  sectionLabel: "Skills & Expertise",
  items: [
    {
      title: "Cybersecurity",
      slug: "cybersecurity",
      description: "Security audits, network traffic analysis, account lockout, progressive slowdown, JWT token management, helmet.js, and HTTP security headers.",
      image: "images/capability-1.jpg",
    },
    {
      title: "Backend Development",
      slug: "backend-development",
      description: "Python Flask, Node.js & Express, RESTful API design, and JWT authentication.",
      image: "images/capability-2.jpg",
    },
    {
      title: "Frontend Development",
      slug: "frontend-development",
      description: "React & Vite, TypeScript, HTML5 & CSS3, JavaScript ES6+, responsive mobile-first design, UI/UX implementation, and web accessibility.",
      image: "images/capability-3.jpg",
    },
    {
      title: "Databases & Tools",
      slug: "databases-tools",
      description: "MySQL & PostgreSQL, database optimization, Git & GitHub, Docker containerization, system administration, and CRM systems.",
      image: "images/capability-4.jpg",
    },
  ],
};

// ============================================================
// Capability Detail (sub-pages)
// ============================================================

export interface CapabilityDetailData {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface CapabilityDetailConfig {
  sectionLabel: string;
  backLinkText: string;
  prevLabel: string;
  nextLabel: string;
  notFoundText: string;
  capabilities: Record<string, CapabilityDetailData>;
}

export const capabilityDetailConfig: CapabilityDetailConfig = {
  sectionLabel: "Skill Area",
  backLinkText: "Back to home",
  prevLabel: "Previous",
  nextLabel: "Next",
  notFoundText: "Skill area not found.",
  capabilities: {
    cybersecurity: {
      title: "Cybersecurity",
      subtitle: "Security-first mindset with hands-on expertise.",
      paragraphs: [
        "My cybersecurity journey involves practical application of security principles. I focus on network traffic analysis, implementing robust security headers with helmet.js, and managing secure communications.",
        "I specialize in implementing defensive measures such as account lockout and progressive slowdown to mitigate brute-force attacks. My expertise also includes JWT token management for secure authentication across distributed systems.",
        "I advocate for HTTP security headers to protect users from common web vulnerabilities like XSS and clickjacking. My approach to security is proactive, ensuring that applications are built with security as a primary requirement rather than an afterthought.",
      ],
    },
    "backend-development": {
      title: "Backend Development",
      subtitle: "Building robust, scalable server-side solutions.",
      paragraphs: [
        "I architect and build production-ready backend systems using Python Flask and Node.js/Express. My RESTful API designs follow industry best practices with proper HTTP semantics and consistent error handling.",
        "Authentication and authorization are core competencies. I implement JWT-based authentication with secure token management and role-based access control.",
      ],
    },
    "frontend-development": {
      title: "Frontend Development",
      subtitle: "Crafting responsive, accessible user interfaces.",
      paragraphs: [
        "I build modern web interfaces using React with Vite. My component architecture emphasizes reusability, proper state management, and clean separation between presentation and business logic. I leverage TypeScript throughout for type safety.",
        "Responsive design is the foundation of my workflow. I implement mobile-first designs using CSS Flexbox and Grid, ensuring flawless experiences across devices. Every interface I build is tested for accessibility and inclusive design principles.",
      ],
    },
    "databases-tools": {
      title: "Databases & Tools",
      subtitle: "Data architecture and DevOps fundamentals.",
      paragraphs: [
        "I design and optimize relational database schemas for MySQL and PostgreSQL, implementing proper normalization and indexing strategies. I focus on data integrity and performance tuning.",
        "My toolkit includes Docker for containerization and Git for version control. I manage Linux servers and configure web servers, bringing a systems-thinking approach to software delivery.",
      ],
    },
  },
};

// ============================================================
// Architecture (CinematicVision section)
// ============================================================

export interface ArchitectureConfig {
  sectionLabel: string;
  videoPath: string;
  title: string;
  description: string;
}

export const architectureConfig: ArchitectureConfig = {
  sectionLabel: "About Me",
  videoPath: "/videos/cinematic-vision.mp4",
  title: "A Technical Specialist Dedicated to Bridging the Digital Gap Through Service and Security",
  description: "With a robust background in troubleshooting CRM systems and remote support, I have built my career on a foundation of clear communication, systems thinking, and proactive problem-solving. My true passion lies in helping users and companies navigate complex digital landscapes, ensuring they can utilize products and services to their fullest potential. I leverage my technical expertise to bridge the digital gap, providing the essential link between sophisticated technology and the people who use it every day.",
};

// ============================================================
// Research (AlumniArchives section)
// ============================================================

export interface ResearchProject {
  title: string;
  year: string;
  discipline: string;
  image: string;
}

export interface ResearchConfig {
  sectionLabel: string;
  projects: ResearchProject[];
}

export const researchConfig: ResearchConfig = {
  sectionLabel: "Featured Projects",
  projects: [
    {
      title: "SecureAuth",
      year: "2026",
      discipline: "Cybersecurity",
      image: "images/research-3.jpg",
    },
    {
      title: "Cavendish Appointment System",
      year: "2026",
      discipline: "Real-Time System",
      image: "images/research-1.jpg",
    },
    {
      title: "MobiLink",
      year: "2026",
      discipline: "Full-Stack MVP",
      image: "images/research-1.jpg",
    },
    {
      title: "Lala",
      year: "2026",
      discipline: "Travel Tech",
      image: "images/research-2.jpg",
    },
    {
      title: "AutoElite Car Dealership",
      year: "2026",
      discipline: "E-Commerce",
      image: "images/research-4.jpg",
    },
  ],
};

// ============================================================
// Project Details
// ============================================================

export interface ProjectDetailData {
  title: string;
  summary: string;
  shortDescription: string;
  keyFeatures: string[];
  techStack: Record<string, string>;
  architectureNotes: string;
  challengesSolved: string[];
  liveDemoUrl: string;
  repoUrl: string;
  tags: string[];
  screenshots?: { url: string; caption: string }[];
}

export const projectDetailsConfig: Record<string, ProjectDetailData> = {
  "secureauth": {
    title: "SecureAuth — Enterprise Two-Factor Authentication System",
    summary: "SecureAuth is a production-grade, full-stack two-factor authentication (2FA) system designed to protect applications with enterprise-level security. Built as a final-year cybersecurity project at Cavendish University Zambia, it implements Time-Based One-Time Password (TOTP) authentication following RFC 6238 standards, compatible with Google Authenticator, Authy, and Microsoft Authenticator.",
    shortDescription: "A production-ready enterprise 2FA system featuring TOTP authentication, JWT session management, multi-layer DDoS protection, and a commercial-grade web UI.",
    keyFeatures: [
      "TOTP Two-Factor Authentication — RFC 6238 compliant, works with Google Authenticator, Authy, and Microsoft Authenticator via QR code enrollment",
      "Multi-Layer DDoS Protection — 6-layer application flood protection including IP auto-banning, connection limiting, request validation, and progressive slowdown",
      "JWT Session Management — Stateless authentication with access/refresh tokens, inactivity auto-logout, and configurable session timeouts",
      "Account Lockout & Rate Limiting — Automatic brute-force protection with progressive delays after failed login attempts",
      "Complete Audit Trail — Login history tracking with IP addresses, device fingerprints, timestamps, and location data"
    ],
    techStack: {
      "Frontend": "HTML5, CSS3, Vanilla JavaScript (Static)",
      "Backend": "Node.js, Express.js 4.x",
      "Database": "PostgreSQL (via Supabase), SQLite (local dev)",
      "Authentication": "bcrypt, jsonwebtoken, speakeasy (TOTP), qrcode",
      "Security": "Helmet (CSP), express-rate-limit, express-slow-down",
      "Deployment": "Vercel"
    },
    architectureNotes: "SecureAuth follows a modular MVC-inspired architecture. The Express server serves static frontend files while mounting API routes under /api/. The backend is organized into controllers, middleware, models, routes, utils, and database initialization. The DDoS protection middleware is isolated in its own module for reusability.",
    challengesSolved: [
      "Implementing RFC 6238 TOTP with clock drift tolerance and seamless authenticator app integration",
      "Designing a custom multi-layer DDoS protection middleware stack",
      "Building a secure dual-token (access + refresh) JWT system",
      "Configuring complex Helmet CSP rules for security and functionality",
      "Migrating from SQLite to PostgreSQL (Supabase) for production"
    ],
    liveDemoUrl: "https://secure-auth-seven.vercel.app/",
    repoUrl: "https://github.com/MetaADRI/SecureAuth",
    tags: ["NodeJS", "Express", "Cybersecurity", "2FA", "TOTP", "JWT", "DDoSProtection", "PostgreSQL", "FullStack", "Authentication", "Vercel"],
    screenshots: [
      { url: "/images/secureauth.png", caption: "SecureAuth Enterprise Authentication Interface" }
    ]
  },
  "cavendish-appointment-system": {
    title: "Cavendish Appointment System — Real-Time University Booking Platform",
    summary: "The Cavendish Appointment System is a comprehensive, full-featured appointment scheduling platform built specifically for Cavendish University Zambia. It connects students with university officials through a streamlined booking workflow: students browse official availability, request appointments, and track their status in real time.",
    shortDescription: "A full-featured university appointment scheduling system with real-time status tracking, automated reminders, role-based access, and an intelligent time-driven scheduler.",
    keyFeatures: [
      "Role-Based Booking System — Portals for Students, Officials, and Admins",
      "Real-Time Status Tracking — Live appointment status updates with 20-second polling",
      "Automated Scheduler — Time-driven scheduler running every 30 seconds for reminders and auto-completion",
      "Double-Booking Prevention — Database-level constraints to prevent overlapping appointments",
      "Weekly Availability Management — Fixed 30-minute time slots (08:30–15:30) management"
    ],
    techStack: {
      "Frontend": "HTML5, CSS3, JavaScript (Vanilla), Bootstrap 5.3.0",
      "Backend": "Node.js, Express.js",
      "Database": "MySQL 5.7+",
      "Authentication": "bcrypt, express-session",
      "Real-Time": "Server-Sent Events / AJAX polling"
    },
    architectureNotes: "Traditional server-rendered MVC pattern using Express.js. MySQL handles relational data for users, appointments, and availability. The automated scheduler is a background interval process within the Node.js runtime.",
    challengesSolved: [
      "Building a reliable internal scheduler without external cron jobs",
      "Implementing database-level unique constraints for double-booking prevention",
      "Designing a clean multi-role permission system",
      "Handling Africa/Lusaka (UTC+2) timezone across the stack",
      "Safe database migration workflow with backup-first strategy"
    ],
    liveDemoUrl: "",
    repoUrl: "https://github.com/MetaADRI/cavendish-appointment-system",
    tags: ["NodeJS", "Express", "MySQL", "FullStack", "Bootstrap", "AppointmentBooking", "EducationTech", "RealTime", "UniversityManagement"]
  },
  "mobilink": {
    title: "MobiLink — Intercity Mobility & Parcel Logistics Platform",
    summary: "MobiLink is a modern, scalable intercity mobility and parcel logistics platform built specifically for the Zambian market. It connects passengers with drivers for intercity travel while also enabling secure parcel delivery between cities.",
    shortDescription: "A modern intercity mobility and parcel logistics platform for Zambia featuring Mobile Money integration (MTN/Airtel) and real-time trip booking.",
    keyFeatures: [
      "Multi-Role System — Passengers, Drivers, and Admins",
      "Intercity Trip Booking — Search routes across 25+ Zambian cities",
      "Parcel Delivery System — Secure intercity package delivery with tracking",
      "Mobile Money Integration — Seamless payments via MTN and Airtel Money APIs",
      "Driver Verification & Ratings — Identity verification and user review system"
    ],
    techStack: {
      "Frontend": "React 18, Vite, Tailwind CSS, Zustand",
      "Backend": "Node.js, Express.js",
      "Database": "PostgreSQL",
      "ORM": "Prisma",
      "Authentication": "JWT, bcrypt",
      "Payments": "MTN Mobile Money API, Airtel Money API"
    },
    architectureNotes: "Modern full-stack architecture with React frontend and Express API. Prisma ORM provides type-safe access to PostgreSQL. Feature-based backend organization.",
    challengesSolved: [
      "Integrating with local Zambian Mobile Money APIs",
      "Clean role-based permission system with route guards",
      "Ensuring real-time consistency for trip availability",
      "Efficient search algorithm for 25+ Zambian cities",
      "Coordinating cross-platform deployment on Vercel and Render"
    ],
    liveDemoUrl: "https://www.eilzm.com/",
    repoUrl: "https://github.com/MetaADRI/MobiLink",
    tags: ["React", "TypeScript", "NodeJS", "Express", "PostgreSQL", "Prisma", "MobileMoney", "FinTech", "Logistics", "Zambia", "FullStack"],
    screenshots: [
      { url: "/images/mobilink.png", caption: "MobiLink Intercity Mobility Platform" }
    ]
  },
  "lala": {
    title: "Lala — Affordable Stays Marketplace for Zambia",
    summary: "Lala is a modern, mobile-first marketplace for affordable accommodation in Zambia. Designed specifically for the local market, it connects travelers with verified guesthouses, lodges, and township stays through WhatsApp-native booking.",
    shortDescription: "A mobile-first marketplace for affordable stays in Zambia featuring WhatsApp-native booking and low-data PWA design.",
    keyFeatures: [
      "WhatsApp-Native Booking — Direct communication on the preferred platform",
      "Mobile Money Integration — Payments via MTN and Airtel Money",
      "Low-Data PWA Design — Optimized for minimal data usage and fast load times",
      "Host Management Dashboard — Property listing and booking tracking",
      "Verified Listings — Quality assurance system for budget accommodations"
    ],
    techStack: {
      "Frontend": "HTML5, CSS3, JavaScript (Vanilla)",
      "Backend": "Node.js, Express.js",
      "Database": "PostgreSQL",
      "ORM": "Sequelize",
      "Authentication": "JWT, bcryptjs",
      "Payments": "MTN Mobile Money API, Airtel Money API"
    },
    architectureNotes: "Clean client-server architecture with Node.js/Express backend and static frontend. Sequelize ORM manages PostgreSQL schema. JWT for stateless authentication.",
    challengesSolved: [
      "Architecting WhatsApp-native booking flows",
      "Mobile Money API orchestration for local carriers",
      "Low-data optimization for users on metered connections",
      "Adapting marketplace patterns to local Zambian behavior",
      "Lightweight verification system for building trust"
    ],
    liveDemoUrl: "https://lala010.vercel.app/",
    repoUrl: "https://github.com/MetaADRI/Lala",
    tags: ["NodeJS", "Express", "PostgreSQL", "Sequelize", "Marketplace", "WhatsApp", "MobileMoney", "PWA", "Zambia", "TravelTech"],
    screenshots: [
      { url: "/images/lala.png", caption: "Lala Affordable Stays Marketplace" }
    ]
  },
  "autoelite-car-dealership": {
    title: "AutoElite Car Dealership — Full-Stack E-Commerce Platform",
    summary: "AutoElite Car Dealership is a complete full-stack e-commerce platform for vehicle sales. It provides an end-to-end car buying experience where customers can browse inventory, filter by make/model/price/year, and complete purchases.",
    shortDescription: "A full-stack car dealership e-commerce platform with inventory management, advanced filtering, and shopping cart. Built with Python Flask.",
    keyFeatures: [
      "Vehicle Inventory Management — Comprehensive car catalog with detailed attributes",
      "Advanced Search & Filtering — Multi-attribute filtering for the perfect vehicle",
      "Shopping Cart & Checkout — Full cart functionality and order placement",
      "User Authentication & Profiles — Secure registration, login, and order history",
      "Admin Dashboard — Interface for inventory and order management"
    ],
    techStack: {
      "Frontend": "HTML5, CSS3, JavaScript (Vanilla)",
      "Backend": "Python 3, Flask 2.3.3",
      "Database": "MySQL",
      "Authentication": "PyJWT, bcrypt",
      "Security": "Werkzeug, Flask-CORS"
    },
    architectureNotes: "Modular blueprint architecture using Python Flask. Separate modules for auth, catalog, cart, and models. MySQL for relational data storage.",
    challengesSolved: [
      "Organizing a growing Flask app into maintainable blueprints",
      "Implementing secure JWT authentication flow in Python",
      "Designing a database-backed persistent shopping cart",
      "Building a responsive e-commerce UI without modern frameworks",
      "Efficient MySQL schema design for car attributes and orders"
    ],
    liveDemoUrl: "",
    repoUrl: "https://github.com/MetaADRI/car-dealer",
    tags: ["Python", "Flask", "MySQL", "JWT", "ECommerce", "FullStack", "CarDealership", "WebDevelopment"]
  }
};

// ============================================================
// Footer
// ============================================================

export interface FooterLinkColumn {
  title: string;
  links: string[];
}

export interface FooterBottomLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  heading: string;
  columns: FooterLinkColumn[];
  copyright: string;
  bottomLinks: FooterBottomLink[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  modules: string[];
}

export const certificationsConfig: Certification[] = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google / Coursera",
    date: "2026",
    description: "A comprehensive program covering the full lifecycle of cybersecurity operations, from asset protection to incident response and automation.",
    skills: ["Python", "Linux", "SQL", "SIEM Tools", "IDS", "Network Security", "Risk Management"],
    modules: [
      "Foundations of Cybersecurity",
      "Manage Security Risks (NIST CSF)",
      "Networks and Network Security",
      "Linux and SQL for Security",
      "Assets, Threats, and Vulnerabilities",
      "Detection and Response (SIEM/IDS)",
      "Automate Security Tasks with Python",
      "Cybersecurity Capstone"
    ]
  },
  {
    title: "Google IT Support Professional Certificate",
    issuer: "Google / Coursera",
    date: "2025",
    description: "Foundational IT expertise focusing on troubleshooting, networking, system administration, and customer service.",
    skills: ["Troubleshooting", "Networking", "System Administration", "Operating Systems", "IT Security", "Customer Service"],
    modules: [
      "Technical Support Fundamentals",
      "The Bits and Bytes of Computer Networking",
      "Operating Systems: Becoming a Power User",
      "System Administration and IT Infrastructure Services",
      "IT Security: Defense against the digital dark arts"
    ]
  }
];

export const personalDocsConfig = {
  cvPath: "/Bwalya-Adrian-Mange-CV.pdf",
};

export const footerConfig: FooterConfig = {
  heading: "Let's Build Something Together",
  columns: [
    {
      title: "Connect",
      links: [
        "LinkedIn: Bwalya Adrian Mange",
        "GitHub: @MetaADRI",
        "Email: adrianmange00@gmail.com",
      ],
    },
    {
      title: "Quick Facts",
      links: ["Location: Zambia", "Coding Since: 2024", "Projects: 8+", "Expertise: Cybersecurity"],
    },
  ],
  copyright: "\u00A9 2026 Bwalya Adrian Mange. Built with dedication.",
  bottomLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bwalya-adrian-mange-4101a8396" },
    { label: "GitHub", href: "https://github.com/MetaADRI" },
    { label: "Email", href: "mailto:adrianmange00@gmail.com" },
  ],
};
