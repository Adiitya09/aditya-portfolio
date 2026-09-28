/* ============================================================
   MODAL & GALLERY — Material You Accessible Project Detail System
   Includes Reusable Project Gallery & Fullscreen Lightbox Viewer
   ============================================================ */

'use strict';

/* ═══════════════════════════════════════════════════════════
   LIGHTBOX VIEWER — Fullscreen Dashboard Screenshot Inspector
   ═══════════════════════════════════════════════════════════ */

class LightboxViewer {
  constructor(onIndexChange) {
    this.backdrop     = document.getElementById('image-lightbox');
    this.modal        = this.backdrop?.querySelector('.image-lightbox');
    this.imgEl        = document.getElementById('lightbox-img');
    this.closeBtn     = document.getElementById('lightbox-close');
    this.prevBtn      = document.getElementById('lightbox-prev');
    this.nextBtn      = document.getElementById('lightbox-next');
    this.counterEl    = document.getElementById('lightbox-counter');
    this.captionBar   = document.getElementById('lightbox-caption-bar');
    this.captionTitle = document.getElementById('lightbox-caption-title');
    this.captionText  = document.getElementById('lightbox-caption-text');
    this.onIndexChange= onIndexChange;

    this.images       = [];
    this.currentIndex = 0;
    this.isOpen       = false;
    this._previousFocus = null;

    // Touch support
    this._touchStartX = 0;
    this._touchStartY = 0;

    this._bindEvents();
  }

  _bindEvents() {
    if (!this.backdrop) return;

    // Close on button
    this.closeBtn?.addEventListener('click', () => this.close());

    // Close on backdrop click (outside the image and controls)
    this.backdrop.addEventListener('click', (e) => {
      if (e.target === this.backdrop || e.target.classList.contains('image-lightbox__image-wrap') || e.target.classList.contains('image-lightbox__stage')) {
        this.close();
      }
    });

    // Prev / Next buttons
    this.prevBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.prev();
    });

    this.nextBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.next();
    });

    // Touch swipe on lightbox stage
    const stage = this.backdrop.querySelector('.image-lightbox__stage');
    if (stage) {
      stage.addEventListener('touchstart', (e) => {
        this._touchStartX = e.changedTouches[0].clientX;
        this._touchStartY = e.changedTouches[0].clientY;
      }, { passive: true });

      stage.addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].clientX - this._touchStartX;
        const deltaY = e.changedTouches[0].clientY - this._touchStartY;
        if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX < 0) this.next();
          else this.prev();
        }
      }, { passive: true });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;

      if (e.key === 'Escape') {
        e.stopPropagation();
        e.preventDefault();
        this.close();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.prev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.next();
      } else if (e.key === 'Tab') {
        this._trapFocus(e);
      }
    });
  }

  open(images, startIndex = 0) {
    if (!this.backdrop || !images || !images.length) return;
    this.images = images;
    this.currentIndex = startIndex;
    this._previousFocus = document.activeElement;
    this.isOpen = true;

    this._updateDisplay();
    this.backdrop.hidden = false;
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.backdrop.classList.add('open');
        this.closeBtn?.focus();
      });
    });
  }

  close() {
    if (!this.backdrop || !this.isOpen) return;
    this.isOpen = false;
    this.backdrop.classList.remove('open');
    setTimeout(() => {
      this.backdrop.hidden = true;
      this._previousFocus?.focus();
    }, 250);
  }

  next() {
    if (this.images.length <= 1) return;
    const nextIdx = (this.currentIndex + 1) % this.images.length;
    this.goTo(nextIdx);
  }

  prev() {
    if (this.images.length <= 1) return;
    const prevIdx = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.goTo(prevIdx);
  }

  goTo(index) {
    if (index === this.currentIndex || index < 0 || index >= this.images.length) return;
    this.currentIndex = index;
    this._updateDisplay();
    if (typeof this.onIndexChange === 'function') {
      this.onIndexChange(this.currentIndex);
    }
  }

  _updateDisplay() {
    const item = this.images[this.currentIndex];
    if (!item) return;

    const isSingle = this.images.length <= 1;

    // Prev / Next button visibility
    if (this.prevBtn) this.prevBtn.style.display = isSingle ? 'none' : 'flex';
    if (this.nextBtn) this.nextBtn.style.display = isSingle ? 'none' : 'flex';

    // Counter
    if (this.counterEl) {
      this.counterEl.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
      this.counterEl.style.display = isSingle ? 'none' : 'block';
    }

    // Image transition
    if (this.imgEl) {
      this.imgEl.style.opacity = '0';
      this.imgEl.style.transform = 'scale(0.97)';
      
      const newImg = new Image();
      newImg.src = item.src;
      newImg.onload = () => {
        this.imgEl.src = item.src;
        this.imgEl.alt = item.alt || item.title || 'Fullscreen dashboard view';
        requestAnimationFrame(() => {
          this.imgEl.style.opacity = '1';
          this.imgEl.style.transform = 'scale(1)';
        });
      };
      newImg.onerror = () => {
        this.imgEl.style.opacity = '1';
        this.imgEl.style.transform = 'scale(1)';
      };
    }

    // Caption
    const hasCaption = item.title || item.caption;
    if (this.captionBar) {
      if (hasCaption) {
        this.captionBar.hidden = false;
        if (this.captionTitle) this.captionTitle.textContent = item.title || '';
        if (this.captionText) this.captionText.textContent = item.caption || '';
      } else {
        this.captionBar.hidden = true;
      }
    }
  }

  _trapFocus(e) {
    const focusable = [...this.backdrop.querySelectorAll('button:not([disabled]), [tabindex]:not([tabindex="-1"])')]
      .filter(el => !el.closest('[hidden]') && el.offsetParent !== null);

    if (!focusable.length) { e.preventDefault(); return; }

    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }
}


/* ═══════════════════════════════════════════════════════════
   PROJECT GALLERY — Reusable Material You Detail Gallery
   ═══════════════════════════════════════════════════════════ */

class ProjectGallery {
  constructor(onOpenLightbox) {
    this.container    = document.getElementById('modal-gallery');
    this.stage        = this.container?.querySelector('.project-gallery__stage');
    this.mainImg      = document.getElementById('gallery-main-img');
    this.mainBtn      = document.getElementById('gallery-main-btn');
    this.fallback     = document.getElementById('gallery-fallback');
    this.counter      = document.getElementById('gallery-counter');
    this.expandBtn    = document.getElementById('gallery-expand-btn');
    this.prevBtn      = document.getElementById('gallery-prev');
    this.nextBtn      = document.getElementById('gallery-next');
    this.captionBar   = document.getElementById('gallery-caption-bar');
    this.captionTitle = document.getElementById('gallery-caption-title');
    this.captionText  = document.getElementById('gallery-caption-text');
    this.thumbnails   = document.getElementById('gallery-thumbnails');
    this.onOpenLightbox = onOpenLightbox;

    this.images       = [];
    this.currentIndex = 0;
    this.isTransitioning = false;

    // Touch support
    this._touchStartX = 0;
    this._touchStartY = 0;

    this._bindEvents();
  }

  _bindEvents() {
    if (!this.container) return;

    // Prev / Next button clicks
    this.prevBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.prev();
    });

    this.nextBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.next();
    });

    // Click on main image or expand button opens Lightbox
    this.mainBtn?.addEventListener('click', () => {
      if (this.images.length > 0 && typeof this.onOpenLightbox === 'function') {
        this.onOpenLightbox(this.currentIndex);
      }
    });

    this.expandBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.images.length > 0 && typeof this.onOpenLightbox === 'function') {
        this.onOpenLightbox(this.currentIndex);
      }
    });

    // Touch swipe gestures on stage
    if (this.stage) {
      this.stage.addEventListener('touchstart', (e) => {
        this._touchStartX = e.changedTouches[0].clientX;
        this._touchStartY = e.changedTouches[0].clientY;
      }, { passive: true });

      this.stage.addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].clientX - this._touchStartX;
        const deltaY = e.changedTouches[0].clientY - this._touchStartY;
        if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX < 0) this.next();
          else this.prev();
        }
      }, { passive: true });
    }

    // Graceful error handling for main image
    this.mainImg?.addEventListener('error', () => {
      console.warn('[Gallery] Failed to load dashboard image:', this.mainImg.src);
      this._showFallback(true);
    });

    this.mainImg?.addEventListener('load', () => {
      this._showFallback(false);
    });
  }

  loadProject(project) {
    if (!project) return;

    // Normalize images: accept array of strings or array of objects
    const rawImages = project.images || (project.image ? [project.image] : []);
    this.images = rawImages.map((item, idx) => {
      if (typeof item === 'string') {
        return {
          src: item,
          title: `${project.title} — View ${idx + 1}`,
          caption: '',
          alt: `${project.title} dashboard screenshot ${idx + 1}`
        };
      }
      return {
        src: item.src,
        title: item.title || '',
        caption: item.caption || '',
        alt: item.alt || item.title || `${project.title} dashboard screenshot ${idx + 1}`
      };
    });

    this.currentIndex = 0;

    if (!this.images.length) {
      // Graceful fallback when no images exist
      this._showFallback(true);
      if (this.counter) this.counter.style.display = 'none';
      if (this.prevBtn) this.prevBtn.style.display = 'none';
      if (this.nextBtn) this.nextBtn.style.display = 'none';
      if (this.expandBtn) this.expandBtn.style.display = 'none';
      if (this.captionBar) this.captionBar.hidden = true;
      if (this.thumbnails) this.thumbnails.innerHTML = '';
      return;
    }

    this._showFallback(false);
    this._renderThumbnails();
    this._displaySlide(0, false);
  }

  next() {
    if (this.images.length <= 1) return;
    const nextIdx = (this.currentIndex + 1) % this.images.length;
    this.goTo(nextIdx);
  }

  prev() {
    if (this.images.length <= 1) return;
    const prevIdx = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.goTo(prevIdx);
  }

  goTo(index) {
    if (index === this.currentIndex || index < 0 || index >= this.images.length) return;
    this.currentIndex = index;
    this._displaySlide(index, true);
  }

  setIndex(index, animate = false) {
    if (index < 0 || index >= this.images.length) return;
    this.currentIndex = index;
    this._displaySlide(index, animate);
  }

  _displaySlide(index, animate = true) {
    const item = this.images[index];
    if (!item) return;

    const isSingle = this.images.length <= 1;

    // Controls visibility
    if (this.prevBtn) this.prevBtn.style.display = isSingle ? 'none' : 'flex';
    if (this.nextBtn) this.nextBtn.style.display = isSingle ? 'none' : 'flex';
    if (this.expandBtn) this.expandBtn.style.display = 'flex';
    if (this.counter) {
      this.counter.style.display = isSingle ? 'none' : 'block';
      this.counter.textContent = `${index + 1} / ${this.images.length}`;
    }

    // Captions
    const hasCaption = Boolean(item.title || item.caption);
    if (this.captionBar) {
      if (hasCaption) {
        this.captionBar.hidden = false;
        if (this.captionTitle) this.captionTitle.textContent = item.title || '';
        if (this.captionText) this.captionText.textContent = item.caption || '';
      } else {
        this.captionBar.hidden = true;
      }
    }

    // Smooth transition with Material easing
    if (this.mainImg) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (animate && !prefersReducedMotion) {
        this.mainImg.classList.add('project-gallery__img--animating');
        setTimeout(() => {
          this.mainImg.src = item.src;
          this.mainImg.alt = item.alt;
          requestAnimationFrame(() => {
            this.mainImg.classList.remove('project-gallery__img--animating');
          });
        }, 120);
      } else {
        this.mainImg.src = item.src;
        this.mainImg.alt = item.alt;
      }
    }

    // Update active thumbnail
    this._updateActiveThumbnail(index);
  }

  _renderThumbnails() {
    if (!this.thumbnails) return;

    if (this.images.length <= 1) {
      this.thumbnails.style.display = 'none';
      this.thumbnails.innerHTML = '';
      return;
    }

    this.thumbnails.style.display = 'flex';
    this.thumbnails.innerHTML = this.images.map((item, idx) => `
      <button
        class="gallery-thumb ${idx === 0 ? 'active' : ''}"
        role="tab"
        aria-selected="${idx === 0 ? 'true' : 'false'}"
        aria-label="View screenshot ${idx + 1}: ${this._esc(item.title || '')}"
        data-thumb-index="${idx}"
      >
        <img
          src="${item.src}"
          alt="Thumbnail ${idx + 1}"
          class="gallery-thumb__img"
          loading="lazy"
          onerror="this.style.opacity='0.4';"
        />
      </button>
    `).join('');

    // Thumbnail click handlers
    this.thumbnails.querySelectorAll('.gallery-thumb').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.thumbIndex, 10);
        this.goTo(idx);
      });
    });
  }

  _updateActiveThumbnail(index) {
    if (!this.thumbnails) return;
    const thumbs = this.thumbnails.querySelectorAll('.gallery-thumb');
    thumbs.forEach((thumb, idx) => {
      const isActive = idx === index;
      thumb.classList.toggle('active', isActive);
      thumb.setAttribute('aria-selected', isActive ? 'true' : 'false');
      if (isActive) {
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
  }

  _showFallback(show) {
    if (this.fallback) this.fallback.hidden = !show;
    if (this.mainImg) this.mainImg.style.display = show ? 'none' : 'block';
  }

  _esc(str) {
    return String(str || '').replace(/[&<>"']/g, c =>
      ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])
    );
  }
}


/* ═══════════════════════════════════════════════════════════
   PROJECT MODAL — Main Case Study Dialog Controller
   ═══════════════════════════════════════════════════════════ */

class ProjectModal {
  constructor() {
    this.backdrop = document.getElementById('project-modal');
    this.modal    = this.backdrop?.querySelector('.modal');
    this.closeBtn = document.getElementById('modal-close');
    this.focusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    this._previousFocus = null;

    // Integrated Fullscreen Lightbox
    this.lightbox = new LightboxViewer((newIndex) => {
      this.gallery?.setIndex(newIndex, false);
    });

    // Integrated Reusable Project Gallery
    this.gallery = new ProjectGallery((index) => {
      this.lightbox?.open(this.gallery.images, index);
    });

    this._bindEvents();
  }

  _bindEvents() {
    if (!this.backdrop) return;

    // Close button
    this.closeBtn?.addEventListener('click', () => this.close());

    // Backdrop click
    this.backdrop.addEventListener('click', (e) => {
      if (e.target === this.backdrop) this.close();
    });

    // Keyboard events
    document.addEventListener('keydown', (e) => {
      // If modal is not open, ignore
      if (this.backdrop.hidden) return;

      // If lightbox is open, let lightbox handle its own Escape & arrow keys
      if (this.lightbox?.isOpen) return;

      if (e.key === 'Escape') {
        this.close();
      } else if (e.key === 'ArrowLeft') {
        this.gallery?.prev();
      } else if (e.key === 'ArrowRight') {
        this.gallery?.next();
      }
    });

    // Focus trap
    this.backdrop.addEventListener('keydown', (e) => this._trapFocus(e));
  }

  open(project) {
    if (!this.backdrop || !project) return;
    this._previousFocus = document.activeElement;
    this._populate(project);
    this.gallery.loadProject(project);

    this.backdrop.hidden = false;
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.backdrop.classList.add('open');
        this.closeBtn?.focus();
      });
    });
  }

  close() {
    if (!this.backdrop) return;
    if (this.lightbox?.isOpen) this.lightbox.close();

    this.backdrop.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
      this.backdrop.hidden = true;
      this._previousFocus?.focus();
    }, 350);
  }

  _populate(p) {
    // Category & Title & Subtitle
    const catEl = document.getElementById('modal-category');
    if (catEl) catEl.textContent = p.category;

    const titleEl = document.getElementById('modal-title');
    if (titleEl) titleEl.textContent = p.title;

    const subEl = document.getElementById('modal-subtitle');
    if (subEl) {
      if (p.subtitle) {
        subEl.textContent = p.subtitle;
        subEl.style.display = 'block';
      } else {
        subEl.style.display = 'none';
      }
    }

    // Short Overview
    const overviewEl = document.getElementById('modal-overview');
    if (overviewEl) overviewEl.textContent = p.overview || (p.details && p.details.overview) || p.shortDesc;

    // Project Snapshot (KPIs)
    const kpiEl = document.getElementById('modal-kpis');
    if (kpiEl && p.kpis) {
      kpiEl.innerHTML = p.kpis.map(k => `
        <div class="kpi-card">
          <div class="kpi-label">${this._esc(k.label)}</div>
          <div class="kpi-value">${this._esc(k.value)}</div>
        </div>
      `).join('');
    }

    // Technologies Used (Grouped if p.techCategories, else flat chips)
    const techGroupsEl = document.getElementById('modal-tech-groups');
    const techsEl = document.getElementById('modal-techs');
    if (p.techCategories && techGroupsEl) {
      techGroupsEl.style.display = 'flex';
      if (techsEl) techsEl.style.display = 'none';
      techGroupsEl.innerHTML = Object.entries(p.techCategories).map(([groupName, groupTechs]) => `
        <div class="tech-group">
          <div class="tech-group__label">${this._esc(groupName)}</div>
          <div class="tech-group__chips">
            ${groupTechs.map(t => `<span class="chip chip-tech">${this._esc(t)}</span>`).join('')}
          </div>
        </div>
      `).join('');
    } else if (techsEl) {
      if (techGroupsEl) techGroupsEl.style.display = 'none';
      techsEl.style.display = 'flex';
      const toolList = p.tools || p.techs || p.technologies || [];
      techsEl.innerHTML = toolList.map(t =>
        `<span class="chip chip-tech">${this._esc(t)}</span>`
      ).join('');
    }

    // Problem & Solution
    this._setSection('modal-problem', p.problem || (p.details && p.details.problem));
    this._setSection('modal-solution', p.solution || (p.details && p.details.solution));

    // Data Workflow & Modeling
    this._setSection('modal-workflow', p.dataWorkflow || p.pipeline || (p.details && (p.details.dataWorkflow || p.details.pipeline)));

    // Key Features & Visualizations Grid
    const featEl = document.getElementById('modal-features');
    const featSection = document.getElementById('modal-features-section');
    const featLabel = document.getElementById('modal-features-label');
    const featuresList = p.features || (p.details && p.details.features);
    const vizList = p.visualizations || (p.details && p.details.visualizations);

    if (featEl && featSection) {
      if (featuresList && featuresList.length) {
        featSection.style.display = 'block';
        if (featLabel) featLabel.textContent = 'Key Features & Capabilities';
        featEl.innerHTML = featuresList.map(f => `
          <div class="feature-card">
            <span class="feature-card__number">${this._esc(f.num || '')}</span>
            <h4 class="feature-card__title">${this._esc(f.name || f.title || '')}</h4>
            <p class="feature-card__desc">${this._esc(f.desc || '')}</p>
          </div>
        `).join('');
      } else if (vizList && vizList.length) {
        featSection.style.display = 'block';
        if (featLabel) featLabel.textContent = 'Key Visualizations & Analysis Views';
        featEl.innerHTML = vizList.map((v, idx) => `
          <div class="feature-card">
            <span class="feature-card__number">${String(idx + 1).padStart(2, '0')}</span>
            <p class="feature-card__desc" style="color:var(--md-on-surface);font-weight:var(--weight-medium);">${this._esc(typeof v === 'string' ? v : v.desc || v.title)}</p>
          </div>
        `).join('');
      } else {
        featSection.style.display = 'none';
      }
    }

    // System Architecture Diagram
    const archEl = document.getElementById('modal-architecture');
    const archSection = document.getElementById('modal-architecture-section');
    const archDiagram = p.architectureDiagram;
    if (archEl && archSection) {
      if (archDiagram && archDiagram.length) {
        archSection.style.display = 'block';
        archEl.innerHTML = `
          <div class="arch-diagram" role="region" aria-label="System architecture diagram">
            ${archDiagram.map((node, i) => `
              <div class="arch-card">
                <div class="arch-card__icon" aria-hidden="true">${node.iconSvg || ''}</div>
                <div class="arch-card__content">
                  <div class="arch-card__layer">${this._esc(node.layer)}</div>
                  <h4 class="arch-card__title">${this._esc(node.title)}</h4>
                  <p class="arch-card__desc">${this._esc(node.desc)}</p>
                </div>
              </div>
              ${i < archDiagram.length - 1 ? `
                <div class="arch-connector" aria-hidden="true">
                  <svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="4" x2="12" y2="20"></line>
                    <polyline points="6 14 12 20 18 14"></polyline>
                  </svg>
                </div>
              ` : ''}
            `).join('')}
          </div>
        `;
      } else if (p.architecture || (p.details && p.details.architecture)) {
        archSection.style.display = 'block';
        archEl.innerHTML = `<p class="type-body-medium" style="color:var(--md-on-surface-variant);line-height:var(--leading-body);">${this._esc(p.architecture || p.details.architecture)}</p>`;
      } else {
        archSection.style.display = 'none';
      }
    }

    // Technical Implementation
    this._setSection('modal-implementation', p.implementation || (p.details && p.details.implementation));

    // Key Analytical Insights
    const insightsEl = document.getElementById('modal-insights');
    const insightsSection = document.getElementById('modal-insights-section');
    const insightsList = p.insights || (p.details && p.details.insights);
    if (insightsEl && insightsSection) {
      if (insightsList && Array.isArray(insightsList) && insightsList.length) {
        insightsSection.style.display = 'block';
        insightsEl.innerHTML = `
          <div class="insights-grid">
            ${insightsList.map(item => `
              <div class="insight-card">
                <div class="insight-card__icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div class="insight-card__text">${this._esc(item)}</div>
              </div>
            `).join('')}
          </div>
        `;
      } else if (typeof insightsList === 'string' && insightsList.trim()) {
        insightsSection.style.display = 'block';
        insightsEl.innerHTML = `<p class="type-body-medium" style="color:var(--md-on-surface-variant);line-height:var(--leading-body);">${this._esc(insightsList)}</p>`;
      } else {
        insightsSection.style.display = 'none';
      }
    }

    // Challenges & Learnings
    this._setSection('modal-challenges', p.challenges || (p.details && p.details.challenges));
    this._setSection('modal-learnings', p.learnings || (p.details && p.details.learnings));

    // GitHub Link
    const ghLink = document.getElementById('modal-github-link');
    const ghText = document.getElementById('modal-github-text');
    const ghSection = document.getElementById('modal-github-section');
    if (ghLink && ghSection) {
      if (p.github) {
        ghSection.style.display = 'flex';
        ghLink.href = p.github;
        if (ghText) ghText.textContent = 'View on GitHub';
      } else {
        ghSection.style.display = 'none';
      }
    }
  }

  _setSection(id, text) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = text || '';
      const section = el.closest('section');
      if (section) section.style.display = text ? 'block' : 'none';
    }
  }

  _esc(str) {
    return String(str || '').replace(/[&<>"']/g, c =>
      ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])
    );
  }

  _trapFocus(e) {
    if (e.key !== 'Tab' || this.lightbox?.isOpen) return;

    const focusable = [...this.backdrop.querySelectorAll(this.focusableSelectors)]
      .filter(el => !el.closest('[hidden]') && el.tabIndex !== -1 && el.offsetParent !== null);

    if (!focusable.length) { e.preventDefault(); return; }

    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }
}

/* ── Exports ─────────────────────────────────────────────── */
window.ProjectModal   = ProjectModal;
window.ProjectGallery = ProjectGallery;
window.LightboxViewer = LightboxViewer;
