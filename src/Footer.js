import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaLinkedin , FaFacebookF} from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from './Varients'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / CTA */}
        <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="space-y-4">
          <h3 className="text-2xl font-bebas tracking-wide text-white">Nexgen Digital Solutions</h3>
          <p className="text-sm text-gray-300 max-w-sm">
            Digital services & marketing solutions — design, development, and growth strategies that actually move the needle.
          </p>
          <a
            href="/contact"
            className="inline-block mt-2 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
            aria-label="Contact us"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Links */}
        <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="flex flex-col md:items-start">
          <h4 className="text-lg font-medium text-white mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/apiwhatsapp" className="hover:text-white">WhatsApp API Services</a></li>
            <li><a href="/digitalmarketing" className="hover:text-white">Digital Marketing</a></li>
            <li><a href="/seo" className="hover:text-white">SEO Services</a></li>
            <li><a href="/bulkemail" className="hover:text-white">Bulk Email Services</a></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="space-y-3">
          <h4 className="text-lg font-medium text-white">Contact</h4>
          <div className="flex items-center text-sm text-gray-300 space-x-3">
            <FaPhoneAlt className="text-sm" />
            <a href="tel:+917042609078" className="hover:text-white">+91 7042609078</a>
          </div>

          <div className="flex items-center text-sm text-gray-300 space-x-3">
            <FaEnvelope className="text-sm" />
            <a href="mailto:abhishek@nexgendigitalsolution.com" className="hover:text-white">abhishek@nexgendigitalsolution.com</a>
          </div>

          <div className="flex items-center text-sm text-gray-300 space-x-3">
            <FaMapMarkerAlt className="text-sm" />
            <span>Office address - B-143, Mansaram Park, Nawada , New Delhi-110059</span>
            
          </div>
          <div className="flex items-center text-sm text-gray-300 space-x-3">
            <FaMapMarkerAlt className="text-xl" />
            <span>Registered address -  321, Pragati Appartment, Punjabi Bagh Road, Paschim Vihar, West Delhi, Delhi-110063</span>
            
          </div>
          <div className="flex items-center space-x-3 mt-4">
            <a href="https://www.facebook.com/NexgenDigitalSolutions" aria-label="Facebook" className="p-2 rounded-full hover:bg-gray-800">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/nexgen.digital.solutions/" aria-label="Instagram" className="p-2 rounded-full hover:bg-gray-800">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/78472269/admin/page-posts/published/" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-gray-800">
              <FaLinkedin />
            </a>
            <a href="https://x.com/nexgendigsol" aria-label="X.com" className="p-2 rounded-full hover:bg-gray-800">
              <FaTwitter />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6">
        <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Nexgen Digital Solutions. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="/terms" className="hover:text-gray-300">Terms and Conditions.</a>
           <a href="/privacy" className="hover:text-gray-300">Privacy and Policy.</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;







