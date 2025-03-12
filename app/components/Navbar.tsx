'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, slideIn } from '../utils/animations';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Custom smooth scroll with easing
      const start = window.pageYOffset;
      const end = section.getBoundingClientRect().top + window.pageYOffset;
      const duration = 1000; // 1 second
      let startTime: number | null = null;

      function easeInOutCubic(t: number): number {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      function animate(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        const easeProgress = easeInOutCubic(progress);
        const position = start + (end - start) * easeProgress;
        
        window.scrollTo(0, position);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      variants={fadeIn('down')}
      initial="hidden"
      animate="visible"
      className="absolute top-0 left-0 right-0 z-50 py-4 md:py-6 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="font-poppins font-bold text-base sm:text-lg md:text-[19px] tracking-[0.07em] text-white">
            TRAVELAND
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 lg:gap-16">
          <div className="flex items-center gap-8 lg:gap-16">
            {['Home', 'About', 'Blog', 'Contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white font-poppins text-base sm:text-lg md:text-[19px] relative group"
              >
                {item}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-white origin-left"
                />
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white font-poppins font-semibold text-base sm:text-lg md:text-[19px] tracking-[0.1em]"
          >
            LOG IN
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            variants={slideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-lg py-6 px-4"
          >
            <div className="flex flex-col items-center gap-6">
              {['Home', 'About', 'Blog', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  variants={fadeIn('up', index * 0.1)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white font-poppins text-base relative group"
                >
                  {item}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-white origin-left"
                  />
                </motion.button>
              ))}
              <motion.button
                variants={fadeIn('up', 0.4)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white font-poppins font-semibold text-base tracking-[0.1em]"
              >
                LOG IN
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 