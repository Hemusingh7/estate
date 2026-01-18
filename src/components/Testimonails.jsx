import React, { useState, useEffect, useRef } from 'react';
import { testimonialsData, assets } from '../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

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
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const avatarVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3
      }
    }
  };

  const starVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.5 + (i * 0.1)
      }
    })
  };

  return (
    <motion.div
      ref={sectionRef}
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <style>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-5px) rotate(2deg); }
          75% { transform: translateY(-3px) rotate(-2deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
        }

        @keyframes gradient-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }

        .testimonial-card {
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .testimonial-card::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 16px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b);
          background-size: 400% 400%;
          opacity: 0;
          z-index: -1;
          transition: opacity 0.5s;
          animation: gradient-rotate 8s linear infinite;
        }

        .testimonial-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 12px;
          background: white;
          z-index: -1;
        }

        .testimonial-card:hover::before {
          opacity: 1;
          animation: gradient-rotate 3s linear infinite, pulse-glow 2s ease-in-out infinite;
        }

        .testimonial-card:hover {
          transform: translateY(-20px) scale(1.05) rotateX(5deg);
          box-shadow: 0 35px 70px rgba(59, 130, 246, 0.35);
        }

        .testimonial-card:hover .card-content {
          transform: translateZ(30px);
        }

        .card-content {
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-style: preserve-3d;
        }

        .avatar-wrapper {
          position: relative;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .avatar-wrapper::before {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
          opacity: 0;
          transition: opacity 0.4s;
          animation: gradient-rotate 4s linear infinite;
        }

        .testimonial-card:hover .avatar-wrapper::before {
          opacity: 1;
        }

        .testimonial-card:hover .avatar-wrapper {
          transform: scale(1.15) rotate(5deg);
        }

        .avatar-wrapper img {
          position: relative;
          z-index: 1;
          transition: all 0.4s;
        }

        .testimonial-card:hover .avatar-wrapper img {
          filter: brightness(1.1) contrast(1.1);
        }

        .star-icon {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: inline-block;
        }

        .testimonial-card:hover .star-icon {
          animation: twinkle 0.6s ease-in-out infinite;
        }

        .star-icon:nth-child(1) { animation-delay: 0s; }
        .star-icon:nth-child(2) { animation-delay: 0.1s; }
        .star-icon:nth-child(3) { animation-delay: 0.2s; }
        .star-icon:nth-child(4) { animation-delay: 0.3s; }
        .star-icon:nth-child(5) { animation-delay: 0.4s; }

        .quote-mark {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          opacity: 0;
        }

        .testimonial-card:hover .quote-mark {
          opacity: 0.15;
          transform: scale(1.2) rotate(5deg);
        }

        .testimonial-text {
          position: relative;
          transition: all 0.4s ease;
        }

        .testimonial-card:hover .testimonial-text {
          color: #1f2937;
        }

        .name-badge {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .name-badge::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transition: width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .testimonial-card:hover .name-badge::after {
          width: 100%;
        }

        .floating-icon {
          animation: float 3s ease-in-out infinite;
        }

        .shimmer-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.8s;
        }

        .testimonial-card:hover .shimmer-effect {
          left: 100%;
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
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transition: width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
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
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          Customer{' '}
          <span className={`underline-animated underline underline-offset-4 decoration-1 font-light ${isVisible ? 'visible' : ''}`}>
            Testimonials
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
          Real Stories from Those Who Found Home with Us
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div 
        className="flex flex-wrap justify-center gap-8"
        variants={containerVariants}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            className="testimonial-card max-w-[340px] shadow-lg rounded-lg px-8 py-12 text-center bg-white"
          >
            {/* Shimmer Effect */}
            <div className="shimmer-effect"></div>

            {/* Quote Mark Background */}
            <div className="quote-mark absolute top-8 right-8 text-9xl font-serif text-blue-500">
              "
            </div>

            <div className="card-content relative z-10">
              {/* Avatar */}
              <motion.div
                className="avatar-wrapper inline-block mb-4"
                variants={avatarVariants}
              >
                <motion.img
                  className="w-20 h-20 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.alt}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              {/* Name with animated underline */}
              <motion.h2 
                className="name-badge text-xl text-gray-700 font-medium mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {testimonial.name}
              </motion.h2>

              {/* Title */}
              <motion.p 
                className="text-gray-400 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {testimonial.title}
              </motion.p>

              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.img
                    key={i}
                    custom={i}
                    variants={starVariants}
                    src={assets.star_icon}
                    alt="star"
                    className="star-icon w-5 h-5"
                    whileHover={{ 
                      scale: 1.3,
                      rotate: 15,
                      filter: "brightness(1.5)"
                    }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.p 
                className="testimonial-text text-gray-500 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {testimonial.message}
              </motion.p>
            </div>

            {/* Decorative Corner Elements */}
            <motion.div
              className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-500 rounded-tl-lg opacity-0"
              animate={hoveredCard === index ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-500 rounded-br-lg opacity-0"
              animate={hoveredCard === index ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 text-blue-500 opacity-10 text-6xl floating-icon" style={{ animationDelay: '0s' }}>
        ★
      </div>
      <div className="absolute bottom-20 right-10 text-purple-500 opacity-10 text-5xl floating-icon" style={{ animationDelay: '1s' }}>
        ❤
      </div>
      <div className="absolute top-1/2 left-5 text-pink-500 opacity-10 text-4xl floating-icon" style={{ animationDelay: '2s' }}>
        ✨
      </div>
    </motion.div>
  );
};

export default Testimonials;