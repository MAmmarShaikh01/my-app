'use client';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import React, { useState } from 'react';

// Blue Contact Form Component
const ContactFormBlue: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative bg-blue-700 min-h-[500px] h-[60vh] py-16 px-4 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-32 w-40 h-40 rounded-full border-2 border-blue-500 opacity-30"></div>
      <div className="absolute bottom-32 left-16 w-32 h-32 rounded-full border-2 border-blue-500 opacity-30"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border-2 border-blue-500 opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full border-2 border-blue-400 opacity-25"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center w-full h-full justify-center gap-8 relative z-10">


<div 
  className="w-full lg:w-[40%] rounded-3xl p-6 shadow-2xl"
  style={{
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
  }}
>
  <h2 className="text-white text-2xl font-bold mb-3">
    Get in touch
  </h2>
  
  <div className="space-y-3">
    <div>
      <label className="text-white text-xs mb-1 block font-medium">
        Your name
      </label>
      <input
        type="text"
        name="name"
        placeholder="Full name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40"
      />
    </div>

    <div>
      <label className="text-white text-xs mb-1 block font-medium">
        Your email
      </label>
      <input
        type="email"
        name="email"
        placeholder="yourmail@email.com"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40"
      />
    </div>

    <div>
      <label className="text-white text-xs mb-1 block font-medium">
        How can we help?
      </label>
      <textarea
        name="message"
        placeholder="Enter your message here"
        value={formData.message}
        onChange={handleChange}
        rows={3}
        className="w-full px-4 py-2 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 resize-none"
      />
    </div>

    <button
      onClick={handleSubmit}
      className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-2.5 rounded-xl transition-colors duration-200 shadow-lg"
    >
      Send my message
    </button>
  </div>
</div>


        <div className="hidden lg:block w-16"></div>

        <div className="hidden lg:block w-full lg:w-[50%] relative">


<div
  className="bg-white rounded-3xl shadow-2xl w-[420px] h-[420px] ml-auto bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=450&fit=crop')"
  }}
>
  <div className="absolute -right-[-90%] top-20 z-50">
            <div className="bg-white rounded-full px-6 py-3 shadow-xl inline-block">
              <span className="text-blue-700 font-bold text-base whitespace-nowrap">Drop us a line</span>
            </div>

<svg
  width="150"
  className='absolute -left-19 z-30 '
  height="90"
  viewBox="0 0 545 218"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M89.987 164.946L106.911 128.877L0 169.389L103.625 217.692L89.203 179.922C91.321 179.942 93.438 179.981 95.558 179.981C258.009 179.981 419.579 119.889 542.191 13.1572C545.316 10.4382 545.644 5.70024 542.924 2.57624C540.203 -0.548758 535.464 -0.876752 532.343 1.84425C411.029 107.444 250.74 166.343 89.987 164.946Z"
    fill="#1E40AF"
  />
</svg>



          </div>

</div>


        </div>
      </div>
    </div>
  );
};

// White Contact Info Component
const ContactInfoWhite: React.FC = () => {
  const contactDetails = [
    {
      icon: '📧',
      label: 'Email',
      value: 'yourcompany@email.com'
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+1 (123) 456-7893'
    },
    {
      icon: '📠',
      label: 'Fax',
      value: '(123) 456-6782'
    },
    {
      icon: '📍',
      label: 'Address',
      value: 'US'
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-gray-700 text-2xl font-semibold text-center mb-10">
          Get in touch anytime
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((detail, index) => (
            <div key={index} className="text-center">
              <p className="text-gray-500 text-sm font-medium mb-3">{detail.label}</p>
              <div className="flex items-center justify-center gap-2 text-gray-800">
                <span className="text-xl">{detail.icon}</span>
                <span className="text-sm font-medium">{detail.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App Component combining both
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      <ContactFormBlue />
      <ContactInfoWhite />
      {/* <Footer /> */}
    </div>
  );
}