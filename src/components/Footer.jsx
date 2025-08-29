import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from 'react-router';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Career', href: '#' },
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
  };

  return (
    <footer className="w-full bg-gray-50 relative z-10">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

            {/* Brand & Social */}
            <motion.div
              variants={fadeIn('right', 0.3)}
              className="lg:col-span-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <Link to={'/'}>
                  <img src="/Loop_Global_Tech.png" alt="Logo" className="h-28 w-auto" />
                </Link>
              </div>
              <div className="flex gap-3">
                <motion.a whileHover={{ scale: 1.1 }} href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-lime-600 hover:text-white transition-colors">
                  <FaFacebookF className="w-4 h-4" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-lime-400 hover:text-white transition-colors">
                  <FaTwitter className="w-4 h-4" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-lime-700 hover:text-white transition-colors">
                  <FaLinkedinIn className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* Footer Links */}
            <motion.div
              variants={fadeIn('left', 0.3)}
              className="lg:col-span-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([category, links], idx) => (
                  <motion.div key={category} variants={fadeIn('up', 0.3 * (idx + 1))}>
                    <h3 className="text-lg font-semibold mb-4 capitalize">{category}</h3>
                    <ul className="space-y-3">
                      {links.map((link, index) => (
                        <li key={index}>
                          <motion.a whileHover={{ x: 5 }} href={link.href} className="text-gray-600 hover:text-gray-900 transition-all">
                            {link.name}
                          </motion.a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Bottom */}
          <motion.div variants={fadeIn('up', 0.8)} className="border-t border-gray-200 mt-12 pt-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Loop Global Tech. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with ❤️ by <a href="https://arafat0122.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-sky-600">Soyeb Ahmed Arafat</a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
