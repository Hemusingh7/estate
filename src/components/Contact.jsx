import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const successVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-gray-50"
      id="Contact"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(-3px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .contact-form {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contact-form:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }

        .input-wrapper {
          position: relative;
        }

        .input-field {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .input-field:focus {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-color: #000;
        }

        .input-label {
          transition: all 0.3s ease;
          position: relative;
        }

        .input-label::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #000;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .input-wrapper.focused .input-label::after {
          width: 100%;
        }

        .input-wrapper.focused .input-label {
          color: #000;
        }

        .submit-btn {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.5s, height 0.5s;
        }

        .submit-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }

        .submit-btn:active {
          transform: translateY(-1px);
        }

        .success-message {
          background: #000;
          color: #fff;
        }

        .underline-animated {
          position: relative;
          display: inline-block;
        }

        .underline-animated::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #000;
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .underline-animated.visible::after {
          width: 100%;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Header */}
      <motion.div variants={headerVariants}>
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-gray-900">
          Contact{' '}
          <span className={`underline-animated underline underline-offset-4 decoration-1 font-light ${isVisible ? 'visible' : ''}`}>
            With Us
          </span>
        </h1>
        <p className="text-gray-500 mb-12 max-w-md mx-auto">
          Ready to make a move? Let&apos;s build your future together.
        </p>
      </motion.div>

      {/* Success Message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            variants={successVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="success-message max-w-2xl mx-auto mb-6 p-4 rounded-lg font-medium shadow-lg flex items-center justify-center gap-3"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="text-xl"
            >
              ✓
            </motion.span>
            <span>Message sent successfully! We&apos;ll get back to you soon.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form */}
      <motion.form
        variants={formVariants}
        onSubmit={handleSubmit}
        className="contact-form max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8"
      >
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* Name Input */}
          <motion.div
            custom={0}
            variants={inputVariants}
            className={`input-wrapper w-full text-left ${focusedField === 'name' ? 'focused' : ''}`}
          >
            <label className="input-label block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              placeholder="Enter your name"
              required
              className="input-field w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            custom={1}
            variants={inputVariants}
            className={`input-wrapper w-full text-left ${focusedField === 'email' ? 'focused' : ''}`}
          >
            <label className="input-label block text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              placeholder="Enter your email"
              required
              className="input-field w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </motion.div>
        </div>

        {/* Message Textarea */}
        <motion.div
          custom={2}
          variants={inputVariants}
          className={`input-wrapper text-left mb-6 ${focusedField === 'message' ? 'focused' : ''}`}
        >
          <label className="input-label block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            rows={5}
            placeholder="Write your message..."
            required
            className="input-field w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-black resize-none"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="submit-btn w-full bg-black text-white py-3 rounded-lg font-medium relative"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          disabled={isSubmitting}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </>
            )}
          </span>
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;