import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import PricingSection from './__components/PricingSection';



export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1
                className="font-extrabold tracking-tight text-center lg:text-left"
                style={{
                  fontFamily: "'Montserrat', 'Inter', 'Segoe UI', Arial, sans-serif",
                  fontSize: '3.5rem', // Increased font size
                  lineHeight: 1.08,
                  color: '#1a202c',
                  letterSpacing: '-0.03em',
                }}
              >
                <span style={{ display: 'block', color: '#22223b' }}>Zamień nudne kserówki</span>
                <span
                  style={{
                    display: 'block',
                    color: '#ff6600',
                    fontFamily: "'Montserrat', 'Inter', 'Segoe UI', Arial, sans-serif",
                    fontWeight: 800,
                    fontSize: '3.1rem', // Increased font size
                  }}
                >
                  na interaktywne materiały edukacyjne
                </span>
                <span
                  style={{
                    display: 'block',
                    color: '#ff6600',
                    fontFamily: "'Montserrat', 'Inter', 'Segoe UI', Arial, sans-serif",
                    fontWeight: 800,
                    fontSize: '3.1rem', // Increased font size
                  }}
                >
                  z Ecurs
                </span>
              </h1>
              <ul
                className="mt-6 mb-4 space-y-2 text-base text-gray-700 text-left"
                style={{
                  fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
                  fontSize: '1.1rem',
                  color: '#343a40',
                  lineHeight: 1.7,
                }}
              >
                <li>
                  <span className="font-semibold text-orange-500">✔ Dołącz do grona nowoczesnych nauczycieli</span> – bądź o krok przed innymi i pokaż swoim uczniom, że edukacja może być angażująca i nowoczesna.
                </li>
                <li>
                  <span className="font-semibold text-orange-500">✔ Dołącz bez ryzyka</span> – zarejestruj się i wypróbuj za darmo przez 3 miesiące!
                </li>
                <li>
                  <span className="font-semibold text-orange-500">✔ Oszczędzaj czas</span> – automatyzuj powtarzalne zadania i skup się na tym, co najważniejsze.
                </li>
                <li>
                  <span className="font-semibold text-orange-500">✔ Wspieraj rozwój uczniów</span> – korzystaj z narzędzi, które motywują i personalizują naukę.
                </li>
                <li>
                  <span className="font-semibold text-orange-500">✔ Zwiększ widoczność swoich kursów</span> – dzięki marketplace Twoje materiały mogą dotrzeć do większej liczby odbiorców.
                </li>
              </ul>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-full text-lg px-8 py-4 inline-flex items-center justify-center shadow-lg transition-transform hover:scale-105">
                  <a href="https://platforma.ecurs.pl/">
                    Przejdź do platformy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <div className="mt-4 text-sm text-gray-500">
                  <span className="font-semibold text-orange-500">Nie czekaj i zacznij już dziś! Wystarczą 3 kliknięcia!</span>
                </div>
              </div>
              <div className="mt-6 text-xs text-gray-400">
                <span>Rejestrując się zaczynasz darmowy 3 miesięczny okres próbny.</span>
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
              <h2 className="text-lg font-medium text-gray-900">Wiele sposobów dostępu</h2>
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
                Użyj wsparcia sztucznej inteligencji
              </h2>
              <p className="mt-4 text-lg text-gray-600 text-center lg:text-left"> {/* Adjusted text color and alignment */}
                Wykorzystaj moc AI do szybkiego tworzenia interesujących materiałów edukacyjnych i wspierania ucznia w nauce, oszczędzając swój czas.
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
      {/* New Section: Zarządzanie kursami i uczniami + Analityka */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Image Column */}
            <div className="flex justify-center mb-10 lg:mb-0">
              <img
                src="/course_management.gif"
                alt="Zarządzanie kursami i uczniami oraz analityka Ecurs"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
            {/* Text Content Column */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center lg:text-left">
                Zarządzaj swoimi kursami i uczniami
              </h2>
              <p className="mt-4 text-lg text-gray-600 text-center lg:text-left">
                Dajemy Ci pełną kontrolę nad Twoimi kursami – zarządzaj swoją grupą i materiałami.
                Dzięki modułowi analityki możesz śledzić swoją skuteczność, a więc i podejmować lepsze decyzje na podstawie realnych danych.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pt-16"> {/* Changed background back to white */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Cennik</h2>
          <PricingSection />
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Dlaczego warto wybrać Ecurs?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Twórz i zarabiaj na kursach</h3>
              <p className="text-gray-700">Jako autor możesz nie tylko tworzyć kursy, ale także sprzedawać je lub udostępniać za darmo. Zbuduj własną markę edukacyjną i docieraj do nowych odbiorców.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Marketplace kursów</h3>
              <p className="text-gray-700">Twoje kursy mogą trafić do marketplace, gdzie inni użytkownicy mogą je zobaczyć i dołączyć do Twojego kursu. Zwiększ swoją widoczność i zyskaj nowych klientów.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Pełna kontrola i zarządzanie</h3>
              <p className="text-gray-700">Zarządzaj swoimi kursami, uczniami i materiałami w jednym intuicyjnym panelu. Wszystko, czego potrzebujesz, masz pod ręką.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Wygodne płatności</h3>
              <p className="text-gray-700">Obsługujemy szybkie przelewy, BLIK oraz płatności kartą. Twoi klienci zapłacą tak, jak im wygodnie, a Ty szybko otrzymasz środki.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Zaawansowana analityka</h3>
              <p className="text-gray-700">Korzystaj z rozbudowanego modułu analityk – śledź postępy uczniów i efektywność swoich kursów, podejmuj lepsze decyzje.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Postępy uczniów i nauczycieli</h3>
              <p className="text-gray-700">Uczniowie i nauczyciele mogą na bieżąco śledzić swoje postępy, wyniki i aktywność na platformie, co motywuje do dalszego rozwoju.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Zobacz, co dla edukatorów oferuje platforma Ecurs
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Jak zarejestrować się i stworzyć swoją pierwszą lekcję? Obejrzyj krótki film instruktażowy.
          </p>
          <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
            <iframe
              src="https://www.youtube.com/embed/E50cc-3huk4?si=k9gIB9PKbBieh7n9"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container mx-auto max-w-xl text-center ">
          <h2 className="text-3xl font-bold mb-6">Masz pytania?</h2>
          <p className="mb-6 text-gray-600">Chcesz się dowiedzieć więcej o produkcie lub porozmawiać? Napisz do nas na email lub Facebook!</p>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center gap-3">
              {/* Email SVG icon */}
              <Mail className="w-6 h-6 text-blue-500" />
                <a
                href="mailto:kontakt@ecurs.pl"
                className="select-all cursor-pointer hover:underline"
                title="Skopiuj adres email"
                >
                kontakt@ecurs.pl
                </a>
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=61575600617982"
              className="flex items-center gap-3 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Facebook SVG icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
              </svg>
              Znajdź nas na Facebooku
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}