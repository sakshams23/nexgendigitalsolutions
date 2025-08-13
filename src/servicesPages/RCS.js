import React from "react";
import img1 from '../assets/rcs.png'
import whh from '../assets/rcsvid.mp4'
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ser1 from '../assets/media.mp4';
import ser2 from '../assets/customer.mp4';
import { motion } from 'framer-motion';
import { fadeIn } from '../Varients';


const works = [
  {
    name: "1. Interactive Messaging & Media Sharing",
    description:
      "Send rich, interactive messages with images, carousels, and action buttons — creating engaging, app-like experiences directly in the customer’s messaging app.",
    image: ser1,
  },
  {
    name: "2. Promotions & Customer Support",
    description:
      "Run visually appealing promotional campaigns and offer instant support through two-way RCS chats — boosting engagement, trust, and customer satisfaction.",
    image: ser2,
  },
];


const steps = [
  {
    question: "Step 1. Understand Your RCS Goals",
    answer:
      "We assess your communication needs and objectives, ensuring your RCS campaigns deliver rich, interactive messages that enhance customer engagement and support your business goals effectively.",
  },
  {
    question: "Step 2. Integrate with RCS Platform",
    answer:
      "We connect your systems to our secure RCS messaging platform, enabling seamless, automated delivery of multimedia-rich messages directly to your customers’ native messaging apps.",
  },
  {
    question: "Step 3. Design Rich Media Templates",
    answer:
      "Our creative team builds visually engaging, brand-aligned RCS templates with images, videos, buttons, and carousels, designed to increase interaction and improve customer experience.",
  },
  {
    question: "Step 4. Personalise Message Content",
    answer:
      "We tailor each RCS message with dynamic content, personalisation fields, and relevant offers to make every interaction feel unique and highly relevant to the recipient.",
  },
  {
    question: "Step 5. Validate Recipient Data",
    answer:
      "We verify and segment your contact database to ensure RCS messages reach valid recipients, improving delivery rates and maximising campaign efficiency.",
  },
  {
    question: "Step 6. Automate Interactive Workflows",
    answer:
      "We configure automated, trigger-based RCS workflows that send timely updates, confirmations, and promotions, driving faster customer responses and smoother engagement.",
  },
  {
    question: "Step 7. Track Engagement Metrics",
    answer:
      "We monitor read receipts, button clicks, and customer interactions in real time, giving you clear insights into campaign performance and user behaviour.",
  },
  {
    question: "Step 8. Optimise for Higher ROI",
    answer:
      "We analyse campaign data to refine RCS strategies, improving message design, targeting, and timing to achieve better engagement rates and higher returns on investment.",
  },
];

const RCS = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div>
      <section className="bg-[#FDFAF6] text-black py-32 ">
        <div className=" mx-auto">
          <div className="px-8 md:max-w-5xl md:mx-auto">
            <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-2xl md:text-5xl font-cormorant font-medium mb-2 md:mb-4">
              RCS Services
            </motion.h2>
            <motion.p variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-sm md:text-lg font-dosis font-normal mb-2 max-w-5xl">
              Rich Communication Services (RCS) bring SMS into the modern age with interactive, media-rich messaging. Share images, videos, buttons, and branding to create engaging, app-like experiences in your customer’s inbox.
            </motion.p>
            <motion.p variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-sm md:text-lg font-dosis font-normal mb-12 max-w-5xl">
              At Nexgen Digital Solutions, our RCS Services help brands deliver more than just text. We create rich, dynamic messages that improve engagement, build trust, and enhance your brand communication experience.
            </motion.p>

          </div>
          <div>
            <motion.img variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} src={img1} alt="Services" className="w-full my-16 max-w-6xl mx-auto "></motion.img>
          </div>
          <motion.hr variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="mx-3 border-t border-gray-700 max-w-6xl mx-auto mt-6   md:w-9/10 md:border-t md:border-gray-700 md:max-w-6xl md:mx-auto md:mt-6" />
          <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="max-w-6xl mb-2 mx-auto  mx-3  text-sm flex justify-between items-center   md:max-w-6xl md:mx-auto md:mt-1  md:text-lg md:flex md:justify-between md:items-center">
            <span className="font-cormorant font-normal">How it works?</span>
            <span>01</span>
          </motion.div>
          <div>
            <div className="px-8 max-w-5xl mx-auto text-center md:max-w-5xl md:mx-auto md:text-center">
              <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-xl md:text-5xl font-cormorant font-medium  mb-1   md:font-cormorant md:font-medium  md:mb-1">
                We don’t just apply strategies-
              </motion.h2>
              <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-xl md:text-5xl font-cormorant font-medium mb-4 md:font-cormorant md:font-medium md:mb-4">
                we create lasting impact.
              </motion.h2>
              <motion.h3 variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-sm font-dosis font-normal mb-2 max-w-3xl mx-auto md:text-lg md:font-dosis md:font-normal md:mb-20 md:max-w-3xl md:mx-auto">
                Our process starts with understanding your brand’s true purpose. We then align every action, message, and touchpoint to reflect that vision. By bridging the gap between what you say and what you do, we build trust, strengthen engagement, and set your business on a path to sustainable growth.
              </motion.h3>
              <div className="p-2 flex flex-col gap-10 md:flex md:flex-row md:gap-20">

                <motion.video variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }}
                  className=" md:w-[35%]  "
                  src={whh}
                  autoPlay
                  muted
                  loop={true}
                  playsInline
                />
                <div className=" space-y-2   md:space-y-4 md:w-3/4">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-700 font-normal transition duration-300 ease-in-out hover:shadow-lg"
                      onMouseEnter={() => setOpenIndex(index)}       // open when hover starts
                      onMouseLeave={() => setOpenIndex(null)}        // close when hover ends
                    >
                      <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="w-full flex justify-between items-center p-4 text-left text-xs cursor-pointer   md:w-full md:flex md:justify-between md:items-center md:p-4 md:text-left md:text-sm md:cursor-pointer">
                        <span>{step.question}</span>
                        <span>
                          {openIndex === index ? (
                            <IoIosArrowUp className="text-black" />
                          ) : (
                            <IoIosArrowDown className="text-black" />
                          )}
                        </span>
                      </motion.div>
                      {openIndex === index && (
                        <div className="px-4 pb-3 text-gray-600 text-xs text-justify md:px-4 md:pb-3 md:text-gray-600 md:text-sm md:text-justify">
                          {step.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          <div className="">
            <motion.hr variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className=" mx-3 border-t border-gray-700 max-w-6xl mx-auto mt-6   md:w-9/10 md:border-t md:border-gray-700 md:max-w-6xl md:mx-auto md:mt-6" />
            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="max-w-6xl mb-2 mx-auto  mx-3  text-sm flex justify-between items-center   md:max-w-6xl md:mx-auto md:mt-1  md:text-lg md:flex md:justify-between md:items-center">
              <span className="font-cormorant font-normal">Use Cases</span>
              <span>02</span>
            </motion.div>
            <div className="px-6 max-w-5xl mx-auto text-center mb-10">
              <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-xl md:text-5xl font-cormorant font-medium  mb-1   md:font-cormorant md:font-medium  md:mb-1">
                We don’t just list features –
              </motion.h2>
              <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-xl md:text-5xl font-cormorant font-medium mb-4 md:font-cormorant md:font-medium md:mb-4">
                we show real possibilities.
              </motion.h2>
              <motion.h3 variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-sm font-dosis font-normal mb-8 max-w-3xl mx-auto md:text-lg md:font-dosis md:font-normal md:mb-8 md:max-w-3xl md:mx-auto">
                Every use case is designed to solve specific challenges & unlock opportunities for your business. From delivering instant customer support to sending timely updates, running high-impact campaigns, and nurturing leads.
              </motion.h3>
            </div>
            <div className="px-12 space-y-8 md:max-w-5xl md:mx-auto md:px-6 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-12">

              {/* Large Item */}
              <div className="md:col-span-1  md:flex md:flex-col md:pb-12 md:px-12 md:mt-12">
                <motion.video variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }}
                  src={works[0].image}
                  alt={works[0].name}
                  className="w-30 h-30 object-cover rounded-xl px-10"
                  autoPlay
                  muted
                  loop={true}
                  playsInline
                />
                <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="mt-2 px-2">
                  <h3 className="font-normal text-sm tracking-wide uppercase text-justify  md:font-semibold md:text-md md:tracking-wide md:uppercase md:text-justify">{works[0].name} -</h3>
                  <p className="mt-1 text-gray-800 text-xs text-justify  md:md:mt-1 md:text-gray-800 md:text-sm md:text-justify">{works[0].description}</p>

                </motion.div>
              </div>

              {/* Small Item */}
              <div className="flex flex-col">
                <motion.video variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }}
                  src={works[1].image}
                  alt={works[1].name}
                  className="w-30 h-30 object-cover rounded-xl px-10"
                  autoPlay
                  muted
                  loop={true}
                  playsInline
                />
                <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="mt-2 px-2">
                  <h3 className="font-normal text-sm tracking-wide uppercase text-justify  md:font-semibold md:text-md md:tracking-wide md:uppercase md:text-justify">{works[1].name} -</h3>
                  <p className="mt-1 text-gray-800 text-xs text-justify  md:md:mt-1 md:text-gray-800 md:text-sm md:text-justify">{works[1].description}</p>

                </motion.div>
              </div>

            </div>



          </div>
        </div>
      </section>
    </div>
  );
};
export default RCS;
