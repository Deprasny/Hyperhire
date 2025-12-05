import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Hyperhire',
  description: 'Foreign talent hiring platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
