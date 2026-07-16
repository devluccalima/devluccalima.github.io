import { motion } from 'framer-motion'
import { ExternalLink, Star, Lock } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Trabalho
          </span>
          <h2 className="text-3xl font-bold text-text mt-2">Projetos</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative flex flex-col bg-surface border rounded-xl p-6 transition-colors ${
                project.featured
                  ? 'border-primary/40 hover:border-primary sm:col-span-2'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {project.featured && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wide text-primary bg-primary/10 rounded-full px-2.5 py-1">
                  <Star size={11} /> Principal
                </span>
              )}

              <div className="mb-3">
                <p className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
                  {project.tag}
                </p>
                <h3 className="text-lg font-semibold text-text mt-1">
                  {project.name}
                </h3>
              </div>

              <p className="text-sm text-text-muted leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-text-muted bg-bg border border-border rounded-md px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-1 border-t border-border/60 mt-auto pt-4">
                {project.status === 'Privado' ? (
                  <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
                    <Lock size={13} /> Repositório privado
                  </span>
                ) : (
                  <>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-text hover:text-primary transition-colors"
                      >
                        <GithubIcon size={14} /> GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs text-text-muted/60">
                        <GithubIcon size={14} /> Em breve
                      </span>
                    )}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-text hover:text-primary transition-colors"
                      >
                        <ExternalLink size={14} /> Demo
                      </a>
                    ) : project.status && project.status !== 'Privado' ? (
                      <span className="inline-flex items-center gap-1.5 text-xs text-primary/80">
                        {project.status}
                      </span>
                    ) : null}
                  </>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
