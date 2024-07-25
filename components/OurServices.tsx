"use client";

import { ReactNode } from "react";
import { FaHeartbeat, FaStethoscope, FaProcedures, FaAmbulance } from "react-icons/fa";

interface Service {
  title: string;
  description: string;
  icon: ReactNode;
}

const services: Service[] = [
  {
    title: "Emergency Care",
    description: "24/7 emergency services with advanced facilities for immediate treatment.",
    icon: <FaAmbulance className="text-3xl text-yellow-400" />,
  },
  {
    title: "Consultations",
    description: "Expert consultations from top specialists in various medical fields.",
    icon: <FaStethoscope className="text-3xl text-teal-400" />,
  },
  {
    title: "Surgical Procedures",
    description: "State-of-the-art surgical facilities with experienced surgeons.",
    icon: <FaProcedures className="text-3xl text-indigo-400" />,
  },
  {
    title: "Cardiac Care",
    description: "Comprehensive cardiac care with cutting-edge technology and treatments.",
    icon: <FaHeartbeat className="text-3xl text-pink-400" />,
  },
];

const ServiceCard = ({ title, description, icon }: Service) => (
  <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
    <div className="flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const OurServices = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <p className="text-lg mb-12">
          We offer a range of medical services designed to cater to all your healthcare needs with excellence and care.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
