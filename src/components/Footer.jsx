export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-text-muted">
          © {new Date().getFullYear()} Lucca Lima. Todos os direitos reservados.
        </p>
        <p className="font-mono text-xs text-text-muted">
          Construído com React + Vite + Tailwind
        </p>
      </div>
    </footer>
  )
}
