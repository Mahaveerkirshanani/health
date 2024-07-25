// app/explore-services/page.tsx

"use client";

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { FaHospital, FaStethoscope, FaPills, FaUserMd } from 'react-icons/fa';
import { Card } from '@/components/Card';
import CTASection from '@/components/CTAsection';

const services = [
  {
    title: "Emergency Care",
    description: "24/7 emergency medical services for urgent and critical care.",
    icon: <FaHospital /> // Use React icons
  },
  {
    title: "General Medicine",
    description: "Comprehensive general health check-ups and treatment plans.",
    icon: <FaStethoscope />
  },
  {
    title: "Pediatrics",
    description: "Expert care and treatment for infants, children, and adolescents.",
    icon: <FaUserMd />
  },
  {
    title: "Orthopedics",
    description: "Diagnosis and treatment of bone, joint, and muscle conditions.",
    icon: <FaPills />
  }
];

const ExploreServices = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-6xl bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-500 rounded-lg shadow-2xl overflow-hidden">
        
        {/* Header Section */}
        <div className="p-12 bg-gradient-to-r from-indigo-800 via-indigo-600 to-purple-600 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 relative z-10">Our Services</h1>
          <p className="text-lg lg:text-xl text-gray-200 relative z-10">
            Explore the comprehensive range of medical services we offer to meet all your healthcare needs.
          </p>
        </div>

        {/* Services List */}
        <div className="p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} 
                  icon={service.icon} 
                  title={service.title} 
                  description={service.description}
                  className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            </Card>
          ))}
        </div>
        <CTASection />
      </div>
    </div>
  );
}

export default ExploreServices;
