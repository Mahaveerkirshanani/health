"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link  from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="flex flex-col lg:flex-row justify-between mb-8">
          {/* Quick Links */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-teal-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-teal-300">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-300">Services</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-teal-300">Our Team</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-300">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-teal-400">Contact Info</h3>
            <p className="mb-2">
              <span className="font-semibold">Address:</span> Mithi @Tharparkar Sindh
            </p>
            <p className="mb-2">
              <span className="font-semibold">Phone:</span> +92 342 3915669
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span> kumarmahaveer486@gmail.com
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-300">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-300">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-300">
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-300">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mahaveer kumar . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
