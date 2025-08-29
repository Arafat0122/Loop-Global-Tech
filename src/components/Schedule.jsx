import scheduleImage from '../../assets/stats.webp';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { HiArrowNarrowRight } from "react-icons/hi";

const Schedule = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
      id="resources"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">

        {/* Left - Image */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          className="w-full md:w-1/2 relative group overflow-hidden rounded-xl"
        >
          <motion.img
            variants={fadeIn('up', 0.4)}
            src={scheduleImage}
            alt="Statistics dashboard"
            className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          className="w-full md:w-1/2"
        >
          <motion.span
            variants={fadeIn('up', 0.4)}
            className="text-blue-600 font-semibold uppercase tracking-wider"
          >
            Schedule
          </motion.span>

          <motion.h2
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6 leading-snug"
          >
            Streamline Your Business <br />
            With Smart Scheduling Solutions
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.6)}
            className="text-gray-600 mb-8 text-lg"
          >
            Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences through seamless calendar management.
          </motion.p>

          <motion.a
            variants={fadeIn('up', 0.7)}
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300"
          >
            Explore scheduling features
            <HiArrowNarrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Schedule;