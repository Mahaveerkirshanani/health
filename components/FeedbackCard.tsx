"use client";

import { FaStar } from "react-icons/fa"; // Using react-icons for star ratings

interface Feedback {
  id: number;
  name: string;
  feedback: string;
  rating: number;
  image: string;
}

const FeedbackCard = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="relative bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-800 text-white rounded-lg shadow-lg p-6 overflow-hidden flex flex-col items-center text-center">
      {/* Avatar */}
      <img
        src={feedback.image}
        alt={feedback.name}
        className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400 mb-4"
      />

      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(feedback.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-2xl" />
        ))}
      </div>

      {/* Feedback Text */}
      <p className="text-lg mb-4">{feedback.feedback}</p>

      {/* Name */}
      <h3 className="text-xl font-semibold">{feedback.name}</h3>

      {/* Dark Overlay for Extra Styling */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900 to-black opacity-50"></div>
    </div>
  );
};

export default FeedbackCard;
