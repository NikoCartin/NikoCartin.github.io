# Nicolás Cartín Reyes Portfolio

Personal portfolio for **Nicolás Cartín Reyes**, Shopify Plus developer, full-stack e-commerce engineer, and digital strategist.

## Published site

The site is published through GitHub Pages at:

- `https://nikocartin.github.io/`

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- GitHub Actions
- GitHub Pages

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm check
pnpm build
```

The production output is generated in `dist/` and contains the static files deployed to GitHub Pages.

## Deployment

GitHub Pages serves the generated static files from the root of `main`. Every push to `main` runs `.github/workflows/deploy-pages.yml`, builds the Vite site, refreshes the root `index.html` and `assets/` output, and pushes the generated files back with a skip-CI commit.

## Portfolio focus

The portfolio presents selected work across:

- Shopify Plus storefront architecture and Liquid development
- Shopify Functions, Rust/WASM, GraphQL, and custom apps
- E-commerce frontend, backend, and infrastructure work
- AWS, Linux, Nginx, SSL/TLS, and production recovery
- Digital marketing, SEO, CRO, email marketing, and CRM workflows
- Primal Strength, Echelon Fitness, Echelon Coach, and earlier web projects

Developed and maintained by **Nicolás Cartín Reyes, Lead Developer**.
