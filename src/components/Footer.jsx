import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }

  return (
    <motion.footer 
      variants={fadeIn('up', 0.2)} 
      initial="hidden"
      whileInView="show"
      className="bg-gray-50 py-16 mt-16 px-6"
    >
      <div className="section-container px-4 sm:px-8 lg:px-0 ">
        <motion.div 
          variants={fadeIn('up', 0.3)} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div 
            variants={fadeIn('right', 0.4)}
            className="lg:col-span-4 "
          >
            <motion.div 
              variants={fadeIn('down', 0.5)} 
              className="flex items-center gap-2 mb-6"
            >
              <img className='h-10 w-auto' src={logo} alt="" />
              <span className="ml-2 text-lg font-bold text-lime-600">Hexane IT</span>
            </motion.div>
            {/* <motion.p 
               variants={fadeIn('up', 0.6)}
              className="text-gray-600 mb-6"
            >
              The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
            </motion.p> */}
            <motion.div 
              variants={fadeIn('up', 0.7)} 
              className="flex gap-3"
            >
              <motion.a 
                whileHover={{ scale: 1.1 }} 
                href="#" 
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-lime-600 hover:text-white transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-lime-400 hover:text-white transition-colors"
              >
                <FaTwitter className="w-4 h-4" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-lime-700 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>


          <motion.div 
            variants={fadeIn('left', 0.4)}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div 
                  key={category}
                  variants={fadeIn('up', 0.3 * (categoryIndex + 1))}
                >
                  <motion.h3 
                    variants={textVariant(0.2)} 
                    className="text-lg font-medium mb-4"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </motion.h3>
                  <motion.ul 
                    variants={fadeIn('up', 0.4)} 
                    className="space-y-3"
                  >
                    {links.map((link, index) => (
                      <motion.li 
                        key={index}
                        variants={fadeIn('up', 0.1 * (index + 1))}
                      >
                        <motion.a 
                          whileHover={{ x: 5 }}
                          href={link.href} 
                          className="text-gray-600 hover:text-gray-900"
                        >
                          {link.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>


        <motion.div 
          variants={fadeIn('up', 0.8)}
          className="border-t border-gray-200 mt-2 pt-2"
        >
          <motion.div 
            variants={fadeIn('up', 0.9)}
            className="flex flex-col md:flex-row justify-center items-center gap-4"
          >
            <motion.p 
              variants={fadeIn('right', 1.0)}
              className="text-gray-600 text-sm text-center md:text-left"
            >
              Copyright © {new Date().getFullYear()} Hexane IT
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}


export default Footer