"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-800 shadow-lg fixed top-0 left-0 z-50 p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-blue-400">Shankar Pradhan</h1>
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-white">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link> {/* Added Skills Page Link */}
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 bg-gray-900 p-4 mt-2 text-white text-center rounded-lg">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/skills" onClick={() => setIsOpen(false)}>Skills</Link> {/* Added Skills Page Link */}
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
        </nav>
      )}
    </header>
  );
}
