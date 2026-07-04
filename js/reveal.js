/**
 * reveal.js
 * نمایش تدریجی بخش‌ها هنگام رسیدن به دید (با IntersectionObserver) — همان
 * افکتی که کلاس .reveal/.reveal.in در animations.css برایش تعریف شده.
 */
export function initReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => obs.observe(el));
}
