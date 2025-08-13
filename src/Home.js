import React from 'react';
import Landing from './Landing';
import About from './About';
import ServicesOnly from './ServicesOnly';
import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { fadeIn } from './Varients'
const faqs = [
    {
        question: "1. What services do you offer?",
        answer:
            "We offer a complete range of digital solutions, including Website Design & Development, Mobile App Development, Digital Marketing (SEO, SMO, PPC), Bulk SMS & Email Services, WhatsApp Marketing, IVR & Voice Broadcasting, and more.",
    },
    {
        question: "2. Do you provide ongoing support and maintenance?",
        answer:
            "Yes, we offer ongoing support and maintenance packages to ensure your website, app, or marketing campaign continues running smoothly and efficiently after launch.",
    },
    {
        question: "3. Can you help with SEO and getting my website ranked?",
        answer:
            "Yes, our SEO experts use proven strategies to help improve your search engine visibility and drive organic traffic to your website.",
    },
    {
        question: "4. How do bulk SMS, email, or WhatsApp marketing services work?",
        answer:
            "We provide easy-to-use platforms and API integrations to send bulk SMS, emails, and WhatsApp messages to your audience. These tools are great for promotions, alerts, or customer engagement at scale.",
    },
    {
        question: "5. How do I get started?",
        answer:
            "You can get started by contacting us through our website or filling out the inquiry form. We’ll schedule a consultation to understand your goals and propose the best solution.",
    },
];
const Home = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (

        <div className="">
            <Landing />
            <div data-scroll data-scroll-section data-scroll-speed="-.1.5"
                className="hidden md:block relative bg-gray-900 text-gray-200 my-20 rounded-t-3xl text-9xl border-t-[0.1px] border-b-[0.1px] border-black overflow-hidden">
                {/* Cloud-like fade overlay */}
                <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-r from-white/50 via-white/0 to-white/50" />

                <div className="flex whitespace-nowrap my-6">
                    <motion.h1
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
                        className="leading-none font-semibold hFont1 uppercase pr-[5rem]"
                    >
                        Empower your business with personalized branding solutions.
                    </motion.h1>

                    <motion.h1
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
                        className="leading-none font-semibold hFont1 uppercase"
                    >
                        {'\u00A0'.repeat(10)}Empower your business with personalized branding solutions.
                    </motion.h1>
                </div>
            </div>

            <About />
            <ServicesOnly />
            <motion.hr
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="mx-3 border-t border-gray-700 max-w-6xl mx-auto mt-6   md:w-9/10 md:border-t md:border-gray-700 md:max-w-6xl md:mx-auto md:mt-6" />
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="max-w-6xl mb-2 mx-auto  mx-3  text-sm flex justify-between items-center   md:max-w-6xl md:mx-auto md:mt-1  md:text-lg md:flex md:justify-between md:items-center">
                <span className="font-cormorant font-normal">How we do?</span>
                <span>03</span>
            </motion.div>

            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="px-8 max-w-5xl mx-auto text-center md:max-w-5xl md:mx-auto md:text-center">
                <motion.h2
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-xl md:text-5xl font-cormorant font-medium  mb-1   md:font-cormorant md:font-medium  md:mb-1">
                    From strategy to delivery
                </motion.h2>
                <motion.h2
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-xl md:text-5xl font-cormorant font-medium mb-4 md:font-cormorant md:font-medium md:mb-4">
                    and everything in between.
                </motion.h2>
                <motion.h3
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-sm font-dosis font-normal mb-1 max-w-3xl mx-auto md:text-lg md:font-dosis md:font-normal md:mb-2 md:max-w-3xl md:mx-auto">
                    We plan, create, and execute with precision to bring  vision to life.
                </motion.h3>
                <motion.h3
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-sm font-dosis font-normal mb-20 max-w-3xl mx-auto md:text-lg md:font-dosis md:font-normal md:mb-20 md:max-w-3xl md:mx-auto">
                    Want the inside scoop? Our friendly team is just a call, email, or WhatsApp away.
                </motion.h3>
            </motion.div>
            <div className="px-10 space-y-2 max-w-3xl mx-auto mb-20 md:space-y-4 md:max-w-3xl md:mx-auto md:mb-20">
                {faqs.map((faq, index) => (
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                        key={index}
                        className="border-b border-gray-700 font-normal transition duration-300 ease-in-out hover:shadow-lg"
                    >
                        <motion.button
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between items-center p-4 text-left text-xs  md:w-full md:flex md:justify-between md:items-center md:p-4 md:text-left md:text-sm"
                        >
                            <span>{faq.question}</span>
                            <span>{openIndex === index ? <IoIosArrowUp className="text-black" /> : <IoIosArrowDown className="text-black" />}</span>
                        </motion.button>
                        {openIndex === index && (
                            <div className="px-4 pb-4 text-gray-600 text-xs md:text-sm md:px-4 md:pb-4 md:text-gray-600">{faq.answer}</div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/*<Services />*/}
        </div>
    );
};

export default Home;

