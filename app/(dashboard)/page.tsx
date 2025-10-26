import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import PricingSection from './__components/PricingSection';

export const metadata = {
  title: "Ecurs – nowoczesna platforma edukacyjna z AI. Ścieżki edukacyjne, analityki i Stripe Connect.",
  description: "Twórz ścieżki edukacyjne, kursy na bieżąco, sprzedawaj w subskrypcjach. Zaawansowane analityki, powiadomienia i płatności przez Stripe Connect. 3 miesiące za darmo!",
  openGraph: {
    title: 'Ecurs - przyszłość edukacji online',
    description: 'Ścieżki edukacyjne, kursy na bieżąco, analityki AI i Stripe Connect. Zacznij tworzyć już dziś - 3 miesiące za darmo!',
    url: 'https://uczzecurs.pl/',
    type: 'website',
    images: [
      {
        url: 'https://uczzecurs.pl/demo3.png',
        width: 1200,
        height: 630,
        alt: 'Ecurs - nowoczesna platforma edukacyjna 2025',
      },
    ]
  },
};

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
                  fontSize: '3.5rem',
                  lineHeight: 1.08,
                  color: '#1a202c',
                  letterSpacing: '-0.03em',
                }}
              >
                <span style={{ display: 'block', color: '#22223b' }}>
                  Dziel się wiedzą
                </span>
                <span
                  style={{
                    display: 'block',
                    color: '#ff6600',
                    fontFamily: "'Montserrat', 'Inter', 'Segoe UI', Arial, sans-serif",
                    fontWeight: 800,
                    fontSize: '3.1rem',
                  }}
                >
                  z interaktywnymi materiałami edukacyjnymi
                </span>
                <span
                  style={{
                    display: 'block',
                    color: '#ff6600',
                    fontFamily: "'Montserrat', 'Inter', 'Segoe UI', Arial, sans-serif",
                    fontWeight: 800,
                    fontSize: '3.1rem',
                  }}
                >
                  od Ecurs
                </span>
              </h1>
              <ul
                className="mt-6 mb-4 space-y-3 text-base text-gray-700 text-left"
                style={{
                  fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
                  fontSize: '1.1rem',
                  color: '#343a40',
                  lineHeight: 1.7,
                }}
              >
                <li>
                  <span className="font-semibold text-orange-500">🚀 Twórz ścieżki edukacyjne</span> – buduj kompleksowe programy nauczania z powiązanymi kursami i materiałami.
                </li>
                <li>
                  <span className="font-semibold text-orange-500">⚡ Kursy tworzone na bieżąco</span> – dodawaj nowe lekcje i materiały w trakcie trwania kursu, dostosowując się do potrzeb uczniów.
                </li>
                <li>
                  <span className="font-semibold text-orange-500">💰 Sprzedaż subskrypcyjna i jednorazowa</span> – oferuj dostęp miesięczny/roczny lub sprzedawaj materiały jako zakupy jednorazowe.
                </li>
                <li>
                  <span className="font-semibold text-orange-500">🆓 Okresy próbne</span> – pozwól uczniom wypróbować Twoje kursy za darmo przed zakupem.
                </li>
                <li>
                  <span className="font-semibold text-orange-500">💳 Stripe Connect</span> – otrzymuj płatności bezpośrednio na swoje konto z automatycznym rozliczaniem prowizji.
                </li>
                <li>
                  <span className="font-semibold text-orange-500">📊 Zaawansowane analityki</span> – śledź postępy uczniów, przychody i skuteczność materiałów w czasie rzeczywistym.
                </li>
              </ul>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <Button asChild className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full text-lg px-10 py-4 inline-flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <a href="https://platforma.ecurs.pl/">
                    Zacznij za darmo już dziś
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <div className="mt-4 text-sm text-gray-600">
                  <span className="font-semibold text-orange-600">🎯 3 miesiące bezpłatnego dostępu • Bez zobowiązań • Pełna funkcjonalność</span>
                </div>
              </div>
              <div className="mt-6 text-xs text-gray-500">
                <span>💡 Rejestrując się otrzymujesz natychmiastowy dostęp do wszystkich funkcji platformy na 3 miesiące.</span>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center lg:justify-end">
              <div className="relative lg:ml-16 max-w-lg">
                <div className="bg-orange-50 rounded-lg px-3 py-1 inline-block mb-4">
                  <span className="text-sm font-medium text-orange-700">🎬 Demo na żywo</span>
                </div>
                <img
                  src="/app_demo.gif"
                  alt="Demo aplikacji Ecurs - zobacz jak działa platforma"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                {/* Optional overlay with play button for video-like appearance */}
                <div className="absolute inset-0 bg-black/10 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-orange-600 text-2xl ml-1">▶</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kompletne rozwiązanie dla edukatorów</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wszystko czego potrzebujesz do tworzenia, zarządzania i sprzedaży kursów online w jednym miejscu
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ścieżki edukacyjne</h3>
              <p className="text-gray-600">
                Twórz strukturalne programy nauczania łączące wiele kursów w logiczną sekwencję.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kursy na bieżąco</h3>
              <p className="text-gray-600">
                Dodawaj nowe materiały w trakcie trwania kursu, dostosowując się do potrzeb uczniów.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Elastyczne płatności</h3>
              <p className="text-gray-600">
                Sprzedawaj subskrypcje, oferuj okresy próbne lub sprzedawaj materiały jednorazowo.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔔</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart powiadomienia</h3>
              <p className="text-gray-600">
                Automatyczne powiadomienia o postępach, terminach i nowych materiałach.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* New Section: Stripe Connect & Payment Management */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Text Content Column */}
            <div className="mb-10 lg:mb-0">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Otrzymuj płatności bezpośrednio na swoje konto
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">💳</span>
                  <div>
                    <p className="font-semibold text-gray-900">Stripe Connect</p>
                    <p>Bezpieczne płatności z automatycznym rozliczaniem prowizji</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📊</span>
                  <div>
                    <p className="font-semibold text-gray-900">Rozliczenia z uczniami</p>
                    <p>Przejrzyste raporty finansowe i automatyczne faktury</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🔄</span>
                  <div>
                    <p className="font-semibold text-gray-900">Elastyczne modele płatności</p>
                    <p>Subskrypcje, płatności jednorazowe i okresy próbne</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Image/Visual Column */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">💰</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Twoje przychody</h3>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">+2,450 zł</div>
                    <div className="text-sm text-gray-600">w tym miesiącu</div>
                    <div className="mt-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section for AI Content Generation - Updated Layout */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* AI Mockup Column */}
            <div className="flex justify-center mb-10 lg:mb-0">
              <div className="bg-gradient-to-br from-purple-50 to-blue-100 rounded-2xl p-6 shadow-xl max-w-lg">
                {/* AI Generator Interface */}
                <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">🤖</span>
                    </div>
                    <span className="font-semibold text-gray-900">AI Generator Lekcji</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-600 mb-1">Temat lekcji:</div>
                      <div className="text-sm font-medium">Present Perfect Tense</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gray-50 rounded-lg p-2">
                        <div className="text-xs text-gray-600">Poziom:</div>
                        <div className="text-sm font-medium">B1</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2">
                        <div className="text-xs text-gray-600">Czas:</div>
                        <div className="text-sm font-medium">50 min</div>
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 border-2 border-purple-200">
                      <div className="text-xs text-purple-600 mb-2">✨ Wygenerowana lekcja:</div>
                      <div className="text-sm text-gray-700 mb-2">
                        <strong>1. Budowa Present Perfect</strong><br/>
                        have/has + past participle (3rd form)
                      </div>
                      <div className="text-sm text-gray-700 mb-2">
                        <strong>2. Przykłady:</strong><br/>
                        <em>"I have lived here for 5 years"</em>
                      </div>
                      <div className="flex items-center text-xs text-purple-600">
                        <span className="mr-2">⚡</span>
                        <span>Automatycznie dodano ćwiczenia i quiz</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* AI Checker Interface */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="font-semibold text-gray-900">AI Sprawdzanie Zadań</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
                      <div className="text-xs text-green-600 mb-1">Zadanie: Utwórz zdanie w Present Perfect</div>
                      <div className="text-sm text-gray-700">
                        <strong>Odpowiedź ucznia:</strong><br/>
                        <em>"I have been to London three times."</em>
                      </div>
                      <div className="mt-2 flex items-center">
                        <span className="text-green-600 font-bold mr-2">90/100</span>
                        <span className="text-xs text-green-600">✅ Bardzo dobrze!</span>
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-3 border-l-4 border-yellow-400">
                      <div className="text-xs text-yellow-600 mb-1">Automatyczna ocena + feedback:</div>
                      <div className="text-sm text-gray-700">
                        "Świetnie! Poprawna budowa i znaczenie. Spróbuj dodać więcej szczegółów."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Text Content Column */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center lg:text-left">
                AI automatyzuje tworzenie i ocenianie
              </h2>
              <p className="mt-4 text-lg text-gray-600 text-center lg:text-left">
                Sztuczna inteligencja pomaga w tworzeniu kompletnych lekcji z zadaniami oraz automatycznie sprawdza i ocenia prace uczniów, oszczędzając Twój czas.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-purple-600 mr-2">🚀</span>
                    <span className="font-semibold text-purple-900">Generator lekcji</span>
                  </div>
                  <p className="text-sm text-purple-700">Tworzy pełne lekcje z teorią, przykładami i zadaniami</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-green-600 mr-2">✅</span>
                    <span className="font-semibold text-green-900">Auto-sprawdzanie</span>
                  </div>
                  <p className="text-sm text-green-700">Ocenia zadania i daje spersonalizowany feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section for Interactive Content */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Text Content Column */}
            <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center lg:text-left">
                Twórz interaktywne treści
              </h2>
              <p className="mt-4 text-lg text-gray-600 text-center lg:text-left">
                Angażuj uczniów za pomocą różnorodnych interaktywnych elementów, takich jak quizy, zadania typu "dopasuj elementy", fiszki i wiele innych, aby nauka była ciekawsza.
              </p>
            </div>
            {/* Interactive Elements Mockup */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl p-8 shadow-xl max-w-md">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Interaktywne elementy</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-400">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">❓</span>
                      <div>
                        <div className="font-semibold text-gray-900">Quiz</div>
                        <div className="text-sm text-gray-600">Pytanie wielokrotnego wyboru</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-green-400">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🎯</span>
                      <div>
                        <div className="font-semibold text-gray-900">Dopasuj elementy</div>
                        <div className="text-sm text-gray-600">Interaktywne zadanie</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-purple-400">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🃏</span>
                      <div>
                        <div className="font-semibold text-gray-900">Fiszki</div>
                        <div className="text-sm text-gray-600">Nauka przez powtarzanie</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-orange-400">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">📝</span>
                      <div>
                        <div className="font-semibold text-gray-900">Zadania otwarte</div>
                        <div className="text-sm text-gray-600">Odpowiedzi tekstowe</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* New Section: Advanced Analytics & Notifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Image Column */}
            <div className="flex justify-center mb-10 lg:mb-0">
              <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Panel analityczny</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Ukończenia kursów</span>
                    <span className="font-bold text-green-600">87%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Aktywni uczniowie</span>
                    <span className="font-bold text-blue-600">142</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Przychód miesięczny</span>
                    <span className="font-bold text-orange-600">3,250 zł</span>
                  </div>
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-center">
                      <span className="text-orange-600 mr-2">🔔</span>
                      <span className="text-sm text-orange-800">Nowy uczeń dołączył do kursu "React dla początkujących"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Text Content Column */}
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Analityki i powiadomienia w czasie rzeczywistym
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📈</span>
                  <div>
                    <p className="font-semibold text-gray-900">Zaawansowane analityki</p>
                    <p>Śledź postępy uczniów, popularność materiałów i przychody w czasie rzeczywistym</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🔔</span>
                  <div>
                    <p className="font-semibold text-gray-900">Inteligentne powiadomienia</p>
                    <p>Otrzymuj alerty o nowych zapisach, ukończeniach i problemach wymagających uwagi</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📋</span>
                  <div>
                    <p className="font-semibold text-gray-900">Raporty skuteczności</p>
                    <p>Analizuj które materiały są najbardziej angażujące i gdzie uczniowie napotykają trudności</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* New Section: Educational Paths & Marketplace */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Buduj kompleksowe doświadczenia edukacyjne</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Twórz powiązane ścieżki nauczania i sprzedawaj swoje kursy w globalnym marketplace
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Educational Paths */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Ścieżki edukacyjne</h3>
                <p className="text-gray-700">Twórz strukturalne programy nauczania</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1</div>
                    <span className="font-semibold">Podstawy fotografii</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">2</div>
                    <span className="font-semibold">Kompozycja i kadrowanie</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3</div>
                    <span className="font-semibold">Obróbka zdjęć w Lightroom</span>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <span className="text-sm text-gray-600">Łącz kursy w logiczne sekwencje</span>
                </div>
              </div>
            </div>
            
            {/* Marketplace */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-100 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🛒</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Marketplace kursów</h3>
                <p className="text-gray-700">Sprzedawaj w globalnej platformie</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Twój kurs widoczny globalnie</span>
                    <span className="text-green-600 font-bold">+250%</span>
                  </div>
                  <div className="text-sm text-gray-600">wzrost zasięgu</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Automatyczne płatności</span>
                    <span className="text-blue-600 font-bold">24/7</span>
                  </div>
                  <div className="text-sm text-gray-600">bez Twojej interwencji</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Prowizja platformy</span>
                    <span className="text-green-600 font-bold">0% zawsze!</span>
                  </div>
                  <div className="text-sm text-gray-600">100% przychodów dla Ciebie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Wybierz plan idealny dla Ciebie</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Wszystkie plany obejmują pełny dostęp do nowych funkcjonalności. Rozpocznij za darmo!
          </p>
          <PricingSection />
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">Dlaczego warto wybrać Ecurs?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ścieżki edukacyjne</h3>
              <p className="text-gray-700">Twórz kompleksowe programy nauczania łączące wiele kursów w logiczną sekwencję. Prowadź uczniów krok po kroku do celu.</p>
            </div>
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kursy na bieżąco</h3>
              <p className="text-gray-700">Dodawaj nowe materiały w trakcie trwania kursu, dostosowując się do tempa i potrzeb uczniów. Bądź elastyczny w nauczaniu.</p>
            </div>
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Elastyczne modele sprzedaży</h3>
              <p className="text-gray-700">Oferuj subskrypcje miesięczne/roczne, okresy próbne lub sprzedawaj materiały jednorazowo. Dostosuj model do swoich potrzeb.</p>
            </div>
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Stripe Connect</h3>
              <p className="text-gray-700">Otrzymuj płatności bezpośrednio na swoje konto. Obsługujemy przelewy, BLIK i karty płatnicze z automatycznym rozliczaniem prowizji.</p>
            </div>
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Zaawansowane analityki</h3>
              <p className="text-gray-700">Śledź postępy uczniów, przychody i skuteczność materiałów w czasie rzeczywistym. Podejmuj decyzje oparte na danych.</p>
            </div>
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔔</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart powiadomienia</h3>
              <p className="text-gray-700">Automatyczne powiadomienia o postępach, nowych zapisach, terminach i problemach wymagających uwagi. Bądź zawsze na bieżąco.</p>
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