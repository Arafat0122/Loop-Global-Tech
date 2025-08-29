import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import monitorCardBg from '../../assets/monitor-card.webp';

const Monitor = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative overflow-hidden"
      id="product"
    >
      {/* Section Title */}
      <motion.h2
        variants={textVariant(0.3)}
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
      >
        Best Selling Product
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          className="w-full md:w-1/2 space-y-4"
        >
          <motion.span
            variants={fadeIn('up', 0.4)}
            className="text-blue-600 font-semibold uppercase tracking-wider"
          >
            MONITOR
          </motion.span>
          <motion.h2
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 leading-snug"
          >
            Introducing Best Mobile Carousels
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.6)}
            className="text-gray-600 mb-6 text-lg md:text-base"
          >
            Say goodbye to clunky sliders and hello to smooth, responsive, touch-friendly carousels designed for today’s mobile users.
          </motion.p>
          <motion.a
            variants={fadeIn('up', 0.7)}
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300"
          >
            Learn more about monitoring
            <HiArrowNarrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          className="w-full md:w-1/2 relative group overflow-hidden rounded-xl"
        >
          <motion.img
            variants={fadeIn('up', 0.5)}
            src={monitorCardBg}
            alt="Dashboard statistics"
            className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Monitor;