<!--
  Thalita’s Cleaning — README (Top-tier / senior)
  Theme: pink + white + florals
  Author: DaNgelo Marques (GitHub: danmarques127-sys)
-->

<div align="center">

<!-- ====== HERO (SVG) ====== -->
<svg width="100%" viewBox="0 0 1200 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Thalita’s Cleaning banner">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="35%" stop-color="#ffe6f1"/>
      <stop offset="100%" stop-color="#ff5aa5"/>
    </linearGradient>
    <filter id="softShadow" x="-20%" y="-30%" width="140%" height="160%">
      <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#ff5aa5" flood-opacity="0.22"/>
    </filter>
  </defs>

  <rect width="1200" height="240" rx="26" fill="url(#grad)"/>
  <!-- subtle petals -->
  <g opacity="0.18">
    <circle cx="110" cy="65" r="26" fill="#ff5aa5"/>
    <circle cx="146" cy="85" r="18" fill="#ff5aa5"/>
    <circle cx="88" cy="98" r="14" fill="#ff5aa5"/>
    <circle cx="1030" cy="70" r="22" fill="#ff5aa5"/>
    <circle cx="1064" cy="96" r="14" fill="#ff5aa5"/>
    <circle cx="1005" cy="102" r="12" fill="#ff5aa5"/>
  </g>

  <!-- main card -->
  <g filter="url(#softShadow)">
    <rect x="90" y="54" width="1020" height="132" rx="22" fill="#ffffff" opacity="0.92"/>
  </g>

  <!-- flower icon -->
  <g transform="translate(125,92)">
    <g>
      <circle cx="20" cy="20" r="8" fill="#ff5aa5"/>
      <circle cx="20" cy="2" r="10" fill="#ff8bc1"/>
      <circle cx="35" cy="10" r="10" fill="#ff8bc1"/>
      <circle cx="38" cy="26" r="10" fill="#ff8bc1"/>
      <circle cx="20" cy="38" r="10" fill="#ff8bc1"/>
      <circle cx="4" cy="26" r="10" fill="#ff8bc1"/>
      <circle cx="6" cy="10" r="10" fill="#ff8bc1"/>
      <circle cx="20" cy="20" r="6" fill="#ffffff"/>
    </g>
  </g>

  <!-- title -->
  <text x="205" y="118" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial" font-size="34" font-weight="800" fill="#1d1d1f">
    Thalita’s Cleaning
  </text>
  <text x="205" y="150" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial" font-size="16" font-weight="600" fill="#6b7280">
    Production static website • SEO-first • Performance-focused • Accessibility-aware
  </text>

  <!-- pills -->
  <g transform="translate(820,104)">
    <rect x="0" y="0" width="120" height="34" rx="17" fill="#ff5aa5" opacity="0.95"/>
    <text x="60" y="22" text-anchor="middle" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial" font-size="13" font-weight="800" fill="#ffffff">
      PINK/WHITE
    </text>
    <rect x="132" y="0" width="158" height="34" rx="17" fill="#111827" opacity="0.92"/>
    <text x="211" y="22" text-anchor="middle" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial" font-size="13" font-weight="800" fill="#ffffff">
      REAL-WORLD
    </text>
    <rect x="302" y="0" width="168" height="34" rx="17" fill="#ffffff" stroke="#ff5aa5" stroke-width="2" opacity="0.98"/>
    <text x="386" y="22" text-anchor="middle" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial" font-size="13" font-weight="800" fill="#ff5aa5">
      STATIC • FAST
    </text>
  </g>
</svg>

<br/>

<p>
  <b>Client-grade static website</b> for a cleaning company — engineered for <b>SEO</b>, <b>speed</b>, and <b>reliability</b> on real hosting (Apache/cPanel).<br/>
  Built and maintained by <a href="https://github.com/danmarques127-sys"><b>DaNgelo Marques</b></a>.
</p>

<!-- ====== badges (shields.io) ====== -->
<p>
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-semantic-ff5aa5?style=for-the-badge&logo=html5&logoColor=white" />
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-responsive-111827?style=for-the-badge&logo=css3&logoColor=white" />
  <img alt="JS" src="https://img.shields.io/badge/JavaScript-vanilla-ff8bc1?style=for-the-badge&logo=javascript&logoColor=111827" />
  <img alt="Apache" src="https://img.shields.io/badge/Apache-.htaccess-ffffff?style=for-the-badge&logo=apache&logoColor=ff5aa5" />
</p>

<!-- ====== animated divider (pure SVG) ====== -->
<svg width="100%" height="18" viewBox="0 0 1200 18" xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true">
  <defs>
    <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#ff5aa5"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>
  </defs>
  <rect x="0" y="8" width="1200" height="2" rx="1" fill="url(#line)"/>
  <circle cx="60" cy="9" r="4" fill="#ff5aa5">
    <animate attributeName="cx" values="60;1140;60" dur="6s" repeatCount="indefinite"/>
  </circle>
</svg>

</div>

---

## 🔗 Live Links

- **Production:** https://thalitascleaning.com  
- **GitHub Pages (Preview):** https://danmarques127-sys.github.io/thalitas-cleaning/

---

## ✨ Features (engineering-focused)

- **Multi-page static site** with consistent navigation and predictable routes
- **SEO-first**: semantic HTML, meta/OG tags, robots + sitemap, clean internal linking
- **Performance**: optimized assets, caching via `.htaccess`, low JavaScript footprint
- **Accessibility**: semantic landmarks, readable hierarchy, link/button intent clarity
- **Deployment-friendly**: works on **Apache/cPanel** (no build step), plus **GitHub Pages** preview

---

## 🧰 Tech Stack

- **HTML5** (semantic structure for SEO + accessibility)
- **CSS3** (responsive layout and UI components)
- **Vanilla JavaScript** (light interactions only)
- **Apache `.htaccess`** (cache policy + static hosting behavior)

---

## 📁 Project Structure

> The structure is intentionally “production static site” — easy to host, easy to maintain.

```txt
/
├── assets/
│   ├── css/        # Stylesheets
│   ├── js/         # JavaScript
│   ├── img/        # Images (no nested /images)
│   └── icons/      # Icons + favicons (no nested /icons)
│
├── seo/
│   ├── robots.txt
│   └── sitemap.xml
│
├── docs/
│   └── ARCHITECTURE.md
│
├── .htaccess
├── index.html
└── *.html
