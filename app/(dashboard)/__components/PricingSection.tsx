import { Check } from 'lucide-react';

export default function PricingSection() {
  // Statyczne informacje o ofertach
  const plans = [
    {
      name: 'Wypróbuj platformę',
      price: '0 zł', // Cena bezpłatna
      pricingPeriod: 'za 3 miesiące',
      description: 'Przetestuj wszystkie funkcje platformy Ecurs przez pierwsze 3 miesiące bez żadnych opłat.',
      features: [
        'Pełny dostęp do kursów i funkcji',
        'Dostęp z dowolnego urządzenia',
        'Bez zobowiązań przez 3 miesiące',
      ],
    },
    {
      name: 'Roczny dostęp do platformy dla twórców',
      price: '1800 zł', // Cena roczna w złotówkach
      pricingPeriod: 'za rok',
      description: 'Uzyskaj pełny roczny dostęp do Ecurs i wszystkich jej funkcji.',
      features: [
        'Tworzenie interaktywnych kursów',
        'Nielimitowani członkowie zespołu',
        'Wsparcie techniczne',
      ],
    },
    {
      name: 'Dedykowana instalacja dla Twojej firmy',
      price: 'cena indywidualna', // Koszt do ustalenia
      pricingPeriod: null,
      description:
        'Zainstaluj Ecurs na własnym serwerze z dostosowaniem do Twoich potrzeb. Cena ustalana indywidualnie.',
      features: [
        'Pełna kontrola nad platformą',
        'Dostosowanie do specyficznych wymagań',
        'Wsparcie techniczne premium',
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
        <div className="p-6 flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 mb-2">{name}</h2>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
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
        <div className="p-6">
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
