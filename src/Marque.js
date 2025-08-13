import React from 'react';
import { Marquee } from "@devnomic/marquee";
// if you copy ala shadcn, no need import css.
import "@devnomic/marquee/dist/index.css";
import p1 from './assets/clients/p1.png'
import p2 from './assets/clients/p2.png'
import p3 from './assets/clients/p3.png'
import p4 from './assets/clients/p4.png'
import p5 from './assets/clients/p5.png'
import p6 from './assets/clients/p6.png'
import p7 from './assets/clients/p7.png'
import p8 from './assets/clients/p8.png'
import p9 from './assets/clients/pp.png'
import { motion } from 'framer-motion';
import { fadeIn } from './Varients';
const Marque = () => {

    return (
        <div>
            <motion.hr
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                            className="mx-3 border-t border-gray-700 max-w-6xl mx-auto mt-6   md:w-9/10 md:border-t md:border-gray-700 md:max-w-6xl md:mx-auto md:mt-6 " />
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="max-w-6xl mb-2 mx-auto  mx-3  text-sm flex justify-between items-center   md:max-w-6xl md:mx-auto md:mt-1  md:text-lg md:flex md:justify-between md:items-center">
                <span className="font-cormorant font-normal">Our Clients</span>
                <span>03</span>
            </motion.div>
            <Marquee fade={true} pauseOnHover={true} className='mb-10 mt-10'>
                <div><img className='h-48 w-48 space-x-8' src={p1} alt='client'/></div>
                <div><img className='h-50 w-50 space-x-8' src={p2} alt='client'/></div>
                <div><img className='h-50 w-50 space-x-8' src={p3} alt='client'/></div>
                <div><img className='h-48 w-48 space-x-8' src={p4} alt='client'/></div>
                <div><img className='h-50 w-50 space-x-8' src={p5} alt='client'/></div>
                <div><img className='h-50 w-50 space-x-8' src={p6} alt='client'/></div>
                <div><img className='h-48 w-48 space-x-8' src={p7} alt='client'/></div>
                <div><img className='h-48 w-48 space-x-8' src={p8} alt='client'/></div>
                <div><img className='h-50 w-50 space-x-8' src={p9} alt='client'/></div>
            </Marquee>
        </div>
    );
};
export default Marque;
