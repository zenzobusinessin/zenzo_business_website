import React from 'react';

export default function Reviews() {
  const reviews = [
    {
      text: '"Our lead conversion increased by 40% in the first month. The automation is flawless and our students love the instant updates."',
      author: 'Ravi Kumar',
      role: 'Director, Excel Coaching'
    },
    {
      text: '"The setup was fast and professional. We no longer worry about missing inquiries after office hours. Highly recommended!"',
      author: 'Priya Reddy',
      role: 'Owner, Shine Dental Clinic'
    },
    {
      text: '"Zenzo transformed how we handle customer support. The broadcast feature is a game-changer for our seasonal promotions."',
      author: 'Mohammed Farhan',
      role: 'Founder, Farhan Retail'
    }
  ];

  const stats = [
    { value: '500+', label: 'Businesses served' },
    { value: '98%', label: 'Customer satisfaction' },
    { value: '4.9/5', label: 'Average rating' }
  ];

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-xl bg-surface-container-high" id="reviews">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid md:grid-cols-3 gap-md mb-xl">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-surface p-lg rounded-xl shadow-sm">
              <div className="text-secondary mb-sm flex">
                {[...Array(5)].map((_, starIdx) => (
                  <span key={starIdx} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <p className="font-body-md text-body-md mb-md italic">{rev.text}</p>
              <div>
                <p className="font-label-md text-label-md text-on-surface">{rev.author}</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between items-center bg-primary text-on-primary p-lg rounded-xl gap-sm">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="font-label-sm text-on-primary-container">{stat.label}</p>
            </div>
          ))}
          <div className="w-full md:w-auto mt-md md:mt-0 text-center">
            <button
              onClick={handleScrollToContact}
              className="bg-on-primary text-primary px-lg py-sm rounded-lg font-label-md cursor-pointer hover:bg-opacity-95 transition-all"
            >
              Join Them Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
