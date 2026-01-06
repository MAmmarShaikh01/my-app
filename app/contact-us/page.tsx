"use client";

import React, { useState } from "react";

// Blue Contact Form Component
const ContactFormBlue: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative bg-blue-700 min-h-[500px] py-16 px-4 overflow-hidden">


      <div className="absolute top-20 right-32 w-40 h-40 rounded-full border-2 border-blue-500 opacity-30"></div>
      <div className="absolute bottom-32 left-16 w-32 h-32 rounded-full border-2 border-blue-500 opacity-30"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border-2 border-blue-500 opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full border-2 border-blue-400 opacity-25"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 relative z-10">


        <div
          className="w-full lg:w-[45%] rounded-3xl p-8 shadow-2xl"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          }}>
          <h2 className="text-white text-3xl font-bold mb-6">Get in touch</h2>

          <div className="space-y-4">
            <div>
              <label className="text-white text-sm mb-2 block font-medium">
                Your name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
                suppressHydrationWarning
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
            </div>

            <div>
              <label className="text-white text-sm mb-2 block font-medium">
                Your email
              </label>
              <input
                type="email"
                name="email"
                placeholder="yourmail@email.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                suppressHydrationWarning
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
            </div>

            <div>
              <label className="text-white text-sm mb-2 block font-medium">
                How can we help?
              </label>
              <textarea
                name="message"
                placeholder="Enter your message here"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                autoComplete="off"
                suppressHydrationWarning
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              suppressHydrationWarning
              className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 shadow-lg">
              Send my message
            </button>
          </div>
        </div>

        <div className="hidden lg:block w-full lg:w-[50%] relative">
          <div className="absolute -left-24 top-12 z-20">
            <div className="relative">
              <div className="bg-white rounded-full px-6 py-3 shadow-xl">
                <span className="text-blue-700 font-semibold text-sm">
                  Drop us a line
                </span>
              </div>

              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-[12px] border-r-white"></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=450&fit=crop"
              alt="Customer service representative"
              className="w-full h-[450px] object-cover"
            />
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
      icon: "📧",
      label: "Email",
      value: "yourcompany@email.com",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+1 (123) 456-7893",
    },
    {
      icon: "📠",
      label: "Fax",
      value: "(123) 456-6782",
    },
    {
      icon: "📍",
      label: "Address",
      value: "US",
    },
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
              <p className="text-gray-500 text-sm font-medium mb-3">
                {detail.label}
              </p>
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
      <ContactFormBlue />
      <ContactInfoWhite />
    </div>
  );
}
