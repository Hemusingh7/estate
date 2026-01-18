import React, { useEffect, useRef, useState } from 'react';
import brand_img from '../assets/brand_img.png';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const stats = [
    { value: '10+', label: 'Years of Excellence', icon: '🏆' },
    { value: '12+', label: 'Projects Completed', icon: '🏗️' },
    { value: '20+', label: 'Mn. Sq. Ft. Delivered', icon: '📐' },
    { value: '25+', label: 'Ongoing Projects', icon: '🚀' }
  ];

  const features = [
    {
      icon: (
        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quality Assured',
      description: 'Premium construction standards in every project'
    },
    {
      icon: (
        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Timely Delivery',
      description: 'On-schedule project completion guarantee'
    },
    {
      icon: (
        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      title: 'Customer First',
      description: 'Your satisfaction is our top priority'
    }
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div
      ref={sectionRef}
      id="About"
      className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-28 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 max-w-7xl">
        
        {/* Enhanced CSS Animations */}
        <style>{`
          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(37, 99, 235, 0.3); }
            50% { box-shadow: 0 0 40px rgba(37, 99, 235, 0.6); }
          }

          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .stat-card {
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            overflow: hidden;
          }

          .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
            transition: left 0.6s;
          }

          .stat-card:hover::before {
            left: 100%;
          }

          .stat-card:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 25px 60px rgba(37, 99, 235, 0.25);
          }

          .stat-card:hover .stat-icon {
            transform: scale(1.2) rotate(10deg);
          }

          .stat-icon {
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .btn-primary {
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            overflow: hidden;
            background-size: 200% 200%;
          }

          .btn-primary::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
          }

          .btn-primary:hover::before {
            width: 300px;
            height: 300px;
          }

          .btn-primary:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow: 0 15px 40px rgba(37, 99, 235, 0.5);
            background-position: 100% 50%;
          }

          .btn-primary:active {
            transform: translateY(-2px) scale(1.02);
          }

          .image-wrapper {
            position: relative;
            overflow: hidden;
            border-radius: 24px;
          }

          .image-wrapper::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(59, 130, 246, 0.1));
            opacity: 0;
            transition: opacity 0.5s ease;
          }

          .image-wrapper:hover::after {
            opacity: 1;
          }

          .image-wrapper img {
            transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .image-wrapper:hover img {
            transform: scale(1.08) rotate(1deg);
          }

          .feature-card {
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
          }

          .feature-card::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 12px;
            padding: 2px;
            background: linear-gradient(135deg, #3b82f6, #2563eb);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.4s;
          }

          .feature-card:hover::before {
            opacity: 1;
          }

          .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 50px rgba(37, 99, 235, 0.2);
          }

          .feature-icon {
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .feature-card:hover .feature-icon {
            transform: scale(1.15) rotate(5deg);
            background: linear-gradient(135deg, #3b82f6, #2563eb);
          }

          .badge {
            animation: float 3s ease-in-out infinite;
          }

          .gradient-text {
            background-size: 200% auto;
            animation: gradient-shift 3s ease infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>

        {/* Header Section with Framer Motion */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <span className="badge inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
              WHO WE ARE
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-gray-900"
            variants={itemVariants}
          >
            About{' '}
            <span className="gradient-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Our Brand
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Passionate About Properties, Dedicated to Your Vision
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Image Section with Framer Motion */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <div className="image-wrapper">
              <img
                src={brand_img}
                alt="Our Brand"
                className="w-full h-full object-cover aspect-[9:10]"
              />
            </div>
          </motion.div>

          {/* Right: Content Section with Framer Motion */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={contentVariants}
          >
            
            {/* Stats Grid with Stagger Animation */}
            <motion.div 
              className="grid grid-cols-2 gap-5 mb-10"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredStat(index)}
                  onHoverEnd={() => setHoveredStat(null)}
                  className="stat-card bg-white p-6 rounded-xl shadow-md border border-gray-100"
                >
                  <div className="stat-icon text-3xl mb-2">{stat.icon}</div>
                  <motion.p 
                    className="text-5xl font-bold bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2"
                    animate={hoveredStat === index ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-gray-600 text-sm font-medium leading-tight">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Description Text with Stagger */}
            <motion.div 
              className="space-y-4 mb-8"
              variants={containerVariants}
            >
              <motion.p 
                className="text-gray-700 leading-relaxed text-lg"
                variants={itemVariants}
              >
                With over a decade of excellence in real estate development, we've transformed visions into reality across <span className="font-semibold text-blue-600">20 thousand square feet</span> of delivered projects.
              </motion.p>
              <motion.p 
                className="text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                Our commitment to quality, innovation, and customer satisfaction drives every project we undertake, ensuring spaces that inspire and endure for generations.
              </motion.p>
            </motion.div>

            {/* CTA Button with Motion */}
            <motion.button 
              className="btn-primary bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg text-base"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Learn More About Us</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Features with Stagger Animation */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="feature-card text-center p-6 bg-white rounded-xl shadow-md"
            >
              <motion.div 
                className="feature-icon w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;