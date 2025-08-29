import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { FiSearch, FiSettings, FiZap } from "react-icons/fi";

const Business = () => {
  const features = [
    {
      icon: <FiSearch className="text-blue-600 w-8 h-8" />,
      title: "Discover Your Needs",
      description: "We present a detailed proposal and discuss all the essential aspects of your project."
    },
    {
      icon: <FiSettings className="text-blue-600 w-8 h-8" />,
      title: "Refine the Details",
      description: "We align workflows, communication protocols, and engagement models to ensure smooth operations."
    },
    {
      icon: <FiZap className="text-blue-600 w-8 h-8" />,
      title: "Fast Execution",
      description: "Rapid project execution with transparent pricing, billing, and a structured approach for results."
    }
  ];

  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative overflow-hidden"
    >
      {/* Header */}
      <motion.div variants={fadeIn('up', 0.3)} className="text-center mb-14">
        <motion.h2
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
        >
          How We Empower Your Business
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.4)}
          className="text-gray-600 max-w-xl mx-auto text-lg"
        >
          Partner with us to build trust, increase efficiency, and drive measurable growth.
        </motion.p>
      </motion.div>

      {/* Feature Cards */}
      <motion.div variants={fadeIn('up', 0.5)} className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.3 * (index + 1))}
            className="flex flex-col items-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer text-center"
          >
            {/* Icon */}
            <motion.div
              variants={fadeIn('down', 0.4 * (index + 1))}
              className={`w-20 h-20 flex items-center justify-center rounded-full mb-6 bg-blue-50`}
            >
              {feature.icon}
            </motion.div>

            {/* Title & Description */}
            <motion.h3
              variants={textVariant(0.3)}
              className="text-xl md:text-2xl font-semibold mb-3 text-gray-900"
            >
              {feature.title}
            </motion.h3>
            <motion.p
              variants={fadeIn('up', 0.6 * (index + 1))}
              className="text-gray-600"
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div variants={fadeIn('up', 0.7)} className="text-center mt-14">
        <motion.button
          variants={fadeIn('up', 0.8)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-10 py-3 rounded-full font-medium hover:bg-blue-700 transition-all relative overflow-hidden"
        >
          <a href="#newsletter" className="relative z-10">Become a Partner</a>
          <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/30 blur-xl top-0 left-0"></div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Business;