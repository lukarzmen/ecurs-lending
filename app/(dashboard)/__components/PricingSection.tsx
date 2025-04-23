import { Check } from 'lucide-react';

export default function PricingSection() {
  // Statyczne informacje o ofertach
  const plans = [
    {
      name: 'Wypróbuj platformę',
      price: '0 zł', // Cena bezpłatna
      pricingPeriod: 'za 3 miesiące',
      description: 'Przetestuj wszystkie funkcje platformy Ecurs bez opłat.',
      features: [
        'Pełny dostęp do kursów i funkcji',
        'Dostęp z dowolnego urządzenia',
        'Bez zobowiązań przez 3 miesiące',
      ],
    },
    {
      name: 'Do 5 uczniów',
      price: '39 zł', // Cena roczna w złotówkach
      pricingPeriod: 'za miesiąc',
      description: 'Uzyskaj pełny roczny dostęp do Ecurs i wszystkich jej funkcji.',
      features: [
        'Tworzenie interaktywnych kursów',
        'Zarządzanie treściami i uczniami',
        'Podstawowe wsparcie techniczne',
      ],
    },
    {
      name: 'Powyżej 10 uczniów',
      price: '1499 zł', // Cena roczna w złotówkach
      pricingPeriod: 'za rok',
      description: 'Uzyskaj pełny roczny dostęp do Ecurs i wszystkich jej funkcji.',
      features: [
        'Dostęp do wszystkich funkcjonalności',
        'Nielimitowani członkowie zespołu',
        'Pełne wsparcie techniczne',
      ],
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            name={plan.name}
            price={plan.price}
            pricingPeriod={plan.pricingPeriod}
            description={plan.description}
            features={plan.features}
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
}: {
  name: string;
  price: string;
  pricingPeriod: string | null;
  description: string;
  features: string[];
}) {
  return (
    <div className="pt-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
        {/* Remove flex-grow from this div */}
        <div className="p-6"> 
          <h2 className="text-2xl font-medium text-gray-900 mb-2">{name}</h2>
          <p className="text-sm text-gray-600 mb-4 min-h-[4em]">{description}</p> {/* Optional: Add min-height to description for better alignment */}
          <div className="text-4xl font-medium text-gray-900 mb-6">
            {price && (
              <div>
                <span>{price}</span>
                {pricingPeriod && (
                  <span className="text-xl font-normal text-gray-600"> {pricingPeriod}</span>
                )}
              </div>
            )}
          </div>
        </div>
        {/* Add flex-grow to this div */}
        <div className="p-6 flex-grow"> 
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
