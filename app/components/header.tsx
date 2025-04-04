"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 shadow-lg" : "bg-gray-900"
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo with semantic h1 */}
          <h1 className="text-xl font-bold">
            <Link 
              href="/" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
              aria-label="Shankar Pradhan - Home"
            >
              Shankar Pradhan
            </Link>
          </h1>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex" aria-label="Desktop navigation">
            <ul className="flex space-x-6">
              {[
                ["Home", "/"],
                ["Projects", "/projects"],
                ["Skills", "/skills"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([title, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white hover:text-blue-300 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav 
            className="md:hidden mt-4 pb-4" 
            aria-label="Mobile navigation"
          >
            <ul className="space-y-2">
              {[
                ["Home", "/"],
                ["Projects", "/projects"],
                ["Skills", "/skills"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([title, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}