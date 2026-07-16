# Portfólio — Lucca Lima

Portfólio profissional construído com **React + Vite + TailwindCSS v4 + Framer Motion**.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:5173

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/
    Navbar.jsx        # navbar fixa + toggle de tema + menu mobile
    Hero.jsx           # seção inicial
    About.jsx          # Sobre Mim
    Skills.jsx          # categorias de skills
    Projects.jsx        # cards de projetos (dados em src/data/projects.js)
    Experience.jsx      # card de experiência profissional
    Contact.jsx         # cards de contato + botão de currículo
    Footer.jsx
    BrandIcons.jsx       # ícones de GitHub/LinkedIn (removidos do lucide-react)
  data/
    projects.js          # EDITE AQUI: nomes, descrições, techs e links dos projetos
  hooks/
    useTheme.js           # tema claro/escuro com persistência em localStorage
  index.css                # tokens de cor (dark/light) via @theme do Tailwind v4
  App.jsx
  main.jsx
```

## O que você provavelmente vai querer editar

1. **`src/data/projects.js`** — textos, tecnologias reais e links de cada projeto (GitHub/Demo).
2. **`src/components/About.jsx`** — os dois parágrafos de trajetória (marcados com comentários `{/* Edite... */}`).
3. **`src/components/Experience.jsx`** — descrição da atuação na PaulOOctavio.
4. **`src/components/Contact.jsx`** — email, LinkedIn e GitHub reais.
5. **`public/curriculo-lucca-lima.pdf`** — adicione seu PDF de currículo nesse caminho para o botão "Baixar Currículo" funcionar (o link já aponta para `/curriculo-lucca-lima.pdf`).

## Tema claro/escuro

As cores ficam centralizadas em `src/index.css` como variáveis CSS (`--color-bg`, `--color-surface`,
`--color-primary`, etc.), sobrescritas em `html.light`. O hook `useTheme` alterna a classe `light`
na tag `<html>` e persiste a escolha em `localStorage` (chave `lucca-portfolio-theme`), respeitando
a preferência do sistema operacional na primeira visita.

## Paleta (modo escuro)

| Uso | Cor |
|---|---|
| Fundo | `#0F172A` |
| Cards | `#1E293B` |
| Cor principal | `#2563EB` |
| Fonte | Inter (+ JetBrains Mono para badges/tags) |
