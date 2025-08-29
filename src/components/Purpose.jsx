import { IoIosRocket } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PurposeSection = () => {
  const features = [
    {
      icon: <IoIosRocket className="text-blue-500 w-8 h-8" />,
      title: "Built for impact",
      description:
        "We identify and nurture a truly diverse team of designers, developers, and marketers to deliver measurable results."
    },
    {
      icon: <IoIosRocket className="text-blue-400 w-8 h-8" />,
      title: "In sync with you",
      description:
        "We adapt to your workflows and rhythm to blend seamlessly with your team for smooth project execution."
    }
  ];

  return (
    <section id="about" className="w-full bg-gray-50 relative py-16 px-4 md:px-8 overflow-hidden">
      {/* Decorative blurred background */}
      <div className="absolute -top-20 -left-10 w-72 h-72 rounded-full bg-blue-100/30 blur-3xl z-0"></div>
      <div className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-blue-200/20 blur-3xl z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 grid-cols-1 gap-10 items-start"
        >
          {/* Title */}
          <motion.div variants={fadeIn("right", 0.3)}>
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="text-sm text-blue-500 font-semibold mb-3 tracking-wider"
            >
              ACHIEVE MORE
            </motion.div>

            <motion.h2
              variants={textVariant(0.5)}
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
            >
              Purpose of a convoy is to keep your team aligned & focused
            </motion.h2>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                variants={fadeIn("up", 0.3 * (index + 1))}
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                {/* Icon */}
                <motion.div
                  variants={fadeIn("right", 0.4 * (index + 1))}
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 text-blue-500 text-2xl"
                >
                  {feature.icon}
                </motion.div>

                {/* Text */}
                <motion.div variants={fadeIn("left", 0.4 * (index + 1))}>
                  <motion.h3
                    variants={textVariant(0.3)}
                    className="text-xl font-semibold text-gray-900 mb-2"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p variants={fadeIn("up", 0.4)} className="text-gray-600">
                    {feature.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;