import React from 'react';

export default function Industries() {
  const industries = [
    'Coaching Institutes',
    'Retail Shops',
    'Clinics & Hospitals',
    'Salons & Spas',
    'Real Estate'
  ];

  return (
    <section className="py-lg border-y border-outline-variant bg-surface">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop overflow-x-auto">
        <div className="flex flex-nowrap md:flex-wrap justify-center gap-sm">
          {industries.map((ind, idx) => (
            <span
              key={idx}
              className="px-md py-xs bg-surface-container-high border border-outline-variant rounded-full font-label-md text-label-md whitespace-nowrap"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
