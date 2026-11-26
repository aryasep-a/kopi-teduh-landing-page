import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const assets = [
  ['hero-coffee','1495474472287-4d71bcdd2085'],
  ['story-beans','1559056199-641a0ac8b55e'],
  ['gallery-interior','1501339847302-ac426a4a7cbb'],
  ['gallery-bar','1511920170033-f8396924c348'],
  ['gallery-terrace','1554118811-1e0d58224f24'],
  ['location-cafe','1521017432531-fbd92d768814'],
  ['menu-kopi-susu','1509042239860-f550ce710b93'],
  ['menu-manual-brew','1498804103079-a6351b050096'],
  ['menu-flat-white','1517701604599-bb29b565090c'],
  ['menu-americano','1445116572660-236099ec97a0'],
  ['menu-chocolate','1442512595331-e89e73853f31'],
  ['menu-matcha','1515823064-d6e0c04616a7'],
  ['menu-tea','1722654583863-6116ec8f247a'],
  ['menu-lemon','1513558161293-cdaf765edfd4'],
  ['menu-croissant','1555507036-ab1f4038808a'],
  ['menu-toast','1493857671500-72967e2e2760'],
  ['menu-banana-bread','1608198093002-ad4e005484ec'],
  ['menu-cookies','1499636136210-6f4ee915583e']
];
const outputDir=path.resolve('src/assets');
await mkdir(outputDir,{recursive:true});
for(const [name,id] of assets){
  const response=await fetch(`https://images.unsplash.com/photo-${id}?fit=crop&w=1400&q=88&fm=jpg`,{headers:{'User-Agent':'KopiTeduhPortfolioAssetBuilder/1.0'}});
  if(!response.ok)throw new Error(`Unsplash download failed for ${name}: HTTP ${response.status}`);
  const input=Buffer.from(await response.arrayBuffer());
  if(input.length<10000)throw new Error(`Unexpectedly small image for ${name}`);
  await sharp(input).rotate().resize({width:1400,withoutEnlargement:true}).webp({quality:82,effort:5}).toFile(path.join(outputDir,name+'.webp'));
  console.log(`Optimized ${name}.webp`);
}
const hero=await sharp(path.join(outputDir,'hero-coffee.webp')).resize(1200,630,{fit:'cover',position:'attention'}).toBuffer();
const overlay=Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#241812" opacity=".42"/><rect x="62" y="62" width="1076" height="506" rx="28" fill="none" stroke="#F5EFE6" stroke-opacity=".7" stroke-width="2"/><text x="112" y="190" fill="#F5EFE6" font-family="Georgia,serif" font-size="38">KEDAI KOPI · KOTA TANGERANG</text><text x="108" y="340" fill="#FFFFFF" font-family="Georgia,serif" font-size="112">Kopi Teduh</text><text x="114" y="416" fill="#FFF4E8" font-family="Arial,sans-serif" font-size="34">Duduk dulu, kopinya menyusul.</text><rect x="112" y="466" width="110" height="7" rx="3" fill="#C86B3D"/></svg>`);
await sharp(hero).composite([{input:overlay}]).png({compressionLevel:9}).toFile('public/og-image.png');
console.log('Generated public/og-image.png (1200 x 630).');
