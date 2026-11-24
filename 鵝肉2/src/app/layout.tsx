import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '綠野職人鵝肉｜桃園新屋・純淨水域自然放養',
  description: '桃園新屋純淨水域・100天青草自然放養。產地直達的職人嚴選鵝肉，預訂新鮮好滋味，走訪新屋感受農村日常。',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? process.env.RENDER_EXTERNAL_URL ?? 'https://greenfield-goose.onrender.com'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
