// app/patient-form.tsx

"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaAddressCard, FaNotesMedical } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

// Define the form schema using Zod
const formSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  dateOfBirth: z.string().min(1, "Date of Birth is required"),
  address: z.string().min(5, "Address is required"),
  medicalHistory: z.string().optional(),
  emergencyContactName: z.string().min(2, "Emergency Contact Name is required"),
  emergencyContactPhone: z.string().min(10, "Emergency Contact Phone is required"),
  insuranceProvider: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const PatientForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      address: '',
      medicalHistory: '',
      emergencyContactName: '',
      emergencyContactPhone: '',
      insuranceProvider: '',
    },
  });

  const router = useRouter();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission logic here
    router.push('/thank-you'); // Redirect or show a success message
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Patient Information Form
        </h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
              <FaUser className="text-teal-500 text-2xl" />
              <Input
                placeholder="Full Name"
                {...form.register('fullName')}
                className="bg-gray-50 border-gray-300 text-gray-700 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
              <FaEnvelope className="text-teal-500 text-2xl" />
              <Input
                type="email"
                placeholder="Email Address"
                {...form.register('email')}
                className="bg-gray-50 border-gray-300 text-gray-700 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
              <FaPhone className="text-teal-500 text-2xl" />
              <Input
                placeholder="Phone Number"
                {...form.register('phone')}
                className="bg-gray-50 border-gray-300 text-gray-700 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
              <FaCalendarAlt className="text-teal-500 text-2xl" />
              <Input
                type="date"
                placeholder="Date of Birth"
                {...form.register('dateOfBirth')}
                className="bg-gray-50 border-gray-300 text-gray-700 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
              <FaAddressCard className="text-teal-500 text-2xl" />
              <Input
                placeholder="Address"
                {...form.register('address')}
                className="bg-gray-50 border-gray-300 text-gray-700 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
              <FaNotesMedical className="text-teal-500 text-2xl" />
              <Input
                placeholder="Medical History"
                {...form.register('medicalHistory')}
                className="bg-gray-50 border-gray-300 text-gray-700 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
              <FaUser className="text-teal-500 text-2xl" />
              <Input
                placeholder="Emergency Contact Name"
                {...form.register('emergencyContactName')}
                className="bg-gray-50 border-gray-300 text-gray-700 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
              <FaPhone className="text-teal-500 text-2xl" />
              <Input
                placeholder="Emergency Contact Phone"
                {...form.register('emergencyContactPhone')}
                className="bg-gray-50 border-gray-300 text-gray-700 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
              <FaAddressCard className="text-teal-500 text-2xl" />
              <Input
                placeholder="Insurance Provider"
                {...form.register('insuranceProvider')}
                className="bg-gray-50 border-gray-300 text-gray-700 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white transition-transform duration-300 ease-in-out">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;
