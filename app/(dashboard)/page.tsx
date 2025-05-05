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
                <span className="block text-orange-500">i odkryj możliwości tworzenia interaktywnych materiałów edukacyjnych z Ecurs</span>
              </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Ecurs to nowoczesna platforma wykorzystująca sztuczną inteligencję, która umożliwi Ci łatwe tworzenie i zarządzanie interaktywnymi kursami dostępnymi na różnych urządzeniach. 
                </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-full text-lg px-8 py-4 inline-flex items-center justify-center">
                  <a href="https://platforma.ecurs.pl/">
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



      <section className="py-16 bg-gray-50"> {/* Changed background for visual separation */}
        <div className="max-w-5xl mx-auto px-8 sm:px-10 lg:px-12 text-center"> {/* Increased max-width and padding */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Rozwijaj swoją wizję edukacyjną z Ecurs</h2>
          <p className="mt-3 text-lg text-gray-500">
        Skorzystaj z platformy, która ułatwi Ci tworzenie kursów i zarządzanie nimi. Z Ecurs możesz skupić się na tym co chcesz przekazać.
          </p>
        </div>
      </section>
      {/* Section for AI Content Generation - Updated Layout */}
      <section className="py-16 lg:py-24 bg-white"> {/* Increased padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center"> {/* Use grid for layout */}
            {/* Image Column (Left on large screens) */}
            <div className="flex justify-center mb-10 lg:mb-0"> {/* Center image, add margin bottom for mobile */}
              <img
                src="/generate_content.gif"
                alt="Generowanie treści AI w Ecurs"
                className="rounded-lg shadow-xl max-w-full h-auto" /* Enhanced shadow, ensure responsiveness */
                /* Consider adding width/height attributes for performance if known */
                /* width={...} height={...} */
              />
            </div>
            {/* Text Content Column (Right on large screens) */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center lg:text-left"> {/* Adjusted text size and alignment */}
                Twórz treści ze wsparciem sztucznej inteligencji
              </h2>
              <p className="mt-4 text-lg text-gray-600 text-center lg:text-left"> {/* Adjusted text color and alignment */}
                Wykorzystaj moc AI do szybkiego tworzenia interesujących materiałów edukacyjnych i wspierania ucznia w nauce, oszczędzając swój cenny czas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section for Interactive Content */}
      <section className="py-16 lg:py-24 bg-gray-50"> {/* Increased padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center"> {/* Use grid for layout */}
            {/* Text Content Column */}
            <div className="mb-10 lg:mb-0"> {/* Add margin bottom for mobile */}
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center lg:text-left"> {/* Adjusted text size and alignment */}
                Twórz interaktywne treści
              </h2>
              <p className="mt-4 text-lg text-gray-600 text-center lg:text-left"> {/* Adjusted text color and alignment */}
                Angażuj uczniów za pomocą różnorodnych interaktywnych elementów, takich jak quizy, zadania typu "dopasuj elementy", fiszki i wiele innych, aby nauka była ciekawsza.
              </p>
            </div>
            {/* Image Column */}
            <div className="flex justify-center"> {/* Center image within its column */}
              <img
                src="/interactive_content.gif"
                alt="Tworzenie interaktywnych treści w Ecurs"
                className="rounded-lg shadow-xl max-w-full h-auto" /* Enhanced shadow, ensure responsiveness */
                /* Consider adding width/height attributes for performance if known */
                /* width={...} height={...} */
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-16"> {/* Changed background back to white */}
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