// All content data for the portfolio
// Centralized so editing copy doesn't require touching component files

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  link: string;
  category: string;
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

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export const projects: Project[] = [
  {
    id: "project-chimera",
    name: "Project Chimera",
    tagline: "Autonomous AI influencer agent in Java 21",
    description:
      "Manager / Worker / Judge agent architecture with LLM-backed reasoning (Gemini), event-sourced memory in PostgreSQL, a custom Model Context Protocol client, and autonomous Bluesky publishing. End-to-end production-grade agentic AI architecture, built from scratch.",
    tags: ["Java 21", "Gemini", "PostgreSQL", "MCP", "Bluesky"],
    link: "https://github.com/MelakuAlehegn/project-chimera",
    category: "AI / Agentic",
  },
  {
    id: "semantic-image-text",
    name: "Semantic Image-Text Alignment",
    tagline: "Automated ad storyboarding with NLP + computer vision",
    description:
      "Transforms textual ad descriptions into visually compelling storyboards using ML and computer vision. Pipelines combine NLP for intent parsing with visual generation models for layout — applied to digital advertising creative workflows.",
    tags: ["Python", "NLP", "Computer Vision", "Jupyter", "ML"],
    link: "https://github.com/MelakuAlehegn/semantic-image-text-alignment",
    category: "ML",
  },
  {
    id: "data-warehouse",
    name: "Data Warehouse",
    tagline: "Scalable warehouse for swarm-UAV city traffic data",
    description:
      "Production data warehouse using PostgreSQL, Apache Airflow, dbt, and Redash. Ingests and analyzes city traffic data collected by swarm UAVs. Demonstrates the full ELT lifecycle: ingestion, modeling, transformation, and BI-grade visualization.",
    tags: ["PostgreSQL", "Airflow", "dbt", "Redash", "ELT"],
    link: "https://github.com/MelakuAlehegn/Data-Warehouse",
    category: "Data Engineering",
  },
  {
    id: "demand-planner",
    name: "Demand Planner MVP",
    tagline: "FastAPI + React supply-chain forecasting interface",
    description:
      "Full-stack planning tool with a FastAPI backend serving forecast data and a React + AG Grid frontend. Mock-aware client falls back gracefully when the API is offline, making the frontend independently demoable.",
    tags: ["FastAPI", "React", "AG Grid", "Alembic", "Python"],
    link: "https://github.com/MelakuAlehegn/demand_planner",
    category: "Full Stack",
  },
  {
    id: "telecom-analysis",
    name: "Telecom User Analysis",
    tagline: "Engagement & growth analytics for a telecom",
    description:
      "Data analysis and dashboard project evaluating business growth opportunities in the telecommunications industry. Focuses on user engagement and satisfaction, with end-to-end exploratory analysis through to interactive visualization.",
    tags: ["Python", "Pandas", "Streamlit", "Analytics"],
    link: "https://github.com/MelakuAlehegn/TelecomUserAnalysis",
    category: "Data Science",
  },
  {
    id: "contract-rag",
    name: "Contract RAG",
    tagline: "Retrieval-augmented Q&A over legal contracts",
    description:
      "Python implementation of a Retrieval-Augmented Generation pipeline focused on legal contract documents. Vector-store backed semantic retrieval with LLM grounding, designed to surface specific clauses on demand.",
    tags: ["Python", "RAG", "Vector DB", "LLM"],
    link: "https://github.com/MelakuAlehegn/contract-rag",
    category: "AI / Agentic",
  },
];

export const projectCategories = [
  "All",
  "AI / Agentic",
  "ML",
  "Data Engineering",
  "Data Science",
  "Full Stack",
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
    id: "nedamco",
    company: "Nedamco Africa",
    role: "Cloud Consultant",
    dates: "Dec 2023 — Mar 2024",
    location: "Addis Ababa, Ethiopia (Remote)",
    achievements: [
      "Cloud architecture consulting on AWS for client deployments.",
      "Python tooling for cloud automation and infrastructure scripting.",
      "Worked across the data ingestion and processing layers for client workloads.",
    ],
  },
  {
    id: "openstack",
    company: "OpenStack",
    role: "Outreachy Intern (Software Developer)",
    dates: "Dec 2023 — Mar 2024",
    location: "Remote (Outreachy program)",
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
  title: "From Spec to System: Building a Real AI Agent Architecture",
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
  { label: "Skills", href: "#skills" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "15%", label: "Fraud reduction at Arifpay" },
  { value: "$300M+", label: "Potential losses prevented (Airflow ML pipelines)" },
  { value: "1,929", label: "LinkedIn followers" },
];

// Skills data
export const skills = {
  languages: ["Python", "SQL", "Java", "TypeScript", "Bash"],
  dataML: ["MLflow", "Airflow", "Celery", "dbt", "Pandas", "scikit-learn", "TensorFlow"],
  backend: ["FastAPI", "Flask", "PostgreSQL", "MongoDB", "Redis", "Docker"],
  llmsAI: ["Gemini", "Claude", "LangChain", "ChromaDB", "MCP", "RAG"],
  cloudBI: ["AWS", "Azure", "GCP", "Metabase", "Power BI"],
};

// Certifications data
export const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Mar 2024",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Feb 2024",
  },
  {
    name: "Data Engineering, ML & Generative AI",
    issuer: "10 Academy",
    date: "Apr 2024 — Sep 2024",
  },
  {
    name: "Software Engineering",
    issuer: "Holberton School",
    date: "Feb 2021 — Mar 2022",
  },
];
