"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Model Evaluation for Fraud Detection",
    description:
      "Evaluated a logistic regression fraud detector on a highly imbalanced credit card dataset with 284,807 transactions. Analyzed confusion matrices, ROC and precision-recall curves, and decision-threshold tradeoffs, achieving AUC = 0.956 and PR-AUC = 0.742.",
    tags: ["Python", "pandas", "scikit-learn", "matplotlib"],
    href: "https://github.com/akarr509/ECON3916-Statistical-Machine-Learning/tree/main/Lab%2018%20",
    hoverColor: "#4d6b8a",
  },
  {
    title: "FedSpeak Analysis: NLP on FOMC Minutes",
    description:
      "Built an NLP pipeline for 240 FOMC meeting minutes from 2000–2026 using text preprocessing, TF-IDF, sentiment scoring, and clustering. Analyzed how Federal Reserve language shifted over time and found more negative sentiment in the post-COVID period.",
    tags: ["Python", "scikit-learn", "NLTK", "matplotlib"],
    href: "https://github.com/akarr509/ECON3916-Statistical-Machine-Learning/tree/main/lab23%20",
    hoverColor: "#4a7a66",
  },
  {
    title: "Double Machine Learning for 401(k) Effects",
    description:
      "Applied Double Machine Learning to estimate the impact of 401(k) eligibility on net financial assets using 9,915 observations. Compared regularized estimation with cross-fitted DML and explored heterogeneous treatment effects across income groups.",
    tags: ["Python", "DoubleML", "econml", "scikit-learn", "pandas"],
    href: "https://github.com/akarr509/ECON3916-Statistical-Machine-Learning/tree/main/lab24%20",
    hoverColor: "#7a5c6e",
  },
];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-28">
      <div className="mb-12 flex flex-col gap-2">
        <p className="text-xs font-medium tracking-widest" style={{ color: "var(--fg-muted)" }}>
          work
        </p>
        <h2 className="text-3xl font-bold tracking-tight" style={{ color: "var(--fg)" }}>
          projects
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const isHovered = hoveredIndex === i;
          return (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex flex-col gap-4 rounded-xl p-6"
              style={{
                backgroundColor: isHovered ? project.hoverColor : "var(--bg-card)",
                border: `1px solid ${isHovered ? project.hoverColor : "var(--border)"}`,
                transition: "background-color 0.25s ease, border-color 0.25s ease",
              }}
            >
              <div className="flex items-start justify-between">
                <h3
                  className="text-sm font-semibold leading-snug"
                  style={{
                    color: isHovered ? "#ffffff" : "var(--fg)",
                    transition: "color 0.25s ease",
                  }}
                >
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={14}
                  className="mt-0.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{
                    color: isHovered ? "rgba(255,255,255,0.7)" : "var(--fg-muted)",
                    transition: "color 0.25s ease",
                  }}
                />
              </div>

              <p
                className="text-sm leading-relaxed"
                style={{
                  color: isHovered ? "rgba(255,255,255,0.75)" : "var(--fg-muted)",
                  transition: "color 0.25s ease",
                }}
              >
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                    style={{
                      backgroundColor: isHovered ? "rgba(255,255,255,0.18)" : "var(--border)",
                      color: isHovered ? "#ffffff" : "var(--fg-muted)",
                      transition: "background-color 0.25s ease, color 0.25s ease",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
