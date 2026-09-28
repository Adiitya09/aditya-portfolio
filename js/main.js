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

const Nav = (() => {
  let header, mobileMenu, mobileBackdrop, mobileDrawer, mobileToggle;
  let isOpen = false;
  const SCROLL_THRESHOLD = 20;

  function init() {
    header = document.querySelector('.site-header');
    mobileMenu = document.getElementById('mobile-menu');
    mobileToggle = document.getElementById('mobile-menu-toggle');
    mobileBackdrop = mobileMenu?.querySelector('.nav-mobile__backdrop');
    mobileDrawer = mobileMenu?.querySelector('.nav-mobile__drawer');

    // Scroll handler
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Theme toggle
    document.getElementById('theme-toggle')?.addEventListener('click', Theme.toggle);

    // Mobile menu toggle
    mobileToggle?.addEventListener('click', () => isOpen ? closeMenu() : openMenu());

    // Mobile backdrop click
    mobileBackdrop?.addEventListener('click', closeMenu);

    // Mobile links close menu
    document.querySelectorAll('.nav-mobile__link').forEach(link =>
      link.addEventListener('click', closeMenu)
    );

    // Active section tracking
    initSectionObserver();
  }

  function handleScroll() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > SCROLL_THRESHOLD);
  }

  function openMenu() {
    if (!mobileMenu) return;
    isOpen = true;
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    mobileToggle?.setAttribute('aria-expanded', 'true');
    mobileToggle?.setAttribute('aria-label', 'Close navigation');
    // Focus first drawer item
    setTimeout(() => mobileDrawer?.querySelector('a, button')?.focus(), 50);

    // Keyboard: close on Escape
    document.addEventListener('keydown', handleMenuKeydown);
  }

  function closeMenu() {
    if (!mobileMenu) return;
    isOpen = false;
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    mobileToggle?.setAttribute('aria-expanded', 'false');
    mobileToggle?.setAttribute('aria-label', 'Open navigation');
    mobileToggle?.focus();
    document.removeEventListener('keydown', handleMenuKeydown);
  }

  function handleMenuKeydown(e) {
    if (e.key === 'Escape') closeMenu();
  }

  function initSectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section], .nav-mobile__link[data-section]');

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
  }

  return { init };
})();


/* ═══════════════════════════════════════════════════════════
   INTERSECTION OBSERVER — Reveal & Counter
   ═══════════════════════════════════════════════════════════ */

const Reveals = (() => {
  function init() {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .process-step');

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


/* ═══════════════════════════════════════════════════════════
   HERO CHART ANIMATIONS
   ═══════════════════════════════════════════════════════════ */

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

  function render(projects) {
    const container = document.getElementById('projects-grid');
    if (!container) return;
    container.innerHTML = projects.map((p, i) => renderCard(p, i)).join('');
  }

  return { render };
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
    document.querySelectorAll('.project-card[data-project-id]').forEach(card => {
      const project = window.PROJECTS.find(p => p.id === card.dataset.projectId);
      if (!project) return;
      const show = fn(project);
      card.classList.toggle('hidden', !show);
    });
  }

  return { init };
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
   SQL COPY BUTTON
   ═══════════════════════════════════════════════════════════ */

const SqlCopy = (() => {
  function init() {
    const btn = document.getElementById('copy-sql');
    if (!btn) return;

    btn.addEventListener('click', async () => {
      const code = document.querySelector('.sql-code-content')?.textContent?.trim();
      if (!code) return;

      try {
        await navigator.clipboard.writeText(code);
        const origLabel = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.color = 'var(--md-primary)';
        setTimeout(() => {
          btn.textContent = origLabel;
          btn.style.color = '';
        }, 2000);
      } catch {
        // Fallback — select text
      }
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

    document.getElementById('projects-grid')?.addEventListener('click', handleClick);
    document.getElementById('projects-grid')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('.project-card[data-project-id]');
        if (card && e.target === card) {
          e.preventDefault();
          openProject(card.dataset.projectId);
        }
      }
    });
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

  function openProject(id) {
    const project = window.PROJECTS.find(p => p.id === id);
    if (!project || !modal) return;
    modal.open(project);
  }

  return { init };
})();


/* ═══════════════════════════════════════════════════════════
   TECHNICAL SKILLS SHOWCASE (MD3)
   ═══════════════════════════════════════════════════════════ */

const skills = [
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
    logoAlt: 'SQL database icon'
  },
  {
    name: 'Java',
    category: 'programming',
    logo: 'assets/skills/java.svg',
    logoAlt: 'Official Java logo'
  },
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
    name: 'Tableau',
    category: 'visualization',
    logo: 'assets/skills/tableau.svg',
    logoAlt: 'Official Tableau logo'
  },
  {
    name: 'MySQL',
    category: 'database',
    logo: 'assets/skills/mysql.svg',
    logoAlt: 'Official MySQL logo'
  },
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
  },
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
    name: 'OpenCV',
    category: 'ml',
    logo: 'assets/skills/opencv.svg',
    logoAlt: 'Official OpenCV logo'
  }
];

const Skills = (() => {
  let activeCategory = 'all';

  const categoryLabels = {
    all: 'All',
    programming: 'Programming',
    analysis: 'Data Analysis',
    visualization: 'Visualization',
    database: 'Database',
    tools: 'Tools',
    ml: 'ML'
  };

  const customBadges = {
    'Python': 'Py',
    'SQL': 'SQL',
    'Java': 'Ja',
    'Pandas': 'Pd',
    'NumPy': 'Np',
    'Excel': 'Xl',
    'Scikit-learn': 'Sk',
    'Power BI': 'PB',
    'Matplotlib': 'Mpl',
    'Tableau': 'Tb',
    'MySQL': 'My',
    'Git': 'Git',
    'GitHub': 'GH',
    'Jupyter Notebook': 'JN',
    'Google Colab': 'Col',
    'VS Code': 'VS',
    'PyCharm': 'PC',
    'TensorFlow': 'TF',
    'Keras': 'Ker',
    'PyTorch': 'PT',
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
    ProjectRenderer.render(window.PROJECTS);
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

  // Hero charts
  HeroCharts.init();

  // Back to top
  BackToTop.init();

  // SQL copy
  SqlCopy.init();
});
