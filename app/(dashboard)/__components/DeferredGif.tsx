'use client';

import { useEffect, useRef, useState } from 'react';

type DeferredGifProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  className?: string;
};

export default function DeferredGif({
  src,
  alt,
  title,
  description,
  className = 'rounded-2xl shadow-xl w-full h-auto',
}: DeferredGifProps) {
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
    <div ref={containerRef} className="w-full max-w-lg">
      {!isLoaded ? (
        <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-6 shadow-lg">
          <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <p className="text-xs text-gray-500">Demo uruchomi się automatycznie po przewinięciu do tej sekcji.</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={className}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      )}

      <noscript>
        <img
          src={src}
          alt={alt}
          className={className}
          loading="lazy"
          decoding="async"
        />
      </noscript>
    </div>
  );
}