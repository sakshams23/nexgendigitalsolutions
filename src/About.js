import React from "react";
import img1 from "./assets/about.png";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from 'framer-motion';
import { fadeIn } from './Varients'
const About = () => {
  return (

    <div >
      <div
        className="w-full bg-[#FDFAF6] text-black ">
        <hr className="mx-3 border-t border-gray-700 max-w-6xl mx-auto mt-6   md:w-9/10 md:border-t md:border-gray-700 md:max-w-6xl md:mx-auto md:mt-6" />
        <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="max-w-6xl mb-2 mx-auto  mx-3  text-sm flex justify-between items-center   md:max-w-6xl md:mx-auto md:mt-1  md:text-lg md:flex md:justify-between md:items-center">
          <span className="font-cormorant font-normal">About Us</span>
          <span>01</span>
        </motion.div>
        <div className="px-8 md:px-20">

          <div className="sm:flex sm:flex-col  sm:max-w-7xl sm:mx-auto sm:gap-10 sm:items-center   md:flex md:flex-row  md:max-w-7xl md:mx-auto md:gap-10 md:items-center">
            {/* Image */}
            <div className="flex-1 flex justify-center">
              <motion.img variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }}
                src={img1}
                alt="about"
                className="mt-8 w-full max-w-lg object-contain md:w-full md:max-w-lg md:object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <motion.h3 variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-blue-800 text-xl font-normal mb-2  md:text-blue-800 md:text-2xl md:font-normal md:mb-2">
                WELCOME TO NEXGEN DIGITAL SOLUTIONS.
              </motion.h3>
              <motion.h3 variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-lg mb-2 font-normal  md:text-xl md:mb-4 md:font-normal">
                All-In-One Web & Marketing Solutions
              </motion.h3>
              <motion.p variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="leading-relaxed mb-3 text-sm  font-normal font-dosis text-justify  md:leading-relaxed md:mb-6 md:text-base md:font-normal md:font-dosis md:text-justify">
                We have experienced professional team of developers are there to
                fulfill your requirements of web design, web development and digital
                marketing. We provide services like Website Designing, Web
                Development, Web Redesigning, Mobile App Development, and Digital
                Marketing including SEO Services, SMO Services, PPC Services, Bulk
                Email Services, Bulk SMS Services, WhatsApp Marketing Services and
                various web services all over the world. Websites and Mobile App are
                turning into a daily need for increasing business in India. Various
                entrepreneurs and business man are showing interest in India.
              </motion.p>




              {/* Services List */}
              <div className="space-y-1 md:space-y-2 mb-8">
                {[
                  "Bulk SMS Services",
                  "Bulk Email Services",
                  "Whatsapp Business API Services",
                  "IVR Services",
                  "Voice Call Services",
                  "Digital Marketing Services",
                  "SEO Services",
                  "Transactional SMS Services",
                  "RCS Services",
                  "SMM Services",
                ].map((item, index) => (
                  <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} key={index} className="flex items-start">
                    <AiOutlineCheckCircle className="text-blue-800 mt-1 mr-2" />
                    <span className="font-normal font-dosis text-sm md:font-normal md:font-cornorant">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
