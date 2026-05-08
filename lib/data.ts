// All content data for the portfolio
// Centralized so editing copy doesn't require touching component files

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  achievements: string[];
}

export interface WritingLink {
  title: string;
  url: string;
  excerpt?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "project-chimera",
    name: "Project Chimera",
    tagline: "Autonomous AI influencer agent in Java 21",
    description:
      "Manager / Worker / Judge agent architecture with real LLM-backed reasoning (Gemini), event-sourced memory in PostgreSQL, a custom Model Context Protocol client, and autonomous publishing to Bluesky. Designed and built end-to-end to learn what production agentic AI architecture actually looks like beyond tutorial-grade demos.",
    tags: ["Java 21", "Gemini", "PostgreSQL", "MCP", "Bluesky"],
    link: "https://github.com/MelakuAlehegn/project-chimera",
  },
  {
    id: "demand-planner",
    name: "Demand Planner MVP",
    tagline: "FastAPI + React supply-chain forecasting interface",
    description:
      "Full-stack planning tool with a FastAPI backend serving forecast data and a React + AG Grid frontend. Mock-aware client falls back gracefully when the API is offline, making the frontend independently demoable.",
    tags: ["FastAPI", "React", "AG Grid", "Alembic", "Python"],
    link: "https://github.com/MelakuAlehegn/demand-planner",
  },
];

export const experience: Experience[] = [
  {
    id: "arifpay",
    company: "Arifpay",
    role: "Data Scientist",
    dates: "Jan 2025 — Present",
    location: "Addis Ababa, Ethiopia",
    achievements: [
      "Built and deployed ML models for payment fraud detection on high-volume transactional data with severe class imbalance.",
      "Designed behavioral and temporal feature pipelines that contributed to a 15% reduction in fraud incidents.",
      "Developed a merchant credit scoring service in FastAPI, improving lending decision accuracy by ~40%.",
      "Implemented continuous-learning pipelines with MLflow and Celery; built and maintained Airflow DAGs for ML workflows.",
      "Built RAG systems on internal documents to support analytics and decision-support workflows.",
      "Designed Metabase dashboards for executive KPIs (revenue, churn, acquisition, efficiency).",
    ],
  },
  {
    id: "openstack",
    company: "OpenStack",
    role: "Software Developer Intern",
    dates: "Jan 2025 — May 2025",
    location: "Remote, United States",
    achievements: [
      "Enhanced the UI of OpenStack Manila, implementing a streamlined Django-based workflow for share network creation.",
      "Achieved 90% unit test coverage on the manila-ui project.",
      "Introduced pre-commit and tox configurations to standardize development.",
      "Worked directly with OpenStack core reviewers to merge patches within release cycles.",
    ],
  },
  {
    id: "mmcy-tech",
    company: "MMCY Tech",
    role: "Full Stack Developer Intern",
    dates: "Jul 2023 — Jan 2024",
    location: "Addis Ababa, Ethiopia",
    achievements: [
      "Built a full-stack Applicant Tracking System with Vue.js, Express.js, and Tailwind CSS, including schema design and API endpoints.",
      "Implemented core features: authentication, candidate listings, job listings, admin dashboard.",
    ],
  },
];

export const featuredPost: WritingLink = {
  title: "Building a Real AI Agent in Java: The Architecture Most Tutorials Skip",
  url: "https://medium.com/@melakualehegn34",
  excerpt:
    "A deep dive into the production architecture of agentic AI -- memory, role separation, the revision loop, LLM-as-Judge, and writing a Model Context Protocol client from scratch.",
  featured: true,
};

export const writingLinks: WritingLink[] = [
  {
    title: "All posts on Medium",
    url: "https://medium.com/@melakualehegn34",
  },
  {
    title: "All posts on Hashnode",
    url: "https://hashnode.com/@Melaku",
  },
];

export const contact = {
  email: "melakualehegn34@gmail.com",
  linkedin: "https://linkedin.com/in/melakualehegn",
  github: "https://github.com/MelakuAlehegn",
  medium: "https://medium.com/@melakualehegn34",
  hashnode: "https://hashnode.com/@Melaku",
  location: "Addis Ababa, Ethiopia",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "15%", label: "Fraud reduction at Arifpay" },
  { value: "$300M+", label: "Potential losses prevented (Airflow ML pipelines)" },
  { value: "90%", label: "Test coverage on OpenStack contributions" },
];
