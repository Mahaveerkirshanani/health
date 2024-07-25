"use client";

import { FaHospital, FaAmbulance, FaSyringe, FaBed } from "react-icons/fa";

const facilities = [
  {
    name: "State-of-the-Art Hospital",
    description: "Equipped with the latest medical technology and facilities to provide the highest standard of care.",
    icon: <FaHospital className="text-6xl text-teal-600" />,
    backgroundColor: "bg-teal-100",
    textColor: "text-teal-900"
  },
  {
    name: "24/7 Emergency Services",
    description: "Our emergency services are available round the clock to handle any urgent medical situation.",
    icon: <FaAmbulance className="text-6xl text-red-600" />,
    backgroundColor: "bg-red-100",
    textColor: "text-red-900"
  },
  {
    name: "Advanced Medical Equipment",
    description: "We use cutting-edge equipment to ensure accurate diagnoses and effective treatments.",
    icon: <FaSyringe className="text-6xl text-blue-600" />,
    backgroundColor: "bg-blue-100",
    textColor: "text-blue-900"
  },
  {
    name: "Comfortable Patient Rooms",
    description: "Our patient rooms are designed for comfort and privacy, ensuring a pleasant stay during your recovery.",
    icon: <FaBed className="text-6xl text-purple-600" />,
    backgroundColor: "bg-purple-100",
    textColor: "text-purple-900"
  },
];

const FacilityCard = ({ name, description, icon, backgroundColor, textColor }: any) => (
  <div className={`p-8 rounded-lg shadow-lg ${backgroundColor} text-center`}>
    <div className={`flex justify-center mb-4 ${textColor}`}>
      {icon}
    </div>
    <h3 className={`text-2xl font-bold mb-2 ${textColor}`}>{name}</h3>
    <p className={`text-lg ${textColor}`}>{description}</p>
  </div>
);

const OurFacilities = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-orange-400">Our Facilities</h2>
        <p className="text-lg mb-12 text-gray-300">
          We are committed to providing top-notch facilities to ensure the best care for our patients. Discover what we offer below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard
              key={index}
              name={facility.name}
              description={facility.description}
              icon={facility.icon}
              backgroundColor={facility.backgroundColor}
              textColor={facility.textColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFacilities;
