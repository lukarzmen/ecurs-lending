import { Check } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'Wypróbuj platformę',
      price: '0 zł',
      pricingPeriod: 'za 3 miesiące',
      description: 'Przetestuj wszystkie funkcje platformy Ecurs bez opłat przez pełne 3 miesiące.',
      features: [
        'Pełny dostęp do wszystkich funkcji',
        'Tworzenie ścieżek edukacyjnych',
        'Kursy tworzone na bieżąco',
        'Zaawansowane analityki',
        'Powiadomienia w czasie rzeczywistym',
        'Dostęp z dowolnego urządzenia',
        'Wsparcie techniczne',
      ],
    },
    {
      name: 'Dla indywidualnych twórców',
      price: '39 zł',
      pricingPeriod: 'za miesiąc',
      description: 'Idealne rozwiązanie dla freelancerów i małych edukatorów.',
      features: [
        'Pełny dostęp do wszystkich funkcji',
        'Tworzenie ścieżek edukacyjnych',
        'Kursy tworzone na bieżąco',
        'Zaawansowane analityki',
        'Powiadomienia w czasie rzeczywistym',
        'Dostęp z dowolnego urządzenia',
        'Wsparcie techniczne',
      ],
    },
    {
      name: 'Dla szkół i dużych twórców',
      price: '1799 zł',
      pricingPeriod: 'za rok',
      description: 'Kompletne rozwiązanie dla instytucji edukacyjnych i dużych organizacji.',
      features: [
        'Wszystko z poprzednich planów',
        'Bez ograniczeń liczby uczniów',
        'Zarządzanie zespołem nauczycieli',
        'Priorytetowe wsparcie techniczne',
      ],
    }
  ];

  // Calculate max features count for all plans
  const maxFeatures = Math.max(...plans.map(plan => plan.features.length));

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Promo Banner: 3 miesiące za darmo */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-300 rounded-xl px-8 py-6 text-center shadow-lg">
          <div className="flex items-center justify-center mb-2">
            <span className="text-3xl mr-3">🎉</span>
            <span className="text-2xl font-bold text-orange-800">
              Promocja: 3 miesiące za darmo!
            </span>
            <span className="text-3xl ml-3">🚀</span>
          </div>
          <p className="text-lg text-orange-700 font-medium">
            Wypróbuj wszystkie funkcje bez zobowiązań • Pełna funkcjonalność • Bez ukrytych kosztów
          </p>
        </div>
      </div>
      {/* Existing promo banner */}
      {/* <div className="mb-8">
        <div className="bg-orange-100 border border-orange-300 rounded-lg px-6 py-4 text-center shadow-sm">
          <span className="text-xl font-bold text-orange-600">
            🎉 Promocja! Skorzystaj z 20% zniżki na pierwszy zakup dowolnego planu – tylko do końca miesiąca!
          </span>
        </div>
      </div> */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            name={plan.name}
            price={plan.price}
            pricingPeriod={plan.pricingPeriod}
            description={plan.description}
            features={plan.features}
            maxFeatures={maxFeatures}
          />
        ))}
      </div>
    </main>
  );
}

function PricingCard({
  name,
  price,
  description,
  pricingPeriod,
  features,
  maxFeatures,
}: {
  name: string;
  price: string;
  pricingPeriod: string | null;
  description: string;
  features: string[];
  maxFeatures: number;
}) {
  const isFree = price === '0 zł';
  let oldPrice = price;
  let newPrice = price;

  if (!isFree) {
    const numeric = parseFloat(price.replace(/[^\d.]/g, ''));
    const promo = Math.round(numeric * 0.8 * 100) / 100;
    newPrice = `${promo} zł`;
  }

  // Pad features for alignment
  const paddedFeatures = [
    ...features,
    ...Array(maxFeatures - features.length).fill(''),
  ];

  return (
    <div className="pt-6 h-full flex flex-col">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
        <div className="p-8 flex flex-col h-full">
          {/* Name */}
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center min-h-[4em] leading-tight">{name}</h2>
          {/* Description */}
          <p className="text-gray-600 mb-6 flex items-center min-h-[3em] leading-relaxed">{description}</p>
          {/* Price */}
          <div className="mb-8 flex flex-col justify-center min-h-[6em]">
            {isFree ? (
              <div className="text-center">
                <span className="text-5xl font-bold text-green-600">{price}</span>
                <div className="text-sm text-green-600 font-medium mt-2 bg-green-50 px-3 py-1 rounded-full inline-block">
                  {pricingPeriod}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="flex flex-col items-center">
                  <span className="text-2xl text-gray-400 line-through mb-1">
                    {oldPrice}
                  </span>
                  <span className="text-5xl font-bold text-orange-600 mb-2">
                    {newPrice}
                  </span>
                  <span className="text-lg text-gray-600">{pricingPeriod}</span>
                  <span className="text-sm text-orange-500 font-semibold mt-2 bg-orange-50 px-3 py-1 rounded-full">
                    -20% zniżki
                  </span>
                </div>
              </div>
            )}
          </div>
          {/* Features */}
          <ul className="space-y-3 mb-8 flex flex-col justify-start flex-grow">
            {paddedFeatures.map((feature, index) => (
              <li key={index} className="flex items-start min-h-[1.5em]">
                {feature ? (
                  <>
                    <Check className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </>
                ) : (
                  <span className="w-8 h-5 mr-3" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
