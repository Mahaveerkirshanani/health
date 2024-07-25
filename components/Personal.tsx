"use client";

import Image from "next/image";
import { FaTrophy, FaQuoteLeft } from "react-icons/fa";

const ceo = {
  name: "Sr. Mahaveer kumar ",
  title: "Chief Executive Officer",
  image: "/WhatsApp Image 2024-07-19 at 12.05.12_a4b17941.jpg",
  bio: "Sr. Mahaveer kumar is a visionary leader with over 20 years of experience in the healthcare industry. Her dedication to improving patient care and her strategic vision have driven the growth and success of our organization.",
  achievements: [
    "Led the company to national recognition in healthcare excellence.",
    "Implemented innovative patient care programs that increased patient satisfaction by 30%.",
    "Spearheaded the development of cutting-edge healthcare technologies.",
  ],
  quote: "Success is not just about what we achieve, but how we inspire others to reach their full potential.",
};

const CEOPage = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="container mx-auto text-center">
        {/* CEO Photo and Title */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center mb-12">
          <div className="relative w-full max-w-sm lg:max-w-md mx-auto mb-8 lg:mb-0 lg:mr-8">
          <Image
              src={ceo.image}
              alt={ceo.name}
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg font-bold py-2 px-4 rounded-tr-lg">
              {ceo.title}
            </div>
          </div>
          <div className="text-center lg:text-left lg:ml-8">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              {ceo.name}
            </h1>
            <p className="text-lg text-gray-300 mb-6">{ceo.bio}</p>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
            Achievements
          </h2>
          <ul className="list-disc list-inside text-gray-300">
            {ceo.achievements.map((achievement, index) => (
              <li key={index} className="mb-3 flex items-center">
                <FaTrophy className="text-teal-400 mr-3" /> {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Quote */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg mx-auto max-w-2xl">
          <FaQuoteLeft className="text-pink-500 text-5xl mb-4" />
          <p className="text-lg text-gray-200 italic">{ceo.quote}</p>
        </div>
      </div>
    </section>
  );
};

export default CEOPage;
