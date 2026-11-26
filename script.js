// Demo contact number: replace with the UMKM owner's WhatsApp number before publishing.
const WHATSAPP_NUMBER = "6281234567890";
const DEFAULT_MESSAGE = "Halo Sambal Nusa, saya ingin tanya tentang produk sambalnya.";
const whatsappUrl = (message = DEFAULT_MESSAGE) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = whatsappUrl();
});

document.querySelectorAll("[data-product]").forEach((link) => {
  link.href = whatsappUrl(`Halo Sambal Nusa, saya tertarik pesan ${link.dataset.product}. Boleh minta info lebih lanjut?`);
});

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
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
document.querySelector("#year").textContent = new Date().getFullYear();