import React, { useState } from "react";
import logo from "./assets/Logo.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed bg-[#FDFAF6] top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-6 shadow-sm">
      {/* Logo Left */}
      <div className="flex-shrink-0">
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="h-10 md:h-[5vw] -mt-1 md:-mt-4 md:-mb-4"
          />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {/* Menu */}
        <ul className="flex space-x-7 text-lg md:text-[1.3vw] font-medium font-dosis tracking-wide">
          <li>
            <a
              href="/"
              className="text-black hover:opacity-60 transition-opacity duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="services"
              className="text-black hover:opacity-60 transition-opacity duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-black hover:opacity-60 transition-opacity duration-300"
            >
              Contacts
            </a>
          </li>
        </ul>

        {/* Button */}
        <button
          type="button"
          className="font-medium font-dosis tracking-wide text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 rounded-3xl text-sm md:text-[1.1vw] px-4 py-2"
          
        >
          <a href="/contact">Book your Appointment</a>
        </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#FDFAF6] flex flex-col items-center space-y-4 py-6 shadow-md md:hidden">
          <a
            href="/"
            className="text-black hover:opacity-60 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="services"
            className="text-black hover:opacity-60 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-black hover:opacity-60 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contacts
          </a>

          <button
            type="button"
            className="font-medium font-dosis tracking-wide text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 rounded-3xl text-sm px-4 py-2"
            onClick={() => setIsOpen(false)}
          >
            Book your Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
