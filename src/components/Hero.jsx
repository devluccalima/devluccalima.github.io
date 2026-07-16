import { motion } from 'framer-motion'
import { ArrowRight, Mail, Terminal } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden bg-dot-grid"
    >
      {/* Vercel-style radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(600px circle at 50% 20%, color-mix(in srgb, var(--color-primary) 18%, transparent), transparent 70%)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-3xl mx-auto text-center flex flex-col items-center"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 font-mono text-xs text-text-muted border border-border bg-surface/60 rounded-full px-4 py-1.5 mb-8"
        >
          <Terminal size={13} className="text-primary" />
          <span>~/lucca-lima</span>
          <span className="inline-block w-1.5 h-3.5 bg-primary animate-pulse ml-0.5" />
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-6xl font-bold tracking-tight text-text mb-4"
        >
          Lucca Lima
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg sm:text-2xl font-medium text-primary mb-6"
        >
          Desenvolvedor Full Stack | Backend &amp; Arquitetura
        </motion.p>

        <motion.p
          variants={item}
          className="text-base sm:text-lg text-text-muted max-w-xl mb-10 leading-relaxed"
        >
          Construindo soluções escaláveis com foco em APIs, arquitetura de software
          e automação de processos.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-lg shadow-primary/20"
          >
            Ver Projetos <ArrowRight size={16} />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 border border-border hover:border-primary text-text font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Entrar em Contato <Mail size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
