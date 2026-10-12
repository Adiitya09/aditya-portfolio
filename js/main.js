/* ============================================================
   MAIN — Theme, Nav, IntersectionObserver, Project Rendering
   ============================================================ */

'use strict';

/* ═══════════════════════════════════════════════════════════
   THEME SYSTEM
   ═══════════════════════════════════════════════════════════ */

const Theme = (() => {
  const KEY = 'md-theme';
  let current = 'light';

  function init() {
    const saved = localStorage.getItem(KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    current = saved || (prefersDark ? 'dark' : 'light');
    apply(current);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem(KEY)) apply(e.matches ? 'dark' : 'light');
    });
  }

  function apply(theme) {
    current = theme;
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }

  function toggle() {
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(KEY, next);
    apply(next);
  }

  return { init, toggle, get current() { return current; } };
})();


/* ═══════════════════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════════════════ */

/* Navigation Configuration: Single Source of Truth */
const NAV_CONFIG = [
  { label: 'Home', id: 'hero', href: '#hero', pageHref: 'index.html#hero' },
  { label: 'About', id: 'about', href: '#about', pageHref: 'index.html#about' },
  { label: 'Skills', id: 'skills', href: '#skills', pageHref: 'index.html#skills' },
  { label: 'Projects', id: 'projects', href: '#projects', pageHref: 'projects.html' },
  { label: 'SQL', id: 'sql-showcase', href: '#sql-showcase', pageHref: 'index.html#sql-showcase' },
  { label: 'Education', id: 'education', href: '#education', pageHref: 'index.html#education' },
  { label: 'Contact', id: 'contact', href: '#contact', pageHref: 'index.html#contact' }
];

const Nav = (() => {
  let header, mobileMenu, mobileBackdrop, mobileToggle;
  let isOpen = false;
  let isClickScrolling = false;
  let scrollTimeout = null;

  function init() {
    header = document.querySelector('.site-header');
    mobileMenu = document.getElementById('mobile-menu-panel');
    mobileToggle = document.getElementById('mobile-menu-toggle');
    mobileBackdrop = document.getElementById('nav-backdrop');

    // Theme toggle
    document.getElementById('theme-toggle')?.addEventListener('click', Theme.toggle);

    // Mobile menu toggle
    mobileToggle?.addEventListener('click', (e) => {
      e.stopPropagation();
      isOpen ? closeMenu() : openMenu();
    });

    // Mobile backdrop click
    mobileBackdrop?.addEventListener('click', closeMenu);

    // Mobile links close menu and set active
    document.querySelectorAll('.nav-mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
        const section = link.dataset.section;
        if (section) handleLinkClick(section);
      });
    });

    // Desktop nav links click handler
    document.querySelectorAll('.nav-link[data-section]').forEach(link => {
      link.addEventListener('click', () => {
        const section = link.dataset.section;
        if (section) handleLinkClick(section);
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (isOpen && mobileMenu && !mobileMenu.contains(e.target) && mobileToggle && !mobileToggle.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
        mobileToggle?.focus();
      }
    });

    // Active section tracking
    initActiveTracking();
  }

  function handleLinkClick(sectionId) {
    setActive(sectionId);
    isClickScrolling = true;
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isClickScrolling = false;
    }, 850);
  }

  function openMenu() {
    if (!mobileMenu) return;
    isOpen = true;
    mobileMenu.classList.add('is-open');
    mobileBackdrop?.classList.add('is-open');
    mobileToggle?.setAttribute('aria-expanded', 'true');
    mobileToggle?.setAttribute('aria-label', 'Close navigation menu');
    const firstLink = mobileMenu.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    if (!mobileMenu) return;
    isOpen = false;
    mobileMenu.classList.remove('is-open');
    mobileBackdrop?.classList.remove('is-open');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    mobileToggle?.setAttribute('aria-label', 'Open navigation menu');
  }

  function setActive(id) {
    const desktopLinks = document.querySelectorAll('.nav-link[data-section]');
    const mobileLinks = document.querySelectorAll('.nav-mobile-link[data-section]');
    desktopLinks.forEach(l => l.classList.toggle('active', l.dataset.section === id));
    mobileLinks.forEach(l => l.classList.toggle('active', l.dataset.section === id));
  }

  function initActiveTracking() {
    const desktopLinks = document.querySelectorAll('.nav-link[data-section]');
    const mobileLinks = document.querySelectorAll('.nav-mobile-link[data-section]');

    // If on a sub-page without hero, preserve page's active link
    if (!document.getElementById('hero')) {
      return;
    }

    // Set initial active based on current hash or hero
    const hash = window.location.hash.replace('#', '');
    const validIds = NAV_CONFIG.map(item => item.id);
    if (hash && validIds.includes(hash)) {
      setActive(hash);
    } else {
      setActive('hero');
    }

    // High-performance scroll spy for section highlighting
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function updateActiveSection() {
    if (isClickScrolling) return;

    // Near top of document
    if (window.scrollY < 180) {
      setActive('hero');
      return;
    }

    // Near bottom of document: activate contact
    const docHeight = document.documentElement.scrollHeight;
    const scrollBottom = window.innerHeight + window.scrollY;
    if (scrollBottom >= docHeight - 70) {
      setActive('contact');
      return;
    }

    // Target elements ordered by vertical position on the page
    const elements = [
      { id: 'hero', el: document.getElementById('hero') },
      { id: 'about', el: document.getElementById('about') },
      { id: 'skills', el: document.getElementById('skills') },
      { id: 'projects', el: document.getElementById('projects') },
      { id: 'sql-showcase', el: document.getElementById('sql-showcase') || document.getElementById('expertise') },
      { id: 'education', el: document.getElementById('education') },
      { id: 'contact', el: document.getElementById('contact') }
    ].filter(item => item.el !== null);

    const readingLine = window.scrollY + 140; // line of reading focus below fixed navbar

    let currentSectionId = 'hero';
    for (const item of elements) {
      const rect = item.el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      if (top <= readingLine) {
        currentSectionId = item.id;
      }
    }

    setActive(currentSectionId);
  }

  return { init, setActive, config: NAV_CONFIG };
})();


/* ═══════════════════════════════════════════════════════════
   INTERSECTION OBSERVER — Reveal & Counter
   ═══════════════════════════════════════════════════════════ */

const Reveals = (() => {
  function init() {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

  return { init };
})();

const Counter = (() => {
  function animateCount(el, target, suffix = '', duration = 1500) {
    const isFloat = target % 1 !== 0;
    const startTime = performance.now();
    const start = 0;

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = start + (target - start) * eased;

      if (isFloat) {
        el.textContent = value.toFixed(1) + suffix;
      } else {
        el.textContent = Math.floor(value).toString().padStart(2, '0') + suffix;
      }

      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = isFloat ? target.toFixed(1) + suffix : String(Math.floor(target)).padStart(2, '0') + suffix;
    }

    requestAnimationFrame(update);
  }

  function init() {
    const counters = document.querySelectorAll('.stat-number[data-count]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          animateCount(el, target, suffix);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  }

  return { init };
})();


const HeroCharts = (() => {
  function animateLine() {
    const line = document.querySelector('.chart-line');
    if (!line) return;
    setTimeout(() => line.classList.add('animated'), 800);
  }

  function animateBars() {
    const bars = document.querySelectorAll('.bar-rect');
    bars.forEach((bar, i) => {
      setTimeout(() => bar.classList.add('animated'), 900 + i * 80);
    });
  }

  function init() {
    animateLine();
    animateBars();
  }

  return { init };
})();


/* ═══════════════════════════════════════════════════════════
   PROJECT RENDERER
   ═══════════════════════════════════════════════════════════ */

const ProjectRenderer = (() => {
  const VISUAL_TEMPLATES = {
    bar: (p) => `
      <div class="project-card__visual-inner">
        <div class="kpi-row" style="grid-template-columns: repeat(${p.kpis.length}, 1fr);">
          ${p.kpis.map(k => `
            <div class="kpi-card" style="background: rgba(255,255,255,0.18); border-radius: 12px; padding: 10px 12px;">
              <div class="kpi-label" style="color: rgba(255,255,255,0.7)">${k.label}</div>
              <div class="kpi-value" style="color: #fff; font-size: 1.25rem;">${k.value}</div>
            </div>
          `).join('')}
        </div>
        <svg class="mini-chart-svg" viewBox="0 0 200 60" preserveAspectRatio="none" aria-hidden="true">
          <rect x="10" y="35" width="22" height="25" rx="3" fill="rgba(255,255,255,0.4)"/>
          <rect x="40" y="20" width="22" height="40" rx="3" fill="rgba(255,255,255,0.6)"/>
          <rect x="70" y="28" width="22" height="32" rx="3" fill="rgba(255,255,255,0.4)"/>
          <rect x="100" y="12" width="22" height="48" rx="3" fill="rgba(255,255,255,0.7)"/>
          <rect x="130" y="22" width="22" height="38" rx="3" fill="rgba(255,255,255,0.5)"/>
          <rect x="160" y="8"  width="22" height="52" rx="3" fill="rgba(255,255,255,0.85)"/>
        </svg>
      </div>`,

    line: (p) => `
      <div class="project-card__visual-inner">
        <div class="kpi-row" style="grid-template-columns: repeat(${p.kpis.length}, 1fr);">
          ${p.kpis.map(k => `
            <div class="kpi-card" style="background: rgba(255,255,255,0.18); border-radius: 12px; padding: 10px 12px;">
              <div class="kpi-label" style="color: rgba(255,255,255,0.7)">${k.label}</div>
              <div class="kpi-value" style="color: #fff; font-size: 1.25rem;">${k.value}</div>
            </div>
          `).join('')}
        </div>
        <svg class="mini-chart-svg" viewBox="0 0 200 70" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="line-grad-${p.id}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="rgba(255,255,255,0.3)"/>
              <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
            </linearGradient>
          </defs>
          <path d="M0,55 L30,45 L60,30 L90,38 L120,20 L150,14 L180,8 L200,10" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M0,55 L30,45 L60,30 L90,38 L120,20 L150,14 L180,8 L200,10 L200,70 L0,70 Z" fill="url(#line-grad-${p.id})"/>
        </svg>
      </div>`,

    kpi: (p) => `
      <div class="project-card__visual-inner">
        <div class="kpi-row" style="grid-template-columns: repeat(${p.kpis.length}, 1fr);">
          ${p.kpis.map(k => `
            <div class="kpi-card" style="background: rgba(255,255,255,0.18); border-radius: 12px; padding: 10px 12px;">
              <div class="kpi-label" style="color: rgba(255,255,255,0.7)">${k.label}</div>
              <div class="kpi-value" style="color: #fff; font-size: 1.25rem;">${k.value}</div>
            </div>
          `).join('')}
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:4px;">
          <div style="background:rgba(255,255,255,0.12); border-radius:10px; height:48px; display:flex; align-items:center; justify-content:center;">
            <svg width="80" height="30" viewBox="0 0 80 30" aria-hidden="true">
              <polyline points="0,25 15,18 30,22 45,10 60,15 75,5 80,8" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div style="background:rgba(255,255,255,0.12); border-radius:10px; height:48px; display:flex; align-items:center; justify-content:center; gap:4px;">
            ${[28, 40, 32, 48, 36, 44].map(h => `<div style="width:8px; height:${h}px; border-radius:4px; background:rgba(255,255,255,${(h / 60).toFixed(2)});"></div>`).join('')}
          </div>
        </div>
      </div>`
  };

  function sizeClass(p, index) {
    if (p.size) return `project-card--${p.size}`;
    const sizes = ['large', 'medium', 'compact', 'compact', 'compact'];
    return `project-card--${sizes[index] || 'medium'}`;
  }

  function renderCard(p, index) {
    const template = VISUAL_TEMPLATES[p.visualType] || VISUAL_TEMPLATES.bar;
    const bgStyle = `background: linear-gradient(135deg, var(--md-primary-container), var(--md-secondary-container));`;
    const sClass = sizeClass(p, index);

    // If the project has an image/screenshot in images[] or p.image, use it in the visual area
    const firstImg = (p.images && p.images.length > 0)
      ? (typeof p.images[0] === 'string' ? p.images[0] : p.images[0].src)
      : p.image;

    const visualContent = firstImg
      ? `<div class="project-card__screenshot-wrap">
           <img
             src="${firstImg}"
             alt="${p.title} — preview"
             class="project-card__screenshot"
             loading="lazy"
             onerror="this.style.display='none'; this.parentElement.classList.add('image-fallback');"
           />
           <div class="project-card__screenshot-overlay" aria-hidden="true"></div>
         </div>`
      : template(p);

    return `
    <article
      class="project-card ${sClass} reveal"
      role="button"
      tabindex="0"
      data-project-id="${p.id}"
      aria-label="View details for ${p.title}"
    >
      <div class="project-card__visual" style="${firstImg ? '' : bgStyle}">
        ${visualContent}
      </div>
      <div class="project-card__body">
        <div class="project-card__category">${p.category}</div>
        <h3 class="project-card__title">${p.title}</h3>
        ${p.subtitle ? `<div class="project-card__subtitle">${p.subtitle}</div>` : ''}
        <p class="project-card__desc">${p.shortDesc}</p>
        <div class="project-card__chips">
          ${p.techs.map(t => `<span class="chip chip-tech">${t}</span>`).join('')}
        </div>
        <div class="project-card__actions">
          <button class="btn btn-filled btn-project-open" data-project-id="${p.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            View Details
          </button>
          ${p.github ? `
          <a
            href="${p.github}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outlined btn-project-gh"
            onclick="event.stopPropagation();"
            aria-label="View ${p.title} on GitHub"
            title="View ${p.title} on GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            View on GitHub
          </a>` : ''}
        </div>
      </div>
    </article>`;
  }

  function render(projects, containerId = 'projects-grid') {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (!projects || !projects.length) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: var(--space-12) var(--space-4); color: var(--md-on-surface-variant);">
          <p class="type-title-medium" style="margin-bottom: var(--space-2);">No projects found</p>
          <p class="type-body-medium">Try selecting a different filter or check back later.</p>
        </div>`;
      return;
    }
    container.innerHTML = projects.map((p, i) => renderCard(p, i)).join('');
  }

  return { render, renderCard };
})();


/* ═══════════════════════════════════════════════════════════
   PROJECT FILTER
   ═══════════════════════════════════════════════════════════ */

const ProjectFilter = (() => {
  let activeFilter = 'all';

  function matchesFilter(p, keys) {
    const pCats = [
      ...(p.categories || []),
      ...(p.filterCategories || []),
      ...(p.filterTags || []),
      p.category ? p.category.toLowerCase() : ''
    ].map(s => String(s).toLowerCase().trim());

    return keys.some(k => pCats.some(c => c.includes(k) || k.includes(c)));
  }

  const filterMap = {
    'all': () => true,
    'data-analytics': p => matchesFilter(p, ['data-analytics', 'data', 'analytics']),
    'software': p => matchesFilter(p, ['software']),
    'web': p => matchesFilter(p, ['web']),
    'computer-vision': p => matchesFilter(p, ['computer-vision', 'vision']),
    // Also keep backward-compatible tech tags if clicked:
    'python': p => (p.filterTags && p.filterTags.includes('python')) || (p.techs && p.techs.includes('Python')),
    'sql': p => (p.filterTags && p.filterTags.includes('sql')) || (p.techs && p.techs.includes('SQL')),
    'power-bi': p => (p.filterTags && p.filterTags.includes('power-bi')) || (p.techs && p.techs.includes('Power BI')),
    'excel': p => (p.filterTags && p.filterTags.includes('excel')) || (p.techs && p.techs.includes('Excel')),
  };

  function init() {
    document.querySelectorAll('.projects-filters .chip-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        if (filter === activeFilter) return;
        activeFilter = filter;
        updateActiveBtn(btn);
        filterCards(filter);
      });

      btn.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });

    // Check URL parameter for filter
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const initialFilter = urlParams.get('filter');
      if (initialFilter && filterMap[initialFilter]) {
        const targetBtn = document.querySelector(`.projects-filters .chip-filter[data-filter="${initialFilter}"]`);
        if (targetBtn) targetBtn.click();
      }
    } catch (_) {}
  }

  function updateActiveBtn(active) {
    document.querySelectorAll('.chip-filter').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    active.classList.add('active');
    active.setAttribute('aria-pressed', 'true');
  }

  function filterCards(filter) {
    const fn = filterMap[filter] || filterMap.all;
    let visibleCount = 0;
    const cards = document.querySelectorAll('.project-card[data-project-id]');
    cards.forEach(card => {
      const project = window.PROJECTS?.find(p => p.id === card.dataset.projectId);
      if (!project) return;
      const show = fn(project);
      card.classList.toggle('hidden', !show);
      if (show) visibleCount++;
    });

    const statusEl = document.getElementById('projects-filter-status');
    if (statusEl) {
      statusEl.textContent = `Showing ${visibleCount} of ${cards.length} projects`;
    }
  }

  return { init, filterCards };
})();


/* ═══════════════════════════════════════════════════════════
   BACK TO TOP
   ═══════════════════════════════════════════════════════════ */

const BackToTop = (() => {
  function init() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  return { init };
})();




/* ═══════════════════════════════════════════════════════════
   PROJECT INTERACTION
   ═══════════════════════════════════════════════════════════ */

const ProjectInteraction = (() => {
  let modal;

  function init(modalInstance) {
    modal = modalInstance;

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeydown);

    checkInitialProjectOpen();
  }

  function handleClick(e) {
    // Clicked github or external link
    if (e.target.closest('a')) return;

    // Clicked open button
    const openBtn = e.target.closest('.btn-project-open');
    if (openBtn) {
      e.stopPropagation();
      openProject(openBtn.dataset.projectId);
      return;
    }
    // Clicked card
    const card = e.target.closest('.project-card[data-project-id]');
    if (card) openProject(card.dataset.projectId);
  }

  function handleKeydown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.project-card[data-project-id]');
      if (card && e.target === card) {
        e.preventDefault();
        openProject(card.dataset.projectId);
      }
    }
  }

  function openProject(id) {
    const project = window.PROJECTS?.find(p => p.id === id);
    if (!project || !modal) return;
    modal.open(project);
  }

  function checkInitialProjectOpen() {
    try {
      const params = new URLSearchParams(window.location.search);
      const projectId = params.get('project');
      if (projectId) {
        setTimeout(() => openProject(projectId), 300);
      }
    } catch (_) {}
  }

  return { init, openProject };
})();


/* ═══════════════════════════════════════════════════════════
   TECHNICAL SKILLS SHOWCASE (MD3)
   ═══════════════════════════════════════════════════════════ */

const skills = [
  // ── Programming ──────────────────────────────────────────
  {
    name: 'Python',
    category: 'programming',
    logo: 'assets/skills/python.svg',
    logoAlt: 'Official Python logo'
  },
  {
    name: 'SQL',
    category: 'programming',
    logo: 'assets/skills/sql.svg',
    logoAlt: 'Official SQL database logo'
  },
  {
    name: 'Java',
    category: 'programming',
    logo: 'assets/skills/java.svg',
    logoAlt: 'Official Java logo'
  },

  // ── Data Analysis & BI ────────────────────────────────────
  {
    name: 'Pandas',
    category: 'analysis',
    logo: 'assets/skills/pandas.svg',
    logoAlt: 'Official Pandas logo'
  },
  {
    name: 'NumPy',
    category: 'analysis',
    logo: 'assets/skills/numpy.svg',
    logoAlt: 'Official NumPy logo'
  },
  {
    name: 'Excel',
    category: 'analysis',
    logo: 'assets/skills/excel.svg',
    logoAlt: 'Official Microsoft Excel logo'
  },
  {
    name: 'Scikit-learn',
    category: 'analysis',
    logo: 'assets/skills/scikit-learn.svg',
    logoAlt: 'Official Scikit-learn logo'
  },
  {
    name: 'DAX',
    category: 'analysis',
    logo: 'assets/skills/dax.svg',
    logoAlt: 'DAX Data Analysis Expressions logo'
  },
  {
    name: 'Power Query',
    category: 'analysis',
    logo: 'assets/skills/powerquery.svg',
    logoAlt: 'Microsoft Power Query ETL logo'
  },

  // ── Visualization ─────────────────────────────────────────
  {
    name: 'Power BI',
    category: 'visualization',
    logo: 'assets/skills/power-bi.svg',
    logoAlt: 'Official Microsoft Power BI logo'
  },
  {
    name: 'Matplotlib',
    category: 'visualization',
    logo: 'assets/skills/matplotlib.svg',
    logoAlt: 'Official Matplotlib logo'
  },
  {
    name: 'Seaborn',
    category: 'visualization',
    logo: 'assets/skills/seaborn.svg',
    logoAlt: 'Official Seaborn visualization logo'
  },
  {
    name: 'Tableau',
    category: 'visualization',
    logo: 'assets/skills/tableau.svg',
    logoAlt: 'Official Tableau logo'
  },

  // ── Web & APIs ────────────────────────────────────────────
  {
    name: 'FastAPI',
    category: 'web',
    logo: 'assets/skills/fastapi.svg',
    logoAlt: 'Official FastAPI logo'
  },
  {
    name: 'Node.js',
    category: 'web',
    logo: 'assets/skills/nodejs.svg',
    logoAlt: 'Official Node.js logo'
  },
  {
    name: 'Tailwind CSS',
    category: 'web',
    logo: 'assets/skills/tailwind.svg',
    logoAlt: 'Official Tailwind CSS logo'
  },

  // ── Databases ─────────────────────────────────────────────
  {
    name: 'MySQL',
    category: 'database',
    logo: 'assets/skills/mysql.svg',
    logoAlt: 'Official MySQL logo'
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    logo: 'assets/skills/postgresql.svg',
    logoAlt: 'Official PostgreSQL logo'
  },
  {
    name: 'MongoDB',
    category: 'database',
    logo: 'assets/skills/mongodb.svg',
    logoAlt: 'Official MongoDB logo'
  },
  {
    name: 'Supabase',
    category: 'database',
    logo: 'assets/skills/supabase.svg',
    logoAlt: 'Official Supabase logo'
  },

  // ── Machine Learning & NLP ────────────────────────────────
  {
    name: 'TensorFlow',
    category: 'ml',
    logo: 'assets/skills/tensorflow.svg',
    logoAlt: 'Official TensorFlow logo'
  },
  {
    name: 'Keras',
    category: 'ml',
    logo: 'assets/skills/keras.svg',
    logoAlt: 'Official Keras logo'
  },
  {
    name: 'PyTorch',
    category: 'ml',
    logo: 'assets/skills/pytorch.svg',
    logoAlt: 'Official PyTorch logo'
  },
  {
    name: 'Hugging Face Transformers',
    category: 'ml',
    logo: 'assets/skills/huggingface.svg',
    logoAlt: 'Official Hugging Face Transformers logo'
  },
  {
    name: 'OpenCV',
    category: 'ml',
    logo: 'assets/skills/opencv.svg',
    logoAlt: 'Official OpenCV logo'
  },

  // ── Tools & Deployment ────────────────────────────────────
  {
    name: 'Git',
    category: 'tools',
    logo: 'assets/skills/git.svg',
    logoAlt: 'Official Git logo'
  },
  {
    name: 'GitHub',
    category: 'tools',
    logo: 'assets/skills/github.svg',
    logoAlt: 'Official GitHub logo'
  },
  {
    name: 'Docker',
    category: 'tools',
    logo: 'assets/skills/docker.svg',
    logoAlt: 'Official Docker logo'
  },
  {
    name: 'Jupyter Notebook',
    category: 'tools',
    logo: 'assets/skills/jupyter.svg',
    logoAlt: 'Official Project Jupyter logo'
  },
  {
    name: 'Google Colab',
    category: 'tools',
    logo: 'assets/skills/google-colab.svg',
    logoAlt: 'Official Google Colab logo'
  },
  {
    name: 'VS Code',
    category: 'tools',
    logo: 'assets/skills/vscode.svg',
    logoAlt: 'Official Visual Studio Code logo'
  },
  {
    name: 'PyCharm',
    category: 'tools',
    logo: 'assets/skills/pycharm.svg',
    logoAlt: 'Official JetBrains PyCharm logo'
  }
];

const Skills = (() => {
  let activeCategory = 'all';

  const categoryLabels = {
    all: 'All',
    programming: 'Programming',
    analysis: 'Data Analysis',
    visualization: 'Visualization',
    web: 'Web & APIs',
    database: 'Databases',
    ml: 'ML & NLP',
    tools: 'Tools'
  };

  const customBadges = {
    'Python': 'Py',
    'SQL': 'SQL',
    'Java': 'Ja',
    'Pandas': 'Pd',
    'NumPy': 'Np',
    'Excel': 'Xl',
    'Scikit-learn': 'Sk',
    'DAX': 'DAX',
    'Power Query': 'PQ',
    'Power BI': 'PB',
    'Matplotlib': 'Mpl',
    'Seaborn': 'Sbn',
    'Tableau': 'Tb',
    'FastAPI': 'API',
    'Node.js': 'Node',
    'Tailwind CSS': 'TW',
    'MySQL': 'My',
    'PostgreSQL': 'PG',
    'MongoDB': 'MDB',
    'Supabase': 'Supa',
    'Git': 'Git',
    'GitHub': 'GH',
    'Docker': 'Doc',
    'Jupyter Notebook': 'JN',
    'Google Colab': 'Col',
    'VS Code': 'VS',
    'PyCharm': 'PC',
    'TensorFlow': 'TF',
    'Keras': 'Ker',
    'PyTorch': 'PT',
    'Hugging Face Transformers': 'HF',
    'OpenCV': 'CV'
  };

  function getBadgeText(name) {
    if (customBadges[name]) return customBadges[name];
    const words = name.trim().split(/[\s-]+/);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.slice(0, 2);
  }

  function getNormalizedList(list) {
    if (!Array.isArray(list)) return [];
    return list.map(item => {
      if (Array.isArray(item)) {
        const found = skills.find(s => s.name.toLowerCase() === item[0].toLowerCase());
        return found || { name: item[0], category: item[1] };
      }
      return item;
    });
  }

  function render(items = skills) {
    const grid = document.getElementById('skills-grid') || document.getElementById('skill-grid');
    if (!grid) return;

    const data = getNormalizedList(items);

    grid.innerHTML = data.map((item, index) => {
      const catLabel = categoryLabels[item.category] || item.category;
      const logoHtml = item.logo
        ? `<img src="${item.logo}" alt="${item.logoAlt || item.name + ' logo'}" class="skill-card__logo" width="24" height="24" loading="lazy" />`
        : `<span class="skill-card__badge-text">${item.badge || getBadgeText(item.name)}</span>`;

      return `
        <div class="skill-card reveal" data-category="${item.category}" role="listitem" style="animation-delay: ${index * 0.04}s">
          <div class="skill-card__badge" aria-hidden="true">${logoHtml}</div>
          <div class="skill-card__info">
            <span class="skill-card__name">${item.name}</span>
          </div>
          <span class="skill-card__category">${catLabel}</span>
        </div>
      `;
    }).join('');
  }

  function filter(category) {
    activeCategory = category;
    const cards = document.querySelectorAll('#skills-grid .skill-card, #skill-grid .skill-card');
    cards.forEach(card => {
      const cardCat = card.dataset.category;
      const match = (category === 'all' || cardCat === category);
      card.classList.toggle('hidden', !match);
      if (match) {
        card.style.animation = 'none';
        card.offsetHeight; /* trigger reflow */
        card.style.animation = '';
      }
    });
  }

  function initFilterChips() {
    const chips = document.querySelectorAll('.skills-filters .skill-chip, .skill-filters button');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const cat = chip.dataset.category || chip.dataset.skill || 'all';
        if (cat === activeCategory) return;

        chips.forEach(c => {
          c.classList.remove('active', 'md-chip-active');
          c.setAttribute('aria-pressed', 'false');
        });
        chip.classList.add('active');
        chip.setAttribute('aria-pressed', 'true');

        filter(cat);
      });

      chip.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          chip.click();
        }
      });
    });
  }

  function init() {
    render(skills);
    initFilterChips();
  }

  return { init, render, filter, get skills() { return skills; } };
})();


/* ═══════════════════════════════════════════════════════════
   SQL ANALYTICS WORKSPACE (Two-Column Interactive Showcase)
   ═══════════════════════════════════════════════════════════ */

const SqlShowcase = (() => {
  const queries = {
    '01': {
      question: 'Which customers are from Mumbai?',
      raw: `SELECT
    customer_name,
    city
FROM customers
WHERE city = 'Mumbai';`,
      highlighted: `<span class="kw">SELECT</span>
    customer_name,
    city
<span class="kw">FROM</span> customers
<span class="kw">WHERE</span> city = <span class="str">'Mumbai'</span>;`,
      lines: 5,
      explanation: 'Filters customer records based on location.',
      insight: 'Useful for analyzing customers by geographic segment.',
      concepts: ['SELECT', 'WHERE', 'Filtering']
    },
    '02': {
      question: 'Which categories generate the most revenue?',
      raw: `SELECT
    category,
    SUM(amount) AS total_revenue
FROM orders
GROUP BY category
ORDER BY total_revenue DESC;`,
      highlighted: `<span class="kw">SELECT</span>
    category,
    <span class="fn">SUM</span>(amount) <span class="kw">AS</span> total_revenue
<span class="kw">FROM</span> orders
<span class="kw">GROUP BY</span> category
<span class="kw">ORDER BY</span> total_revenue <span class="kw">DESC</span>;`,
      lines: 6,
      explanation: 'Aggregates revenue for each category.',
      insight: 'Helps identify the categories contributing most to overall revenue.',
      concepts: ['SUM()', 'GROUP BY', 'ORDER BY']
    },
    '03': {
      question: 'Which customers have placed the most orders?',
      raw: `SELECT
    c.customer_name,
    COUNT(o.order_id) AS total_orders
FROM customers c
JOIN orders o
    ON c.customer_id = o.customer_id
GROUP BY c.customer_name
ORDER BY total_orders DESC;`,
      highlighted: `<span class="kw">SELECT</span>
    <span class="col">c</span>.customer_name,
    <span class="fn">COUNT</span>(<span class="col">o</span>.order_id) <span class="kw">AS</span> total_orders
<span class="kw">FROM</span> customers c
<span class="kw">JOIN</span> orders o
    <span class="kw">ON</span> <span class="col">c</span>.customer_id = <span class="col">o</span>.customer_id
<span class="kw">GROUP BY</span> <span class="col">c</span>.customer_name
<span class="kw">ORDER BY</span> total_orders <span class="kw">DESC</span>;`,
      lines: 8,
      explanation: 'Combines customer and order information.',
      insight: 'Helps identify high-activity customers.',
      concepts: ['JOIN', 'COUNT()', 'GROUP BY']
    },
    '04': {
      question: 'Which cities generated more than ₹50,000 in revenue?',
      raw: `SELECT
    city,
    SUM(amount) AS total_revenue
FROM orders
GROUP BY city
HAVING SUM(amount) > 50000
ORDER BY total_revenue DESC;`,
      highlighted: `<span class="kw">SELECT</span>
    city,
    <span class="fn">SUM</span>(amount) <span class="kw">AS</span> total_revenue
<span class="kw">FROM</span> orders
<span class="kw">GROUP BY</span> city
<span class="kw">HAVING</span> <span class="fn">SUM</span>(amount) > <span class="num">50000</span>
<span class="kw">ORDER BY</span> total_revenue <span class="kw">DESC</span>;`,
      lines: 6,
      explanation: 'Groups revenue by city and filters groups using HAVING.',
      insight: 'Highlights cities with higher revenue contribution.',
      concepts: ['GROUP BY', 'HAVING', 'SUM()']
    },
    '05': {
      question: 'Which customers generated more than ₹50,000 in sales?',
      raw: `WITH customer_sales AS (
    SELECT
        customer_id,
        SUM(amount) AS total_sales
    FROM orders
    GROUP BY customer_id
)

SELECT
    customer_id,
    total_sales
FROM customer_sales
WHERE total_sales > 50000;`,
      highlighted: `<span class="kw">WITH</span> customer_sales <span class="kw">AS</span> (
    <span class="kw">SELECT</span>
        customer_id,
        <span class="fn">SUM</span>(amount) <span class="kw">AS</span> total_sales
    <span class="kw">FROM</span> orders
    <span class="kw">GROUP BY</span> customer_id
)

<span class="kw">SELECT</span>
    customer_id,
    total_sales
<span class="kw">FROM</span> customer_sales
<span class="kw">WHERE</span> total_sales > <span class="num">50000</span>;`,
      lines: 12,
      explanation: 'Uses a Common Table Expression to separate the aggregation step from the filtering step.',
      insight: 'Makes multi-step analytical queries easier to read and maintain.',
      concepts: ['CTE', 'WITH', 'Aggregation']
    },
    '06': {
      question: 'Which products have prices above the average product price?',
      raw: `SELECT
    product_name,
    price
FROM products
WHERE price > (
    SELECT AVG(price)
    FROM products
)
ORDER BY price DESC;`,
      highlighted: `<span class="kw">SELECT</span>
    product_name,
    price
<span class="kw">FROM</span> products
<span class="kw">WHERE</span> price > (
    <span class="kw">SELECT</span> <span class="fn">AVG</span>(price)
    <span class="kw">FROM</span> products
)
<span class="kw">ORDER BY</span> price <span class="kw">DESC</span>;`,
      lines: 8,
      explanation: 'Uses a subquery to calculate the average price before filtering products.',
      insight: 'Identifies products priced above the overall average.',
      concepts: ['Subquery', 'AVG()', 'WHERE']
    },
    '07': {
      question: 'Which products rank highest within each category?',
      raw: `SELECT
    product_name,
    category,
    sales,
    RANK() OVER (
        PARTITION BY category
        ORDER BY sales DESC
    ) AS category_rank
FROM products;`,
      highlighted: `<span class="kw">SELECT</span>
    product_name,
    category,
    sales,
    <span class="fn">RANK</span>() <span class="kw">OVER</span> (
        <span class="kw">PARTITION BY</span> category
        <span class="kw">ORDER BY</span> sales <span class="kw">DESC</span>
    ) <span class="kw">AS</span> category_rank
<span class="kw">FROM</span> products;`,
      lines: 9,
      explanation: 'Ranks products separately within each category.',
      insight: 'Helps compare product performance within categories.',
      concepts: ['RANK()', 'OVER()', 'PARTITION BY']
    },
    '08': {
      question: 'How does revenue change month by month?',
      raw: `SELECT
    DATE_TRUNC('month', order_date) AS month,
    SUM(amount) AS monthly_revenue
FROM orders
GROUP BY month
ORDER BY month;`,
      highlighted: `<span class="kw">SELECT</span>
    <span class="fn">DATE_TRUNC</span>(<span class="str">'month'</span>, order_date) <span class="kw">AS</span> month,
    <span class="fn">SUM</span>(amount) <span class="kw">AS</span> monthly_revenue
<span class="kw">FROM</span> orders
<span class="kw">GROUP BY</span> month
<span class="kw">ORDER BY</span> month;`,
      lines: 6,
      explanation: 'Groups revenue by month to identify trends over time.',
      insight: 'Useful for understanding monthly sales patterns.',
      concepts: ['DATE_TRUNC()', 'GROUP BY', 'ORDER BY']
    }
  };

  let currentKey = '01';
  let copyTimeout = null;

  function render(key) {
    const q = queries[key];
    if (!q) return;
    currentKey = key;

    const contentEl = document.getElementById('sql-showcase-content');
    const questionEl = document.getElementById('sql-question');
    const innerEl = document.getElementById('sql-code-inner');
    const linesEl = document.getElementById('sql-lines');
    const explanationEl = document.getElementById('sql-explanation');
    const insightEl = document.getElementById('sql-insight');
    const conceptsEl = document.getElementById('sql-concepts');

    if (contentEl) contentEl.classList.add('fade-out');

    setTimeout(() => {
      if (questionEl) questionEl.textContent = q.question;
      if (innerEl) innerEl.innerHTML = q.highlighted;
      if (linesEl) {
        let linesHtml = '';
        for (let i = 1; i <= q.lines; i++) {
          const padded = String(i).padStart(2, '0');
          linesHtml += `<span>${padded}</span>`;
        }
        linesEl.innerHTML = linesHtml;
      }
      if (explanationEl) explanationEl.textContent = q.explanation;
      if (insightEl) insightEl.textContent = q.insight;
      if (conceptsEl) {
        conceptsEl.innerHTML = q.concepts
          .map(c => `<span class="sql-concept-chip">${c}</span>`)
          .join('');
      }
      if (contentEl) contentEl.classList.remove('fade-out');
    }, 120);
  }

  function init() {
    const navItems = document.querySelectorAll('.sql-nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const key = item.dataset.query;
        if (!key || key === currentKey) return;

        navItems.forEach(ni => {
          ni.classList.remove('active');
          ni.setAttribute('aria-selected', 'false');
        });
        item.classList.add('active');
        item.setAttribute('aria-selected', 'true');

        render(key);
      });
    });

    const copyBtn = document.getElementById('sql-copy-btn');
    const copyText = document.getElementById('sql-copy-text');
    const copyIcon = document.getElementById('sql-copy-icon');

    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const currentQuery = queries[currentKey];
        if (!currentQuery) return;

        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(currentQuery.raw);
          } else {
            const textarea = document.createElement('textarea');
            textarea.value = currentQuery.raw;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
          }

          if (copyText) copyText.textContent = '✓ Copied';
          if (copyIcon) copyIcon.style.display = 'none';
          copyBtn.style.borderColor = 'var(--md-primary)';
          copyBtn.style.color = 'var(--md-primary)';

          if (copyTimeout) clearTimeout(copyTimeout);
          copyTimeout = setTimeout(() => {
            if (copyText) copyText.textContent = 'Copy';
            if (copyIcon) copyIcon.style.display = '';
            copyBtn.style.borderColor = '';
            copyBtn.style.color = '';
          }, 2000);
        } catch (err) {
          console.error('Failed to copy query:', err);
        }
      });
    }
  }

  return { init, render };
})();


/* ═══════════════════════════════════════════════════════════
   HERO PROFILE — Subtle mouse parallax
   ═══════════════════════════════════════════════════════════ */

const HeroProfile = (() => {
  let portraitWrap = null;
  let orbsEl = null;
  let heroSection = null;

  // Lerp targets
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  let orbTargetX = 0, orbTargetY = 0;
  let orbCurrentX = 0, orbCurrentY = 0;

  const MAX_PORTRAIT = 4;   // px ±
  const MAX_ORBS = 8;       // px ±
  const LERP_FACTOR = 0.08; // smoothness (lower = smoother)

  let rafId = null;
  let isInHero = false;

  function lerp(a, b, t) { return a + (b - a) * t; }

  function onMouseMove(e) {
    if (!heroSection) return;
    const rect = heroSection.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // Normalized -1 to 1
    const nx = Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width / 2)));
    const ny = Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height / 2)));

    targetX = nx * MAX_PORTRAIT;
    targetY = ny * MAX_PORTRAIT;
    orbTargetX = -nx * MAX_ORBS;
    orbTargetY = -ny * MAX_ORBS;
  }

  function onMouseLeave() {
    targetX = 0; targetY = 0;
    orbTargetX = 0; orbTargetY = 0;
  }

  function animate() {
    currentX = lerp(currentX, targetX, LERP_FACTOR);
    currentY = lerp(currentY, targetY, LERP_FACTOR);
    orbCurrentX = lerp(orbCurrentX, orbTargetX, LERP_FACTOR * 0.7);
    orbCurrentY = lerp(orbCurrentY, orbTargetY, LERP_FACTOR * 0.7);

    if (portraitWrap) {
      portraitWrap.style.transform = `translate(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px)`;
    }
    if (orbsEl) {
      orbsEl.style.transform = `translate(${orbCurrentX.toFixed(2)}px, ${orbCurrentY.toFixed(2)}px)`;
    }

    rafId = requestAnimationFrame(animate);
  }

  function init() {
    heroSection = document.getElementById('hero');
    portraitWrap = document.getElementById('hero-portrait-wrap');
    orbsEl = document.querySelector('#hero-profile-visual .hero-profile__orbs');

    if (!heroSection || !portraitWrap) return;

    // Only add parallax on non-touch devices
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      heroSection.addEventListener('mousemove', onMouseMove, { passive: true });
      heroSection.addEventListener('mouseleave', onMouseLeave, { passive: true });
      rafId = requestAnimationFrame(animate);
    }
  }

  return { init };
})();


/* ═══════════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  // Theme first (prevents flash)
  Theme.init();

  // Nav
  Nav.init();

  // Skills
  Skills.init();

  // Render projects
  if (window.PROJECTS) {
    // 1. Homepage Projects Grid: strictly display max 5 projects (preserve order)
    const homeGrid = document.getElementById('projects-grid');
    if (homeGrid) {
      const homeProjects = window.PROJECTS.slice(0, 5);
      ProjectRenderer.render(homeProjects, 'projects-grid');
    }

    // 2. Complete Projects Page Grid: display ALL projects
    const allGrid = document.getElementById('all-projects-grid');
    if (allGrid) {
      ProjectRenderer.render(window.PROJECTS, 'all-projects-grid');
    }

    // Update dynamic count badges & pills
    const totalPill = document.getElementById('projects-total-pill');
    if (totalPill) {
      totalPill.textContent = String(window.PROJECTS.length);
    }
    const countBadge = document.getElementById('all-projects-count-badge');
    if (countBadge) {
      countBadge.textContent = `${window.PROJECTS.length} Projects`;
    }
    const filterStatus = document.getElementById('projects-filter-status');
    if (filterStatus) {
      filterStatus.textContent = `Showing ${window.PROJECTS.length} projects`;
    }
  }

  // Init modal
  const modal = new ProjectModal();

  // Project interaction
  ProjectInteraction.init(modal);

  // Filters
  ProjectFilter.init();

  // Reveal animations
  Reveals.init();

  // Number counters
  Counter.init();

  // Hero profile & charts
  HeroProfile.init();
  HeroCharts.init();

  // Back to top
  BackToTop.init();

  // SQL Showcase
  SqlShowcase.init();
});
