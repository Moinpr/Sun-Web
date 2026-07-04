/**
 * gallery-data.js
 * داده‌ی نمونه‌کارهای گالری. پیش‌تر این ۱۲ تصویر به‌صورت base64 مستقیم داخل
 * جاوااسکریپت جاسازی شده بودند (حدود ۱ مگابایت متن اضافه در همان بار اول
 * صفحه). حالا هرکدام یک فایل جدا در assets/images/ است، بنابراین:
 *   ۱) حجم HTML اولیه به‌شدت کم می‌شود.
 *   ۲) ویژگی loading="lazy" که پایین‌تر روی <img> گذاشته می‌شود واقعاً اثر
 *      می‌کند (چون قبلاً بایت‌های تصویر همین حالا هم داخل صفحه بودند و
 *      lazy بودن فرقی نمی‌کرد).
 *   ۳) مرورگر می‌تواند تصاویر را جداگانه کش/دانلود موازی کند.
 */
export const works = [
  { src: 'assets/images/gallery-01.jpg', cat: 'illustrative', tag: 'ایلوستریتیو · ریشه و برگ', cls: 'tall' },
  { src: 'assets/images/gallery-02.jpg', cat: 'blackwork',    tag: 'بلک‌ورک · کانسپچوال',      cls: 'tall' },
  { src: 'assets/images/gallery-03.jpg', cat: 'blackwork',    tag: 'بلک‌ورک · بال پری',         cls: '' },
  { src: 'assets/images/gallery-04.jpg', cat: 'realism',      tag: 'رئالیستی · ببر',            cls: '' },
  { src: 'assets/images/gallery-05.jpg', cat: 'illustrative', tag: 'ایلوستریتیو · ابر',          cls: 'short' },
  { src: 'assets/images/gallery-06.jpg', cat: 'blackwork',    tag: 'بلک‌ورک · مریم مقدس',        cls: '' },
  { src: 'assets/images/gallery-07.jpg', cat: 'fineline',     tag: 'خط‌نگاره · قاصدک',           cls: 'tall' },
  { src: 'assets/images/gallery-08.jpg', cat: 'realism',      tag: 'رئالیستی · ببر',            cls: 'tall' },
  { src: 'assets/images/gallery-09.jpg', cat: 'blackwork',    tag: 'بلک‌ورک · ساعت و چرخ‌دنده',  cls: '' },
  { src: 'assets/images/gallery-10.jpg', cat: 'fineline',     tag: 'خط‌نگاره · قارچ',            cls: 'short' },
  { src: 'assets/images/gallery-11.jpg', cat: 'fineline',     tag: 'خط‌نگاره · Father',          cls: 'short' },
  { src: 'assets/images/gallery-12.jpg', cat: 'blackwork',    tag: 'بلک‌ورک · کانسپچوال',        cls: 'tall' },
];
