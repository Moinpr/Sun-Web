const BIRTHDAY_BANNER_CONFIG = {
  firstDeployTime: '2026-07-06T18:06:00+03:30',
  visibleWindowHours: 24,
  autoFadeAfterMs: 15000,
  storageKey: 'khorshidBirthdayBannerDismissed',
};

export function initBirthdayBanner(config = {}) {
  const cfg = { ...BIRTHDAY_BANNER_CONFIG, ...config };

  try {
    if (localStorage.getItem(cfg.storageKey) === '1') return;
  } catch (err) {}

  const deployTime = new Date(cfg.firstDeployTime).getTime();
  if (Number.isNaN(deployTime)) return;

  const elapsed = Date.now() - deployTime;
  const windowMs = cfg.visibleWindowHours * 60 * 60 * 1000;
  if (elapsed < 0 || elapsed > windowMs) return;

  renderBanner(cfg);
}

function renderBanner(cfg) {
  const banner = document.createElement('div');
  banner.className = 'birthday-banner';
  banner.setAttribute('role', 'status');
  banner.setAttribute('aria-live', 'polite');

  banner.innerHTML = `
    <button type="button" class="birthday-banner-close" aria-label="بستن پیام تولد">×</button>
    <svg class="birthday-banner-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="20" r="8" stroke="var(--sun-gold)" stroke-width="2"/>
      <g stroke="var(--sun-gold)" stroke-width="2" stroke-linecap="round">
        <line x1="20" y1="2" x2="20" y2="7"/>
        <line x1="20" y1="33" x2="20" y2="38"/>
        <line x1="2" y1="20" x2="7" y2="20"/>
        <line x1="33" y1="20" x2="38" y2="20"/>
        <line x1="7.5" y1="7.5" x2="11" y2="11"/>
        <line x1="29" y1="29" x2="32.5" y2="32.5"/>
        <line x1="32.5" y1="7.5" x2="29" y2="11"/>
        <line x1="11" y1="29" x2="7.5" y2="32.5"/>
      </g>
    </svg>
    <div class="birthday-banner-text">
      <p class="birthday-banner-title">🎉 تولدت مبارک خورشید 🌸</p>
      <p class="birthday-banner-message">امیدوارم سال جدید زندگیت پر از آرامش، سلامتی، موفقیت و لحظه‌های قشنگ باشه. همیشه بدرخشی و به تمام آرزوهات برسی. 🌹</p>
    </div>
  `;

  document.body.appendChild(banner);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => banner.classList.add('show'));
  });

  const autoFadeTimer = setTimeout(() => dismiss(false), cfg.autoFadeAfterMs);

  function dismiss(persist) {
    clearTimeout(autoFadeTimer);
    banner.classList.remove('show');
    banner.classList.add('fade-out');

    if (persist) {
      try {
        localStorage.setItem(cfg.storageKey, '1');
      } catch (err) {}
    }

    banner.addEventListener('transitionend', () => banner.remove(), {
      once: true,
    });

    setTimeout(() => {
      if (banner.isConnected) banner.remove();
    }, 700);
  }

  banner
    .querySelector('.birthday-banner-close')
    .addEventListener('click', () => dismiss(true));
}
