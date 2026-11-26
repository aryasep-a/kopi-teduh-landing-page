import americano from '../assets/menu-americano.webp';
import croissant from '../assets/menu-croissant.webp';
import chocolate from '../assets/menu-chocolate.webp';
import cookies from '../assets/menu-cookies.webp';
import manualBrew from '../assets/menu-manual-brew.webp';
import lemon from '../assets/menu-lemon.webp';
import matcha from '../assets/menu-matcha.webp';
import milkCoffee from '../assets/menu-kopi-susu.webp';
import flatWhite from '../assets/menu-flat-white.webp';
import toast from '../assets/menu-toast.webp';
import tea from '../assets/menu-tea.webp';
import bananaBread from '../assets/menu-banana-bread.webp';

export const categories = ['Kopi', 'Non-Kopi', 'Makanan'] as const;
export const menu = [
  { name: 'Kopi Susu Teduh', description: 'Espresso, susu segar, dan gula aren. Favorit sepanjang hari.', price: 28000, category: 'Kopi', image: milkCoffee, alt: 'Kopi susu gula aren dengan lapisan crema di cangkir keramik.' },
  { name: 'Manual Brew', description: 'V60 seduh perlahan, dengan biji pilihan yang berganti tiap pekan.', price: 32000, category: 'Kopi', image: manualBrew, alt: 'Barista menuangkan air panas ke bubuk kopi menggunakan dripper.' },
  { name: 'Flat White', description: 'Double shot espresso dengan microfoam yang halus.', price: 30000, category: 'Kopi', image: flatWhite, alt: 'Flat white dengan latte art daun di atas meja kayu.' },
  { name: 'Americano', description: 'Espresso dan air, bersih dengan karakter biji pilihan.', price: 22000, category: 'Kopi', image: americano, alt: 'Segelas americano hitam dengan es batu.' },
  { name: 'Cokelat Teduh', description: 'Cokelat pekat dan susu segar, hangat atau dingin.', price: 27000, category: 'Non-Kopi', image: chocolate, alt: 'Minuman cokelat pekat dengan taburan bubuk kakao.' },
  { name: 'Matcha Latte', description: 'Matcha pilihan dengan susu yang lembut dan seimbang.', price: 30000, category: 'Non-Kopi', image: matcha, alt: 'Matcha latte hijau dalam gelas bening.' },
  { name: 'Teh Serai Madu', description: 'Teh hangat dengan serai dan madu lokal.', price: 22000, category: 'Non-Kopi', image: tea, alt: 'Teh hangat berwarna keemasan di dalam cangkir kaca.' },
  { name: 'Es Lemon Madu', description: 'Perasan lemon segar dengan madu dan es.', price: 24000, category: 'Non-Kopi', image: lemon, alt: 'Minuman lemon madu dingin dengan irisan lemon segar.' },
  { name: 'Croissant Mentega', description: 'Renyah di luar, lembut berlapis di dalam.', price: 24000, category: 'Makanan', image: croissant, alt: 'Croissant mentega berlapis dengan kulit keemasan.' },
  { name: 'Roti Panggang', description: 'Roti hangat dengan selai rumahan untuk teman ngopi.', price: 20000, category: 'Makanan', image: toast, alt: 'Roti panggang dengan olesan selai di piring kecil.' },
  { name: 'Banana Bread', description: 'Pisang matang dan kayu manis, cocok untuk jeda sore.', price: 26000, category: 'Makanan', image: bananaBread, alt: 'Potongan banana bread rumahan di atas piring.' },
  { name: 'Cookies Cokelat', description: 'Cookies panggang dengan potongan cokelat di setiap gigitan.', price: 16000, category: 'Makanan', image: cookies, alt: 'Cookies cokelat panggang dengan potongan cokelat leleh.' }
] as const;
export const rupiah = (amount: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
