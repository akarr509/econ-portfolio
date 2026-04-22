import { Mail, Link } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-6 py-28"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="mb-12 flex flex-col gap-2">
        <p className="text-xs font-medium tracking-widest" style={{ color: "var(--fg-muted)" }}>
          say hello
        </p>
        <h2 className="text-3xl font-bold tracking-tight" style={{ color: "var(--fg)" }}>
          contact
        </h2>
      </div>

      <div className="flex max-w-md flex-col gap-4">
        <p className="text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
          open to internships, research opportunities, and interesting
          conversations. feel free to reach out.
        </p>

        <div className="mt-4 flex flex-col gap-3">
          <a
            href="mailto:karre.an@northeastern.edu"
            className="group inline-flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-60"
            style={{ color: "var(--fg)" }}
          >
            <Mail size={16} style={{ color: "var(--fg-muted)" }} />
            karre.an@northeastern.edu
          </a>

          <a
            href="https://linkedin.com/in/anishkarre"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-60"
            style={{ color: "var(--fg)" }}
          >
            <Link size={16} style={{ color: "var(--fg-muted)" }} />
            linkedin.com/in/anishkarre
          </a>
        </div>
      </div>
    </section>
  );
}
