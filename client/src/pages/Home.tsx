import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Send,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

const githubUrl = "https://github.com/NikoCartin";
const linkedInUrl = "https://www.linkedin.com/in/n%C3%ADcolas-cart%C3%ADn-reyes-6382852a/";

const engineeringCases = [
  {
    number: "01",
    eyebrow: "Shopify Plus · Product experience",
    title: "Multi-store commerce systems for fitness and equipment brands.",
    body: "Lead Shopify Plus development and e-commerce operations across regional storefronts. The work spans product data, inventory-aware buying paths, metafields, collections, financing, cart behavior, QA, and production releases.",
    image: "/assets/primal-storefront.jpg",
    tags: ["Shopify", "Liquid", "JavaScript", "Metafields", "Shopify CLI"],
    link: "https://github.com/NikoCartin/primal-strength-us-shopify",
    linkLabel: "View project overview",
  },
  {
    number: "02",
    eyebrow: "Shopify Functions · App extensions",
    title: "Checkout rules that fail safely, not silently.",
    body: "Built Rust/WASM Shopify Functions and extension-only app controls for membership-gated shipping and promotional gift logic. Eligibility is cart-line based, exclusions take precedence, and validation happens before payment.",
    image: "/assets/echelon-recovery.jpg",
    tags: ["Rust", "WASM", "GraphQL", "Polaris", "Checkout"],
    link: "https://github.com/NikoCartin/shopify-membership-shipping-discount-starter",
    linkLabel: "Explore the open-source starter",
  },
  {
    number: "03",
    eyebrow: "Commercial UX · Production recovery",
    title: "A commercial storefront hardened for real operational pressure.",
    body: "Maintained React-powered Shopify product experiences, quote flows, technical product data, routing, lead capture, and asset quality. Recovered a production JavaScript regression and introduced a controlled deployment and rollback baseline.",
    image: "/assets/echelon-commercial-hero.webp",
    tags: ["React", "Shopify", "Formspree", "QA", "Git"],
    link: "https://github.com/NikoCartin/echelon-commercial-portfolio",
    linkLabel: "Read the case-study overview",
  },
];

const capabilities = [
  {
    icon: Layers3,
    title: "Storefront architecture",
    text: "Dynamic product templates, data contracts, product and variant metafields, media rules, collections, membership selectors, companion-SKU logic, and regional merchandising.",
  },
  {
    icon: Workflow,
    title: "Commerce automation",
    text: "Shopify Functions, Admin GraphQL, apps, Flow design, fulfillment-aware rules, shipping controls, discounts, and controlled publishing workflows.",
  },
  {
    icon: Code2,
    title: "Full-stack foundations",
    text: "Liquid, TypeScript, JavaScript, React, Ruby, Python, PHP, Laravel, REST, GraphQL, MySQL, HTML, CSS, and production-ready Git workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Production discipline",
    text: "AWS and Linux troubleshooting, Nginx, SSL/TLS and Certbot recovery, targeted deployment, hash verification, QA matrices, documentation, and rollback readiness.",
  },
];

const emailSystems = [
  "Campaign concept, audience, copy, visual direction, and responsive HTML composition",
  "Shopify order-confirmation and post-purchase message improvements",
  "Klaviyo capture forms, footer embeds, and lifecycle-oriented conversion paths",
  "Deliverability-aware QA, links, CTAs, device checks, and campaign performance review",
];

const echelonWorkstreams = [
  {
    title: "Regional storefront operations",
    text: "Supported US, UK, Canada, France, Germany, and Ireland storefront experiences through Liquid, product operations, collection merchandising, apps, geo-routing, and release validation.",
    image: "/assets/echelon-storefront.jpg",
    tags: ["US · UK · CA", "Liquid", "Geo-routing"],
  },
  {
    title: "Dynamic product architecture",
    text: "Architected a reusable UK equipment template with 17 sections and 10 supporting snippets for galleries, memberships, financing, accessories, reviews, video, responsive UX, and cart behavior.",
    image: "/assets/echelon-recovery.jpg",
    tags: ["17 sections", "10 snippets", "Metafields"],
  },
  {
    title: "Commerce functions and promotional logic",
    text: "Built a Rust/WASM membership shipping Function and a fail-closed ThermaChill chair-gift workflow that protects paid garments and discounts only the marked gift line.",
    image: "/assets/echelon-storefront.jpg",
    tags: ["Rust/WASM", "Shopify Functions", "Cart QA"],
  },
  {
    title: "Commercial storefront hardening",
    text: "Improved product-data presentation, quote flows, Market Segment capture, specification downloads, navigation, technical SEO, runtime recovery, and stable production deployment for Echelon Commercial.",
    image: "/assets/echelon-commercial-catalog.webp",
    tags: ["React", "Formspree", "Production QA"],
  },
];

const earlierProjects = [
  {
    title: "Grupo Inmarca",
    type: "React landing page · PHP contact flow",
    text: "A responsive institutional and commercial landing page for a Brazilian fashion distributor in Costa Rica, with brand presentation, contact routing, WhatsApp, and custom responsive styling.",
    image: "/assets/grupo-inmarca.png",
    link: "https://github.com/NikoCartin/landing-page-grupo-inmarca",
  },
  {
    title: "MarbellaCR & NossoCR",
    type: "WordPress · WooCommerce · Branding · SEO",
    text: "Built and managed the WordPress and WooCommerce storefront for NossoCR, combining product catalogs, promotions, WhatsApp commerce, social content, SEO, and visual merchandising.",
    image: "/assets/marbella-banner.png",
    link: "https://nossocr.com/",
  },
  {
    title: "Laravel inventory system",
    type: "PHP · MySQL · MVC",
    text: "A complete inventory management system with products, suppliers, categories, CRUD operations, responsive UI, Blade templates, Eloquent ORM, and a clear MVC architecture.",
    image: "/assets/inventory-laravel.png",
    link: "https://github.com/NikoCartin/InventarioRapidoLaravel",
  },
  {
    title: "AJAX and PHP commerce systems",
    type: "Native web · Backend foundations",
    text: "Built shopping cart and e-commerce systems with PHP sessions, MySQL persistence, product management, checkout flows, Bootstrap, JavaScript, and AJAX state updates.",
    image: "/assets/ajax-cart.png",
    link: "https://github.com/NikoCartin/carrito-compras-ajax",
  },
];

const strategicDomains = [
  {
    number: "01",
    title: "Product, AI & automation",
    text: "Duke University specialization in Machine Learning for Product Owners, AI Product Management, prompt engineering, generative AI, workflow automation, and practical product thinking.",
  },
  {
    number: "02",
    title: "Web & commerce",
    text: "Valedictorian training in Web Design & Full Stack Development, Software Engineering studies, Shopify Plus, Liquid, React, PHP/MySQL, Laravel, APIs, and e-commerce systems.",
  },
  {
    number: "03",
    title: "Growth & digital marketing",
    text: "Digital Marketing Diploma from UIA, SEO, SEM, paid media, content strategy, email marketing, brand positioning, social campaigns, and conversion-focused experiences.",
  },
  {
    number: "04",
    title: "UX & creative systems",
    text: "3M UX design experience, Figma, design systems, accessibility, visual content, photography, video, storytelling, and customer-centered interface decisions.",
  },
  {
    number: "05",
    title: "Business & operations",
    text: "Business Administration technical degree with honors from TEC, B2B customer operations, Salesforce, SAP, Mocha, Formspree to HubSpot routing, reporting, and process improvement.",
  },
  {
    number: "06",
    title: "Communication & enablement",
    text: "Bilingual English and Spanish communication, technical support, interpreter coaching, Spanish audio annotation, training content, and cross-functional coordination.",
  },
];

type EchelonCommerceCase = {
  title: string;
  area: string;
  image: string;
  link: string;
  liveUrl?: string;
  tags: string[];
  problem: string;
  solution: string;
  impact: string;
};

const echelonCommerceCases: EchelonCommerceCase[] = [
  {
    title: "Regional Shopify storefront operations",
    area: "Echelon US · UK · Canada · Germany · France",
    image: "/assets/echelon-us-primal-storefront.png",
    link: "https://echelonfit.com",
    tags: ["Shopify Plus", "Liquid", "Merchandising"],
    problem: "Regional storefronts needed consistent product, collection, inventory, app, and customer-facing updates across different markets.",
    solution: "Managed themes, products, metafields, collections, apps, workflows, QA, Shopify CLI, geo-routing, and cross-store troubleshooting.",
    impact: "Improved consistency and operational reliability across a multi-store commerce environment while keeping regional needs intact.",
  },
  {
    title: "UK dynamic equipment template",
    area: "Echelon UK · Product architecture",
    image: "/assets/echelon-storefront.jpg",
    link: "https://echelonfit.uk",
    tags: ["17 sections", "10 snippets", "Metafields"],
    problem: "Hardcoded product templates made new equipment SKUs difficult to launch and maintain consistently.",
    solution: "Architected a reusable template with 17 sections and 10 supporting snippets for galleries, memberships, financing, accessories, reviews, video, responsive UX, and cart behavior.",
    impact: "Created a flexible product foundation that lets new equipment pages use structured data instead of repeated template edits.",
  },
  {
    title: "Custom Shopify membership shipping app",
    area: "Echelon Fit US · Checkout logic",
    image: "/assets/echelon-premier-membership-selector.png",
    link: "https://github.com/NikoCartin/shopify-membership-shipping-discount-starter",
    tags: ["Rust/WASM", "App Home", "Shopify Functions"],
    problem: "Free equipment shipping needed to apply only to eligible Premier Yearly and 2-Year membership purchases, not generic customer or product tags.",
    solution: "Built a portable extension-only Shopify app with a Rust/WASM delivery discount Function, App Home configurator, Direct API Access, automatic discount metafield configuration, explicit exclusions, tests, and CI validation.",
    impact: "Created a reusable custom app architecture that controls checkout eligibility and fails closed when configuration or membership criteria are missing.",
  },
  {
    title: "ThermaChill configuration and chair gift",
    area: "Echelon Fit US · Cart and product experience",
    image: "/assets/thermachill-selector.png",
    link: "https://echelonfit.com/products/thermachill",
    tags: ["App Extension", "Cart logic", "Shopify Discount Function"],
    problem: "ThermaChill needed a configurable garment selector and a Recliner Chair gift without making the garments or ThermaChill free.",
    solution: "Built the product selector, automatic marked-chair cart line, one-chair safeguard, and a fail-closed discount Function that targets only the gift line.",
    impact: "Created a clear purchase flow where selected garments remain paid and the qualifying chair is free in the cart.",
  },
  {
    title: "AWS Echelon Coach API recovery",
    area: "Echelon Coach · Backend and infrastructure",
    image: "/assets/echelon-coach-storefront.png",
    link: "https://github.com/NikoCartin/echelon-coach-ssl-recovery",
    liveUrl: "https://echeloncoach.com/virtualpt/",
    tags: ["AWS", "Linux", "Nginx", "SSL/TLS"],
    problem: "An expired SSL certificate interrupted the HTTPS path for an AWS-hosted Echelon Coach API.",
    solution: "Troubleshot the Linux and Nginx runtime, installed a Let’s Encrypt certificate with Certbot, validated HTTPS recovery, and confirmed automated renewal.",
    impact: "Restored the API’s secure connection and reduced the risk of the same certificate failure recurring.",
  },
  {
    title: "Commercial storefront hardening",
    area: "Echelon Commercial · Frontend and production QA",
    image: "/assets/echelon-commercial.png",
    link: "https://echeloncommercial.com",
    tags: ["React", "Formspree", "Runtime recovery"],
    problem: "A production JavaScript runtime issue and storefront workflow gaps affected navigation, quote flows, and customer-facing product experiences.",
    solution: "Recovered the runtime, validated deployment assets with checksums, improved quote and specification flows, and tightened targeted release and rollback practices.",
    impact: "Restored a stable commercial storefront and made future changes safer to validate and release.",
  },
];

const primalCommerceCases = [
  {
    title: "Quote template purchase-path remediation",
    area: "Primal Strength US · Quote products",
    image: "/assets/primal-quote-form.png",
    link: "https://us.primalstrength.com",
    tags: ["Liquid", "Templates", "POS"],
    problem: "Quote products displayed Request a Quote but some remained published to POS and retained an underlying Shopify cart path.",
    solution: "Removed quote-only products from POS and updated the live quote template so it no longer renders Shopify cart or checkout forms while preserving the quote flow.",
    impact: "Closed an unintended purchase route without removing Online Store visibility or quote-request functionality.",
  },
  {
    title: "Dynamic product video system",
    area: "Primal Strength US · Product content",
    image: "/assets/primal-see-it-in-action.png",
    link: "https://github.com/NikoCartin/primal-strength-us-shopify",
    tags: ["Metafields", "YouTube", "Vimeo", "Liquid"],
    problem: "Marketing needed to add product videos without hardcoding each product page or waiting for a theme release.",
    solution: "Created product metafields for YouTube/Vimeo URLs and direct Shopify video uploads, added rendering to the default and Quote templates, and assigned videos to matching PXD products.",
    impact: "Gave the team a repeatable way to manage product video content directly from Shopify Admin.",
  },
  {
    title: "Financing and US checkout adaptation",
    area: "Primal Strength US · Product and order experience",
    image: "/assets/primal-product-page.png",
    link: "https://us.primalstrength.com",
    tags: ["ChargeAfter", "SKU data", "Checkout", "Email"],
    problem: "The US storefront carried regional financing and fulfillment assumptions that did not match the intended US customer journey.",
    solution: "Adapted the financing integration to pass SKU and price dynamically, aligned product-page messaging, and updated order-confirmation content with US shipping and carrier rules.",
    impact: "Connected product pricing, financing, and post-purchase communication into a clearer US buying path.",
  },
  {
    title: "Formspree to HubSpot market routing",
    area: "Primal Strength US + Echelon Commercial · Lead operations",
    image: "/assets/primal-quote-form.png",
    link: "https://us.primalstrength.com",
    tags: ["Formspree", "HubSpot", "Workflows", "Market segments"],
    problem: "Quote and contact submissions needed to reach the designated owner by email while also creating a CRM record for structured sales follow-up.",
    solution: "Configured the Primal and Echelon Commercial Formspree forms to redirect submissions to the appropriate owner emails and create HubSpot contacts. Built a HubSpot workflow that uses the selected market segment to route each contact to the correct sales team owner.",
    impact: "Connected the form, email, CRM, and sales-routing layers so market-specific leads reach the right owner without manual triage.",
  },
  {
    title: "Klaviyo footer and collection merchandising",
    area: "Primal Strength US · Growth and discovery",
    image: "/assets/primal-home-gym-collection.png",
    link: "https://us.primalstrength.com",
    tags: ["Klaviyo", "Collections", "Merchandising"],
    problem: "The storefront needed an approved newsletter capture experience and a clearer way to surface in-stock products using the default template.",
    solution: "Replaced the footer capture with the approved Klaviyo form and updated collection sorting so eligible in-stock default-template products are easier to discover.",
    impact: "Connected acquisition capture with a more intentional product-discovery experience.",
  },
  {
    title: "See It in Action product media",
    area: "Primal Strength US · Product storytelling",
    image: "/assets/primal-home-strength.png",
    link: "https://us.primalstrength.com",
    tags: ["PDP content", "Video", "UX"],
    problem: "Technical equipment pages needed stronger product education without sacrificing a clean purchase path.",
    solution: "Added structured video and content placements for product demonstrations, FAQs, finance, shipping, and returns.",
    impact: "Made complex equipment easier to understand before purchase through a clearer content hierarchy.",
  },
];

function Tag({ children }: { children: string }) {
  return <span className="tag">{children}</span>;
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Go to the top of the portfolio">
          <span className="brand-mark">N</span>
          <span>Nicolás Cartín Reyes</span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#echelon" onClick={closeMenu}>Echelon</a>
          <a href="#shopify-work" onClick={closeMenu}>Cases</a>
          <a href="#email" onClick={closeMenu}>Email</a>
          <a href="#archive" onClick={closeMenu}>Archive</a>
          <a href="#strategy" onClick={closeMenu}>Expertise</a>
          <a href="#systems" onClick={closeMenu}>Systems</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-github" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-portrait" aria-hidden="true">
          <img src="/assets/nicolas-graduation-portrait.webp" alt="" loading="eager" fetchPriority="high" decoding="async" />
        </div>
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="availability-pill"><span />Available for remote Shopify &amp; full-stack work</div>
          <p className="hero-kicker">Full Stack Developer &amp; Digital Strategist · Shopify Plus</p>
          <h1>I build commerce<br /><em>that works.</em></h1>
          <p className="hero-lede">
            Shopify Plus development, full-stack e-commerce, and lifecycle email for teams that need a reliable storefront and a clear path to purchase.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View selected work <ArrowRight size={17} /></a>
            <a className="button button-quiet" href="https://mail.google.com/mail/?view=cm&fs=1&to=nicolascartinreyes@gmail.com&su=Portfolio%20inquiry&body=Hi%20Nicol%C3%A1s%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project%20with%20you." target="_blank" rel="noreferrer">Start a conversation <Mail size={17} /></a>
            <a className="resume-link" href="/assets/Nicolas-Cartin-Reyes-Resume-2026.pdf" target="_blank" rel="noreferrer">Resume PDF <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <aside className="hero-fact-card" aria-label="Professional overview">
          <span className="fact-label">Education</span>
          <strong>Valedictorian<br />Fidélitas graduate</strong>
          <div className="fact-divider" />
          <div className="fact-row"><span>Web Design &amp; Full Stack Development</span><b>Valedictorian</b></div>
          <div className="fact-row"><span>Business Administration · TEC</span><b>Honors</b></div>
          <div className="fact-row"><span>Machine Learning for Product Owners</span><b>Duke University</b></div>
        </aside>
        <div className="scroll-note"><span />Scroll to explore</div>
      </section>

      <section className="intro-strip">
        <p><strong>From checkout logic to campaign performance,</strong> I bridge development, product operations, UX, digital marketing, SEO, CRO, and growth work.</p>
        <div className="intro-tools" aria-label="Core technologies">
          <span>LIQUID</span><span>REACT</span><span>RUST/WASM</span><span>GRAPHQL</span><span>PYTHON</span><span>WORDPRESS</span><span>WOOCOMMERCE</span><span>DIGITAL MARKETING</span><span>SEO</span><span>CRO</span>
        </div>
      </section>

      <section className="education-section">
        <div className="section-shell education-grid">
          <div className="education-photo"><img src="/assets/nicolas-graduation-uia.jpg" alt="Nicolás Cartín Reyes at his graduation ceremony from UIA." loading="lazy" decoding="async" /></div>
          <div className="education-copy">
            <span className="eyebrow"><span className="eyebrow-dot" />Education &amp; perspective</span>
            <h2>Technical depth, business context, and a reason to keep learning.</h2>
            <p>I graduated <strong>valedictorian</strong> from Universidad Fidélitas in Web Design &amp; Full Stack Development, and graduated with honors from Tecnológico de Costa Rica (TEC) with a Business Administration Technical Degree.</p>
            <p>I also completed Software Engineering studies at Fidélitas and earned a Digital Marketing Diploma from UIA. My continuing education includes Product Management, AI, UX/UI, cybersecurity, and digital marketing.</p>
            <div className="education-highlight">
              <span>Featured specialization</span>
              <strong>Machine Learning for Product Owners</strong>
              <b>Duke University</b>
            </div>
            <p>That mix shapes how I work: I care about the code, but also about the product decision, the customer journey, the team operating the system, and the result after launch.</p>
            <div className="education-tags"><Tag>Valedictorian · Fidélitas</Tag><Tag>TEC · Honors</Tag><Tag>Web Design &amp; Full Stack Development</Tag><Tag>Business Administration</Tag><Tag>Duke University · Machine Learning</Tag><Tag>Digital Marketing · UIA</Tag></div>
          </div>
        </div>
      </section>

      <section className="strategy-section" id="strategy">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Digital strategy across disciplines"
            title="A broader skill set, organized around outcomes."
            text="My studies and certifications cover more than one technical lane. They help me connect product decisions, customer experience, marketing, technology, and operations in the same project."
          />
          <div className="strategy-grid">
            {strategicDomains.map((domain) => (
              <article className="strategy-card" key={domain.number}>
                <span>{domain.number}</span>
                <h3>{domain.title}</h3>
                <p>{domain.text}</p>
              </article>
            ))}
          </div>
          <div className="credential-rail"><span>Selected credentials &amp; study areas</span><p>Machine Learning for Product Owners · Duke University &nbsp; / &nbsp; Web Design &amp; Full Stack Development · Universidad Fidélitas &nbsp; / &nbsp; Business Administration · TEC &nbsp; / &nbsp; Digital Marketing · UIA &nbsp; / &nbsp; Software Engineering · Universidad Fidélitas &nbsp; / &nbsp; UX Design · 3M</p></div>
        </div>
      </section>

      <section className="work-section section-shell" id="work">
          <SectionHeading
            eyebrow="Selected engineering work"
            title="Built for the details that make e-commerce reliable."
            text="A selection of recent work across Shopify, e-commerce, product systems, and growth."
        />
        <div className="case-list">
          {engineeringCases.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-index">{project.number}</div>
              <div className="project-copy">
                <span className="project-eyebrow">{project.eyebrow}</span>
                <h3>{project.title}</h3>
                <p>{project.body}</p>
                <div className="tag-list">{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
                <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                  {project.linkLabel} <ArrowUpRight size={16} />
                </a>
              </div>
              <a className="project-image" href={project.link} target="_blank" rel="noreferrer" aria-label={project.linkLabel}>
                <img src={project.image} alt="" loading="lazy" decoding="async" />
                <span className="image-arrow"><ArrowUpRight size={21} /></span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="echelon-section" id="echelon">
        <div className="section-shell">
          <div className="echelon-heading-row">
            <SectionHeading
              eyebrow="Echelon experience"
              title="A wider view of the work behind the storefront."
              text="Beyond individual fixes, I have worked across the storefront, product data, checkout rules, commercial UX, infrastructure recovery, integrations, and operating documentation that keep a multi-region commerce business moving."
            />
            <div className="echelon-stats" aria-label="Echelon experience summary">
              <div><b>8</b><span>storefronts &amp; related sites</span></div>
              <div><b>3</b><span>core Shopify regions in public profile</span></div>
              <div><b>17</b><span>sections in reusable UK template</span></div>
            </div>
          </div>
          <div className="echelon-work-grid">
            {echelonWorkstreams.map((workstream, index) => (
              <article className="echelon-card" key={workstream.title}>
                <div className="echelon-card-media"><img src={workstream.image} alt="" loading="lazy" decoding="async" /><span>0{index + 1}</span></div>
                <div className="echelon-card-body">
                  <span className="project-eyebrow">{workstream.tags.join(" · ")}</span>
                  <h3>{workstream.title}</h3>
                  <p>{workstream.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="echelon-proof-bar">
            <span>Representative stack</span>
            <p>Shopify Plus · Liquid · JavaScript · TypeScript · React · Rust/WASM · GraphQL · Python · Shopify CLI · AWS · Linux · Nginx · SSL/TLS · GitHub</p>
            <a className="text-link" href="https://github.com/NikoCartin/echelon-sops" target="_blank" rel="noreferrer">Explore related documentation <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="shopify-cases-section" id="shopify-work">
        <div className="section-shell">
          <div className="shopify-cases-intro">
            <SectionHeading
              eyebrow="Shopify work · Problem / Solution / Impact"
              title="The work behind the storefronts."
              text="A closer look at the product, frontend, backend, infrastructure, and growth projects delivered across Echelon and Primal."
            />
            <div className="case-count"><b>{echelonCommerceCases.length + primalCommerceCases.length}</b><span>selected initiatives</span></div>
          </div>

          <div className="featured-app">
            <div className="featured-app-mark"><Code2 size={23} /></div>
            <div className="featured-app-copy">
              <span>Featured custom app</span>
              <h3>Shopify Membership Shipping Discount Starter</h3>
              <p>A reusable extension-only app architecture with a Rust/WASM delivery discount Function, App Home configurator, Direct API Access, automatic discount configuration, explicit exclusions, safe failure, tests, and CI.</p>
              <div className="tag-list"><Tag>Rust/WASM</Tag><Tag>Shopify Functions</Tag><Tag>App Home</Tag><Tag>Direct API Access</Tag><Tag>CI</Tag></div>
            </div>
            <a className="featured-app-link" href="https://github.com/NikoCartin/shopify-membership-shipping-discount-starter" target="_blank" rel="noreferrer">View repository <ArrowUpRight size={17} /></a>
          </div>

          <div className="case-group">
            <div className="case-group-heading"><span>01 / Echelon</span><h3>Commerce, infrastructure, and customer experience across regional storefronts.</h3></div>
            <div className="case-study-grid">
              {echelonCommerceCases.map((project) => (
                <article className="case-study-card" key={project.title}>
                  <a className="case-study-media" href={project.liveUrl ?? project.link} target="_blank" rel="noreferrer"><img src={project.image} alt="" loading="lazy" decoding="async" /><span><ArrowUpRight size={17} /></span></a>
                  <div className="case-study-body">
                    <span className="case-study-area">{project.area}</span>
                    <h4>{project.title}</h4>
                    <div className="tag-list">{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
                    <dl className="case-facts">
                      <div><dt>Problem</dt><dd>{project.problem}</dd></div>
                      <div><dt>Solution</dt><dd>{project.solution}</dd></div>
                      <div><dt>Impact</dt><dd>{project.impact}</dd></div>
                    </dl>
                    <div className="case-study-links">
                      <a className="text-link" href={project.link} target="_blank" rel="noreferrer">{project.link.includes("github.com") ? "View technical case" : "See storefront"} <ArrowUpRight size={15} /></a>
                      {project.liveUrl ? <a className="text-link case-live-link" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live platform <ArrowUpRight size={15} /></a> : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="case-group case-group-primal">
            <div className="case-group-heading"><span>02 / Primal Strength</span><h3>Product templates, content systems, lead capture, and conversion paths.</h3></div>
            <div className="case-study-grid">
              {primalCommerceCases.map((project) => (
                <article className="case-study-card" key={project.title}>
                  <a className="case-study-media" href={project.link} target="_blank" rel="noreferrer"><img src={project.image} alt="" loading="lazy" decoding="async" /><span><ArrowUpRight size={17} /></span></a>
                  <div className="case-study-body">
                    <span className="case-study-area">{project.area}</span>
                    <h4>{project.title}</h4>
                    <div className="tag-list">{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
                    <dl className="case-facts">
                      <div><dt>Problem</dt><dd>{project.problem}</dd></div>
                      <div><dt>Solution</dt><dd>{project.solution}</dd></div>
                      <div><dt>Impact</dt><dd>{project.impact}</dd></div>
                    </dl>
                    <a className="text-link" href={project.link} target="_blank" rel="noreferrer">{project.link.includes("github.com") ? "View related code" : "See storefront"} <ArrowUpRight size={15} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="build-notes section-shell">
        <div className="notes-panel">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" />Working method</span>
            <h2>Ship narrowly.<br />Validate broadly.</h2>
          </div>
          <div className="notes-copy">
            <p>For production Shopify work, I use controlled file scopes, fresh baselines, targeted deployment, pull-back validation, customer-safe tests, and documented rollback paths.</p>
            <a className="text-link" href="https://github.com/NikoCartin/shopify-dynamic-pdp-playbook" target="_blank" rel="noreferrer">Explore the dynamic PDP playbook <ArrowUpRight size={16} /></a>
          </div>
          <div className="steps" aria-label="Deployment workflow">
            <span><b>01</b> Map the source of truth</span>
            <span><b>02</b> Build the smallest safe change</span>
            <span><b>03</b> Validate on a controlled path</span>
            <span><b>04</b> Release, verify, document</span>
          </div>
        </div>
      </section>

      <section className="email-section" id="email">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Email marketing & lifecycle"
            title="Email is not a send button. It is a product surface."
            text="I combine campaign strategy, copy, design, platform configuration, responsive implementation, and performance review to create email experiences that feel connected to the storefront."
          />
          <div className="email-feature-grid">
            <article className="campaign-card">
              <div className="campaign-card-top">
                <div><span className="campaign-mini-label">Campaign performance</span><h3>Mid-Year Promo</h3></div>
                <span className="campaign-status"><Check size={13} /> Sent</span>
              </div>
              <div className="metric-grid">
                <div><b>40%</b><span>Open rate</span></div>
                <div><b>4.29%</b><span>Click rate</span></div>
                <div><b>10.71%</b><span>CTOR</span></div>
                <div><b>0%</b><span>Unsubscribe</span></div>
              </div>
              <div className="campaign-proof">
                <a className="image-link" href="https://hablemosdemma.com/" target="_blank" rel="noreferrer" aria-label="Visit Hablemos de MMA">
                  <img src="/assets/hmma-midyear-campaign-metrics.png" alt="Performance dashboard for the Hablemos de MMA Mid-Year Promo email campaign." loading="lazy" decoding="async" />
                </a>
              </div>
              <p className="campaign-caption">Hablemos de MMA · 70 recipients · July 2026. The performance snapshot also recorded a 5.7% bounce rate, a useful signal for list hygiene and deliverability review.</p>
            </article>
            <aside className="email-system-card">
              <div className="email-icon"><Send size={24} /></div>
              <h3>Lifecycle work across campaign and commerce touchpoints.</h3>
              <ul>
                {emailSystems.map((item) => <li key={item}><Check size={16} />{item}</li>)}
              </ul>
              <div className="email-system-footer">
                <span>Tools in the mix</span>
                <div><Tag>Shopify</Tag><Tag>Klaviyo</Tag><Tag>MailerLite</Tag><Tag>HTML</Tag></div>
              </div>
            </aside>
          </div>
          <div className="email-workbench">
            <div className="email-design-case">
              <div className="email-case-copy">
                <span className="campaign-mini-label">Email design example</span>
                <h3>Promotional storytelling designed for the inbox.</h3>
                <p>A loyalty-focused Hablemos de MMA campaign with a clear offer, readable product imagery, a promotional code, and one direct purchase CTA. The layout was built to stay focused on a narrow mobile screen.</p>
                <div className="case-detail-list">
                  <span><Check size={15} />Offer hierarchy</span>
                  <span><Check size={15} />Product-forward creative</span>
                  <span><Check size={15} />Mobile-first composition</span>
                </div>
              </div>
              <div className="email-phone-preview"><a className="image-link" href="https://hablemosdemma.com/" target="_blank" rel="noreferrer" aria-label="Visit Hablemos de MMA"><img src="/assets/hmma-midyear-email-design.png" alt="Mid-year promotional email designed for Hablemos de MMA customers." loading="lazy" decoding="async" /></a></div>
            </div>
            <div className="campaign-history-case">
              <span className="campaign-mini-label">Campaign portfolio</span>
              <h3>A repeatable campaign practice, with measurable learnings.</h3>
              <p>The campaign library includes welcome, promotion, loyalty, and seasonal Black November sends. Results are reviewed across open rate, click rate, CTOR, recipients, and list quality to guide the next iteration.</p>
              <a className="image-link" href="https://hablemosdemma.com/" target="_blank" rel="noreferrer" aria-label="Visit Hablemos de MMA"><img src="/assets/hmma-campaign-history.png" alt="Hablemos de MMA campaign history showing performance metrics across promotional, welcome, and seasonal emails." loading="lazy" decoding="async" /></a>
            </div>
          </div>
          <div className="email-proof-row">
            <article>
              <span>Shopify transactional email</span>
              <h4>Clear post-purchase communication for real fulfillment paths.</h4>
              <p>Updated a regional Shopify order-confirmation experience to align dispatch guidance, carrier expectations, support routes, and purchase context.</p>
              <a className="proof-link" href="https://github.com/NikoCartin/primal-strength-us-shopify/blob/main/templates/order-confirmation-email.html" target="_blank" rel="noreferrer">See the public code record <ArrowUpRight size={14} /></a>
            </article>
            <article>
              <span>On-site capture</span>
              <h4>Newsletter forms that belong to the conversion path.</h4>
              <p>Implemented approved Klaviyo footer capture and kept form behavior aligned with site templates and customer acquisition flows.</p>
            </article>
            <article>
              <span>Campaign craft</span>
              <h4>Design, code, and performance in the same workflow.</h4>
              <p>Created promotional email experiences for product launches, seasonal offers, and loyalty activation with clear CTA hierarchy and mobile-aware layouts.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="archive-section" id="archive">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Earlier work"
            title="The foundation is broader than Shopify."
            text="Before leading Shopify storefront work, I built websites, e-commerce systems, landing pages, inventory tools, and UX improvements across multiple stacks. These projects show the range behind the current practice."
          />
          <div className="archive-grid">
            {earlierProjects.map((project) => (
              <article className="archive-card" key={project.title}>
                <a className="archive-media" href={project.link} target="_blank" rel="noreferrer"><img src={project.image} alt="" loading="lazy" decoding="async" /><span><ArrowUpRight size={17} /></span></a>
                <div className="archive-copy">
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <a className="text-link" href={project.link} target="_blank" rel="noreferrer">View project record <ArrowUpRight size={15} /></a>
                </div>
              </article>
            ))}
          </div>
          <div className="ux-case-strip">
            <a className="image-link" href="https://www.3m.com/" target="_blank" rel="noreferrer" aria-label="Visit 3M.com"><img src="/assets/three-m-ux.png" alt="3M Annual Report page redesign example from a UX design portfolio case." loading="lazy" decoding="async" /></a>
            <div>
              <span className="eyebrow"><span className="eyebrow-dot" />3M UX design stretch assignment</span>
              <h3>Design-system thinking for complex, content-heavy experiences.</h3>
              <p>Contributed to key 3M.com page redesign work using the Modular Design System, Figma research and prototypes, accessibility considerations, documentation, and validation with the global UX team.</p>
              <a className="text-link" href="https://www.3m.com/" target="_blank" rel="noreferrer">Visit 3M.com <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="platform-section section-shell" id="systems">
        <div className="platform-header">
          <SectionHeading
            eyebrow="Systems I work in"
            title="The overlap is the advantage."
            text="I bring engineering depth to marketing and operational judgment to product decisions."
          />
          <div className="stack-callout"><Sparkles size={19} /><span>Commerce work that respects the customer, the team, and production.</span></div>
        </div>
        <div className="capability-grid">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <article className="capability-card" key={title}>
              <Icon size={23} strokeWidth={1.8} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="toolbelt">
          <div><span className="toolbelt-label">Commerce</span><p>Shopify Plus · Shopify Functions · Liquid · App Extensions · Shopify CLI · Klaviyo · ChargeAfter · Formspree</p></div>
          <div><span className="toolbelt-label">Engineering</span><p>TypeScript · JavaScript · React · Rust/WASM · Python · Ruby · PHP/Laravel · REST · GraphQL · MySQL</p></div>
          <div><span className="toolbelt-label">Infrastructure &amp; quality</span><p>AWS · Linux/Ubuntu · Nginx · SSL/TLS · Certbot · Git · GitHub · QA · Deployment validation · Rollback</p></div>
        </div>
      </section>

      <section className="additional-work">
        <div className="section-shell additional-work-grid">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" />Beyond client systems</span>
            <h2>Independent work that keeps the craft practical.</h2>
            <p>Founder of Hablemos de MMA, a content and commerce platform for the martial arts community in Costa Rica. I have also built e-commerce, landing-page, inventory, and frontend projects across WordPress, WooCommerce, PHP, Laravel, React, and native JavaScript.</p>
            <div className="additional-links">
              <a className="text-link" href="https://hablemosdemma.com/" target="_blank" rel="noreferrer">Visit Hablemos de MMA <ArrowUpRight size={16} /></a>
              <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">Browse GitHub projects <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="hmma-image-wrap"><a className="image-link" href="https://hablemosdemma.com/" target="_blank" rel="noreferrer" aria-label="Visit Hablemos de MMA"><img src="/assets/hmma-platform.webp" alt="Hablemos de MMA platform preview." loading="lazy" decoding="async" /></a></div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-top section-shell">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" />Let&apos;s build</span>
            <h2>Have a commerce problem worth solving?</h2>
            <p>I&apos;m based in Costa Rica and work remotely with international teams on Shopify Plus, full-stack e-commerce, UX, and lifecycle systems.</p>
          </div>
          <a className="contact-email" href="mailto:nicolascartinreyes@gmail.com">nicolascartinreyes@gmail.com <ArrowUpRight size={20} /></a>
        </div>
        <div className="footer-bottom section-shell">
          <span>© {new Date().getFullYear()} Nicolás Cartín Reyes</span>
          <div>
            <a href={githubUrl} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a href={linkedInUrl} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            <a href="mailto:nicolascartinreyes@gmail.com"><Mail size={17} /> Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
