# خورشید | Sun Tattoo

پروژه‌ی وب‌سایت پورتفولیوی خورشید (تتو آرتیست) — نسخه‌ی ماژولار و آماده‌ی production.

## ساختار پروژه

```
├── index.html              صفحه‌ی اصلی (تمام محتوا + متادیتای SEO)
├── robots.txt               راهنمای خزنده‌های موتور جستجو
├── sitemap.xml               نقشه‌ی سایت
├── vercel.json                تنظیمات کش برای دیپلوی روی Vercel
├── .nojekyll                   غیرفعال‌سازی پردازش Jekyll در GitHub Pages
├── favicon.svg / favicon.ico / apple-touch-icon.png    آیکون‌های سایت
├── css/
│   ├── variables.css        توکن‌های رنگ (منبع واحد پالت سایت)
│   ├── base.css              ریست و استایل پایه
│   ├── animations.css        افکت reveal مشترک + احترام به prefers-reduced-motion
│   ├── buttons.css           تمام حالت‌های دکمه
│   ├── header.css            هدر و منو
│   ├── hero.css               بخش هیرو
│   ├── sections.css           پوسته‌ی مشترک سکشن‌ها
│   ├── about.css              بخش درباره من
│   ├── work-styles.css        کارت‌های سبک کاری
│   ├── gallery.css            گالری + لایت‌باکس
│   ├── contact.css            کارت تماس
│   ├── footer.css             فوتر
│   ├── birthday-banner.css    بنر تولد (ویژگی مستقل)
│   └── responsive.css         مدیا کوئری‌ها (همیشه باید آخرین فایل بارگذاری‌شده بماند)
├── js/  (تمام فایل‌ها ES module هستند)
│   ├── gallery-data.js       داده‌ی ۱۲ نمونه‌کار
│   ├── gallery.js             رندر گرید + فیلتر + لایت‌باکس
│   ├── header-nav.js          منوی موبایل + استیت اسکرول هدر
│   ├── reveal.js               انیمیشن ظاهرشدن هنگام اسکرول
│   ├── birthday-banner.js     بنر تولد (۲۴ ساعت اول پس از دیپلوی)
│   └── main.js                 نقطه‌ی ورود؛ همه‌چیز را مقداردهی می‌کند
└── assets/images/            پرتره + ۱۲ عکس گالری (استخراج‌شده از base64، بدون افت کیفیت)
```

## پیش از دیپلویِ نهایی، این دو مورد را حتماً به‌روزرسانی کنید

1. **دامنه‌ی واقعی سایت** — در حال حاضر همه‌جا از `https://khorshid-tattoo.example.com/` به‌عنوان جای‌نگه‌دار استفاده شده. این آدرس باید در ۴ فایل جایگزین شود: `index.html` (canonical، og:url، og:image، twitter:image، JSON-LD)، `robots.txt`، `sitemap.xml`.
2. **زمان انتشار بنر تولد** — در `js/birthday-banner.js`، مقدار `firstDeployTime` را دقیقاً با تاریخ/ساعت واقعیِ دیپلوی نهایی هماهنگ کنید (توضیح کامل بالای همان فایل هست).

## اجرای محلی

چون پروژه از ES Modules استفاده می‌کند، صرفاً باز کردن `index.html` با دبل‌کلیک در برخی مرورگرها به‌خاطر محدودیت CORS روی پروتکل `file://` کار نمی‌کند. یک سرور محلی ساده کافی است:

```bash
npx serve .
# یا
python3 -m http.server 8000
```
