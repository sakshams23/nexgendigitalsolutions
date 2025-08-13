import React from 'react';
import img1 from './assets/services.jpg'
import ser1 from './assets/1.png'
import ser2 from './assets/2.png'
import ser3 from './assets/3.png'
import ser4 from './assets/4.png'
import ser5 from './assets/5.png'
import ser6 from './assets/6.png'
import ser7 from './assets/7.png'
import ser10 from './assets/10.png'
import ser11 from './assets/11.png'
import ser12 from './assets/12.png'
import { motion } from 'framer-motion';
import { fadeIn } from './Varients'
const services = [
    
    {
        name: "SMS Services",
        description: "Reach your audience instantly with our high-speed, reliable bulk SMS solutions. Whether it’s for promotions, alerts, reminders, or updates, we help you deliver your message directly to your customers’ phones with maximum impact.",
        page: "bulksms",
        image: ser4,
    },
    {
        name: "RCS Services",
        description: "RCS (Rich Communication Services) is the next generation of SMS that brings rich, interactive, and branded experiences to users—directly in their phone's default messaging app (like Google Messages).",
        page: "rcsservices",
        image: ser2,
    },
    {
        name: "Business WhatsApp API",
        description: "The WhatsApp Business API Services is designed for medium and large businesses to communicate with their customers at scale using automated, secure, and verified messaging on WhatsApp.",
        page: "apiwhatsapp",
        image: ser6,
    },
    {
        name: "Email Services",
        description: "Email services refer to professional platforms or tools used to send bulk emails, transactional alerts, promotions, reminders, newsletters, and automated sequences for marketing, engagement, or customer support.",
        page: "bulkemail",
        image: ser7,
    },
    {
        name: "Digital Marketing Services",
        description: "We help you craft and execute a result-driven digital marketing strategy tailored to your unique business goals. Our approach combines the latest industry trends, advanced tools, and in-depth analytics to maximize your online presence.",
        page: "digitalmarketing",
        image: ser12,
    },
    {
        name: "SEO Services",
        description: "At Nexgen Digital Solutions, our expert SEO services are designed to boost your website’s visibility, attract high-quality traffic, and increase conversions — all through proven, white-hat techniques that align with Google’s algorithms.",
        page: "seo",
        image: ser5,
    },

    {
        name: "Voice Call Services",
        description: "At Nexgen Digital Solutions, our Voice Call Services help businesses communicate instantly and effectively with their customers through automated pre-recorded voice messages in any regional language.",
        page: "voicebrodcasting",
        image: ser11,
    },
    {
        name: "IVR Services",
        description: "IVR (Interactive Voice Response) is a cloud-based telephony system that interacts with callers using voice menus and keypad input. It helps businesses manage incoming calls and deliver a personalized caller experience.",
        page: "ivr",
        image: ser10,
    },
    
    
];



const ServicesOnly = () => {
    return (
        <section className="bg-[#FDFAF6] text-black ">

            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }}>
                <img src={img1} alt="Services" className="w-full my-8 px-4 max-w-6xl mx-auto md:w-full md:my-16 md:max-w-6xl md:mx-auto "></img>
            </motion.div>

            <hr className=" mx-3 border-t border-gray-700 max-w-6xl mx-auto mt-6   md:w-9/10 md:border-t md:border-gray-700 md:max-w-6xl md:mx-auto md:mt-6" />
            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="max-w-6xl mx-auto  mx-3  text-sm flex justify-between items-center   md:max-w-6xl md:mx-auto md:mt-1  md:text-lg md:flex md:justify-between md:items-center">
                <span className="font-cormorant font-normal">Our Services</span>
                <span>02</span>
            </motion.div>
            <div>
                <div className="px-8 max-w-5xl mx-auto text-center md:max-w-5xl md:mx-auto md:text-center">
                    <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-xl md:text-5xl font-cormorant font-medium  mb-1   md:font-cormorant md:font-medium  md:mb-1">
                        We don’t just offer solutions
                    </motion.h2>
                    <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-xl md:text-5xl font-cormorant font-medium mb-4 md:font-cormorant md:font-medium md:mb-4">
                        We help shape your brand’s future.
                    </motion.h2>
                    <motion.h3 variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-sm font-dosis font-normal mb-20 max-w-3xl mx-auto md:text-lg md:font-dosis md:font-normal md:mb-20 md:max-w-3xl md:mx-auto">
                        Our work goes beyond fixing surface-level problems. We dig deeper to align your business with its core purpose, closing the “walk the talk” gap that often leads to lost trust, poor engagement, and stalled growth.
                    </motion.h3>

                </div>
            </div>
            <div className="px-10 grid grid-cols-1 md:px-1 md:grid-cols-3 md:gap-16 md:max-w-5xl md:mx-auto">
                {services.map((service, index) => (
                    <div key={index} className="mb-6">
                        <motion.img variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }}
                            src={service.image}
                            alt={service.name}
                            loading="lazy"
                            className="w-50 h-50 object-cover rounded-xl shadow-md mb-4"
                        />
                        <motion.h3 variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-lg font-cormorant font-medium my-1 -mb-2 md:text-xl md:font-cormorant md:font-medium md:my-2">
                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </motion.h3>
                        <motion.h4 variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-lg font-cormorant font-medium my-1 md:text-xl md:font-cormorant md:font-medium md:my-2">
                            {service.name}
                        </motion.h4>
                        <motion.p variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-gray-900 mt-1 text-sm font-dosis text-justify  md:text-gray-900 md:mt-2 md:text-base md:font-dosis md:text-justify">
                            {service.description}
                        </motion.p>
                        <motion.button variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }}
                            type="button"
                            className="font-medium font-cormorant text-base my-5 tracking-wide text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 rounded-3xl text-[1.1vw] px-3 py-1 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                        >
                            <a
                                href={service.page}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                INQUIRE NOW
                            </a>
                        </motion.button>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default ServicesOnly;


