
import { works } from './gallery-data.js';

export function initGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

    works.forEach((w, i) => {
    const fig = document.createElement('figure');
    fig.className = 'gallery-item ' + w.cls;
    fig.setAttribute('data-cat', w.cat);
    fig.setAttribute('data-index', String(i));
    fig.innerHTML = `<img src="${w.src}" alt="${w.tag}" loading="lazy" decoding="async"><figcaption class="tag">${w.tag}</figcaption>`;
    grid.appendChild(fig);
  });

  
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const f = btn.getAttribute('data-filter');
      document.querySelectorAll('.gallery-item').forEach(item => {
        if (f === 'all' || item.getAttribute('data-cat') === f) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });

  
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbClose = document.getElementById('lbClose');
  const lbNext = document.getElementById('lbNext');
  const lbPrev = document.getElementById('lbPrev');
  let currentIndex = 0;
  let lastFocusedEl = null;

  function updateLightboxImage() {
    lbImg.src = works[currentIndex].src;
    lbImg.alt = works[currentIndex].tag;
  }

  function openLightbox(index) {
    currentIndex = index;
    lastFocusedEl = document.activeElement;
    updateLightboxImage();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    lbClose.focus();
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
      lastFocusedEl.focus();
    }
  }
  function showNext() {
    currentIndex = (currentIndex + 1) % works.length;
    updateLightboxImage();
  }
  function showPrev() {
    currentIndex = (currentIndex - 1 + works.length) % works.length;
    updateLightboxImage();
  }

  grid.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) { openLightbox(parseInt(item.getAttribute('data-index'), 10)); }
  });
  lbClose.addEventListener('click', closeLightbox);
  lbNext.addEventListener('click', showNext);
  lbPrev.addEventListener('click', showPrev);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
}
