import { Metadata } from 'next';
import { Gabarito, Inter } from 'next/font/google';

import { AppHeader } from '@/app/components/ui/layout/header';
import { FooterDesktop } from './components/ui/layout/DesktopFooter';


import './layout.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'BeaconBox.com',
  description: 'Your digital Wallet',
  icons: '@/images/LogoWhite.png',
};

const gabarito = Gabarito({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-gabarito',
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${gabarito.variable} ${inter.variable}`}>
      <body>
          <AppHeader />
          <div className="container">{children}</div>
          <FooterDesktop />
      </body>
    </html>
  );
}
