import React from 'react';
import vid from './assets/Landing1.mp4';

import { motion } from 'framer-motion';
import { fadeIn } from './Varients';
const Landing = () => {
  
  return (
    <div data-scroll 
        data-scroll-section 
        data-scroll-speed="-.3" 
    className="md:relative md:w-100 md:h-screen md:overflow-hidden md:z-1   relative w-100 h-100 overflow-hidden z-1">

      <motion.video variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }}
        className="w-[90%] mt-20 mx-auto md:w-[80%] md:mx-auto  md:my-20"
        src={vid}
        autoPlay
        muted
        loop={true}
        playsInline
      />
          </div>

  );
};
export default Landing;
