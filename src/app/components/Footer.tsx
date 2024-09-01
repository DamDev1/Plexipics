import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-5">
        {/* Logo or Branding */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Plexi<span className='text-blue-600'>Pics</span></h1>
        </div>

        {/* Links */}
        <div className="mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <a href="#" className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} PlexiPics. All rights reserved.
      </div>
    </footer>
  );
}
