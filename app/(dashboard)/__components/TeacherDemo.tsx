'use client';

import { useEffect, useRef, useState } from 'react';

export default function TeacherDemo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isLoaded]);

  return (
    <div ref={containerRef} className="relative lg:ml-16 max-w-lg">
      <div className="bg-orange-50 rounded-lg px-3 py-1 inline-block mb-4">
        <span className="text-sm font-medium text-orange-700">🎬 Demo na żywo</span>
      </div>

      <h2 className="text-lg font-semibold text-gray-900 mb-2">Jak działa platforma Ecurs</h2>
      <p className="text-sm text-gray-600 mb-5">
        Prezentowany materiał pokazuje widok lekcji z perspektywy ucznia.
      </p>

      {!isLoaded ? (
        <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-8 shadow-xl">
          <p className="text-sm text-gray-600 mb-4">
            Materiał uruchomi się automatycznie po przewinięciu do tej sekcji, żeby nie obciążać strony przy pierwszym wejściu.
          </p>
        </div>
      ) : (
        <img
          src="/app_demo.gif"
          alt="Demo platformy Ecurs"
          className="rounded-2xl shadow-2xl w-full h-auto"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      )}

      <noscript>
        <img
          src="/app_demo.gif"
          alt="Demo platformy Ecurs"
          className="rounded-2xl shadow-2xl w-full h-auto mt-4"
          loading="lazy"
          decoding="async"
        />
      </noscript>
    </div>
  );
}