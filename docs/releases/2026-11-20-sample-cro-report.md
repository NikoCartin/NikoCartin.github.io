# Sample CRO report, navigation and hero update

Status: approved for publication on November 20, 2026 ("ok to deploy"), after review of the hosted preview.

## Scope

- Adds a "Sample CRO report" case at the end of the Case studies section (`#sample-cro-report`), with a cover, four page thumbnails, a download button and a link to view the report in the browser.
- Adds the 4-page anonymized PDF and page images to `client/public/assets/`.
- Simplifies the top menu to: Work, Echelon, CRO, Reports, Shopify, Email, Expertise, Contact, LinkedIn, GitHub. Removed from the menu: Case Studies (now "CRO"), Cases (now "Shopify"), WordPress, SEO, Archive, Systems. Those sections stay on the page.
- Adds CRO to the hero: availability pill, kicker line and intro paragraph.

## Claim boundaries

Pages 1 and 2 of the report describe real, released work with verified technical results. The A/B test pages use illustrative data and say so on the page and on the site. The brand is anonymized in the PDF.

## Files

- `client/src/pages/Home.tsx`
- `client/src/portfolio-cases.css` (additive, case-scoped rules)
- `client/public/assets/Nico-Cartin-Reyes-Sample-CRO-Report.pdf`
- `client/public/assets/sample-cro-report-p1.webp` to `-p4.webp`

## QA

`pnpm check` and `pnpm build` passed. In a local production build, at 1440px and 390px: all eight menu anchors resolve, the mobile menu opens and links to the report, report images load, the PDF returns 200, and there is no horizontal overflow.

## Release boundary

Branch `preview/sample-cro-report-20261120`, based on main `1368fbad510c32c1746f24e8d2488453a18714c7`. Released by fast-forwarding main to the reviewed branch, which runs the existing Pages workflow (`pnpm check`, `pnpm build`, generated output commit). No Pages settings, DNS or repository visibility changes.

## Rollback

Revert the source commits on main with a new commit and let the same workflow regenerate the output. No force-push.
