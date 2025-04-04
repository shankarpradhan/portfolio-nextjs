"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="w-full bg-gray-800 shadow-lg bottom-0 left-0 z-50 p-4"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          
          {/* Left - Branding with Schema */}
          <div className="w-full md:w-1/3" itemScope itemType="https://schema.org/Person">
            <h2 className="text-gray-400 mt-2" itemProp="description">
              Building digital experiences with modern web technologies.
            </h2>
            <meta itemProp="name" content="Shankar Pradhan" />
            <meta itemProp="jobTitle" content="MERN Stack Developer" />
          </div>

          {/* Right - Social Media with enhanced accessibility */}
          <div className="w-full md:w-1/3 text-blue-400">
            <h3 className="text-lg font-semibold mb-2">Connect With Me</h3>
            <div 
              className="flex justify-center md:justify-start space-x-6 mt-2"
              aria-label="Social media links"
            >
              <a 
                href="https://www.facebook.com/profile.php?id=100040856986517" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook profile"
                className="hover:text-blue-300 transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a 
                href="https://x.com/Shankar12426131" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter profile"
                className="hover:text-blue-300 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a 
                href="https://www.instagram.com/shankarpradhan811" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="hover:text-blue-300 transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shankar-pradhan-200354206/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="hover:text-blue-300 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div 
          className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4"
          itemScope
          itemType="https://schema.org/CreativeWork"
        >
          <p itemProp="copyrightYear">{currentYear} &copy; <span itemProp="copyrightHolder">Shankar Pradhan</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}