"use client";

import { FaBriefcaseMedical } from "react-icons/fa";

interface Doctor {
  name: string;
  specialty: string;
  bio: string;
  image: string;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Alice Johnson",
    specialty: "Cardiologist",
    bio: "Specialized in cardiovascular health with over 10 years of experience.",
    image: "https://i.pinimg.com/236x/b8/0f/4f/b80f4f83f5b9c6b66130bc901e92ba2f.jpg",
  },
  {
    name: "Dr. Bob Smith",
    specialty: "Neurologist",
    bio: "Expert in neurological disorders with a focus on innovative treatments.",
    image: "https://i.pinimg.com/236x/4b/36/13/4b3613b9885a89c366ea7be3c47a8efb.jpg",
  },
  {
    name: "Dr. Carol White",
    specialty: "Pediatrician",
    bio: "Dedicated to providing exceptional care for children of all ages.",
    image: "https://i.pinimg.com/236x/70/3c/04/703c042b1a1ca64767b4838b59452b6e.jpg",
  },
  {
    name: "Dr. David Brown",
    specialty: "Orthopedic Surgeon",
    bio: "Experienced in diagnosing and treating musculoskeletal issues.",
    image: "https://i.pinimg.com/236x/29/b7/aa/29b7aa2f4b76cbf07fb75d9de692b5ec.jpg",
  },
];

const DoctorCard = ({ name, specialty, bio, image }: Doctor) => (
  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex items-center mb-4">
        <FaBriefcaseMedical className="text-2xl text-teal-200 mr-2" />
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <p className="text-lg font-semibold text-teal-200 mb-2">{specialty}</p>
      <p className="text-gray-100">{bio}</p>
    </div>
  </div>
);

const Doctors = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-teal-300">Meet Our Doctors</h2>
        <p className="text-lg mb-12 text-gray-300">
          Our experienced and dedicated team of medical professionals is here to provide top-notch care.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              specialty={doctor.specialty}
              bio={doctor.bio}
              image={doctor.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
