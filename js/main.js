/**
 * main.js
 * نقطه‌ی ورود اصلی. هر بخش از سایت در فایل جداگانه‌ی خودش پیاده‌سازی شده و
 * اینجا فقط مقداردهی اولیه می‌شود. چون این فایل با type="module" بارگذاری
 * می‌شود، اجرای آن به‌طور خودکار تا پایان پارس‌شدن HTML به تعویق می‌افتد
 * (رفتاری هم‌ارز defer)، پس نیازی به گوش‌دادن به DOMContentLoaded نیست.
 */
import { initGallery } from './gallery.js';
import { initHeaderNav } from './header-nav.js';
import { initReveal } from './reveal.js';
import { initBirthdayBanner } from './birthday-banner.js';

initGallery();
initHeaderNav();
initReveal();
initBirthdayBanner();
