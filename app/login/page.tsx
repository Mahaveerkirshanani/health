"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle login logic here
    router.push('/dashboard'); // Redirect to a dashboard or homepage after login
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white flex items-center justify-center py-12 px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
        
        {/* Left Side: Welcome Section */}
        <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center p-12 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white relative z-10">Welcome Back!</h2>
          <p className="text-lg lg:text-xl text-gray-200 relative z-10">Login to access your account and manage your services seamlessly. We’re glad to see you again!</p>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-700 opacity-50"></div>
        </div>
        
        {/* Right Side: Login Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col items-center justify-center space-y-6">
          <div className="relative w-full max-w-md p-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg ring-1 ring-gray-900/5 backdrop-blur-lg">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Login to Your Account</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm lg:text-base text-white">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} className="bg-gray-700 border-gray-600 focus:ring-teal-500 focus:border-teal-500 transition-transform duration-300 ease-in-out shadow-sm rounded-lg text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm lg:text-base text-white">Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="********" {...field} className="bg-gray-700 border-gray-600 focus:ring-teal-500 focus:border-teal-500 transition-transform duration-300 ease-in-out shadow-sm rounded-lg text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 transition-transform duration-300 ease-in-out shadow-md rounded-lg">Login</Button>
              </form>
            </Form>
            <p className="text-center text-sm text-gray-100 mt-4">
              Don’t have an account? <Link href="/register" className="text-teal-300 hover:text-teal-400 hover:underline transition-transform duration-300 ease-in-out">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
