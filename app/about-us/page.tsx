"use client";

import { FaHeart, FaHandHoldingMedical, FaStar, FaBuilding } from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import Image from 'next/image';

const doctors = [
  {
    name: "Dr. Alice Johnson",
    role: "Cardiologist",
    image: "https://i.pinimg.com/236x/b8/0f/4f/b80f4f83f5b9c6b66130bc901e92ba2f.jpg",
    bio: "Specializing in cardiovascular health with over 10 years of experience."
  },
  {
    name: "Dr. Bob Smith",
    role: "Neurologist",
    image: "https://i.pinimg.com/236x/4b/36/13/4b3613b9885a89c366ea7be3c47a8efb.jpg",
    bio: "Expert in neurological disorders with a focus on innovative treatments."
  },
  // Add more doctors as needed
];

const ceo = {
  name: "Dr. Emily Davis",
  title: "Chief Executive Officer",
  image: "/WhatsApp Image 2024-07-19 at 12.05.12_a4b17941.jpg",
  bio: "Dr. Emily Davis is a visionary leader with over 20 years of experience in the healthcare industry. Her dedication to improving patient care and her strategic vision have driven the growth and success of our organization.",
  achievements: [
    "Led the company to national recognition in healthcare excellence.",
    "Implemented innovative patient care programs that increased patient satisfaction by 30%.",
    "Spearheaded the development of cutting-edge healthcare technologies.",
  ],
  quote: "Success is not just about what we achieve, but how we inspire others to reach their full potential.",
};

const AboutUs = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Introduction Section */}
      <div className="py-20 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-lg mb-8">
            At Star Health, we are dedicated to providing top-notch healthcare services with compassion and expertise. Discover more about our team, values, and the history that makes us a leader in healthcare.
          </p>
        </div>
      </div>

      {/* Doctors Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8">Meet Our Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                <Image src={doctor.image} alt={doctor.name} width={400} height={300} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-lg text-teal-500 mb-4">{doctor.role}</p>
                  <p className="text-gray-700">{doctor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CEO Section */}
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <Image
              src={ceo.image}
              alt={ceo.name}
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-teal-500 text-white text-lg font-bold py-2 px-4 rounded">
              {ceo.title}
            </div>
          </div>
          <h2 className="text-3xl font-extrabold mt-8">{ceo.name}</h2>
          <p className="text-lg text-gray-700 mt-4">{ceo.bio}</p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
            <ul className="list-disc list-inside text-gray-700">
              {ceo.achievements.map((achievement, index) => (
                <li key={index} className="mb-2">{achievement}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mt-8 mx-auto max-w-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-teal-400">Inspirational Quote</h3>
            <p className="text-lg text-gray-300 italic">{ceo.quote}</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-r from-gray-800 to-gray-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <AiOutlineHome className="text-4xl mb-4 text-teal-400 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Our Address</h3>
              <p className="text-gray-300">123 Health Street, Wellness City, HC 45678</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <AiOutlinePhone className="text-4xl mb-4 text-teal-400 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 (234) 567-8900</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <AiOutlineMail className="text-4xl mb-4 text-teal-400 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">contact@starhealth.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50 text-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-teal-500 p-6 rounded-lg shadow-lg text-white">
              <FaHeart className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p>We provide care with empathy and understanding, prioritizing our patients' needs above all else.</p>
            </div>
            <div className="bg-teal-500 p-6 rounded-lg shadow-lg text-white">
              <FaHandHoldingMedical className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p>We strive for the highest quality in every aspect of our work, ensuring the best outcomes for our patients.</p>
            </div>
            <div className="bg-teal-500 p-6 rounded-lg shadow-lg text-white">
              <FaStar className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p>We operate with honesty and transparency, upholding the highest ethical standards in all our practices.</p>
            </div>
            <div className="bg-teal-500 p-6 rounded-lg shadow-lg text-white">
              <FaBuilding className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>We embrace new technologies and techniques to continuously improve our services and patient care.</p>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-20 bg-white text-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8">Our History</h2>
          <p className="text-lg text-gray-700">
            Founded in 1995, Star Health has grown from a small clinic into a leading healthcare facility. Our commitment to innovation and patient care has earned us a reputation for excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
