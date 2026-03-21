import { Suspense } from 'react';
import Link from 'next/link';
import FooterYear from './__components/FooterYear';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://uczzecurs.pl'),
  title: "Ecurs - nowoczesna edukacja",
  description: "Ecurs to innowacyjna platforma edukacyjna, która oferuje tworzenie i uczestnictwo w interaktywnych kursach wspieranych przez sztuczną inteligencję.",
  openGraph: {
    title: 'Ecurs - nowoczesna edukacja',
    description: 'Zacznij tworzyć interaktywne kursy online z Ecurs. Platforma wspierana przez AI.',
    url: 'https://uczzecurs.pl/',
    siteName: 'Ecurs',
    type: 'website',
    locale: 'pl_PL',
    images: [
      {
        url: '/demo4.png',
        width: 1200,
        height: 630,
        alt: 'Ecurs - nowoczesna edukacja',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecurs - nowoczesna edukacja',
    description: 'Zacznij tworzyć interaktywne kursy online z Ecurs. Platforma wspierana przez AI.',
    images: ['/demo4.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Ecurs Icon" className="h-6 w-6" />
          <span className="ml-2 text-xl font-semibold text-gray-900">Ecurs</span>
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-4 text-center text-gray-500">
      © <Suspense fallback=""><FooterYear /></Suspense> Ecurs. Wszelkie prawa zastrzeżone. <br />
      <span className="text-xs">Łukasz Mędyk</span>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </section>
  );
}
