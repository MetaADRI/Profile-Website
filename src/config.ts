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
      title: "MobiLink",
      year: "2026",
      discipline: "Full-Stack MVP",
      image: "images/research-1.jpg",
    },
    {
      title: "Cybersecurity Tools",
      year: "2026",
      discipline: "Python Security",
      image: "images/research-3.jpg",
    },
    {
      title: "Car Dealership",
      year: "2026",
      discipline: "E-Commerce",
      image: "images/research-4.jpg",
    },
    {
      title: "Cavendish Appointments",
      year: "2026",
      discipline: "Real-Time System",
      image: "images/research-1.jpg",
    },
  ],
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
