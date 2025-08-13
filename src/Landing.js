import React from 'react';
import vid from './assets/Landing1.mp4';

import { motion } from 'framer-motion';
import { fadeIn } from './Varients';
const Landing = () => {
  
  return (
    <div data-scroll 
        data-scroll-section 
        data-scroll-speed="-.3" 
    className="relative w-100 h-screen overflow-hidden z-1">

      <motion.video variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }}
        className="w-[80%] mx-auto  my-20"
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


