import { User } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen max-w-4xl flex-col items-start justify-center px-6 pt-20"
    >
      <div className="flex w-full flex-col gap-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-6 sm:max-w-lg">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium tracking-widest" style={{ color: "var(--fg-muted)" }}>
              b.s. computer science &amp; economics
            </p>
            <h1
              className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl"
              style={{ color: "var(--fg)" }}
            >
              Anish
              <br />
              Karre
            </h1>
          </div>

          <p className="text-base leading-relaxed max-w-sm" style={{ color: "var(--fg-muted)" }}>
            a tech enthusiast with a strong interest in the intersection of
            technology, data, and business. i enjoy solving practical problems
            and am always looking for new opportunities to learn, build, and
            grow.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-75"
              style={{
                backgroundColor: "var(--fg)",
                color: "var(--bg)",
              }}
            >
              view projects
            </a>
            <a
              href="#contact"
              className="rounded-full border px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-60"
              style={{
                borderColor: "var(--border)",
                color: "var(--fg)",
              }}
            >
              get in touch
            </a>
          </div>
        </div>

        {/* Headshot placeholder */}
        <div
          className="flex h-56 w-56 shrink-0 items-center justify-center self-center rounded-2xl sm:h-64 sm:w-64"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="flex flex-col items-center gap-3" style={{ color: "var(--fg-muted)" }}>
            <User size={40} strokeWidth={1.5} />
            <span className="text-xs">Your photo here</span>
          </div>
        </div>
      </div>
    </section>
  );
}
