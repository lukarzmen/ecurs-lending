'use client';

import { useEffect, useRef, useState } from 'react';

type DeferredGifProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  className?: string;
  openOnClick?: boolean;
};

export default function DeferredGif({
  src,
  alt,
  title,
  description,
  className = 'rounded-2xl shadow-xl w-full h-auto',
  openOnClick = false,
}: DeferredGifProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const previewContent = !isLoaded ? (
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
  );

  return (
    <div ref={containerRef} className="w-full max-w-lg">
      {openOnClick ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative block w-full text-left rounded-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
          aria-label={`Otwórz podgląd: ${title}`}
        >
          {previewContent}
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25 opacity-100 transition-opacity group-hover:bg-black/35">
            <span className="inline-flex items-center rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg">
              ▶ Obejrzyj demo
            </span>
          </span>
        </button>
      ) : (
        previewContent
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

      {openOnClick && isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow"
            >
              Zamknij
            </button>
            <img
              src={src}
              alt={alt}
              className="w-full h-auto rounded-2xl shadow-2xl"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}