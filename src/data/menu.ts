export const categories=['Kopi','Non-Kopi','Makanan'] as const;
const photo=(id:string,w=900)=>'https://images.unsplash.com/'+id+'?auto=format&fit=crop&w='+w+'&q=82';
export const menu=[
['Kopi Susu Teduh','Espresso, susu segar, dan gula aren. Favorit sepanjang hari.',28000,'Kopi',photo('photo-1495474472287-4d71bcdd2085'),'Kopi susu dengan latte art di cangkir keramik.'],
['Manual Brew','V60 atau Japanese iced, pilih biji dan prosesnya.',32000,'Kopi',photo('photo-1511920170033-f8396924c348'),'Seduhan kopi manual dengan alat pour over.'],
['Flat White','Double shot dengan microfoam halus.',30000,'Kopi',photo('photo-1509042239860-f550ce710b93'),'Flat white dengan microfoam lembut.'],
['Americano','Espresso dan air, bersih dengan karakter biji pilihan.',22000,'Kopi',photo('photo-1498804103079-a6351b050096'),'Secangkir kopi hitam di meja kayu.'],
['Café Latte','Espresso seimbang dengan susu lembut.',30000,'Kopi',photo('photo-1509042239860-f550ce710b93'),'Café latte dengan foam susu.'],
['Cappuccino','Espresso, susu, dan foam dengan tekstur ringan.',29000,'Kopi',photo('photo-1495474472287-4d71bcdd2085'),'Cappuccino dengan latte art.'],
['Cokelat Teduh','Cokelat pekat, susu segar, dan sedikit nostalgia.',27000,'Non-Kopi',photo('photo-1551024601-bec78aea704b'),'Minuman cokelat hangat.'],
['Matcha Latte','Matcha pilihan dengan susu yang lembut.',30000,'Non-Kopi',photo('photo-1515823064-d6e0c04616a7'),'Matcha latte berwarna hijau lembut.'],
['Teh Serai Madu','Teh hangat dengan serai dan madu lokal.',22000,'Non-Kopi',photo('photo-1544787219-7f47afb76574'),'Secangkir teh hangat.'],
['Es Lemon Madu','Perasan lemon segar dengan madu dan es.',24000,'Non-Kopi',photo('photo-1513558161293-cdaf765edfd4'),'Minuman lemon segar dengan es.'],
['Croissant Mentega','Renyah di luar, lembut berlapis di dalam.',24000,'Makanan',photo('photo-1555507036-ab1f4038808a'),'Croissant mentega berlapis keemasan.'],
['Roti Panggang','Roti hangat dengan selai rumahan.',20000,'Makanan',photo('photo-1525351484163-7529414344d8'),'Roti panggang untuk teman minum kopi.'],
['Banana Bread','Pisang matang, kayu manis, teman minum kopi.',26000,'Makanan',photo('photo-1608198093002-ad4e005484ec'),'Potongan banana bread.'],
['Cookies Cokelat','Cookies panggang dengan potongan cokelat.',16000,'Makanan',photo('photo-1499636136210-6f4ee915583e'),'Cookies cokelat panggang.']
] as const;
export const rupiah=(n:number)=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n);
