# Regional financing and UK architecture portfolio release

The reviewed website preview was approved with “Deploy live” on November 3, 2026. This authorization covers the portfolio at https://nikocartin.github.io/; it is not authorization to modify any Echelon storefront.

## Approved scope

- New featured native financing case study across US, Canada and UK product pages, with real regional captures, accessible screenshot controls and an enlargement dialog.
- Expanded existing UK dynamic equipment architecture story and a direct in-page link.
- Expandable engineering context on native review initialization and scoped production delivery.
- Existing identity, portfolio inventory, project destinations, contact methods and navigation retained.
- Small education-column and technology-label spacing corrections included in the reviewed preview.
- Point-in-time offer captions and explicit limits on checkout eligibility and unmeasured business outcomes retained.

## Deployment

Pre-release production source was `930af914878202730475dc74ccdb8db600a58446`; a fresh fetch confirmed no newer main-branch changes before release preparation. The approved preview commits were retained, with removal of the preview-only noindex directive for production.

The existing GitHub Actions workflow validates TypeScript and builds Vite using the repository's frozen pnpm lockfile, then updates the generated root HTML/assets used by legacy GitHub Pages. No Pages source setting, DNS, repository visibility or external account configuration is changed.

Production deployment and public-site verification completed on November 3, 2026, Costa Rica time (verification recorded at 2026-11-04T00:38:38Z). Source release: `3921381d5ecb734e2fbb604eda57ee106b79070b`; generated production output: `670d69615b491a620586999143742cde8218d9ae`.

- **Source workflow:** [Build and publish portfolio](https://github.com/NikoCartin/NikoCartin.github.io/actions/runs/41748149558) completed successfully.
- **Production deployment:** [GitHub Pages deployment](https://github.com/NikoCartin/NikoCartin.github.io/actions/runs/41748208141) completed successfully for the generated output.
- **Public response:** https://nikocartin.github.io/ returned HTTP 200 in a fresh browser context, rendered the new financing case and loaded `assets/index-UX4XtFcQ.js`; no preview robots directive was present.

## Public-site verification

- All three regional screenshot controls changed the selected region and loaded their corresponding captures; returning to US restored the original selection.
- Screenshot enlargement opened the native dialog; Escape and the close control worked, with launch-focus restoration checked.
- Both engineering disclosures opened; keyboard activation also worked on mobile.
- The architecture link reached the updated UK case with its special purchase-configuration explanation intact.
- Original geo-routing and Nosso gallery controls switched desktop/mobile and returned.
- At 375px, navigation opened, the Case Studies link navigated and closed the menu, regional switching and enlargement worked, and both disclosures could remain open together.
- Desktop to mobile to desktop checks found no horizontal overflow. No failed loaded images, broken in-page anchors or browser page errors were observed in the sampled verification.
- Resume and contact destinations remained present; no email, contact message, financial application or order was submitted during checks.
- Local production validation used pnpm 10.4.1 with the unchanged frozen lockfile and passed TypeScript and Vite build checks.

These are point-in-time browser checks, not whole-browser/device certification, a new accessibility certification or evidence of measured conversion/revenue improvement.

## Rollback

If verification identifies a release regression, restore the relevant source and generated output from the recorded pre-release commit using a new reviewed rollback commit; do not force-push history or change Pages configuration. The archived original commit remains the reference for the preceding production state.
