import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    businessType: 'Coaching Institute',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
      `Hi Zenzo Solutions,\n\nYou have received a new demo request with the following details:\n\n` +
      `Name: ${formData.name}\n` +
      `Business Name: ${formData.businessName}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Business Type: ${formData.businessType}\n` +
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
                  setFormData({ name: '', businessName: '', phone: '', businessType: 'Coaching Institute', message: '' });
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
                <label className="block font-label-md text-label-md mb-base">Business Type</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full border-outline-variant focus:border-primary focus:ring-primary rounded-lg bg-surface"
                >
                  <option>Coaching Institute</option>
                  <option>Retail/E-commerce</option>
                  <option>Healthcare</option>
                  <option>Service Business</option>
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
          <div className="mt-xl rounded-lg overflow-hidden h-48 border border-outline-variant grayscale brightness-110">
            <img
              alt="Hyderabad Cityscape Map"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnC_UtqtkP7eCCzuuCUPPJnvgjuvcohd5enSc2I-1joFEcQ3ZVIRg9Nhd-VtCpIv2iOAb57g3dkLNlVTh0Zg8iR2UjeSxUDslR5CO7tQDuuueXWMAS3E23Sbo8I4mkEBXU3AadZZMe3zwFLDh-32NFsqw8_XilWY4nSk8vBr8Nl0JJxFuMO6UCuvdoa174XGLK_iMjHJmCIw2VMSD7FuEG8aE_ZgFAlfc-4ugGTUedofoO5dwctmFlrl6RRy8CyUiXh5VuAhkLIu8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
