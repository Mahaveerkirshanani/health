"use client";

import { Button } from "@/components/ui/button";
import { FaHeartbeat } from 'react-icons/fa';

const MainDetails = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/images/main-background.jpg')" }}></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto text-center text-white z-10 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Welcome to Star Health
          <span className="block text-teal-300">Your trusted partner in healthcare.</span>
        </h2>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Discover our comprehensive range of services and facilities designed to meet your needs.
        </p>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
          <FaHeartbeat className="inline-block mr-2" />
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default MainDetails;
