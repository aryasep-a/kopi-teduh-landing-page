# Kopi Teduh — Landing Page Portfolio

Landing page untuk **Kopi Teduh**, konsep kedai kopi fiktif untuk sample portfolio. Art direction mengikuti desain editorial yang hangat dan minimal: warna krem, terakota, hijau, tipografi serif, dan placeholder foto berpola.

> Kopi Teduh adalah brand fiktif. Alamat, jam operasional, menu, harga, dan ulasan merupakan konten contoh. Ganti seluruh placeholder dan data demo sebelum penggunaan nyata.

## Fitur

- Satu file `index.html` berisi HTML, CSS, dan JavaScript vanilla.
- Responsif dengan breakpoint utama 768px.
- Navigasi hamburger untuk mobile.
- Filter menu interaktif: Kopi, Non-Kopi, dan Makanan.
- Smooth scrolling, hover state, dan dukungan reduced motion.
- Tombol reservasi mengambang di bagian bawah layar khusus mobile.
- GitHub Actions untuk deployment ke GitHub Pages.

## Menjalankan lokal

Buka `index.html` di browser, atau jalankan server lokal:

```bash
python -m http.server 8000
```

Kemudian buka http://localhost:8000.

## Sebelum dipublikasikan

1. Ganti alamat dan tautan Google Maps.
2. Ganti nomor/tautan WhatsApp demo.
3. Ganti placeholder foto dengan aset kedai yang memiliki izin penggunaan.
4. Ganti nama pelanggan placeholder dengan testimoni nyata yang telah mendapat izin.
5. Periksa menu, harga, dan jam operasional.

## Deployment

Workflow `.github/workflows/pages.yml` menjalankan deployment otomatis setiap ada push ke branch `main`. Pastikan GitHub Pages menggunakan source **GitHub Actions**.

Teknologi: HTML, CSS, JavaScript, dan Google Fonts (Newsreader + Manrope). Tanpa framework dan tanpa build step.
