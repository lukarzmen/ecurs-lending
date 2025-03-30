import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import ToastProvider from './(dashboard)/__components/ToastProvider';

export const metadata: Metadata = {
  title: 'Ecurs - nowoczesna edukacja',
  description: 'Zacznij tworzyć interaktywne kursy online z Ecurs.',
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const manrope = Manrope({ subsets: ['latin'], preload: true });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
       <ToastProvider />
      <body className="min-h-[100dvh] bg-gray-50">
        {children}
      </body>
    </html>
  );
}
