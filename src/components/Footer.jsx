import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0b1220] to-[#020617] text-gray-300 pt-16">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="Estate Logo"
              className="h-8 w-auto"
            />
            <h2 className="text-xl font-semibold text-white"></h2>
          </div>

          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            {['Home', 'About us', 'Contact us', 'Privacy policy'].map(
              (item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-md bg-[#111827] border border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-500 transition"
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-14">
        <p className="text-center text-sm text-gray-500 py-6">
          Copyright 2024 © Estate. All Right Reserved.
        </p>
      </div>
    </footer>
  )
}
export default Footer
