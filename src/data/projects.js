// Edite livremente: textos, tecnologias, links e badges de cada projeto.
export const projects = [
  {
    id: 'system-ia',
    name: 'System IA',
    tag: 'Projeto Principal',
    description:
      'Assistente pessoal de IA com grafo de conhecimento, memória de longo prazo e RAG, construído com foco em arquitetura escalável.',
    tech: ['FastAPI', 'Angular', 'PostgreSQL', 'RAG'],
    github: 'https://github.com/devluccalima/system-ai',
    demo: '',
    status: 'Em desenvolvimento',
    featured: true,
  },
  {
    id: 'scc',
    name: 'SCC - Sistema Controle de Combustível',
    tag: 'Sistema Web Corporativo',
    description:
      'Modelo E2E desenvolvido para substituir um processo manual em planilhas Excel por um sistema web completo, trazendo automação e confiabilidade para a operação.',
    tech: ['Python', 'Flask', 'PostgreSQL', 'React', 'Docker', 'Nginx', 'gunicorn', 'REST API'],
    github: null, // repositório privado
    demo: null,
    status: 'Privado',
  },
  {
    id: 'bingo-loot',
    name: 'Bingo Loot',
    tag: 'Aplicação Java',
    description:
      'BingoLoot é uma aplicação Full Stack que gamifica a organização financeira, transformando depósitos diários em desafios inspirados em RPGs, com sistema de raridade, progressão de rank e dashboard interativo.',
    tech: ['Java', 'Spring Boot', 'Angular', 'SCSS', 'REST API', 'SQLite'],
    github: 'https://github.com/devluccalima/bingoloot-fullstack',
    demo: '',
    status: 'Concluído',
  },
  {
    id: 'vynce',
    name: 'Vynce Finance',
    tag: 'Aplicação',
    description:
      'Vynce Finance é uma plataforma SaaS de controle financeiro pessoal que permite gerenciar receitas, despesas, parcelamentos e metas financeiras por meio de dashboards e relatórios em tempo real.',
    tech: ['TypeScript', 'React Native', 'Expo', 'Python', 'Flask', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/devluccalima/controle-financeiro-saas',
    demo: '',
    status: '90% concluído',
  },
  
]
