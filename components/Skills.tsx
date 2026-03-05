"use client";

import { motion } from "framer-motion";

const ROW1 = [
  "Python", "SQL", "TypeScript", "R",
  "TensorFlow", "PyTorch", "XGBoost", "LightGBM", "CatBoost", "BERT",
  "OpenAI APIs", "LangChain", "LangGraph", "LangSmith", "Hugging Face",
  "LoRA / QLoRA", "CrewAI", "AutoGen", "RAG", "Gemini", "Ollama",
  "LangGraph Agents", "A2A Coordination", "Multi-Agent Pipelines",
];

const ROW2 = [
  "FAISS", "Pinecone", "ChromaDB", "Milvus",
  "PySpark", "Kafka", "Snowflake", "BigQuery", "Redshift",
  "MLflow", "Airflow", "Kubernetes", "Docker", "Terraform", "FastAPI",
  "GitHub Actions", "Azure DevOps",
  "AWS SageMaker", "AWS Bedrock", "Azure ML", "Azure OpenAI", "GCP Vertex AI",
  "SHAP", "LIME", "RAGAS", "Tableau", "Power BI", "Plotly",
];

const CATEGORIES = [
  { icon: "🐍", label: "Programming" },
  { icon: "🤖", label: "ML & DL" },
  { icon: "✨", label: "GenAI / LLMs" },
  { icon: "🕸️", label: "AI Agents" },
  { icon: "🗄️", label: "Vector DBs" },
  { icon: "⚙️", label: "Data Eng." },
  { icon: "🚀", label: "MLOps" },
  { icon: "☁️", label: "Cloud" },
  { icon: "📊", label: "Eval & Viz" },
];

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full py-2">
      <div className={`flex gap-3 w-max ${reverse ? "marquee-right" : "marquee-left"}`}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-sm font-medium px-4 py-2 rounded-full border border-border bg-surface text-text-muted hover:border-indigo/40 hover:text-indigo-light hover:bg-indigo/10 transition-all cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <span className="section-num">01</span>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-indigo text-xs font-bold tracking-[0.14em] uppercase mb-3">Technical Arsenal</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight">
            Skills &amp; Expertise
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-[3px] bg-gradient-to-r from-indigo to-cyan rounded-full mt-4"
          />
        </motion.div>

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {CATEGORIES.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo/10 border border-indigo/20 text-indigo-light"
            >
              <span>{c.icon}</span>
              {c.label}
            </span>
          ))}
        </motion.div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-3 -mx-6"
        >
          {/* Edge fades */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
            <MarqueeRow items={ROW1} />
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
            <MarqueeRow items={ROW2} reverse />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
