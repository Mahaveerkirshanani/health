"use client";

import { useState } from "react";
import FeedbackCard from "@/components/FeedbackCard";
import { Button } from "@/components/ui/button";

const feedbacks = [
  {
    id: 1,
    name: "John Doe",
    feedback: "Excellent service! The staff was very friendly and the facilities were top-notch.",
    rating: 5,
    image: "https://i.pinimg.com/236x/97/c0/dc/97c0dcaaef5334a51d386ed232c67f21.jpg", // Replace with actual image path
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Great experience overall. The doctors were very knowledgeable and attentive.",
    rating: 4,
    image: "https://i.pinimg.com/236x/86/98/c3/8698c30acd8753935ac97d79e88ae613.jpg", // Replace with actual image path
  },
  {
    id: 3,
    name: "Emily Johnson",
    feedback: "I appreciated the timely care and the cleanliness of the facility. Highly recommended!",
    rating: 5,
    image: "https://i.pinimg.com/236x/ca/82/1f/ca821ff208476fdad21bc3f3b0f6a6cc.jpg", // Replace with actual image path
  },
  {
    id: 4,
    name: "Michael Brown",
    feedback: "The service was okay, but there is room for improvement in customer service.",
    rating: 3,
    image: "https://i.pinimg.com/236x/97/39/5e/97395e774f335d862cef7fc0e9b22956.jpg", // Replace with actual image path
  },
];

const FeedbackSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length);
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 p-8 rounded-lg shadow-lg">
      {/* Navigation Buttons */}
      <div className="absolute inset-y-1/2 left-0 flex items-center z-20">
        <Button
          onClick={handlePrev}
          className="bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full"
        >
          &lt;
        </Button>
      </div>
      <div className="absolute inset-y-1/2 right-3 flex items-center z-20">
        <Button
          onClick={handleNext}
          className="bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full"
        >
          &gt;
        </Button>
      </div>

      {/* Feedback Card */}
      <FeedbackCard feedback={feedbacks[currentIndex]} />

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4">
        {feedbacks.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-yellow-400' : 'bg-gray-700'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSlider;
