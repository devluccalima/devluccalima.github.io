import { motion } from 'framer-motion'
import { GraduationCap, Wrench } from 'lucide-react'

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Sobre
          </span>
          <h2 className="text-3xl font-bold text-text mt-2">Sobre Mim</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-3 space-y-5 text-text-muted leading-relaxed"
        >
          <p>
            Sou formado em Análise e Desenvolvimento de Sistemas pelo IESB e comecei minha trajetória na área de TI através do suporte técnico, o que me deu uma base
            sólida sobre como sistemas realmente funcionam no dia a dia de uma empresa.
            Foi ali que nasceu meu interesse por desenvolvimento: entender um problema de perto e depois construir a solução para ele.
          </p>
          <p>
            Hoje atuo como Técnico de TI Jr., onde fui responsável por desenvolver do zero o 
            Sistema de Controle de Combustível (SCC) — uma aplicação full stack em produção que substituiu um processo manual 
            em planilhas pela gestão financeira e operacional de frotas corporativas. Gosto especialmente de 
            arquitetura de software, boas práticas (SOLID, Clean Architecture) e de automatizar processos que antes tomavam horas manuais.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3 bg-surface border border-border rounded-xl p-4">
              <Wrench size={18} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-text">Técnico de TI Jr.</p>
                <p className="text-xs text-text-muted mt-1">
                  Atuação com soluções internas, automação e infraestrutura.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-surface border border-border rounded-xl p-4">
              <GraduationCap size={18} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-text">
                  Análise e Desenvolvimento de Sistemas - IESB
                <p className='text-xs text-text-muted mt-1'>Conclusão: abril/2026</p>
                </p>
                <p className="text-xs text-text-muted mt-1">
                  Formação acadêmica com foco em desenvolvimento de software.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
