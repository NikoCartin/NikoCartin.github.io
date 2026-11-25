# Black Friday PDP offers case study (reformer free freight + Row-S free Soundbar)

Status: preview built on branch `pdp-offers-case`, awaiting Nico's approval before merge. Tracker P221, P222, P223.

## Scope

Add one case study inside the existing Echelon section, after the ThermaChill case, and point the hero "Latest case" link to `#pdp-offers`. Existing case studies, the workflow and dependencies are unchanged.

- Problem: with the Monthly membership, a Meridian reformer checkout charged $299.99 Standard Shipping, and nothing on the PDP said freight could be covered. The Row-S free Soundbar (automatic BXGY through Dec 1) wasn't visible on the PDP before add to cart.
- Solution: the `premier-free-shipping` Function in the Echelon Premier Shipping app makes Standard Shipping free with any membership for delivery groups holding only reformers and/or the Stride-8s (app PR #27). The Meridian PDPs reuse the Stride-8s patterns (Shipping Included ribbon, price-box line, reassurance lines, Why Meridian grid written from the product descriptions). The Row-S PDP gets one snippet with a ribbon, a price-box gift row and a bonus card, and it hides itself after the discount ends.
- Verification: `cargo test` 27/27; app version `reformer-membership-free-freight-20261125` released with Shopify CLI. The theme was tested on dev 191334285511, live was re-pulled and diffed before each push, and the scoped pushes were read back byte for byte. Live checkout (Tablet Holder + Monthly): Standard Shipping $299.99 → FREE, no order placed. Weekly Monday read-only check.

## Evidence and claim boundaries

- `portfolio-reformer-free-freight.webp` and `portfolio-row-s-free-soundbar.webp`: live storefront captures from Nov 25, 1440px, cropped to the product area.
- No conversion or revenue uplift is claimed.

Implementation records: [app PR #27](https://github.com/NikoCartin/echelon-premier-shipping-control/pull/27) and ops commit [304cbbe](https://github.com/NikoCartin/echelon-fit-us-shopify-operations/commit/304cbbe) (three `workstreams/2026-11-25-us-*` folders).

## Files

- `client/src/pages/Home.tsx`: article, gallery, lightbox and hero latest-case link.
- `client/src/portfolio-cases.css`: additive `.offer-case-gallery--wide` modifier.
- `client/public/assets/portfolio-reformer-free-freight.webp`, `portfolio-row-s-free-soundbar.webp`.
