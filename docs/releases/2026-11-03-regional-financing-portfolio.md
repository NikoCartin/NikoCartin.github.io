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

Production deployment and post-release verification are pending at the time of this preparation entry. The release is not considered verified merely because a source push succeeds.

## Verification plan

- Confirm the build/publish workflow and GitHub Pages deployment complete successfully.
- Open the public site in a fresh browser and check the new case, all regional controls, native enlargement dialog and Escape/focus return.
- Exercise the engineering disclosures, UK architecture link and original gallery controls.
- Recheck mobile navigation at 375px, loaded images, page errors and horizontal overflow.
- Confirm production HTML has no preview noindex directive.

## Rollback

If verification identifies a release regression, restore the relevant source and generated output from the recorded pre-release commit using a new reviewed rollback commit; do not force-push history or change Pages configuration. The archived original commit remains the reference for the preceding production state.
