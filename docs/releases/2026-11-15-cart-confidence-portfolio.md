# US cart financing and product-rating case study

Status: published and verified on November 15, 2026, Costa Rica time. GitHub documentation and tracker entry P149 are complete.

## Scope

Add one focused case study inside the existing Echelon section, preserving the current portfolio design and unrelated projects. The latest-case hero anchor now reaches that article. Both approved laptop and phone presentations are included, with accessible native-dialog enlargement.

The problem statement reflects the requested framing: financing widgets were too small, and the cart lacked product star ratings to support the purchase. The solution describes the final compact provider-logo/chooser layout and dynamic, authentic product-specific Bazaarvoice summaries.

## Evidence and claim boundaries

The case uses the approved November 15 live captures in presentation frames, optimized as WebP without replacing the storefront UI or inventing review values. Prices, offers and ratings are point-in-time information. No conversion, revenue or purchase-completion result is claimed.

The implementation record confirms scoped release and live desktop/mobile checks, matching native averages/counts, financing chooser interaction and removal-driven rating refresh. The tests did not submit an order or financing application. See the [US cart implementation record](https://github.com/NikoCartin/Dynamic2026-UK/blob/main/workstreams/2026-11-15-us-cart-approved-live/README.md).

## Files

- `client/src/pages/Home.tsx`: Echelon article, both views, enlargement dialog and latest-case anchor.
- `client/src/portfolio-cases.css`: additive case-scoped layout and responsive styles.
- `client/public/assets/portfolio-cart-desktop.webp`: approved laptop presentation.
- `client/public/assets/portfolio-cart-mobile.webp`: approved phone presentation.

## Release boundary

The reviewed work was prepared on `preview/us-cart-case-20261115`, based on main revision `117c6bbbb51c0c6930095963ee2676cce9fbfcab`. The pre-existing untracked package lock is preserved and excluded. Dependency manifests, the Pages workflow, existing case studies and unrelated portfolio content are unchanged.

The user explicitly approved publication with “And publish the portfolio update”. The approved source is released through the existing main-branch GitHub Actions workflow, which validates and builds the site, then updates the generated root HTML/assets used by GitHub Pages. No Pages configuration, DNS, repository visibility or Shopify storefront change is authorized or required.

## Documentation and tracker

The portfolio-specific tracker entry is separate from the completed US storefront implementation. Both records distinguish portfolio publication from the original commerce work and retain the boundary on unmeasured business outcomes.

Tracker: https://docs.google.com/spreadsheets/d/1G6y-j6zifFepKyy4PQ7irN9DoKcS_Nxto9_xKoEAyPU/edit#gid=493767023&range=A180:J180

Public portfolio: https://nikocartin.github.io/

## Preview QA

TypeScript checking and the production build passed. The local production bundle passed seven bounded checks: Echelon placement and latest-case navigation; both screenshot dialogs with Escape/focus return; existing regional financing controls, disclosure and dialog; existing geo/Nosso gallery round-trips; responsive resizing at 375, 390, 768 and 1440 pixels including a short desktop window; mobile-menu interaction; and anchor/loaded-image validity. No page errors were captured in that run.

Both desktop and mobile case screenshots were visually inspected. The new case retains readable problem/solution/verification copy, both real presentation images and point-in-time/commercial-result qualifications. The new gallery stacks on narrow screens.

The same seven bounded checks passed again against the deployed hosted payload in a fresh isolated context. Hosted screenshots confirmed the existing desktop/mobile hero, the new case and screenshot enlargement. No page errors, missing in-page destinations, broken loaded images or document-level horizontal overflow were captured in those checks. This is scoped portfolio QA, not a new audit of the Shopify storefront or all external destinations.

## Production release and public verification

- Source release: `c728973be78d1192926e4a99bd1d4a0e8430b3e3`, including the reviewed case-study implementation `7348eb976952657b57faea590e7d3f1699642a82`.
- Generated public output: `87bed8d17faf289ca036aa5ffe3c638b74a148ec`.
- [Build and publish portfolio](https://github.com/NikoCartin/NikoCartin.github.io/actions/runs/43784126414): completed successfully.
- [GitHub Pages production deployment](https://github.com/NikoCartin/NikoCartin.github.io/actions/runs/43784168034): completed successfully.
- [Live portfolio](https://nikocartin.github.io/): opened in a fresh isolated browser context and rendered the approved cart case inside the Echelon section with both real desktop/mobile presentations.

All seven bounded checks were repeated successfully against the public site: latest-case navigation and Echelon placement; desktop enlargement with Escape/focus return; mobile enlargement with Escape/focus return; original financing controls, disclosure and dialog; geo/Nosso gallery round-trips; responsive/mobile-menu checks; and anchor/loaded-image validity. Responsive checks included 375, 390, 768 and 1440 pixels plus a short desktop window. No page errors were captured. Public screenshots were visually inspected for the case, mobile hero and enlarged image.

Tracker P149 was written only to `Pipeline!A180:J180`, with status Completed. Independent readback verified all ten cells and confirmed surrounding rows were unchanged, at `2026-11-16T01:07:45.545Z` (November 15 in Costa Rica). The entry contains the live URL, this document, source/generated revisions, successful workflows, scope and verification boundaries.

No Shopify storefront, checkout, inventory, provider configuration or tracking implementation was changed by this portfolio release. No new commerce outcome or conversion uplift is claimed.

## Rollback

If release verification identifies a regression, use a new reviewed source rollback commit against the recorded pre-release revision and let the same workflow regenerate the public output. Do not force-push history, change Pages settings or replace unrelated portfolio work.
