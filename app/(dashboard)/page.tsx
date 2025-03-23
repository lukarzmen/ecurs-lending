import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import PricingSection from './__components/page';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Skończ z papierem
                <span className="block text-orange-500">i odkryj moc tworzenia interaktywnych kursów z Ecurs</span>
              </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Ecurs to nowoczesna platforma, która umożliwia twórcom łatwe tworzenie i zarządzanie interaktywnymi kursami dostępnymi na różnych urządzeniach. 
                Dzięki zaawansowanym narzędziom wykorzystującym sztuczną inteligencję wspiera rozwój uczniów, ułatwia tworzenie materiałów edukacyjnych oraz zarządzanie kursem i kontaktem z uczniami.
                </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a href="#get-started" target="_self">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full text-lg px-8 py-4 inline-flex items-center justify-center">
                    Rozpocznij teraz
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
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
              <h2 className="text-lg font-medium text-gray-900">Interaktywność</h2>
              <p className="mt-2 text-base text-gray-500">
                Twórz dynamiczne materiały, które angażują i motywują uczniów.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">Nowoczesne rozwiązania</h2>
              <p className="mt-2 text-base text-gray-500">
                Wbudowane narzędzia wspierane przez sztuczną inteligencję wspierają naukę i rozwój uczniów, a także
                ułatwiają tworzenie treści przez twórców.
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
          <h2 className="text-3xl font-bold text-gray-900">Rozwijaj swoją wizję edukacyjną z Ecurs</h2>
          <p className="mt-3 text-lg text-gray-500">
            Skorzystaj z platformy, która ułatwia Ci tworzenie kursów i zarządzanie nimi. Z Ecurs możesz skupić się na treści, my zajmiemy się resztą.
          </p>
          <p className="mt-3 text-lg text-gray-500">
            Dzięki modułowi sprzedaży możesz udostępniać swoje materiały, aby zwiększyć dochody i dotrzeć do większej liczby uczniów.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Wiele sposobów dostępu</h2>
          <PricingSection />
        </div>
      </section>
    </main>
  );
}