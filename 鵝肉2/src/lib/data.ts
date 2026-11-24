import type { Product, RecipeItem } from './types';

// Replace image paths with Sanity or Supabase URLs when real farm photography is ready.
export const products: Product[] = [
  { id: 'goose-half', name: '職人煙燻半鵝', category: 'preorder', price: 1280, weightDescription: '約 1.3–1.5 kg・冷凍真空', isPreorder: true, preorderShipDate: '下單後 3–5 個工作天出貨', image: '/images/goose-meat.svg', description: '以龍眼木慢火燻製，皮香肉嫩，節日團聚剛剛好。', tags: ['人氣預訂', '職人煙燻'], stock: 18 },
  { id: 'goose-breast', name: '鮮嫩鵝胸肉', category: 'fresh', price: 480, weightDescription: '約 300 g・冷凍真空', isPreorder: false, image: '/images/goose-meat.svg', description: '細緻油花與飽滿肉質，簡單香煎就有好滋味。', tags: ['產地直送', '無藥物殘留'], stock: 32 },
  { id: 'goose-oil', name: '純粹鵝油', category: 'processed', price: 260, weightDescription: '180 ml・常溫保存', isPreorder: false, image: '/images/goose-oil.svg', description: '低溫細煉鵝脂，讓一碗家常麵多一分醇厚香氣。', tags: ['職人手作', '料理提香'], stock: 40 },
  { id: 'goose-soup', name: '暖心鵝骨高湯', category: 'processed', price: 180, weightDescription: '600 ml・冷凍保存', isPreorder: false, image: '/images/goose-meat.svg', description: '以鵝骨與蔬菜細熬，暖暖一碗，喝得到真材實料。', tags: ['無添加', '自然鮮甜'], stock: 24 },
];

export const recipes: RecipeItem[] = [
  { id: 'noodles', title: '十分鐘黃金鵝油拌麵', cookTime: '10 分鐘', summary: '只要一匙鵝油與一把青蔥，簡單做出療癒日常。', steps: ['煮麵至喜歡的軟硬度，保留一匙煮麵水。', '碗中放入鵝油、醬油與蔥花，加入熱麵拌勻。', '依喜好撒上白芝麻，趁熱享用。'], recommendedProductIds: ['goose-oil'] },
  { id: 'seared-goose', title: '香煎鵝胸佐田園時蔬', cookTime: '25 分鐘', summary: '外酥內嫩的鵝胸，搭配當季蔬菜最對味。', steps: ['鵝胸退冰擦乾，皮面輕劃幾刀並以鹽調味。', '冷鍋皮面朝下，小火煎至金黃出油再翻面。', '靜置五分鐘後切片，搭配清炒時蔬上桌。'], recommendedProductIds: ['goose-breast'] },
];
