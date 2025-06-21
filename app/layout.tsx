import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import ToastProvider from './(dashboard)/__components/ToastProvider';
import Script from 'next/script';

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
      <head>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1295563135637874');
              fbq('track', 'PageView');
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph meta tags for Facebook thumbnail */}
        <meta property="og:title" content="Ecurs - nowoczesna edukacja" />
        <meta property="og:description" content="Zacznij tworzyć interaktywne kursy online z Ecurs." />
        <meta property="og:image" content="https://uczzecurs.pl/logo.png" />
        <meta property="og:url" content="https://uczzecurs.pl/" />
        <meta property="og:type" content="website" />
      </head>
      <meta name="msvalidate.01" content="242A3760F9418E55873256075DECDC28" />
      <body className="min-h-[100dvh] bg-gray-50">
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
