import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { clsx } from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hyperhire - Foreign Remote Team',
  description: 'Hire the best foreign talent remotely.',
  icons: {
    icon: '/images/favicon.png', // Fallback to icon.png or favicon.ico if this doesn't exist, but explicit path is better
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body className={clsx(inter.className, 'text-text-primary antialiased')}>{children}</body>
    </html>
  );
}
