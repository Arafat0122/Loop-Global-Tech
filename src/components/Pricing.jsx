import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { HiArrowNarrowRight } from "react-icons/hi";

const Pricing = () => {
  const [productCount, setProductCount] = useState(1)

  const starterPrice = Math.round(4000 * (productCount / 50))
  const businessPrice = Math.round(7500 * (productCount / 50))

  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-16 px-4 relative overflow-hidden"
      id="pricing"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={textVariant(0.3)}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
        >
          Pricing
        </motion.h2>

        {/* Pricing Cards */}
        <motion.div variants={fadeIn('up', 0.4)} className="grid md:grid-cols-2 gap-8 mb-12">
          {[{ name: "Starter", price: starterPrice }, { name: "Business", price: businessPrice }].map((plan, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn(idx === 0 ? 'right' : 'left', 0.5)}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer text-center"
            >
              <motion.h3
                variants={fadeIn('up', 0.6)}
                className="text-xl font-semibold text-gray-600 mb-4"
              >
                {plan.name}
              </motion.h3>
              <AnimatePresence mode="wait">
                <motion.p
                  key={plan.price}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl md:text-4xl font-bold mb-6 text-blue-600"
                >
                  ${plan.price}/mo
                </motion.p>
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Range Slider */}
        <motion.div variants={fadeIn('up', 0.8)} className="max-w-xl mx-auto mb-12">
          <motion.p variants={fadeIn('up', 0.9)} className="text-center text-gray-600 mb-4">
            {productCount} products
          </motion.p>
          <div className="flex items-center gap-2 px-2">
            <span className="text-sm text-gray-600">1</span>
            <input
              type="range"
              min="1"
              max="50"
              value={productCount}
              onChange={(e) => setProductCount(parseInt(e.target.value))}
              className="flex-1 h-2 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-blue-400 to-blue-600 accent-blue-600 bg-gray-200"
            />
            <span className="text-sm text-gray-600">50</span>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={fadeIn('up', 1.1)} className="text-center">
          <motion.p variants={fadeIn('up', 1.2)} className="text-xl text-gray-600 mb-4">
            Ready to get started?
          </motion.p>
          <motion.button
            variants={fadeIn('up', 1.3)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all inline-flex items-center gap-2"
          >
            Get Started
            <HiArrowNarrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Pricing;