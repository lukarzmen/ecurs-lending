'use client';

import Link from 'next/link';

export const metadata = {
  title: "Ecurs – interaktywna platforma edukacyjna. Od nauczycieli dla uczniów.",
  description: "Zamień nudne kserówki na interaktywne materiały edukacyjne z Ecurs. Twórz, zarządzaj i sprzedawaj kursy online. Nowoczesna platforma dla nauczycieli i uczniów.",
  openGraph: {
    title: 'Ecurs - nowoczesna edukacja',
    description: 'Zacznij tworzyć interaktywne kursy online z Ecurs.',
    url: 'https://uczzecurs.pl/',
    type: 'website',
    images: [
      {
        url: 'https://uczzecurs.pl/demo.png',
        width: 1200,
        height: 630,
        alt: 'Ecurs - nowoczesna edukacja',
      },
    ]
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
      © {new Date().getFullYear()} Ecurs. Wszelkie prawa zastrzeżone. <br />
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
