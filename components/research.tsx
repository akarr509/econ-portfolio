const interests = [
  {
    title: "Renewable Energy & Energy Markets",
    icon: "🌱",
    explanation:
      "How the shift toward renewable energy is reshaping pricing, infrastructure, and long-term economic growth. Particularly interested in how policy and market design can accelerate adoption while keeping systems efficient and reliable.",
  },
  {
    title: "Behavioral Economics",
    icon: "🧠",
    explanation:
      "Exploring how real human behavior deviates from traditional economic assumptions. Small changes in incentives, framing, or design can meaningfully influence decisions, making this area especially relevant for products and policy.",
  },
  {
    title: "Markets, Startups & Entrepreneurship",
    icon: "🚀",
    explanation:
      "The dynamics behind how businesses form, compete, and scale in modern markets. Drawn to the intersection of technology, strategy, and economic incentives that drive innovation and new ventures.",
  },
];

export function Research() {
  return (
    <section
      id="research"
      className="mx-auto max-w-4xl px-6 py-28"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="mb-12 flex flex-col gap-2">
        <p className="text-xs font-medium tracking-widest" style={{ color: "var(--fg-muted)" }}>
          curiosity
        </p>
        <h2 className="text-3xl font-bold tracking-tight" style={{ color: "var(--fg)" }}>
          research interests
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {interests.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-6 rounded-xl px-6 py-5"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="grid w-full grid-cols-2 items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="shrink-0 text-xl leading-none">{item.icon}</span>
                <h3 className="text-sm font-semibold" style={{ color: "var(--fg)" }}>
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {item.explanation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
