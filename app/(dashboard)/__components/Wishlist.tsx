'use client';

import { useState } from 'react';
import toast from "react-hot-toast";

export default function WishlistComponent() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    try {
      const response = await fetch('https://hook.eu2.make.com/488d0ym8niojopxg72obje68aj5jt6tq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });

      if (!response.ok) {
        toast.error('Spróbuj później lub skontaktuj się przez dane kontaktowe na stronie głównej.');
      }
      if (response.ok) {
        toast.success('Odebraliśmy twoje dane kontaktowe i odezwiemy się wkrótce.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Spróbuj później lub skontaktuj się przez dane kontaktowe na stronie głównej.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
      >
        <label htmlFor="name" className="block mb-2 text-lg text-center">
          Twoje imie:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-2 mb-4 text-black bg-gray-100 rounded-lg text-center"
          placeholder="Twoje imię"
        />
        <label htmlFor="phone" className="block mb-2 text-lg text-center">
          Twój numer telefonu:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full p-2 mb-4 bg-gray-100 text-black rounded-lg text-center"
          placeholder="Twój numer telefonu"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`${
              isLoading ? 'bg-gray-200' : 'bg-orange-600 hover:bg-orange-700'
            } text-white rounded-full text-lg px-8 py-4 inline-flex items-center justify-center`}
          >
            {isLoading ? 'Wysyłanie...' : 'Wyślij'}
          </button>
        </div>
      </form>
    </div>
  );
}
