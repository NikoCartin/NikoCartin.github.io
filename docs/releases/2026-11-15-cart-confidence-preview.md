# US cart financing and product-rating case study

Status: portfolio preview awaiting approval. GitHub Pages has not been updated.

## Scope

Add one focused case study inside the existing Echelon section, preserving the current portfolio design and unrelated projects. The latest-case hero anchor now reaches that article. Both approved laptop and phone presentations are included, with accessible native-dialog enlargement.

The problem statement reflects the requested framing: financing widgets were too small, and the cart lacked product star ratings to support the purchase. The solution describes the final compact provider-logo/chooser layout and dynamic, authentic product-specific Bazaarvoice summaries.

This case concerns the live US cart implementation, not the unrelated unpublished UK Summit work.

## Evidence and claim boundaries

The case uses the approved November 15 live captures in presentation frames, optimized as WebP without replacing the storefront UI or inventing review values. Prices, offers and ratings are point-in-time information. No conversion, revenue or purchase-completion result is claimed.

The implementation record confirms scoped release and live desktop/mobile checks, matching native averages/counts, financing chooser interaction and removal-driven rating refresh. The tests did not submit an order or financing application. See the [US cart implementation record](https://github.com/NikoCartin/Dynamic2026-UK/blob/main/workstreams/2026-11-15-us-cart-approved-live/README.md).

## Files

- `client/src/pages/Home.tsx`: Echelon article, both views, enlargement dialog and latest-case anchor.
- `client/src/portfolio-cases.css`: additive case-scoped layout and responsive styles.
- `client/public/assets/portfolio-cart-desktop.webp`: approved laptop presentation.
- `client/public/assets/portfolio-cart-mobile.webp`: approved phone presentation.

## Release boundary

Work is isolated on `preview/us-cart-case-20261115`, based on the current fetched main revision. The pre-existing untracked package lock is preserved and excluded. Production source, generated root assets, dependency manifests and the Pages workflow are not changed by this preview.

Publishing requires portfolio approval. Do not push the preview to main or trigger the GitHub Pages workflow as part of the preview.

## Preview QA

TypeScript checking and the production build passed. The local production bundle passed seven bounded checks: Echelon placement and latest-case navigation; both screenshot dialogs with Escape/focus return; existing regional financing controls, disclosure and dialog; existing geo/Nosso gallery round-trips; responsive resizing at 375, 390, 768 and 1440 pixels including a short desktop window; mobile-menu interaction; and anchor/loaded-image validity. No page errors were captured in that run.

Both desktop and mobile case screenshots were visually inspected. The new case retains readable problem/solution/verification copy, both real presentation images and point-in-time/commercial-result qualifications. The new gallery stacks on narrow screens.

The same seven bounded checks passed again against the deployed hosted payload in a fresh isolated context. Hosted screenshots confirmed the existing desktop/mobile hero, the new case and screenshot enlargement. No page errors, missing in-page destinations, broken loaded images or document-level horizontal overflow were captured in those checks. This is scoped portfolio QA, not a new audit of the Shopify storefront or all external destinations.
