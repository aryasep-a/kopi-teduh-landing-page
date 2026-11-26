import { access, mkdir } from 'node:fs/promises';
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
  ['menu-lemon','1712056407267-1a38c7024a8f'],
  ['menu-croissant','1555507036-ab1f4038808a'],
  ['menu-toast','1781018727513-70151e3e805a'],
  ['menu-banana-bread','1608198093002-ad4e005484ec'],
  ['menu-cookies','1499636136210-6f4ee915583e']
];
const force=process.argv.includes('--force');
const outputDir=path.resolve('src/assets');
await mkdir(outputDir,{recursive:true});
let changed=false;
for(const [name,id] of assets){
  const output=path.join(outputDir,name+'.webp');
  if(!force){try{await access(output);console.log(`Using committed ${name}.webp`);continue}catch{}}
  const response=await fetch(`https://images.unsplash.com/photo-${id}?fit=crop&w=1400&q=88&fm=jpg`,{headers:{'User-Agent':'KopiTeduhPortfolioAssetBuilder/1.0'}});
  if(!response.ok)throw new Error(`Unsplash download failed for ${name}: HTTP ${response.status}`);
  const input=Buffer.from(await response.arrayBuffer());
  if(input.length<10000)throw new Error(`Unexpectedly small image for ${name}`);
  await sharp(input).rotate().resize({width:1400,withoutEnlargement:true}).webp({quality:82,effort:5}).toFile(output);
  changed=true;
  console.log(`Optimized ${name}.webp`);
}
// Build the social preview from the real, locally downloaded hero photo.
// Always regenerate it so the deployed OG image cannot remain stale.
await sharp(path.join(outputDir,'gallery-interior.webp'))
  .resize(1200,630,{fit:'cover',position:'attention'})
  .png({compressionLevel:9})
  .toFile('public/og-image.png');
console.log('Generated public/og-image.png (1200 x 630) from src/assets/gallery-interior.webp.');
