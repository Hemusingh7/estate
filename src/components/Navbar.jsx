import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.svg'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Animation variants
  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  }

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  }

  return (
    <motion.div
      className="w-full bg-black text-white border-b border-gray-700 fixed top-0 z-50"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Logo"
          className="h-8 sm:h-10 w-auto"
          whileHover={{ scale: 1.05 }}
        />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 lg:gap-6 text-sm lg:text-base">
          {['Home', 'About', 'Projects', 'Testimonials'].map((item, index) => (
            <motion.li
              key={item}
              custom={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              <a
                href={`#${item}`}
                className="cursor-pointer hover:text-gray-400 transition-colors"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-white text-black px-4 lg:px-6 py-2 rounded-full hover:bg-gray-200 transition-colors text-sm lg:text-base"
        >
          Sign up
        </motion.button>

        {/* Mobile Toggle */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-gray-400"
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-black border-t border-gray-700 overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col px-4 py-4 space-y-4">
              {['Home', 'About', 'Projects', 'Testimonials'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  className="cursor-pointer hover:text-gray-400 transition-colors py-2"
                >
                  <a href={`#${item}`} onClick={() => setIsMenuOpen(false)}>
                    {item}
                  </a>
                </motion.li>
              ))}

              <motion.li whileHover={{ scale: 1.03 }}>
                <button className="w-full bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
                  Sign up
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar
