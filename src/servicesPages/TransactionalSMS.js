import React from "react";
import img1 from '../assets/sms_trans.png'
import whh from '../assets/smsvid.mp4'
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ser1 from '../assets/alert.mp4';
import ser2 from '../assets/remainder.mp4';
import { motion } from 'framer-motion';
import { fadeIn } from '../Varients';

const works = [
  {
    name: "1. Instant Alerts & Confirmations",
    description:
      "Send real-time notifications such as OTPs, order confirmations, and account activity alerts — ensuring customers receive critical information without delay.",
    image: ser1,
  },
  {
    name: "2. Reminders & Service Updates",
    description:
      "Deliver payment reminders, appointment confirmations, and service status updates — keeping customers informed and improving trust in your brand.",
    image: ser2,
  },
];


const steps = [
  {
    question: "Step 1. Define Your Communication Objectives",
    answer:
      "We start by understanding the purpose of your transactional messages — whether it’s sending OTPs, payment alerts, booking confirmations, or important service notifications. This ensures every message serves a clear, valuable purpose.",
  },
  {
    question: "Step 2. Integrate with Our SMS Gateway",
    answer:
      "Our team helps you seamlessly integrate your application, website, or CRM with our secure SMS gateway via APIs. This ensures instant, automated message delivery without manual intervention.",
  },
  {
    question: "Step 3. Prepare Message Templates",
    answer:
      "We assist in creating short, precise, and compliant message templates for approval. These templates follow TRAI regulations and ensure clarity, so customers instantly understand the message.",
  },
  {
    question: "Step 4. Ensure 24/7 Delivery Capability",
    answer:
      "Our platform is designed for round-the-clock delivery, even to DND numbers, so critical updates like OTPs and alerts are never delayed. This reliability builds trust with your customers.",
  },
  {
    question: "Step 5. Validate Contact Data",
    answer:
      "We clean, verify, and segment your recipient database to avoid sending to invalid or inactive numbers, ensuring maximum deliverability and reduced SMS wastage.",
  },
  {
    question: "Step 6. Automate Trigger-Based Messaging",
    answer:
      "Messages are sent automatically based on predefined triggers — such as a new order, payment confirmation, account activity, or support ticket update — for instant communication.",
  },
  {
    question: "Step 7. Monitor Delivery & Performance",
    answer:
      "We provide real-time reports on delivery status, open rates (if applicable), and any failed messages. This allows for quick corrective action and ensures message reliability.",
  },
  {
    question: "Step 8. Optimize for Better Engagement",
    answer:
      "By analyzing delivery patterns and response metrics, we continuously refine your messaging strategy to ensure faster communication and improved customer satisfaction.",
  },
];


const TransactionalSMS = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div>
      <section className="bg-[#FDFAF6] text-black py-32 ">
        <div className=" mx-auto">
          <div className="px-8 md:max-w-5xl md:mx-auto">
            <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-2xl md:text-5xl font-cormorant font-medium mb-2 md:mb-4">
              Transactional SMS Services
            </motion.h2>
            <motion.p variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-sm md:text-lg font-dosis font-normal mb-2 max-w-5xl">
              Transactional SMS services allow businesses to send critical and time-sensitive information directly to customers’ mobile phones — instantly and reliably. These messages can include OTPs, account updates, order confirmations, payment alerts, and other essential notifications. Our platform ensures 24/7 delivery, even to DND numbers, so your customers never miss important updates.
            </motion.p>
            <motion.p variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-sm md:text-lg font-dosis font-normal mb-12 max-w-5xl">
              At Nexgen Digital Solutions, we provide highly secure and scalable Transactional SMS Services to help businesses maintain seamless communication with their customers. Whether you are sending service alerts, appointment reminders, delivery updates, or system-generated notifications — our service guarantees high deliverability, fast transmission, and complete compliance with TRAI regulations.
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

export default TransactionalSMS;
