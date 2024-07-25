"use client"

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white flex items-center justify-center py-12 px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-500 rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
        
        {/* Left Side: Hero Section */}
        <div className="w-full lg:w-1/2 p-12 flex flex-col items-start justify-center space-y-6 bg-gradient-to-r from-indigo-800 via-indigo-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 relative z-10">Welcome to Our Hospital</h1>
          <p className="text-lg lg:text-xl text-gray-200 relative z-10">
            Discover the highest quality healthcare with our dedicated services. Your health is our top priority.
          </p>
          <div className="relative z-10">
            <Button onClick={() => router.push('/services')} className="bg-teal-500 hover:bg-teal-600 transition-transform duration-300 ease-in-out shadow-lg rounded-lg">Explore Services</Button>
          </div>
        </div>
        
        {/* Right Side: Features & Form Call-to-Action Section */}
        <div className="w-full lg:w-1/2 p-12 flex flex-col items-start justify-center space-y-6 bg-gray-800 relative rounded-lg">
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Our Features</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 6h18M3 14h18M3 18h18"></path></svg>
                <span className="text-lg text-gray-300">24/7 Medical Support</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                <span className="text-lg text-gray-300">Comprehensive Health Services</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4.5a1.5 1.5 0 01-3 0V8h-2v10h2v-4.5a1.5 1.5 0 013 0V18h2V8h-2z"></path></svg>
                <span className="text-lg text-gray-300">Expert Medical Staff</span>
              </li>
            </ul>
          </div>
          <div className="mt-12 p-8 bg-gradient-to-r from-teal-500 via-teal-400 to-teal-300 rounded-lg shadow-lg">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Check Your Health Today!</h2>
            <p className="text-gray-100 mb-6">Fill out our quick and easy health assessment form to get personalized recommendations and improve your well-being.</p>
            <Button onClick={() => router.push('/health-assistant')} className="bg-white text-teal-600 hover:bg-gray-200 transition-transform duration-300 ease-in-out shadow-md">Start Health Assessment</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
