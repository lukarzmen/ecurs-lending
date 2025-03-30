import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import PricingSection from './__components/PricingSection';
import WishlistComponent from './__components/Wishlist';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                <span>Skończ z "kserówkami"</span>
                <span className="block text-orange-500">i odkryj możliwości tworzenia interaktywnych kursów z Ecurs</span>
              </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Ecurs to nowoczesna platforma wykorzystująca sztuczną inteligencję, która umożliwi Ci łatwe tworzenie i zarządzanie interaktywnymi kursami dostępnymi na różnych urządzeniach. 
                </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-full text-lg px-8 py-4 inline-flex items-center justify-center">
                  <a href="https://ecurs-lms.vercel.app/">
                    Zobacz demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <img
                src="/app_demo.gif"
                alt="Demo aplikacji Ecurs"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Wszytko w jednym miejscu</h2>
              <p className="mt-2 text-base text-gray-500">
                Zarządzaj kursami i kontaktem z Twoimi uczniami przez jedną platformę.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">Interaktywność</h2>
              <p className="mt-2 text-base text-gray-500">
                Ze wsparciem sztucznej inteligencji twórz interaktywne materiały, które angażują i motywują Twoich uczniów.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">Dostępność</h2>
              <p className="mt-2 text-base text-gray-500">
                Twoje kursy są dostępne na komputerach, tabletach i smartfonach – zawsze i wszędzie.
              </p>
            </div>
    
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Rozwijaj swoją wizję edukacyjną z Ecurs</h2>
          <p className="mt-3 text-lg text-gray-500">
            Skorzystaj z platformy, która ułatwi Ci tworzenie kursów i zarządzanie nimi. Z Ecurs możesz skupić się na tym co chcesz przekazać, my zajmiemy się resztą.
          </p>
          <p className="mt-3 text-lg text-gray-500">
            Dzięki modułowi sprzedaży możesz udostępniać swoje materiały, aby dotrzeć do większej liczby uczniów i zwiększyć swoje dochody.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Wiele sposobów dostępu</h2>
          <PricingSection />
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Skontaktuj się z nami</h2>
          <p className="mt-3 text-lg text-gray-500 text-center">
        Jesteś zainteresowany/a? Zostaw kontakt, a odezwiemy się później!
          </p>
            <div className="mt-8">
              <WishlistComponent />
            </div>
        </div>
      </section>
    </main>
  );
}