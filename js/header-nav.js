/**
 * header-nav.js
 * باز/بسته‌شدن منوی موبایل (همبرگری) و تغییر پس‌زمینه‌ی هدر هنگام اسکرول.
 */
export function initHeaderNav() {
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  const header = document.getElementById('site-header');

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navList.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }, { passive: true });
  }
}
