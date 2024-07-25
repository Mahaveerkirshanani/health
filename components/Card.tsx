// components/ui/card.tsx

import { ReactNode } from 'react';
import { FaHospital, FaStethoscope, FaPills, FaUserMd } from 'react-icons/fa'; // Import icons

interface CardProps {
  className?: string;
  icon: JSX.Element; // Use JSX.Element for icons
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ className, icon, title, description }) => {
  return (
    <div className={`bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center ${className}`}>
      <div className="text-4xl mb-4 text-teal-500">
        {icon} {/* Display icon */}
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
    </div>
  );
};
