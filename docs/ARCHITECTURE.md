# Architecture

## Routes / main pages

- `index.html` — Home
- `residential.html` — Residential services
- `commercial.html` — Commercial services
- `move-in-move-out.html` — Move-in / Move-out
- `who-we-are.html` — About
- `contact-us.html` — Contact
- `our-guarantees.html` — Guarantees / Trust page
- `policy.html`, `terms.html` — Legal pages
- `practically-spotless-blog.html` — Blog listing
- `post-total.html`, `post1.html`, `post2.html`, `post3.html`, `post-new.html` — Blog posts
- `spot-all.html`, `spot1.html`, `spot2.html`, `spot3.html`, `spot-new.html` — Spotless tips pages

## Header / footer repetition

This is a static multi-page site. Header and footer are duplicated across pages (no server-side includes).
Consistency is maintained by shared assets:
- `assets/css/style.css` for global styling
- `assets/js/script.js` for shared behaviors

If the project introduces a build step later, header/footer can be extracted into partials.

## Blog / listings data

Listings (blog/tips) use lightweight JS-driven references (e.g., an array of page files and fallback images).
This keeps the site static while providing a simple “CMS-like” listing behavior without a backend.

## SEO decisions

- Canonical URLs point to production to prevent duplicate indexing
- `seo/robots.txt` and `seo/sitemap.xml` support crawling and discoverability
- Open Graph / Twitter meta tags improve link previews
- Google verification is kept under `seo/`

## Performance decisions

- All static assets live under `assets/` to standardize caching rules
- `.htaccess` enables compression and cache headers for static files
- Images are referenced consistently from `assets/img/` (no legacy `images/` paths)

## Asset organization

- `assets/css/` — CSS
- `assets/js/` — JS
- `assets/img/` — images
- `assets/icons/` — favicons / PWA icons
