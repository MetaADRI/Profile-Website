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
  slug: string;
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
      slug: "secureauth",
      year: "2026",
      discipline: "Cybersecurity",
      image: "images/secureauth.png",
    },
    {
      title: "Cavendish Appointment System",
      slug: "cavendish-appointment-system",
      year: "2026",
      discipline: "Real-Time System",
      image: "images/research-1.jpg",
    },
    {
      title: "MobiLink",
      slug: "mobilink",
      year: "2026",
      discipline: "Full-Stack MVP",
      image: "images/mobilink.png",
    },
    {
      title: "Lala",
      slug: "lala",
      year: "2026",
      discipline: "Travel Tech",
      image: "images/lala.png",
    },
    {
      title: "AutoElite Car Dealership",
      slug: "autoelite-car-dealership",
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
  heroImage: string;
  heroCaption: string;
  summary: string;
  shortDescription: string;
  marketContext: string;
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
    title: "SecureAuth - Enterprise Two-Factor Authentication System",
    heroImage: "/images/secureauth.png",
    heroCaption: "Commercial-grade landing page for a production-ready two-factor authentication platform.",
    summary: "SecureAuth is a production-grade full-stack two-factor authentication system built to protect applications with enterprise-level security. It implements Time-Based One-Time Password authentication following RFC 6238 standards, making it compatible with Google Authenticator, Authy, and Microsoft Authenticator. The full flow covers registration, password login, QR-code enrollment, 6-digit authenticator verification, protected dashboards, and audit visibility.",
    shortDescription: "Enterprise 2FA with TOTP enrollment, JWT sessions, DDoS protection, and a polished security product interface.",
    marketContext: "Built as a final-year cybersecurity project at Cavendish University Zambia, SecureAuth demonstrates how smaller teams can access serious authentication infrastructure without enterprise complexity. The project focuses on the practical security layers that real apps need: token management, brute-force prevention, session handling, audit trails, and application-level flood protection.",
    keyFeatures: [
      "TOTP two-factor authentication with RFC 6238-compatible QR-code enrollment for authenticator apps",
      "Multi-layer DDoS protection with IP tracking, auto-banning, connection limiting, request validation, endpoint limits, and progressive slowdown",
      "JWT session management with access and refresh tokens, inactivity auto-logout, and configurable timeouts",
      "Account lockout and rate limiting to slow brute-force attempts after repeated failed logins",
      "Complete audit trail capturing login history, IP addresses, device fingerprints, timestamps, and location data"
    ],
    techStack: {
      "Frontend": "HTML5, CSS3, Vanilla JavaScript (Static)",
      "Backend": "Node.js, Express.js 4.x",
      "Database": "PostgreSQL (Supabase), SQLite (local dev)",
      "Authentication": "bcrypt, jsonwebtoken, speakeasy (TOTP), qrcode",
      "Security": "Helmet (CSP), express-rate-limit, express-slow-down",
      "Deployment": "Vercel"
    },
    architectureNotes: "SecureAuth follows a modular MVC-inspired architecture. The Express server serves static frontend files while mounting API routes under /api/. The backend is organized into controllers for business logic, middleware for JWT verification and DDoS protection, models for the data layer, routes for endpoint definitions, utils for TOTP/JWT helpers, and database initialization for PostgreSQL or SQLite development.",
    challengesSolved: [
      "Implemented RFC 6238 TOTP generation with clock drift tolerance and seamless authenticator app integration",
      "Designed a reusable flood-protection middleware stack that reduces abuse without blocking legitimate users",
      "Built secure dual-token session handling with inactivity detection and proper token invalidation",
      "Tuned Helmet and Content Security Policy rules to balance strict security with frontend functionality",
      "Migrated from SQLite to PostgreSQL/Supabase for production deployment while keeping local development simple"
    ],
    liveDemoUrl: "https://secure-auth-seven.vercel.app/",
    repoUrl: "https://github.com/MetaADRI/SecureAuth",
    tags: ["NodeJS", "Express", "Cybersecurity", "2FA", "TOTP", "JWT", "DDoSProtection", "PostgreSQL", "FullStack", "Authentication", "Vercel"],
    screenshots: [
      { url: "/images/secureauth.png", caption: "Landing page positioning SecureAuth as an enterprise authentication product with clear CTAs and trust indicators." },
      { url: "/images/secureauth-register.png", caption: "Registration and enrollment flow for creating an account and setting up authenticator-based 2FA." },
      { url: "/images/secureauth-verify.png", caption: "Verification step where users enter a 6-digit time-based one-time password after password authentication." },
      { url: "/images/secureauth-dashboard.png", caption: "Authenticated dashboard view showing the protected post-login experience." }
    ]
  },
  "cavendish-appointment-system": {
    title: "Cavendish Appointment System - Real-Time University Booking Platform",
    heroImage: "/images/research-1.jpg",
    heroCaption: "Concept visual for the real-time university scheduling platform and role-based appointment workflow.",
    summary: "The Cavendish Appointment System is a full-featured appointment scheduling platform built specifically for Cavendish University Zambia. It connects students with university officials through a streamlined workflow where students browse official availability, request appointments, and track their status in real time, while officials manage schedules and approve or reject requests from a dedicated dashboard.",
    shortDescription: "A full-featured university appointment scheduling system with real-time status tracking, automated reminders, role-based access, and an intelligent time-driven scheduler.",
    marketContext: "The project solves the real campus problem of unstructured office hours, long student wait times, and difficult schedule coordination. By digitizing bookings, availability, reminders, presence confirmation, and admin analytics, it improves operational visibility for the university and makes student support easier to access.",
    keyFeatures: [
      "Role-based booking system with tailored portals for students, officials, and administrators",
      "Real-time appointment lifecycle tracking from pending to approved, in-progress, completed, rejected, or missed",
      "Automated scheduler running every 30 seconds to send reminders, prompt presence confirmation, and complete sessions",
      "Double-booking prevention through database-level constraints for official time slots",
      "Weekly availability management with recurring 30-minute slots between 08:30 and 15:30"
    ],
    techStack: {
      "Frontend": "HTML5, CSS3, JavaScript (Vanilla), Bootstrap 5.3.0",
      "Backend": "Node.js, Express.js",
      "Database": "MySQL 5.7+",
      "Authentication": "bcrypt, express-session",
      "Real-Time": "Server-Sent Events / AJAX polling",
      "Other Tools": "dotenv, nodemon, MySQL2"
    },
    architectureNotes: "The application follows a traditional server-rendered MVC pattern. Express handles routing, views, and API behavior, while MySQL stores students, officials, administrators, appointments, availability slots, and audit data. The scheduler runs as a background interval inside the Node.js process, and schema updates are handled through standalone migration scripts with backup-first safety.",
    challengesSolved: [
      "Built reliable time-driven automation without external cron infrastructure",
      "Prevented race-condition double bookings with database-level unique constraints",
      "Designed clear multi-role access control so each user type sees only relevant actions",
      "Handled Africa/Lusaka timezone expectations consistently across the appointment lifecycle",
      "Created a safer migration workflow with backup utilities before schema changes"
    ],
    liveDemoUrl: "",
    repoUrl: "https://github.com/MetaADRI/cavendish-appointment-system",
    tags: ["NodeJS", "Express", "MySQL", "FullStack", "Bootstrap", "AppointmentBooking", "EducationTech", "RealTime", "SessionManagement", "UniversityManagement"],
    screenshots: [
      { url: "/images/research-1.jpg", caption: "System concept visual representing student booking, official availability, and real-time appointment coordination." }
    ]
  },
  "mobilink": {
    title: "MobiLink - Intercity Mobility & Parcel Logistics Platform",
    heroImage: "/images/mobilink.png",
    heroCaption: "MobiLink landing page with the core route discovery and service selection experience.",
    summary: "MobiLink is a modern, scalable intercity mobility and parcel logistics platform built for the Zambian market. It connects passengers with drivers for intercity travel while also enabling secure parcel delivery between cities. Passengers can discover routes and book trips, drivers can post available journeys and manage bookings, and administrators can oversee platform operations through analytics and management tools.",
    shortDescription: "A Zambian intercity mobility and parcel logistics platform with multi-role users, trip booking, parcel delivery, mobile money payments, and admin oversight.",
    marketContext: "MobiLink addresses the fragmented nature of intercity transportation in Zambia, where travelers often rely on informal bus stations and word-of-mouth to find rides. By digitizing route discovery, booking, parcel delivery, and payments through MTN and Airtel Mobile Money, the platform creates a safer, more transparent mobility experience and a new earning channel for drivers.",
    keyFeatures: [
      "Multi-role system for passengers, drivers, and admins with protected role-based workflows",
      "Intercity trip booking across 25+ Zambian cities with one-way and round-trip options",
      "Parcel delivery workflow for sender and recipient details, delivery preferences, and tracking",
      "MTN Mobile Money and Airtel Money payment integration aligned with Zambia's payment habits",
      "Driver verification, ratings, and reviews to increase trust and accountability"
    ],
    techStack: {
      "Frontend": "React 18, Vite, Tailwind CSS, React Router, Axios, Zustand",
      "Backend": "Node.js, Express.js",
      "Database": "PostgreSQL",
      "ORM": "Prisma",
      "Authentication": "JWT, bcrypt",
      "Payments": "MTN Mobile Money API, Airtel Money API",
      "Deployment": "Vercel (frontend), Render (backend)"
    },
    architectureNotes: "MobiLink uses a separated full-stack architecture. The React/Vite frontend communicates with a RESTful Express API, while Prisma provides type-safe access to PostgreSQL. Backend logic is organized by feature modules, middleware for authentication and validation, services for business rules, and utilities for deployment and environment configuration.",
    challengesSolved: [
      "Integrated payment flows around MTN and Airtel Mobile Money expectations for the Zambian market",
      "Implemented role-based permission boundaries across passenger, driver, and admin experiences",
      "Kept trip availability and booking state consistent for concurrent users",
      "Designed route search and city-pair handling for 25+ Zambian destinations",
      "Coordinated frontend deployment on Vercel and backend deployment on Render with proper CORS configuration"
    ],
    liveDemoUrl: "https://www.eilzm.com/",
    repoUrl: "https://github.com/MetaADRI/MobiLink",
    tags: ["React", "Vite", "TypeScript", "NodeJS", "Express", "PostgreSQL", "Prisma", "MobileMoney", "FinTech", "Logistics", "Zambia", "FullStack", "Transportation"],
    screenshots: [
      { url: "/images/mobilink.png", caption: "Homepage experience showing premium intercity mobility positioning and primary actions for rides, bookings, and parcels." },
      { url: "/images/mobilink-parcel.png", caption: "Parcel delivery visual showing the logistics side of MobiLink's intercity package workflow." },
      { url: "/images/mobilink-bus.png", caption: "Passenger travel visual supporting the intercity ride booking experience." },
      { url: "/images/mobilink-route.png", caption: "Route and roadside visual emphasizing city-to-city movement and trip discovery." }
    ]
  },
  "lala": {
    title: "Lala - Affordable Stays Marketplace for Zambia",
    heroImage: "/images/lala.png",
    heroCaption: "Lala landing page with affordable-stay positioning, search entry point, and host/traveler calls to action.",
    summary: "Lala is a modern, mobile-first marketplace for affordable accommodation in Zambia. It connects travelers with verified guesthouses, lodges, and township stays, while intentionally centering WhatsApp-native booking and Mobile Money payments because that reflects how many Zambians already communicate and transact.",
    shortDescription: "A mobile-first marketplace for affordable stays in Zambia featuring WhatsApp-native booking and low-data PWA design.",
    marketContext: "Lala solves a gap in the local short-stay market: budget accommodation is often fragmented, informal, and hard to compare. Instead of copying global marketplace assumptions, the platform is designed for local behavior: WhatsApp-first communication, MTN/Airtel payments, price sensitivity, and low-data access.",
    keyFeatures: [
      "WhatsApp-native booking so travelers can initiate reservations through a familiar communication channel",
      "Mobile Money payment support for MTN and Airtel Money",
      "Low-data PWA philosophy for fast loading on limited internet plans",
      "Host dashboard for property listings, availability, pricing, bookings, and earnings",
      "Verified listings and lightweight trust signals for local budget accommodation"
    ],
    techStack: {
      "Frontend": "HTML5, CSS3, JavaScript (Vanilla)",
      "Backend": "Node.js, Express.js",
      "Database": "PostgreSQL",
      "ORM": "Sequelize",
      "Authentication": "JWT, bcryptjs",
      "Payments": "MTN Mobile Money API, Airtel Money API",
      "Deployment": "Vercel"
    },
    architectureNotes: "Lala uses a clean client-server architecture with a static HTML/CSS/JavaScript frontend and a Node.js/Express backend. Sequelize manages PostgreSQL models for users, listings, bookings, and payments. Authentication is stateless through JWT, and the API is CORS-enabled for the decoupled Vercel frontend.",
    challengesSolved: [
      "Designed a booking flow that uses WhatsApp while preserving booking context and host communication",
      "Planned mobile money orchestration across MTN and Airtel payment behavior",
      "Kept the frontend lightweight for users on metered or inconsistent connections",
      "Adapted marketplace UX to local Zambian travel and accommodation patterns",
      "Created a lightweight verification approach that builds trust without heavy onboarding friction"
    ],
    liveDemoUrl: "https://lala010.vercel.app/",
    repoUrl: "https://github.com/MetaADRI/Lala",
    tags: ["NodeJS", "Express", "PostgreSQL", "Sequelize", "Marketplace", "WhatsApp", "MobileMoney", "PWA", "Zambia", "TravelTech", "LowData", "FullStack"],
    screenshots: [
      { url: "/images/lala.png", caption: "Homepage showing Lala's affordable-stay positioning, search bar, and direct CTAs for browsing or becoming a host." }
    ]
  },
  "autoelite-car-dealership": {
    title: "AutoElite Car Dealership - Full-Stack E-Commerce Platform",
    heroImage: "/images/research-4.jpg",
    heroCaption: "E-commerce concept visual for vehicle inventory, cart, checkout, and admin sales management.",
    summary: "AutoElite Car Dealership is a complete full-stack e-commerce platform for vehicle sales. It supports an end-to-end car buying experience where customers can browse inventory, filter by make, model, price, and year, add vehicles to a shopping cart, and complete purchase flows with order history.",
    shortDescription: "A full-stack car dealership e-commerce platform with inventory management, advanced filtering, and shopping cart. Built with Python Flask.",
    marketContext: "The project demonstrates full-stack e-commerce fundamentals through a vehicle marketplace domain. It combines catalog browsing, cart persistence, checkout flow, user authentication, order tracking, and admin inventory oversight into one coherent Flask/MySQL application.",
    keyFeatures: [
      "Vehicle inventory management with make, model, year, price, mileage, descriptions, and images",
      "Advanced search and filtering by make, model, price range, year, and vehicle attributes",
      "Shopping cart and checkout with add/remove behavior, totals, and order placement",
      "JWT-secured user authentication with profile management and order history",
      "Admin dashboard for inventory management, order review, and platform oversight"
    ],
    techStack: {
      "Frontend": "HTML5, CSS3, JavaScript (Vanilla)",
      "Backend": "Python 3, Flask 2.3.3",
      "Database": "MySQL",
      "Database Driver": "Flask-MySQLdb",
      "Authentication": "PyJWT 2.8.0, bcrypt 4.0.1",
      "Security": "Werkzeug, Flask-CORS"
    },
    architectureNotes: "AutoElite follows Flask's modular blueprint architecture. The backend is organized into modules for authentication, vehicle catalog APIs, cart and checkout logic, database models, configuration, and utility helpers. MySQL stores users, vehicles, cart items, and orders, while the frontend communicates with the API through fetch/AJAX.",
    challengesSolved: [
      "Organized a growing Flask application into maintainable blueprints",
      "Implemented secure JWT authentication and password hashing in Python",
      "Designed a persistent database-backed cart that survives user sessions",
      "Built a responsive e-commerce interface without relying on a frontend framework",
      "Modeled vehicle attributes, users, carts, and orders efficiently in MySQL"
    ],
    liveDemoUrl: "",
    repoUrl: "https://github.com/MetaADRI/car-dealer",
    tags: ["Python", "Flask", "MySQL", "JWT", "ECommerce", "FullStack", "CarDealership", "ShoppingCart", "WebDevelopment", "RESTfulAPI"],
    screenshots: [
      { url: "/images/research-4.jpg", caption: "Vehicle commerce concept visual representing inventory browsing, cart management, checkout, and admin sales monitoring." }
    ]
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

