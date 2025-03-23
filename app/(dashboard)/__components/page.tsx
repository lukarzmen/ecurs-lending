import { Check } from 'lucide-react';

export default function PricingSection() {
  // Statyczne informacje o ofertach
  const plans = [
    {
      name: 'Bezpłatny dostęp dla uczniów',
      price: '0 zł', // Cena bezpłatna
      description: 'Zapewnij uczniom darmowy dostęp do platformy Ecurs, aby mogli korzystać z interaktywnych kursów.',
      features: [
        'Korzystanie z kursów na platformie',
        'Dostęp z dowolnego urządzenia',
        'Bez opłat dla uczniów',
      ],
    },
    {
      name: 'Roczny dostęp do platformy dla twórców',
      price: '1800 zł', // Cena roczna w złotówkach
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
  features,
}: {
  name: string;
  price: string | null;
  description: string;
  features: string[];
}) {
  return (
    <div className="pt-6">
      <h2 className="text-2xl font-medium text-gray-900 mb-2">{name}</h2>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <p className="text-4xl font-medium text-gray-900 mb-6">
        {price !== null ? (
          <>
            {price} <span className="text-xl font-normal text-gray-600">za rok</span>
          </>
        ) : (
          <span className="text-xl text-gray-600">Koszt do ustalenia</span>
        )}
      </p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
