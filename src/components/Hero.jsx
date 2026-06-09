import React from 'react';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-xl bg-on-tertiary-container/30" id="home">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-lg items-center">
        <div className="space-y-md">
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary leading-tight">
            Chat Smarter.<br />Grow Faster.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Hyderabad's trusted WhatsApp automation partner for coaching institutes and businesses. Never miss a lead — even at 2 AM.
          </p>
          <div className="flex flex-wrap gap-sm pt-base">
            <button
              onClick={() => handleScrollTo('contact')}
              className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md text-label-md flex items-center gap-xs hover:bg-opacity-90 transition-all cursor-pointer"
            >
              Get Free Demo <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button
              onClick={() => handleScrollTo('how-it-works')}
              className="border-2 border-primary text-primary px-lg py-sm rounded-lg font-label-md text-label-md hover:bg-primary/5 transition-all cursor-pointer"
            >
              See How It Works
            </button>
          </div>
          <div className="pt-lg flex flex-wrap gap-md items-center text-on-surface-variant font-label-sm text-label-sm border-t border-outline-variant/30">
            <span className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              500+ Businesses Served
            </span>
            <span className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
              24/7 Automation
            </span>
            <span className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              Hyderabad-based Support
            </span>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>
          <img
            alt="WhatsApp Chat Automation Interface"
            className="relative z-10 w-full rounded-xl shadow-sm border border-outline-variant/50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoEUfusDMgdvsiNwRx-KN_li2YGJ61ORIzf6RyXHZV02N6mxOk2L83PBVS3I-PuiXSwDHfAiWo4CdHH0t-a5y61TR0dGkbOl9XFT5-_xkzixKEsNUugjRMNuC4auJQuTyfboNQ9pNEuBF4lB4Xq2wepJO9ztC5aLmPd3tAkW8xEKI1tmEvepKkdr_5GH9XslhpF8pYfST9D4l2dtG-hMG_Y6rokjbMlsQjr8QXZDiitu1oIEYYTGLwX05oaAsptoMqcaDmfx2F__Y"
          />
        </div>
      </div>
    </section>
  );
}
