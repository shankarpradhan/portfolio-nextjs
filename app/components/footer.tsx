"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 shadow-lg scrollable bottom-0 left-0 z-50 p-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          
          {/* Left - Branding */}
          <div className="w-full md:w-1/3">
            <h2 className="text-gray-400 mt-2">Building digital experiences with modern web technologies.</h2>
          </div>

          {/* Middle - Quick Links */}
          {/* <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-gray-400 space-y-1">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
              <li><a href="/services" className="hover:text-blue-400">Services</a></li>
            </ul>
          </div> */}

          {/* Right - Social Media & Contact */}
          <div className="w-full md:w-1/3 text-blue-400">
            <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="https://www.facebook.com/profile.php?id=100040856986517" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-xl hover:text-blue-400" />
              </a>
              <a href="https://x.com/Shankar12426131" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl hover:text-blue-400" />
              </a>
              <a href="https://www.instagram.com/shankarpradhan811?igsh=ZzUwdHRtbm5wbTR2" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-blue-400" />
              </a>
              <a href="https://www.linkedin.com/in/shankar-pradhan-200354206/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} Shankar Pradhan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
