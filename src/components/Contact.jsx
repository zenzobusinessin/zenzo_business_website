import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    businessType: 'Website Design & Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Story step state to cycle thoughts over Lottie animation
  const [storyStep, setStoryStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStoryStep(prev => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const triggerMailto = () => {
    const subject = encodeURIComponent(`New Zenzo Demo Request from ${formData.name || 'Client'}`);
    const body = encodeURIComponent(
      `Hi Zenzo Solutions,\n\nYou have received a new project request with the following details:\n\n` +
      `Name: ${formData.name}\n` +
      `Business Name: ${formData.businessName}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Service Needed: ${formData.businessType}\n` +
      `Message: ${formData.message || 'N/A'}\n\n` +
      `Best regards,\n${formData.name || 'Zenzo Landing Page Form'}`
    );
    window.location.href = `mailto:zenzobusiness.in@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phone) {
      alert('Please enter your phone number.');
      return;
    }

    setSubmitting(true);

    try {
      // Submit to Web3Forms API to send email to zenzobusiness.in@gmail.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "3a88460a-7d30-47d0-b053-c1cafd03278d", // Replace with Web3Forms Access Key
          name: formData.name,
          business_name: formData.businessName,
          phone: formData.phone,
          business_type: formData.businessType,
          message: formData.message,
          subject: `New Lead from Zenzo Landing Page - ${formData.name}`,
          to_email: "zenzobusiness.in@gmail.com"
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        triggerMailto();
      }
    } catch (error) {
      console.error('API submission error, falling back to mailto:', error);
      triggerMailto();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-xl" id="contact">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-xl">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-md">Ready to automate?</h2>
          <p className="text-on-surface-variant mb-lg">Fill out the form and our Hyderabad-based team will contact you within 24 hours to schedule your free demo.</p>
          
          {submitted ? (
            <div className="bg-primary/10 border border-primary text-primary p-lg rounded-xl text-center space-y-sm">
              <span className="material-symbols-outlined text-4xl block" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              <h3 className="font-headline-md text-headline-md">Request Received!</h3>
              <p className="font-body-md">
                Thank you, <strong>{formData.name || 'there'}</strong>. Our team will contact you at <strong>{formData.phone}</strong> within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', businessName: '', phone: '', businessType: 'Custom Business Website', message: '' });
                }}
                className="mt-md text-sm underline cursor-pointer hover:text-opacity-80"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-md">
              <div className="grid md:grid-cols-2 gap-md">
                <div>
                  <label className="block font-label-md text-label-md mb-base">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-outline-variant focus:border-primary focus:ring-primary rounded-lg bg-surface"
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-label-md mb-base">Business Name</label>
                  <input
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full border-outline-variant focus:border-primary focus:ring-primary rounded-lg bg-surface"
                    placeholder="e.g. Acme Coaching"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-md text-label-md mb-base">Phone Number *</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-outline-variant focus:border-primary focus:ring-primary rounded-lg bg-surface"
                  placeholder="+91 00000 00000"
                  required
                  type="tel"
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md mb-base">Service Needed</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full border-outline-variant focus:border-primary focus:ring-primary rounded-lg bg-surface"
                >
                  <option>Website Design & Development</option>
                  <option>Marketing & Scaling Solutions</option>
                  <option>WhatsApp Automation Bot</option>
                  <option>Complete Web + Automation Suite</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block font-label-md text-label-md mb-base">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-outline-variant focus:border-primary focus:ring-primary rounded-lg bg-surface h-32"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button 
                type="submit" 
                disabled={submitting}
                className="bg-primary text-on-primary w-full py-md rounded-lg font-headline-md hover:bg-opacity-90 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending Request...' : 'Request Demo Now'}
              </button>
            </form>
          )}
        </div>
        
        <div className="bg-on-tertiary-container/20 p-xl rounded-xl">
          <h3 className="font-headline-md text-headline-md text-primary mb-lg">Contact Details</h3>
          <div className="space-y-lg">
            <div className="flex gap-md">
              <span className="material-symbols-outlined text-primary bg-on-primary-container p-sm rounded-full h-fit">
                chat
              </span>
              <div>
                <p className="font-label-md text-label-md">WhatsApp Us</p>
                <p className="text-body-md text-on-surface-variant">+91 6281329178</p>
                <p className="text-body-md text-on-surface-variant">+91 7780241528</p>
              </div>
            </div>
            <div className="flex gap-md">
              <span className="material-symbols-outlined text-primary bg-on-primary-container p-sm rounded-full h-fit">
                mail
              </span>
              <div>
                <p className="font-label-md text-label-md">Email Support</p>
                <p className="text-body-md text-on-surface-variant">zenzobusiness.in@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-md">
              <span className="material-symbols-outlined text-primary bg-on-primary-container p-sm rounded-full h-fit">
                location_on
              </span>
              <div>
                <p className="font-label-md text-label-md">Our Office</p>
                {/* <p className="text-body-md text-on-surface-variant">Banjara Hills, Road No. 12,<br />Hyderabad, Telangana - 500034</p> */}
                <p className="text-body-md text-on-surface-variant">Working Remotely From Hyderabad,<br />All operations through digital platform</p>
              </div>
            </div>
          </div>
          {/* Animated Lottie: The Business Owner's Revelation */}
          <div className="mt-xl overflow-hidden h-64 flex flex-col items-center justify-center bg-transparent relative">
            {/* Thought Overlay Bubble */}
            <div className={`absolute top-0 z-20 min-h-[48px] max-w-[85%] bg-surface border border-outline-variant/60 rounded-xl px-md py-xs shadow-md flex items-center gap-xs transition-all duration-500 transform ${
              storyStep === 3 ? 'border-primary bg-primary/5 scale-105 shadow-lg' : 'translate-y-0'
            }`}>
              {storyStep === 0 && (
                <>
                  <span className="material-symbols-outlined text-primary text-xl animate-pulse">language</span>
                  <span className="text-[10px] font-bold text-on-surface">"How to build a business Website?"</span>
                </>
              )}
              {storyStep === 1 && (
                <>
                  <span className="material-symbols-outlined text-secondary text-xl animate-pulse">shopping_bag</span>
                  <span className="text-[10px] font-bold text-on-surface">"How to design my website?"</span>
                </>
              )}
              {storyStep === 2 && (
                <>
                  <span className="material-symbols-outlined text-primary text-xl animate-pulse">chat</span>
                  <span className="text-[10px] font-bold text-on-surface">"How to automate customer chats?"</span>
                </>
              )}
              {storyStep === 3 && (
                <>
                  <span className="material-symbols-outlined text-primary text-xl animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
                  <span className="text-[10px] font-bold text-primary">"Zenzo: Web + Design + Automation!"</span>
                </>
              )}
            </div>

            {/* Little connection thought-dot pointers to Lottie guy's head */}
            <div className="absolute top-14 z-20 flex flex-col gap-[3px] items-center">
              <span className={`w-2 h-2 rounded-full bg-outline-variant/60 transition-all ${storyStep === 3 ? 'bg-primary/40' : ''}`}></span>
              <span className={`w-1 h-1 rounded-full bg-outline-variant/40 transition-all ${storyStep === 3 ? 'bg-primary/20' : ''}`}></span>
            </div>

            <DotLottieReact
              src="https://lottie.host/d6446dfa-e74e-41e2-b086-8cae8712dd1f/1IPtx7kHNk.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%', marginTop: '30px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
