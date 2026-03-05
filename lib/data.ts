export const SKILLS = [
  { category: "Programming", icon: "🐍", items: ["Python", "SQL", "R", "TypeScript"], span: 1 },
  { category: "ML & Deep Learning", icon: "🤖", items: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "LightGBM", "CatBoost", "BERT", "GPT Models"], span: 2 },
  { category: "GenAI / LLMs", icon: "✨", items: ["OpenAI APIs", "LangChain", "LangGraph", "LangSmith", "Hugging Face", "LoRA/QLoRA", "CrewAI", "AutoGen", "RAG", "Gemini", "Ollama"], span: 2 },
  { category: "AI Agents", icon: "🕸️", items: ["LangGraph Agents", "CrewAI Agents", "Multi-Agent Pipelines", "Rule-based Agents", "A2A Coordination"], span: 1 },
  { category: "Vector Databases", icon: "🗄️", items: ["FAISS", "Pinecone", "ChromaDB", "Milvus"], span: 1 },
  { category: "Data Engineering", icon: "⚙️", items: ["PySpark", "Kafka", "Snowflake", "BigQuery", "Redshift", "ETL/ELT"], span: 1 },
  { category: "MLOps", icon: "🚀", items: ["MLflow", "Airflow", "Kubernetes", "Docker", "Terraform", "FastAPI", "GitHub Actions", "Azure DevOps"], span: 2 },
  { category: "Cloud Platforms", icon: "☁️", items: ["AWS SageMaker", "AWS Bedrock", "Azure ML", "Azure OpenAI", "GCP Vertex AI", "AKS", "ECS"], span: 1 },
  { category: "Eval & Visualization", icon: "📊", items: ["SHAP", "LIME", "RAGAS", "Tableau", "Power BI", "Plotly", "ROC-AUC"], span: 1 },
];

export const EXPERIENCES = [
  {
    title: "Generative AI Engineer",
    company: "Discover",
    project: "AML Case Summarization & Evidence Linking Platform",
    location: "Remote, US",
    date: "Jul 2025 – Present",
    bullets: [
      "Built a <b>GenAI-powered AML case intelligence platform</b> supporting investigators managing <b>500K+ case artifacts</b> annually.",
      "Implemented <b>RAG architecture using ChromaDB</b> for semantic evidence retrieval across structured and unstructured financial data sources.",
      "Designed <b>LangGraph multi-agent workflows</b> for evidence extraction and narrative generation with LangSmith observability, reducing audit follow-ups by <b>~45%</b>.",
      "Built multi-step autonomous AI agents using <b>LangChain, CrewAI, and custom MCP orchestration</b> on <b>AWS Bedrock</b>, reducing manual intervention by <b>60%</b>.",
      "Deployed containerized services on <b>AWS ECS</b>; provisioned all infrastructure with <b>Terraform</b>.",
      "Reduced case preparation time by <b>61%</b>, contributing to regulator acceptance rates exceeding <b>95%</b>.",
    ],
  },
  {
    title: "ML Engineer",
    company: "Pfizer",
    project: "Clinical Risk Stratification & Outcome Prediction Platform",
    location: "New York, NY",
    date: "Aug 2024 – Jun 2025",
    bullets: [
      "Built large-scale clinical risk platform predicting patient deterioration across <b>3M+ historical patient records</b>.",
      "Designed end-to-end <b>ML pipelines on Azure ML</b> for HIPAA-compliant EHR data, enabling real-time and batch scoring.",
      "Trained <b>XGBoost/LightGBM ensemble models</b> achieving <b>18–22% lift</b> in high-risk patient identification.",
      "Implemented <b>SHAP-based explainability</b> for clinician trust and compliance auditing.",
      "Deployed on <b>Azure Kubernetes Service (AKS)</b> with sub-second inference latency; automated ML lifecycle with <b>MLflow</b>.",
      "Contributed to <b>12–15% improvement in bed utilization</b> and measurable reduction in avoidable readmissions.",
    ],
  },
  {
    title: "Data Scientist I",
    company: "Cognizant",
    project: "RetailSphere: Unified Sales & Supply Chain Analytics Platform",
    location: "Hyderabad, IN",
    date: "Mar 2022 – Aug 2023",
    bullets: [
      "Built batch and streaming data pipelines on <b>GCP</b> ingesting <b>10–15M retail transactions/day</b>.",
      "Designed star/snowflake schemas in <b>BigQuery</b>, reducing query latency by <b>45%</b>.",
      "Delivered executive dashboards in <b>Looker</b> serving 50+ business users with incremental ELT via Cloud Composer.",
      "Integrated third-party data sources improving demand forecast accuracy by <b>18%</b>.",
    ],
  },
  {
    title: "Associate Data Scientist",
    company: "GEICO",
    project: "Enterprise Policy & Claims Data Modernization System",
    location: "Hyderabad, IN",
    date: "Jun 2020 – Feb 2022",
    bullets: [
      "Developed <b>AWS-based ingestion pipelines</b> processing 5–7M policy and claims records/month.",
      "Designed analytics-ready datasets in <b>Amazon Redshift</b>, improving reporting performance by <b>50%</b>.",
      "Automated data refresh cycles with <b>AWS Glue</b>, reducing manual handling by <b>60%</b>.",
      "Cut analytics turnaround time from days to <b>under 2 hours</b>.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "SkySense Weather Chatbot",
    tags: ["RAG", "FAISS", "OpenAI", "Streamlit"],
    description:
      "RAG chatbot delivering real-time weather intelligence via OpenWeather API and OpenAI LLMs. Achieved <b>95% semantic accuracy</b> across diverse user queries with a clean Streamlit interface.",
    gradient: "from-indigo-500/20 via-cyan-500/10 to-transparent",
    accent: "#6366f1",
  },
  {
    name: "EV Insight Pro",
    tags: ["LangChain", "BERT", "NLP", "Streamlit"],
    description:
      "Aspect-level sentiment analysis platform using fine-tuned BERT on <b>50K+ EV reviews</b> (F1: 92%). Interactive dashboard surfacing insights across 10+ EV brands for data-driven product comparison.",
    gradient: "from-violet-500/20 via-cyan-500/10 to-transparent",
    accent: "#a855f7",
  },
];

export const EDUCATION = [
  { school: "University of Maryland, Baltimore County", degree: "MPS, Data Science", gpa: "3.9 / 4.0" },
  { school: "Sreenidhi Institute of Science and Technology", degree: "BTech, Computer Science", gpa: "3.9 / 4.0" },
];

export const CERTIFICATIONS = [
  { name: "Generative AI", org: "Databricks", icon: "🧱" },
  { name: "AI Engineer Associate", org: "Microsoft", icon: "🪟" },
  { name: "Solutions Architect – Associate", org: "AWS", icon: "☁️" },
];

export const STATS = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 4, suffix: "", label: "Industry Domains" },
  { value: 3, suffix: "", label: "Certifications" },
  { value: 3.9, suffix: "", label: "GPA", decimal: true },
];
