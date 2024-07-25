// app/health-assistant.tsx

"use client";

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { BiChat } from "react-icons/bi";
import { FaCog, FaHandHoldingMedical, FaHeart, FaInfoCircle } from "react-icons/fa";

const HealthAssistant = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Your Health Assistant
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Health Tips Section */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center space-y-4">
            <FaHeart className="text-red-500 text-4xl" />
            <h2 className="text-xl font-semibold text-gray-800">Health Tips</h2>
            <p className="text-gray-600 text-center">
              Get personalized health tips and advice tailored to your needs. Stay informed and take control of your health with our expert guidance.
            </p>
            <Link href="/health-tips">
              <Button className="bg-red-500 hover:bg-red-600 text-white">Explore Tips</Button>
            </Link>
          </div>
          {/* Medical Assistance Section */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center space-y-4">
            <FaHandHoldingMedical className="text-teal-500 text-4xl" />
            <h2 className="text-xl font-semibold text-gray-800">Medical Assistance</h2>
            <p className="text-gray-600 text-center">
              Access medical assistance and support from our certified professionals. Whether it's for a consultation or urgent care, we're here to help.
            </p>
            <Link href="/medical-assistance">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white">Get Assistance</Button>
            </Link>
          </div>
          {/* Health Info Section */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center space-y-4">
            <FaInfoCircle className="text-blue-500 text-4xl" />
            <h2 className="text-xl font-semibold text-gray-800">Health Information</h2>
            <p className="text-gray-600 text-center">
              Learn more about various health conditions, treatments, and wellness practices. Empower yourself with knowledge and make informed decisions.
            </p>
            <Link href="/health-info">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">Learn More</Button>
            </Link>
          </div>
          {/* Chat with Us Section */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center space-y-4">
            <BiChat className="text-purple-500 text-4xl" />
            <h2 className="text-xl font-semibold text-gray-800">Chat with Us</h2>
            <p className="text-gray-600 text-center">
              Have questions or need immediate help? Chat with our support team to get real-time assistance and answers to your queries.
            </p>
            <Link href="/chat">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white">Start Chat</Button>
            </Link>
          </div>
          {/* Settings Section */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center space-y-4">
            <FaCog className="text-green-500 text-4xl" />
            <h2 className="text-xl font-semibold text-gray-800">Settings</h2>
            <p className="text-gray-600 text-center">
              Customize your experience and manage your preferences. Adjust settings to ensure the best possible interaction with our services.
            </p>
            <Link href="/settings">
              <Button className="bg-green-500 hover:bg-green-600 text-white">Adjust Settings</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthAssistant;
