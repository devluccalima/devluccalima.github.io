import { motion } from 'framer-motion'
import { Server, Layout, Database, GitBranch } from 'lucide-react'

const categories = [
  {
    title: 'Backend',
    icon: Server,
    skills: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Node.js (Express)', 'Flask', 'APIs RESTful'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'TailwindCSS'],
  },
  {
    title: 'Banco de Dados',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'OracleSQL', 'SQLAlchemy'],
  },
  {
    title: 'DevOps & Arquitetura',
    icon: GitBranch,
    skills: ['Docker', 'Git', 'Clean Architecture', 'SOLID', 'Microsserviços', 'JWT', 'Nginx'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Stack
          </span>
          <h2 className="text-3xl font-bold text-text mt-2">Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {categories.map(({ title, icon: Icon, skills }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-surface border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <Icon size={17} className="text-primary" />
                <h3 className="text-sm font-semibold text-text">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-text-muted bg-bg border border-border rounded-md px-2.5 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
