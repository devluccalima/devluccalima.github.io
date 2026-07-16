import { motion } from 'framer-motion'
import { Mail, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dev.luccalima@gmail.com',
    href: 'mailto:dev.luccalima@gmail.com',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/devluccalima',
    href: 'https://linkedin.com/in/devluccalima',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/devluccalima',
    href: 'https://github.com/devluccalima',
  },
]

export default function Contact() {
  return (
    <section id="contato" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Vamos conversar
          </span>
          <h2 className="text-3xl font-bold text-text mt-2">Contato</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {contacts.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-3 bg-surface border border-border hover:border-primary/50 rounded-xl p-6 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-text">{label}</p>
                <p className="text-xs text-text-muted mt-1 break-all">{value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <a
            href="/curriculo-lucca-lima.pdf"
            download
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-lg shadow-primary/20"
          >
            <Download size={16} /> Baixar Currículo
          </a>
        </motion.div>
      </div>
    </section>
  )
}
