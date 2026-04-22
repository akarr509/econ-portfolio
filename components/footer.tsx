export function Footer() {
  return (
    <footer
      className="mx-auto w-full max-w-4xl px-6 py-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="flex items-center justify-between">
        <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
          © {new Date().getFullYear()} Anish Karre
        </p>
        <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
