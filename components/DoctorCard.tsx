"use client";

import { FaStar } from "react-icons/fa";

interface DoctorCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const DoctorCard = ({ name, role, bio, image }: DoctorCardProps) => (
  <div className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
    {/* Badge */}
    <div className="absolute top-4 left-4 bg-teal-500 text-white text-xs font-semibold uppercase rounded-full px-3 py-1">
      <span className="flex items-center">
        <FaStar className="mr-1" /> Dr.
      </span>
    </div>
    {/* Image */}
    <img src={image} alt={name} className="w-full h-48 object-cover bg-gray-700" />
    <div className="p-6">
      {/* Name and Role */}
      <h3 className="text-2xl font-bold text-yellow-400 mb-2">{name}</h3>
      <p className="text-teal-300 text-lg mb-4">{role}</p>
      {/* Bio */}
      <p className="text-gray-300 mb-4">{bio}</p>
      {/* Button */}
      <button className="bg-teal-600 text-white hover:bg-teal-500 py-2 px-4 rounded-md transition-colors duration-300">
        Book Appointment
      </button>
    </div>
  </div>
);

export default DoctorCard;
