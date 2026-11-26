// Demo contact number: replace with the UMKM owner's WhatsApp number before publishing.
const WHATSAPP_NUMBER = "6281234567890";
const DEFAULT_MESSAGE = "Halo Sambal Nusa, saya ingin tanya tentang produk sambalnya.";

const makeWhatsAppUrl = (message = DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = makeWhatsAppUrl();
});

document.querySelectorAll("[data-product]").forEach((link) => {
  const productName = link.dataset.product;
  link.href = makeWhatsAppUrl(
    `Halo Sambal Nusa, saya tertarik pesan ${productName}. Boleh minta info lebih lanjut?`
  );
});

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Buka menu");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Buka menu");
    }
  });
}

const yearElement = document.querySelector("#year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
