const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "SQL"],
  },
  {
    category: "Data & ML",
    skills: ["pandas", "scikit-learn", "NumPy"],
  },
  {
    category: "Visualization",
    skills: ["Plotly", "Matplotlib"],
  },
  {
    category: "Tools",
    skills: ["Git", "Jupyter", "VS Code"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-4xl px-6 py-28"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="mb-12 flex flex-col gap-2">
        <p className="text-xs font-medium tracking-widest" style={{ color: "var(--fg-muted)" }}>
          toolkit
        </p>
        <h2 className="text-3xl font-bold tracking-tight" style={{ color: "var(--fg)" }}>
          skills
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.category} className="flex flex-col gap-3">
            <p className="text-xs font-medium tracking-widest lowercase" style={{ color: "var(--fg-muted)" }}>
              {group.category}
            </p>
            <div className="flex flex-col gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-medium"
                  style={{ color: "var(--fg)" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
