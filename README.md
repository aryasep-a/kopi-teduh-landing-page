# Kopi Teduh

Landing page portfolio untuk kedai kopi fiktif di Kota Tangerang, dengan fotografi lokal yang dioptimalkan dan interaksi reservasi WhatsApp.

[![CI](https://github.com/aryasep-a/kopi-teduh-landing-page/actions/workflows/ci.yml/badge.svg)](https://github.com/aryasep-a/kopi-teduh-landing-page/actions/workflows/ci.yml) [![Deploy](https://github.com/aryasep-a/kopi-teduh-landing-page/actions/workflows/pages.yml/badge.svg)](https://github.com/aryasep-a/kopi-teduh-landing-page/actions/workflows/pages.yml)

Live demo: https://aryasep-a.github.io/kopi-teduh-landing-page/

## Fitur

- Landing page responsif dengan 12 item menu dalam tiga kategori.
- Tiga testimoni contoh yang secara eksplisit diberi label konten fiktif.
- Foto Unsplash diunduh ke `src/assets/`; tidak ada hotlink saat runtime.
- File sumber WebP lokal, dengan varian AVIF/WebP responsif dan `srcset` melalui Astro Picture.
- Galeri lightbox tersembunyi secara default, dibuka dengan interaksi pengguna dan ditutup dengan Escape.
- Form reservasi memfilter slot waktu sesuai tanggal: Senin–Jumat 08.00–22.00 dan Sabtu–Minggu 07.00–23.00. Slot dimulai pada jam buka dan berakhir satu jam sebelum jam tutup.
- Open Graph PNG 1200×630, Twitter Card, JSON-LD, sitemap, robots, favicon, dan manifest.
- `noindex,nofollow` dan `Disallow: /` adalah default. Indexing hanya aktif bila `PUBLIC_ALLOW_INDEXING=true`.

## Stack

Astro 7 + TypeScript + CSS modular + JavaScript native. Astro dipilih untuk menghasilkan HTML statis yang ringan, mendukung optimasi gambar build-time, dan tidak membutuhkan framework UI berat. Foto diproses dengan Sharp. Font Newsreader dan Manrope dibundel lokal melalui Fontsource.

## Menjalankan lokal

Node.js 22.23.4 atau lebih baru.

```bash
npm ci
npm run assets:download
npm run dev
```

Perintah kualitas dan produksi:

```bash
npm run lint
npm run check
npm run build
npm run preview
```

`npm run assets:download` mengunduh foto sumber Unsplash, membuat WebP lokal, dan menghasilkan `public/og-image.png`. Gunakan `npm run assets:download -- --force` setelah mengganti ID foto di `scripts/download-assets.mjs` agar foto dan OG image diperbarui.

## Struktur

- `src/assets/`: foto WebP lokal.
- `src/components/`: Navbar, PhotoArt, MenuSection, Gallery, ReservationForm.
- `src/data/site.ts`: alamat, jam, kontak, sosial, canonical.
- `src/data/menu.ts`: 12 item menu, kategori, harga, foto, dan alt.
- `src/data/testimonials.ts`: tiga testimoni fiktif.
- `src/layouts/`, `src/pages/`, `src/styles/`: layout, halaman, dan CSS.
- `scripts/download-assets.mjs`: unduh dan optimasi foto serta gambar OG.
- `docs/CREDITS.md`: atribusi dan lisensi foto/font.

## Mengganti konten

Edit informasi kedai di `src/data/site.ts`, menu di `src/data/menu.ts`, dan testimoni di `src/data/testimonials.ts`. Untuk mengganti foto, ubah ID dan nama file di `scripts/download-assets.mjs`, lalu jalankan `npm run assets:download` dan perbarui kredit.

## Indexing dan deploy

Default lokal adalah non-indexable: meta robots `noindex,nofollow` dan robots.txt `Disallow: /`. Untuk mengizinkan indexing, set environment variable `PUBLIC_ALLOW_INDEXING=true` ketika build. Workflow Pages membaca GitHub Actions repository variable bernama `PUBLIC_ALLOW_INDEXING`; biarkan kosong atau set `false` untuk tetap noindex, dan set `true` hanya bila situs siap diindeks.

Deploy ke GitHub Pages: buka **Settings → Pages**, pilih **GitHub Actions**, lalu push ke branch `main`. Base path `/kopi-teduh-landing-page` telah dikonfigurasi di `astro.config.mjs`.

## Audit

CI terakhir (mobile, GitHub Pages) menghasilkan Lighthouse: Performance **100**, Accessibility **100**, Best Practices **100**, SEO **66**. SEO sengaja lebih rendah karena default situs memakai `noindex,nofollow` untuk usaha fiktif. Untuk mengizinkan indexing dan audit SEO penuh, set repository variable `PUBLIC_ALLOW_INDEXING=true`. [Buka laporan Lighthouse](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1795725459297-81623.report.html).

## Fiktif dan lisensi

Kopi Teduh adalah template sample usaha fiktif untuk portfolio web designer. Alamat, nomor, menu, harga, jam, sosial, dan testimoni adalah konten demo. Kode berlisensi MIT. Foto mengikuti Unsplash License dan font SIL OFL 1.1; lihat `docs/CREDITS.md`.
