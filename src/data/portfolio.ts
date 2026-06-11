export const siteConfig = {
  name: "Vinayak Chaturvedi",
  initials: "VC",
  role: "Software Developer",
  tagline: "Building the web, one line at a time.",
  subtitle: "Creative Developer",
  location: "Jaipur, Rajasthan, India",
  graduationYear: "2026",
  email: "vinayakchaturvedi545@gmail.com",
  phone: "+91 88240 65595",
  github: "https://github.com/vina-yak11",
  linkedin: "https://www.linkedin.com/in/vinayak-chaturvedii/",
  resumePath: "/resume/Vinayak_Resume.pdf",
  avatarPath: "/me.jpeg",
  maleAvatarPath: "/avatar.png",
  heroAvatarPath: "/Newbg.png",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
  { label: "Connect", href: "#connect" },
];

export const stats = [
  { value: "3", label: "Projects" },
  { value: "6", label: "Internships" },
  { value: "4", label: "Certifications" },
  { value: "∞", label: "Expectations" },
];

export const skills = [
  "Java",
  "Python",
  "C / C++",
  "C#",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "ASP.NET MVC",
  "React",
  "Vue.js",
  "SQL",
  "GitHub",
  "Visual Studio",
];

export const projects = [
  {
    id: "01",
    title: "Temporal",
    description:
      "A web system for visualizing and filtering Excel-based datasets with authentication, responsive UI, and date-focused retrieval.",
    tags: ["ASP.NET MVC", "Authentication", "Excel Data"],
    tech: ["ASP.NET MVC", "C#", "SQL", "HTML/CSS"],
    year: "2025",
    //links: { live: null, github: null },
  },
  {
    id: "02",
    title: "E-Commerce Website",
    description:
      "A food ordering and reservation system with database integration, designed around clear customer flows and manageable records.",
    tags: ["Web Application", "Database", "Ordering"],
    tech: ["HTML", "CSS", "JavaScript", "SQL"],
    year: "2024",
    //links: { live: null, github: null },
  },
  {
    id: "03",
    title: "Savari: Rent & Ride",
    description:
      "A Java-based taxi booking system supporting travel and goods transport, structured around practical booking needs.",
    tags: ["Java", "Booking Flow", "Transport"],
    tech: ["Java", "OOP", "System Design"],
    year: "2024",
    //links: { live: null, github: null },
  },
];

export type ExperienceItem = {
  duration: string;
  role: string;
  company: string;
  points: string[];
};

export type EducationItem = {
  period: string;
  title: string;
  place: string;
  detail?: string;
};

export const experience: ExperienceItem[] = [
  // ====== Experience entries (editable) ======
  // You can add or update items below. Keep the same object shape: { duration, role, company, points }
  {
    duration: "May 2026 - Present",
    role: "Full Stack Engineer",
    company: "Dream Mantra",
    points: [
      "Working on end-to-end web applications and feature delivery.",
      "Collaborating with product and design to ship reliable user experiences.",
    ],
  },
  {
    duration: "Jul 2022 - Mar 2026",
    role: "Online Tutoring",
    company: "Surman Sansthan — Jaipur, Rajasthan, India · Remote",
    points: [
      "Tutored children on computer systems and computer science fundamentals.",
      "Prepared lesson plans and hands-on exercises to strengthen core concepts.",
    ],
  },
  {
    duration: "Dec 2025 - Jan 2026",
    role: "Quality Analyst",
    company: "Lohiya Group",
    points: [
      "Performed QA for industrial trading and supply workflows.",
      "Validated data and processes for abrasives, grinding wheels, and consumables.",
    ],
  },
  {
    duration: "May 2025 - Aug 2025",
    role: "Web Developer",
    company: "GAIL (India) Limited",
    points: [
      "Built web interfaces and integrated backend endpoints for internal tools.",
      "Worked with stakeholders to translate requirements into features.",
    ],
  },
  {
    duration: "Jul 2024 - Sep 2024",
    role: "Web Developer",
    company: "Rajasthan Electronics & Instruments Limited",
    points: [
      "Contributed to corporate web projects and deployment processes.",
      "Implemented responsive layouts and accessibility improvements.",
    ],
  },
  {
    duration: "Jul 2023 - Aug 2023",
    role: "Industrial Trainee",
    company: "Rajasthan Rajya Vidyut Utpadan Nigam Limited — Kalisindh Thermal Power Project",
    points: [
      "Studied thermal power generation systems and industrial operations.",
      "Observed on-site engineering workflows and safety procedures.",
    ],
  },
  // ====== End editable experience ======
];

export const education: EducationItem[] = [
  {
    period: "2022 – 2026",
    title: "B.Tech in Computer Science Engineering",
    place: "Government Engineering College, Jhalawar",
  },
  {
    period: "2021 - 2022",
    title: "Class 12 (CBSE)",
    place: "Kendriya Vidyalaya",
  },
  {
    period: "2019 - 2020",
    title: "Class 10 (CBSE)",
    place: "Kendriya Vidyalaya",
  },
];

export const certifications = [
  "Deloitte Australia – Cyber, Data Analytics, Technology Job Simulations (Forage)",
  "LinkedIn – Prompt Engineering",
  "LinkedIn – Web Development",
];

export const services = [
  {
    title: "Frontend Development",
    description:
      "Responsive interfaces with clean layout, usability, and polished interaction details.",
  },
  {
    title: "Full Stack Projects",
    description:
      "End-to-end web apps from database design to ASP.NET MVC and practical UI flows.",
  },
  {
    title: "Data Workflows",
    description:
      "Structured data handling with SQL and Excel-based systems for smooth performance.",
  },
  {
    title: "Clean Code",
    description:
      "Readable, modular, maintainable code that scales with your project.",
  },
];
