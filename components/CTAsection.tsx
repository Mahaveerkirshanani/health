// app/cta-section.tsx

"use client";

import Link from 'next/link';
import { FaClipboardList } from 'react-icons/fa';

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-purple-900 to-teal-700 text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl bg-gray-900 bg-opacity-70 rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center justify-between p-8 space-y-8 lg:space-y-0">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-300">
            Enhance Your Health Journey
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            Our detailed health assessment form is designed to help us understand your needs better. Complete it now to receive personalized care recommendations and stay proactive about your health.
          </p>
          <Link href="/patient-form" passHref className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              Fill Out the Form
          </Link>
        </div>

        {/* Right Side: Icon or Illustration */}
        <div className="flex-shrink-0 text-center">
          <FaClipboardList className="text-7xl mb-6 text-teal-300" />
          <p className="text-lg">
            <span className="font-bold text-teal-400">Simple & Quick</span> – Our form is designed to be completed swiftly and effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
