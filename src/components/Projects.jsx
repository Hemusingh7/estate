import React, { useState, useEffect, useRef } from 'react';
import leftArrow from '../assets/left_arrow.svg';
import rightArrow from '../assets/right_arrow.svg';
import { projectsData } from '../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 640) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, projectsData.length - cardsToShow) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex >= projectsData.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  if (!projectsData || projectsData.length === 0) {
    return <div className="text-center py-20">No projects available</div>;
  }

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  return (
    <motion.div
      ref={sectionRef}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Projects"
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
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes pulse-border {
          0%, 100% { border-color: rgba(59, 130, 246, 0.3); }
          50% { border-color: rgba(59, 130, 246, 0.8); }
        }

        .arrow-btn {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .arrow-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .arrow-btn:hover::before {
          width: 200px;
          height: 200px;
        }

        .arrow-btn:hover {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
        }

        .arrow-btn:active {
          transform: scale(0.95) rotate(0deg);
        }

        .arrow-btn img {
          filter: brightness(0);
          transition: filter 0.3s;
          position: relative;
          z-index: 10;
        }

        .arrow-btn:hover img {
          filter: brightness(0) invert(1);
        }

        .project-card {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 12px;
          padding: 3px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s;
        }

        .project-card:hover::before {
          opacity: 1;
          animation: pulse-border 2s ease-in-out infinite;
        }

        .project-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 30px 60px rgba(59, 130, 246, 0.3);
        }

        .project-image {
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
          border-radius: 12px;
        }

        .project-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.4));
          opacity: 0;
          transition: opacity 0.5s;
        }

        .project-card:hover .project-image::after {
          opacity: 1;
        }

        .project-card:hover .project-image img {
          transform: scale(1.15) rotate(2deg);
        }

        .project-image img {
          transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .project-info {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .project-info::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s;
        }

        .project-card:hover .project-info::before {
          left: 100%;
        }

        .project-card:hover .project-info {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          background: linear-gradient(135deg, #ffffff, #f3f4f6);
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

        .progress-indicator {
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
          border-radius: 999px;
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
          Projects{' '}
          <span className={`underline-animated underline underline-offset-4 decoration-1 font-light ${isVisible ? 'visible' : ''}`}>
            Completed
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
          Crafting Spaces, Building Legacies - Explore Our Portfolio
        </p>
      </motion.div>

      {/* Progress Indicator */}
      <motion.div 
        className="max-w-md mx-auto mb-6"
        variants={headerVariants}
      >
        <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
          <motion.div
            className="progress-indicator h-full"
            initial={{ width: "0%" }}
            animate={{ 
              width: `${((currentIndex + 1) / (projectsData.length - cardsToShow + 1)) * 100}%` 
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
          {currentIndex + 1} / {projectsData.length - cardsToShow + 1}
        </p>
      </motion.div>

      {/* Slider Buttons */}
      <motion.div 
        className="flex justify-end items-center mb-8 gap-4"
        variants={buttonVariants}
      >
        <motion.button
          onClick={handlePrevious}
          className="arrow-btn p-3 bg-gray-200 rounded-lg"
          aria-label="Previous Project"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={currentIndex === 0}
          style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
        >
          <img src={leftArrow} alt="Previous" className="w-6 h-6" />
        </motion.button>
        
        <motion.button
          onClick={handleNext}
          className="arrow-btn p-3 bg-gray-200 rounded-lg"
          aria-label="Next Project"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={currentIndex >= projectsData.length - cardsToShow}
          style={{ opacity: currentIndex >= projectsData.length - cardsToShow ? 0.5 : 1 }}
        >
          <img src={rightArrow} alt="Next" className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* Projects slider container */}
      <div className="overflow-hidden">
        <motion.div 
          className="flex gap-8"
          animate={{ 
            x: `-${(currentIndex * 100) / cardsToShow}%` 
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.7
          }}
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="project-image mb-14">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <motion.div 
                  className="project-info inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-1">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span className="px-1 text-blue-500">|</span> {project.location}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Dot Indicators */}
      <motion.div 
        className="flex justify-center gap-2 mt-12"
        variants={buttonVariants}
      >
        {Array.from({ length: projectsData.length - cardsToShow + 1 }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-gradient-to-r from-blue-600 to-purple-600' 
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;