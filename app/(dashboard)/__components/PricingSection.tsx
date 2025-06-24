import { Check } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'Wypróbuj platformę',
      price: '0 zł',
      pricingPeriod: 'za 3 miesiące',
      description: 'Przetestuj wszystkie funkcje platformy Ecurs bez opłat.',
      features: [
        'Pełny dostęp do kursów i funkcji',
        'Dostęp z dowolnego urządzenia',
        'Bez zobowiązań przez 3 miesiące',
      ],
    },
    {
      name: 'Dla indywidualnych twórców',
      price: '39 zł',
      pricingPeriod: 'za miesiąc',
      description: 'Uzyskaj pełny roczny dostęp do Ecurs i wszystkich jej funkcji.',
      features: [
        'Tworzenie interaktywnych kursów',
        'Zarządzanie kursami',
        'Panel analityczny',
        'Do 15 uczniów w kursach zamkniętych',
        'Podstawowe wsparcie techniczne',
      ],
    },
    {
      name: 'Dla szkół lub twórców posiadających więcej niż 15 uczniów w zamkniętych kursach',
      price: '1699 zł',
      pricingPeriod: 'za rok',
      description: 'Uzyskaj pełny roczny dostęp do Ecurs i wszystkich jej funkcji.',
      features: [
        'Tworzenie interaktywnych kursów',
        'Zarządzanie kursami',
        'Panel analityczny',
        'Bez ograniczeń liczby uczniów',
        'Zarządzanie szkołą i nauczycielami',
        'Pełne wsparcie techniczne',
      ],
    }
  ];

  // Calculate max features count for all plans
  const maxFeatures = Math.max(...plans.map(plan => plan.features.length));

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Promo Banner: 3 za darmo tylko do końca wakacji */}
      <div className="mb-8">
        <div className="bg-yellow-100 border border-yellow-300 rounded-lg px-6 py-3 text-center shadow-sm">
          <span className="text-lg font-bold text-yellow-800">
            🎉 Promocja: 3 miesiące za darmo tylko do końca wakacji!
          </span>
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
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
        <div className="p-6 flex flex-col h-full">
          {/* Name */}
          <h2 className="text-2xl font-medium text-gray-900 mb-2 flex items-center min-h-[3.5em]">{name}</h2>
          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 flex items-center min-h-[3.5em]">{description}</p>
          {/* Price */}
          <div className="mb-6 flex flex-col justify-center min-h-[5.5em]">
            {isFree ? (
              <span className="text-4xl font-medium text-green-600">{price}</span>
            ) : (
              <div className="flex flex-col items-start">
                <span className="text-2xl text-gray-400 line-through">
                  {oldPrice}
                  {pricingPeriod && <span className="text-base font-normal"> {pricingPeriod}</span>}
                </span>
                <span className="text-4xl font-bold text-orange-600">
                  {newPrice}
                  {pricingPeriod && <span className="text-xl font-normal text-gray-600"> {pricingPeriod}</span>}
                </span>
                <span className="text-xs text-orange-500 font-semibold mt-1">-20% zniżki</span>
              </div>
            )}
          </div>
          {/* Features */}
          <ul className="space-y-4 mb-8 flex flex-col justify-start min-h-[13em]">
            {paddedFeatures.map((feature, index) => (
              <li key={index} className="flex items-start min-h-[1.5em]">
                {feature ? (
                  <>
                    <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </>
                ) : (
                  <span className="w-7 h-5 mr-2" />
                )}
              </li>
            ))}
          </ul>
          <div className="flex-grow" />
        </div>
      </div>
    </div>
  );
}
