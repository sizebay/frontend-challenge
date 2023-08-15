import './globals.css';
import { Children } from '@/types/children';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Providers from './Providers';
import { Suspense } from 'react';
import { Nav } from '@/components/Nav';
import { Loading } from '@/components/Loading';
import { Footer } from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  adjustFontFallback: true,
  preload: true
});

export const metadata: Metadata = {
  title: 'SizeFashion - Highlight',
  description: 'Desafio Front-end Sênior/SamuelRamos Sizebay',
  icons: [
    {
      url: '/icon.png',
      type: 'image/png',
      sizes: '32x32'
    }
  ]
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="pt-br">
      <body className={outfit.className}>
        <Providers>
          <Nav />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
