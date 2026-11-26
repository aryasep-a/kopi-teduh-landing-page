# Kopi Teduh

Landing page portfolio untuk kedai kopi fiktif di Kota Tangerang dengan gaya editorial hangat.

[![CI](https://github.com/aryasep-a/kopi-teduh-landing-page/actions/workflows/ci.yml/badge.svg)](https://github.com/aryasep-a/kopi-teduh-landing-page/actions/workflows/ci.yml) [![Deploy](https://github.com/aryasep-a/kopi-teduh-landing-page/actions/workflows/pages.yml/badge.svg)](https://github.com/aryasep-a/kopi-teduh-landing-page/actions/workflows/pages.yml)

Live demo: https://aryasep-a.github.io/kopi-teduh-landing-page/ (setelah Pages deploy). Screenshot desktop/mobile belum direkam dari browser nyata.

## Fitur
Responsive landing page, menu 3 kategori dengan keyboard tabs, hamburger mobile, lightbox SVG, form reservasi WhatsApp tervalidasi, mobile sticky CTA, halaman menu dan 404, SEO, JSON-LD, sitemap, robots, OG, favicon, dan manifest.

## Stack
Astro 5 + TypeScript + CSS modular + npm. Astro menghasilkan static HTML ringan dan SEO-friendly. CSS native mempertahankan presisi desain tanpa framework UI; JavaScript vanilla hanya untuk interaksi. Fontsource membundel Newsreader dan Manrope lokal.

## Lokal
Node.js 20+. Jalankan npm install lalu npm run dev. Pemeriksaan: npm run lint, npm run check, npm run build, npm run preview. Salin .env.example ke .env.

## Struktur
src/components (Navbar, PhotoArt, MenuSection, Gallery, ReservationForm); src/data (site.ts, menu.ts, testimonials.ts); src/layouts; src/pages (index, menu, 404); src/styles; public (SVG, manifest, sitemap, robots); docs (DESIGN, CREDITS).

## Ubah konten
Edit kontak, alamat, jam, sosial, canonical di src/data/site.ts; menu dan harga di src/data/menu.ts; testimoni di src/data/testimonials.ts; ilustrasi di public/images.

## Indexing
PUBLIC_ALLOW_INDEXING=false menghasilkan noindex,nofollow. Set true saat build hanya setelah data contoh diganti dan pemilik menyetujui indexing. robots.txt mengizinkan crawler; meta robots tetap menjadi kontrol noindex default.

## Deploy
GitHub Pages: push main, buka Settings > Pages, pilih GitHub Actions. Workflow pages.yml mengaktifkan Pages, build folder dist dan deploy. Base path /kopi-teduh-landing-page telah diatur di astro.config.mjs. URL: https://aryasep-a.github.io/kopi-teduh-landing-page/.

## Lighthouse
Belum ada skor yang diklaim. Audit mobile dengan Chrome Lighthouse setelah build dan preview; simpan report serta screenshot di docs/screenshots. Target >=95 untuk Performance, Accessibility, Best Practices, SEO.

## Fiktif dan lisensi
Kopi Teduh adalah usaha fiktif. Alamat, nomor, menu, harga, jam, testimoni, dan akun sosial adalah data demo. Aset ilustrasi orisinal; font SIL OFL 1.1. Kode MIT. Detail di docs/CREDITS.md.
