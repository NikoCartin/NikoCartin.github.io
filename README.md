# Nicolás Cartín Reyes Portfolio

Personal portfolio for **Nicolás Cartín Reyes**, Shopify Plus developer, full-stack e-commerce engineer, and digital strategist.

<p align="center">
  <a href="https://nikocartin.github.io/">
    <img src="client/public/assets/commerce-systems-hero.jpg" alt="Nicolás Cartín Reyes commerce systems portfolio" width="100%"/>
  </a>
</p>

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
- WordPress and WooCommerce storefront engineering, Elementor, PHP hooks, and responsive collection filtering
- Shopify Functions, Rust/WASM, GraphQL, and custom apps
- E-commerce frontend, backend, and infrastructure work
- AWS, Linux, Nginx, SSL/TLS, and production recovery
- Digital marketing, SEO, CRO, email marketing, and CRM workflows
- Primal Strength, Echelon Fitness, Echelon Coach, and earlier web projects

## NossoCR WordPress engineering

The WordPress section includes a collection-filtering contribution led by **Nícolas Cartín Reyes, Lead Developer**, using the site's existing WooCommerce, Elementor Pro, and YITH stack with targeted PHP hooks and responsive CSS. The case covers leaf-category and brand eligibility, contextual Color and Size filters, a desktop sidebar above 1024 px, and a mobile and tablet bottom-sheet drawer at 1024 px and below. It records 19 verified checks across canonical pages and 390, 768, and 1280 px viewports.

- Portfolio section: https://nikocartin.github.io/#woocommerce
- [Public engineering case study](https://github.com/NikoCartin/nossocr-wordpress/blob/main/case-studies/collection-filter-sidebar.md)
- Desktop screenshot: `client/public/assets/nosso-collection-filters.webp`
- Mobile drawer screenshot: `client/public/assets/nosso-mobile-filter-drawer.webp`
- Both screenshots show the public interface; prices and result counts are omitted, and no administrative session data is included.
- On mobile, a Mobile/Desktop switch presents one preview at a time, defaulting to Mobile for a balanced layout. Wider screens show both captures together.
- Production code, import files, and operating records remain in the private maintenance repository. No conversion uplift is claimed.

Developed and maintained by **Nicolás Cartín Reyes, Lead Developer**.
