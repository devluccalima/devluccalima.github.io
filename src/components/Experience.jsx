import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Trajetória
          </span>
          <h2 className="text-3xl font-bold text-text mt-2">Experiência</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-surface border border-border rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6"
        >
          <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Briefcase size={20} className="text-primary" />
          </div>

          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
              <h3 className="text-base font-semibold text-text">
                Técnico de TI Jr.
              </h3>
              <span className="font-mono text-xs text-text-muted">
                PaulOOctavio
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              {/* Edite este parágrafo com detalhes específicos da sua atuação. */}
              Atuação no suporte e desenvolvimento de soluções internas, com foco
              em automação de processos e manutenção de infraestrutura.
            </p>
            <ul className="space-y-2">
              {[
                'Desenvolvimento de soluções internas para otimizar processos do dia a dia.',
                'Automação de tarefas repetitivas, reduzindo tempo operacional.',
                'Suporte e manutenção de infraestrutura de TI.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
