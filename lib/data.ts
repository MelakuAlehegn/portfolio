// All content data for the portfolio
// Centralized so editing copy doesn't require touching component files

import { assetPath } from "./site";

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
    id: "data-warehouse",
    name: "Data Warehouse",
    "tagline": "Builds an analytics warehouse from pNEUMA drone telemetry",
    "description": "The pNEUMA dataset captures roughly half a million vehicle trajectories from drone swarms over downtown Athens, stored as irregular-width CSV that breaks vanilla pandas. This project lands the data in Postgres via Airflow, transforms it into a star schema with dbt, and exposes the result as Metabase dashboards — all dockerised, with Cosmos rendering each dbt model as its own Airflow task and Elementary tracking run history. Tests gate downstream models, so a failing assertion stops the pipeline before bad data reaches the dashboards.",
    "tags": ["Airflow", "dbt", "PostgreSQL", "Docker", "Metabase"],
    "category": "Data Engineering",
    "link": "https://github.com/MelakuAlehegn/pneuma-data-warehouse"
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
    id: "wickedanalytics",
    company: "WickedAnalytics",
    role: "Machine Learning / Data Engineer",
    dates: "Jan 2026 — Present",
    location: "Remote",
    achievements: [
      "Built and maintained Airflow ingestion pipelines across the company's multi-client retail-analytics platform, loading supplier data into Snowflake through Azure Blob staging, headless xlsx repair, pandas-based transformation, and templated COPY INTO operations.",
      "Built and refactored dbt models across 11 client deployments, implementing incremental deduplication with natural-key merges and correcting data grain for vendors with one-to-many product hierarchies.",
      "Replaced the manual demand-planning methodology with an automated Snowflake data layer and an internal web tool for demand planners, surfacing forecast, supply, and inventory data directly through the application and removing the prior Excel-driven method.",
      "Built the Snowflake-Based ML forecast pipeline producing per-client weekly demand forecasts, with outputs materialized to client-facing Excel workbooks delivered into shared Box folders for downstream demand planners.",
      ],
  },
  {
    id: "arifpay",
    company: "Arifpay",
    role: "Data Scientist",
    dates: "Jan 2025 — May 2026",
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

export const featuredPosts: WritingLink[] = [
  {
    title: "From Spec to System: Building a Real AI Agent Architecture",
    url: "https://medium.com/@melakualehegn34/from-spec-to-system-building-a-real-ai-agent-architecture-c3d6ca4f630f",
    excerpt:
      "A deep dive into the production architecture of agentic AI -- memory, role separation, the revision loop, LLM-as-Judge, and writing a Model Context Protocol client from scratch.",
    featured: true,
  },
  {
    title: "Building a Robust Data Warehouse for Complex Vehicle Trajectory Data",
    url: "https://medium.com/@melakualehegn34/building-a-robust-data-warehouse-for-complex-vehicle-trajectory-data",
    excerpt:
      "A technical deep dive into building a production-grade data warehouse for high-volume vehicle trajectory data using Postgres, Airflow, dbt, Cosmos, and Elementary.",
    featured: true,
  },
];

export const writingLinks: WritingLink[] = [
  {
    title: "All posts on Medium",
    url: "https://medium.com/@melakualehegn34",
  },
  // {
  //   title: "All posts on Hashnode",
  //   url: "https://hashnode.com/@Melaku",
  // },
];

export const contact = {
  email: "melakualehegn34@gmail.com",
  linkedin: "https://linkedin.com/in/melakualehegn",
  github: "https://github.com/MelakuAlehegn",
  portfolioRepo: "https://github.com/MelakuAlehegn/portfolio",
  medium: "https://medium.com/@melakualehegn34",
  // hashnode: "https://hashnode.com/@Melaku",
  location: "Addis Ababa, Ethiopia",
};

export const resume = {
  href: assetPath("/resumeMelakuAlehegn.pdf"),
  downloadName: "resumeMelakuAlehegn.pdf",
};

export const heroNowTopics = [
  "agent memory · tool routing · loops that know when to stop",
  "RAG · embeddings · answers tied to real sources",
  "feature pipelines · model registries · retraining in production",
  "Airflow · dbt · warehouses that stay honest at scale",
  "fraud signals · drift checks · ML when the data fights back",
  "MCP · LLM judges · systems you can reason about",
  "FastAPI · batch + online inference · APIs models can live behind",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  Languages: ["Python", "SQL", "Java", "TypeScript", "Bash"],
  "Data & ML": [
    "Airflow",
    "dbt",
    "Snowflake",
    "MLflow",
    "Celery",
    "Pandas",
    "scikit-learn",
    "TensorFlow",
    "Cosmos",
  ],
  "Backend & Databases": [
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "MongoDB",
    "Docker",
  ],
  "LLMs & AI": ["Gemini", "Claude", "LangChain", "ChromaDB", "MCP", "RAG"],
  "Cloud & BI": [
    "AWS",
    "Azure",
    "Azure Blob Storage",
    "GCP",
    "Metabase",
    "PowerBI",
    "Redash",
  ],
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
