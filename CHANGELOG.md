# Changelog

## 1.0.0
- Rebuild prototype as Astro + TypeScript static site.
- Separate business and menu data; no unsupported testimonial section is shown.
- Add responsive navigation, category tabs, SVG gallery lightbox, WhatsApp reservation form, and footer portfolio attribution.
- Add local illustrations, local fonts, SEO metadata, Pages deployment and documentation.

## 1.0.1
- Remove testimonial/review quotes because the sample cafe has no customer-comment feature.
- Add portfolio author credit link and clarify the fictional business template context in the footer.

## 1.0.2
- Replace abstract photo placeholders with real Unsplash photography across hero, menu, story, gallery and location visuals.
- Add image alt text, responsive sizing, lazy loading, and hero preload; document photo credits and Unsplash licensing.

## 1.0.3
- Fix photo frames so hero, story, location and gallery images fill their intended containers without beige gaps.
- Improve mobile reservation CTA sizing, centering, safe-area placement and bottom content spacing.
- Prevent horizontal overflow on narrow mobile screens and improve photo caption legibility.

## 1.0.4
- Download and optimize unique Unsplash photos into local WebP assets, with responsive AVIF/WebP srcsets.
- Replace gallery labels with meaningful image descriptions and keep the lightbox hidden by default.
- Generate a 1200×630 PNG social preview and use it for Open Graph and Twitter cards.
- Make robots.txt and meta robots default to noindex unless PUBLIC_ALLOW_INDEXING=true.
- Filter reservation time options according to the selected weekday.
- Restore three explicitly fictional testimonials and keep exactly twelve menu items across three categories.
