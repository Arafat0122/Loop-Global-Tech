import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/resources", label: "Resources" },
    { to: "/product", label: "Product" },
    { to: "/services", label: "Services" },
    { to: "/Customer", label: "Customers" },
  ];

  return (
    <motion.div
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        <motion.div variants={fadeIn('right', 0.3)} className="cursor-pointer w-46">
          <img src="/Loop_Global_Tech.png" alt="Logo" className="h-28 w-auto" />
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button variants={fadeIn('left', 0.3)} className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} >
          {isMenuOpen ? <HiX className="h-6 w-6 text-blue-600" /> : <HiMenu className="h-6 w-6 text-blue-600" />}
        </motion.button>

        {/* Desktop Nav Links */}
        <motion.div variants={fadeIn('down', 0.3)} className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                `text-md font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all
                ${isActive
                  ? "text-blue-600 after:w-full"
                  : "text-black hover:text-blue-600"
                }`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </motion.div>

        {/* Become a Partner Button */}
        <motion.button
          variants={fadeIn('left', 0.3)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-200"
        >
          <a href="#newsletter" className="relative z-10">Become a Partner</a>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          className="md:hidden bg-white border-t border-gray-100 py-4"
        >
          <motion.div variants={fadeIn('down', 0.3)} className="container mx-auto px-4 space-y-4">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  `block text-sm font-medium py-2
                  ${isActive ? 'text-blue-600' : 'text-black hover:text-blue-600'}`
                }
                onClick={() => setIsMenuOpen(false)}
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            ))}
            <motion.button
              variants={fadeIn('up', 0.4)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-200"
            >
              <a href="#newsletter" className="relative z-10" onClick={() => setIsMenuOpen(false)}>
                Become a Partner
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
