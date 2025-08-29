import React from 'react';
import heroImage from '../../assets/hero-image.png';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-32 md:pt-44 pb-16 container mx-auto"
    >
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-6">
        {/* Badge */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className="flex items-center gap-3 bg-blue-50 w-fit px-4 py-2 rounded-full hover:bg-blue-100 transition-colors cursor-pointer group">
            <span className="text-blue-600 group-hover:scale-110 transition-transform">★</span>
            <span className="text-sm font-medium text-blue-700">Jump start your growth</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
        >
          We boost the growth for Startup to{" "}
          <span className="text-blue-600 relative inline-block">
            Fortune 500 Companies
            <span className="inline-block ml-2 animate-pulse">⏰</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-50"></span>
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-lg"
        >
          Get the most accurate leads, sales training, and conversion tools—all in a single billing system. We help your business scale with precision and speed.
        </motion.p>

        {/* CTA Form */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col sm:flex-row gap-3 max-w-md"
        >
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-gray-700"
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200 active:scale-95">
            →
          </button>
        </motion.div>
      </div>

      {/* Right Column */}
      <motion.div
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-12 md:mt-0"
      >
        <div className="relative">
          <img
            src={heroImage}
            alt="Team collaboration"
            className="rounded-lg relative z-10 hover:scale-[1.03] transition-transform duration-500"
          />
          {/* Optional decorative gradient circle */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-100/30 blur-3xl z-0"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
