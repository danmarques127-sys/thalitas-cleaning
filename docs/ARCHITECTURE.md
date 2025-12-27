<!--
  FILE: docs/ARCHITECTURE.md
  Project: Thalita’s Cleaning
  Theme: Pink + White + Florals (GitHub-friendly arts)
  Author: Dangelo Marques (GitHub: danmarques127-sys)
-->

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:FFFFFF,35:FFE2F0,70:FF5AA5,100:FFFFFF&height=240&section=header&text=Thalita%E2%80%99s%20Cleaning&fontSize=54&fontColor=111827&animation=fadeIn&fontAlignY=38&desc=Production%20static%20website%20%E2%80%A2%20SEO-first%20%E2%80%A2%20Performance-focused%20%E2%80%A2%20Accessibility-aware&descAlignY=64&descSize=18" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&pause=900&color=FF5AA5&center=true&vCenter=true&width=980&lines=Client-grade+static+site+for+a+real+cleaning+business;Engineered+for+SEO%2C+speed%2C+and+reliability+on+Apache%2FcPanel;Pink+%26+White+theme+with+floral+presentation+for+GitHub;No+frameworks.+No+build+step.+Just+clean+delivery." />
</p>

<p align="center">
  <a href="https://thalitascleaning.com"><img src="https://img.shields.io/badge/Production-Live-FF5AA5?style=for-the-badge&logo=vercel&logoColor=white" /></a>
  <a href="https://danmarques127-sys.github.io/thalitas-cleaning/"><img src="https://img.shields.io/badge/GitHub%20Pages-Preview-111827?style=for-the-badge&logo=github&logoColor=white" /></a>
  <a href="https://github.com/danmarques127-sys"><img src="https://img.shields.io/badge/Author-DaNgelo%20Marques-FFFFFF?style=for-the-badge&logo=github&logoColor=FF5AA5" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Theme-Pink%20%26%20White-FFE2F0?style=for-the-badge&labelColor=FF5AA5&color=FFE2F0" />
  <img src="https://img.shields.io/badge/Brand-Floral%20Identity-FFFFFF?style=for-the-badge&labelColor=FF5AA5&color=FFFFFF" />
  <img src="https://img.shields.io/badge/Hosting-Apache%20%2F%20cPanel-111827?style=for-the-badge&logo=apache&logoColor=white" />
</p>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:FFFFFF,50:FF5AA5,100:FFFFFF&height=2&section=header" />
</p>

# 🌸 Overview

This document describes the **architecture** and **engineering decisions** behind the Thalita’s Cleaning website.  
The project is a **production static site** designed for **SEO**, **performance**, and **reliable deployment** on **Apache/cPanel**, with GitHub Pages used as a preview environment.

**Author:** DaNgelo Marques (https://github.com/danmarques127-sys)

---

# 🧭 Routes / Pages

The site is composed of static HTML routes (no framework router, no SPA).

> **Primary routes (expected):**
- `/` → `index.html` (Home / landing)
- `/services.html` (Services)
- `/about.html` (About)
- `/blog.html` (Blog / posts list or informational content)
- `/contact.html` (Contact / lead capture)

> Notes:
- Routes are intentionally flat (root-level `.html`) to remain compatible with shared hosting and simple deployments.
- Internal links must remain **relative and stable** to work both on Production and GitHub Pages.

---

# 🧩 Layout Strategy (Header / Footer)

## How repetition is handled
Because this is a **static site** with **no build step**, the header/footer are generally **duplicated across pages** (copied markup).

## Why this decision
This is intentional to keep the project:
- **Hosting-friendly** (cPanel / Apache)
- **Tooling-free** (no bundler, no templating engine required)
- **Easy to hand off** to non-technical maintenance workflows

## Trade-offs
- **Pros:** maximum compatibility, minimal complexity, predictable rendering
- **Cons:** updating navigation/footer requires editing multiple files

> If a future iteration introduces a build step, the header/footer can be extracted into partials and composed during build time.  
For the current scope, duplication is the correct trade-off.

---

# 📰 Blog Data Source

The blog is designed to remain **static** (SEO-first, predictable, fast).

Common patterns supported:
1) **Pure HTML content** inside `blog.html` (simplest, best for SEO)
2) **JS-backed list** (if used): a small JS array/object containing post metadata

## Where the “blog data” lives (choose what matches your repo)
- If **pure HTML**: content is directly in `blog.html`
- If **JS-backed**: look for a file in `/assets/js/` like:
  - `blog.js`
  - `posts.js`
  - `data.js`

### Expected structure (if JS-backed)
- A local array of post objects (title, slug/url, date, excerpt, tags)
- Rendered into the blog container at runtime
- **No external fetch** in production (keeps it reliable on shared hosting)

> If your repo uses the JS-backed approach, keep the blog JS lightweight and avoid render-blocking code.

---

# 🔍 SEO Decisions

This site is engineered as **SEO-first** static content.

Implemented (expected) best practices:
- Semantic HTML headings and landmarks
- Per-page `<title>` and meta description
- Open Graph / social previews where applicable
- `seo/robots.txt` and `seo/sitemap.xml`
- Consistent internal linking + predictable URL structure

**Rationale:** static HTML + good metadata is the most reliable SEO foundation for local service businesses.

---

# ⚡ Performance Decisions

Key performance choices:
- Minimal JavaScript (Vanilla only, avoid heavy dependencies)
- Images placed under `/assets/img/` for predictable caching and management
- Icons/favicons under `/assets/icons/`
- Prefer stable paths and fewer external dependencies

Performance goals:
- Fast first load
- Faster repeat loads (via caching)
- Stable behavior across shared hosting providers

---

# 🗄️ Cache Policy (Apache `.htaccess`)

Caching is enforced at the web server level:
- **Static assets** (CSS/JS/images/icons) → long-lived cache headers
- **HTML** → shorter cache window to avoid stale content after edits

**Rationale:** this improves Lighthouse scores and reduces bandwidth without sacrificing freshness for page content.

---

# 🗂️ Asset Organization

The repository follows a clean “production static site” asset strategy:

- `/assets/css/` — stylesheets
- `/assets/js/` — scripts
- `/assets/img/` — images (flattened; no nested `/images`)
- `/assets/icons/` — icons/favicons (flattened; no nested `/icons`)
- `/seo/` — `robots.txt`, `sitemap.xml`
- `/docs/` — documentation (this file)

This structure is deliberate:
- reduces path mistakes
- improves maintainability
- communicates engineering discipline in a portfolio repository

---

# ✅ Engineering Rules (Non-negotiables)

- No `images/` or `/icons/` legacy paths in HTML/JS
- Assets only under `/assets/...`
- Keep the site build-step-free unless explicitly introduced later
- Favor compatibility (shared hosting) + SEO + performance over tooling complexity

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:FFFFFF,60:FF5AA5,100:FFFFFF&height=120&section=footer" />
</p>
