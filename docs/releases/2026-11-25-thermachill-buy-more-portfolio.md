# ThermaChill "Buy more, save more" case study

Status: preview prepared on November 25, 2026. Not published; waiting for Nico's sign-off.

## Scope

Add one case study inside the existing Echelon section, after the cart financing case, and point the hero "Latest case" link to it. Existing case studies, the workflow and dependencies are unchanged.

- Problem: Marketing (Harrison, Nov 25) asked for an automatic discount that grows with each ThermaChill garment, starts after Cyber Monday, has no end date and does not stack with Black Friday pricing or WELCOME10. The builder also lacked the Hip and Lower Back garment, and the expired chair-gift offer was still adding the Recliner Chair to carts.
- Solution: the new Rust/WASM Function `thermachill-buy-more-save` in the Echelon Premier Shipping app (5% / 10% / 15%, capped at 15%), with each unit's discount = max(0, current price - tiered regular price). Config is stored in a discount metafield and scheduled from App Home. Theme changes: Hip garment, 2x2 grid, date-gated offer panel, and the chair gift turned off.
- Verification: compiled WASM checks (full kit $22.50 / $22.50 / $33.75 / $33.75; $0 on Black Friday prices), shipping Function 19/19, app version `thermachill-buy-more-save-20261125` released with Shopify CLI, scoped live theme pushes with byte-identical readback, live cart (5 lines, $2,484.95, no chair). Discount scheduled for 2026-12-01T05:00Z, combines with shipping only.

## Evidence and claim boundaries

- `portfolio-thermachill-offer-panel.webp`: development preview (theme 191334285511) with regular prices simulated, because the live panel only appears from December 1.
- `portfolio-thermachill-live-builder.webp`: live storefront capture, November 25, Black Friday pricing.
- Live tier behavior is not yet verified on a real cart (tracker P216). No conversion or revenue uplift is claimed.

Implementation records: [app PR #24](https://github.com/NikoCartin/echelon-premier-shipping-control/pull/24) and the ops workstream `workstreams/2026-11-25-us-thermachill-buy-more-save`.

## Files

- `client/src/pages/Home.tsx`: article, gallery, lightbox and hero latest-case link.
- `client/src/portfolio-cases.css`: additive `.offer-case*` styles.
- `client/public/assets/portfolio-thermachill-offer-panel.webp`, `portfolio-thermachill-live-builder.webp`.

## Tracker

Pipeline rows P213 (Buy More and Save), P214 (chair removed), P215 (Hip sizes), P216 (Dec 1 live test), P217 (App Home button rendering).
