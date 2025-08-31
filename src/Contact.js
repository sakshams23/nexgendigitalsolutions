import React from "react";
import {
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="max-w-[1100px] mx-auto my-20 p-5 bg-[#FDFAF6] ">
      <h1 className="text-center text-4xl font-bold mb-8 font-cornorant">Contact Us</h1>

      <div className="flex flex-wrap gap-8 bg-[#FDFAF6]">
        {/* Left Section - Contact Info & Socials (was right) */}
        <div className="flex-1 min-w-[280px] max-w-[450px] flex flex-col gap-6">
          {/* Contact Info Box */}
          <div className="bg-[#FDFAF6] p-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-5 font-cornorant">GET IN TOUCH</h2>

            <div className="flex items-center gap-4 mb-4">
              <FaEnvelope className="text-[#16d0d8] text-lg flex-shrink-0" />
              <div>
                <h4 className="text-base font-medium">Email Address</h4>
                <p className="text-sm mt-1">abhishek@nexgendigitalsolution.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <FaPhoneAlt className="text-[#16d0d8] text-lg flex-shrink-0" />
              <div>
                <h4 className="text-base font-medium">Phone</h4>
                <p className="text-sm mt-1">+91 7042609078</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaHome className="text-[#16d0d8] text-lg flex-shrink-0" />
              <div>
                <h4 className="text-base font-medium">Address</h4>
                <p className="text-sm mt-1">
                  Registered address -  321, Pragati Appartment, Punjabi Bagh Road, Paschim Vihar, West Delhi, Delhi-110063
                </p>
              </div>
            </div>
          <div className="flex items-center gap-4">
              <FaHome className="text-[#16d0d8] text-lg flex-shrink-0" />
              <div>
                <h4 className="text-base font-medium">Address</h4>
                <p className="text-sm mt-1">
                  Office address - B-143, Mansaram Park, Nawada , New Delhi-110059
                </p>
              </div>
            </div>
          </div>
          {/* Social Media Box */}
          <div className="bg-[#FDFAF6] p-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-5">FOLLOW US</h2>
            <div className="flex gap-6 text-2xl text-gray-700">
              <a
                href="https://www.facebook.com/NexgenDigitalSolutions"
                className="hover:text-[#16d0d8] transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/nexgen.digital.solutions/"
                className="hover:text-[#16d0d8] transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/78472269/admin/page-posts/published/"
                className="hover:text-[#16d0d8] transition-colors duration-300"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/nexgendigsol"
                className="hover:text-[#16d0d8] transition-colors duration-300"
                aria-label="X.com"
              >
                <FaTwitter/>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Message Form (was left) */}
        <div className="flex-1 min-w-[280px] max-w-[600px]">
          <div className="bg-[#FDFAF6] p-6 rounded-lg h-full">
            <h2 className="text-2xl font-semibold mb-5">Send Us a Message</h2>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16d0d8]"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16d0d8]"
              />
              <input
                type="number"
                placeholder="Your Number"
                required
                className="p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16d0d8]"
              />
              <textarea
                placeholder="Your Message"
                required
                className="p-3 mb-4 border border-gray-300 rounded-md min-h-[150px] resize-none focus:outline-none focus:ring-2 focus:ring-[#16d0d8]"
              />
              <button
                type="button"
                className="font-medium font-dosis tracking-wide text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 rounded-3xl text-sm md:text-[1.1vw] px-4 py-2"

              >
                <a href="/contact">Submit</a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

