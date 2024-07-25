"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Confirm Password must be at least 6 characters.",
  }),
})

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const router = useRouter()

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Handle form submission logic here
    router.push('/login') // Redirect to login page after registration
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-800 text-white flex items-center justify-center py-12 px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-opacity-90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden">
        
        {/* Left Side: Welcome Section */}
        <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center p-12 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white">Welcome to Our Hospital</h2>
          <p className="text-lg lg:text-xl text-gray-300">We are committed to providing excellent medical care. Register now to access a range of healthcare services tailored just for you.</p>
        </div>
        
        {/* Right Side: Registration Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-6 text-white">Register</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm lg:text-base">Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your username" {...field} className="bg-gray-800 border-gray-600 focus:ring-teal-500 focus:border-teal-500 transition-transform duration-300 ease-in-out" />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm lg:text-base">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} className="bg-gray-800 border-gray-600 focus:ring-teal-500 focus:border-teal-500 transition-transform duration-300 ease-in-out" />
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
                    <FormLabel className="text-sm lg:text-base">Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} className="bg-gray-800 border-gray-600 focus:ring-teal-500 focus:border-teal-500 transition-transform duration-300 ease-in-out" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm lg:text-base">Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} className="bg-gray-800 border-gray-600 focus:ring-teal-500 focus:border-teal-500 transition-transform duration-300 ease-in-out" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 transition-transform duration-300 ease-in-out">Register</Button>
            </form>
          </Form>
          <p className="text-center text-sm text-gray-200 mt-4">
            Already have an account? <Link href="/login" className="text-teal-400 hover:text-teal-500 hover:underline transition-transform duration-300 ease-in-out">Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
