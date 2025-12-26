// script.js
document.addEventListener('DOMContentLoaded', function () {
  /* =========================================================
     1) MENU MOBILE (o que você já tinha)
     ========================================================= */
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  const body = document.body;

  if (toggle && nav) {
    function openNav() {
      nav.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      body.classList.add('no-scroll');
    }

    function closeNav() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      body.classList.remove('no-scroll');
    }

    function isOpen() {
      return nav.classList.contains('is-open');
    }

    // botão hamburguer
    toggle.addEventListener('click', () => {
      if (isOpen()) closeNav();
      else openNav();
    });

    // submenus mobile
    const dropdownParents = nav.querySelectorAll('.has-dropdown > a');
    dropdownParents.forEach(link => {
      link.addEventListener('click', e => {
        if (window.matchMedia('(max-width: 768px)').matches) {
          e.preventDefault();
          const li = link.parentElement;
          const isActive = li.classList.contains('is-open');

          nav.querySelectorAll('.has-dropdown.is-open').forEach(openLi => {
            openLi.classList.remove('is-open');
          });

          if (!isActive) li.classList.add('is-open');
        }
      });
    });

    // fecha menu ao clicar em links finais (sem dropdown)
    nav.querySelectorAll('.nav-list > li > a').forEach(a => {
      a.addEventListener('click', () => {
        const parentLi = a.parentElement;
        if (
          window.matchMedia('(max-width: 768px)').matches &&
          isOpen() &&
          !parentLi.classList.contains('has-dropdown')
        ) {
          closeNav();
        }
      });
    });

    // limpa tudo ao mudar pra desktop
    window.addEventListener('resize', () => {
      if (!window.matchMedia('(max-width: 768px)').matches) {
        closeNav();
        nav.querySelectorAll('.has-dropdown.is-open').forEach(li => li.classList.remove('is-open'));
      }
    });
  }

  /* =========================================================
     2) HERO SLIDER (só roda se existir .hero-slides)
     ========================================================= */
  const hero = document.querySelector('.hero-slides');
  if (hero) {
    const slidesWrapper = hero.querySelector('.slides');
    if (slidesWrapper) {
      const slides = Array.from(slidesWrapper.querySelectorAll('.slide'));
      const dots = Array.from(hero.querySelectorAll('.dots .dot'));
      const intervalAttr = slidesWrapper.getAttribute('data-interval');
      const INTERVAL = intervalAttr ? parseInt(intervalAttr, 10) : 7000;

      let current = 0;
      let timer = null;

      function showSlide(index) {
        if (!slides.length) return;

        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        slides.forEach((slide, i) => {
          slide.classList.toggle('show', i === index);
        });

        if (dots.length) {
          dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
          });
        }

        current = index;
      }

      function nextSlide() {
        showSlide(current + 1);
      }

      // inicia
      showSlide(0);
      timer = setInterval(nextSlide, INTERVAL);

      // clique nas bolinhas
      if (dots.length) {
        dots.forEach((dot, i) => {
          dot.addEventListener('click', () => {
            showSlide(i);
            clearInterval(timer);
            timer = setInterval(nextSlide, INTERVAL);
          });
        });
      }

      // pausa no hover
      hero.addEventListener('mouseenter', () => {
        clearInterval(timer);
      });
      hero.addEventListener('mouseleave', () => {
        timer = setInterval(nextSlide, INTERVAL);
      });
    }
  }

  /* =========================================================
     3) CARROSSEL "Recent jobs..." + LIGHTBOX
     ========================================================= */
  const workTrack = document.querySelector('[data-work-track]');
  if (workTrack) {
    const slides = Array.from(workTrack.querySelectorAll('.tl-work-slide'));
    const btnPrev = document.querySelector('[data-work-prev]');
    const btnNext = document.querySelector('[data-work-next]');

    // acha qual está ativo
    let currentIndex = slides.findIndex(s => s.classList.contains('is-active'));
    if (currentIndex === -1) currentIndex = 0;

    function showWorkSlide(idx) {
      if (!slides.length) return;

      if (idx < 0) idx = slides.length - 1;
      if (idx >= slides.length) idx = 0;

      slides.forEach((slide, i) => {
        const isThis = i === idx;
        slide.classList.toggle('is-active', isThis);

        // 🔑 só o VISÍVEL recebe clique
        slide.style.pointerEvents = isThis ? 'auto' : 'none';
      });

      currentIndex = idx;
    }

    // aplica ao carregar
    showWorkSlide(currentIndex);

    // botões
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        showWorkSlide(currentIndex - 1);
      });
    }
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        showWorkSlide(currentIndex + 1);
      });
    }

    /* ---------- LIGHTBOX ---------- */
    let lightboxEl = null;
    let lightboxImg = null;

    function openLightbox(src, altText) {
      if (!lightboxEl) {
        lightboxEl = document.createElement('div');
        lightboxEl.className = 'tl-lightbox';
        Object.assign(lightboxEl.style, {
          position: 'fixed',
          inset: '0',
          background: 'rgba(0,0,0,.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '99999',
          padding: '1.5rem'
        });

        lightboxImg = document.createElement('img');
        Object.assign(lightboxImg.style, {
          maxWidth: '96%',
          maxHeight: '92vh',
          borderRadius: '14px',
          boxShadow: '0 20px 40px rgba(0,0,0,.35)',
          background: '#fff'
        });

        // fecha clicando fora
        lightboxEl.addEventListener('click', e => {
          if (e.target === lightboxEl) {
            lightboxEl.remove();
          }
        });

        lightboxEl.appendChild(lightboxImg);
      }

      lightboxImg.src = src;
      lightboxImg.alt = altText || '';
      document.body.appendChild(lightboxEl);
    }

    // adiciona clique na IMAGEM de cada slide
    slides.forEach(slide => {
      const img = slide.querySelector('img');
      if (!img) return;

      img.style.cursor = 'zoom-in';

      img.addEventListener('click', () => {
        // pega a imagem do slide que foi clicado
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt') || '';
        openLightbox(src, alt);
      });
    });
  }

  /* =========================================================
     4) ANO DO FOOTER (opcional, já que você usa <span id="year">)
     ========================================================= */
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
