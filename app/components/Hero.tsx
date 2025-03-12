'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CalendarIcon, UserIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { fadeIn, staggerContainer, scaleIn } from '../utils/animations';
import { getImagePath } from '../utils/imagePath';
import { useDeviceInfo } from '../utils/deviceDetection';

const Hero = () => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [persons, setPersons] = useState('1');
  const { isMobile } = useDeviceInfo();

  return (
    <div id="hero" className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src={getImagePath('/images/hero-bg.jpg')}
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Content */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative h-full w-full flex flex-col justify-center items-center px-4"
      >
        <motion.div
          variants={fadeIn('up')}
          className="w-full flex flex-col items-center justify-center"
        >
          <motion.h1 
            variants={fadeIn('up', 0.2)}
            className="font-outfit font-semibold text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[120px] leading-[1.1] tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.29em] text-white mb-1 sm:mb-2 md:mb-4 text-center"
            style={{ transform: 'translateX(0.1em)' }}
          >
            SHILAJIT WARRIOR
          </motion.h1>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            className="font-sfpro text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-xl xl:text-[24px] tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.25em] text-white mb-3 sm:mb-6 md:mb-12 text-center"
            style={{ transform: 'translateX(0.075em)' }}
          >
            START YOUR JOURNEY HERE WITH US
          </motion.p>

          {/* Search Box Container */}
          <motion.div 
            variants={scaleIn}
            className="w-full max-w-[95%] xs:max-w-[90%] sm:max-w-[80%] md:max-w-[600px] mx-auto relative"
          >
            {/* Search Box Content */}
            <div className="bg-white/6 backdrop-blur-md border border-white/11 rounded-xl xs:rounded-2xl sm:rounded-full p-2 xs:p-3 sm:p-4">
              <div className="flex flex-col xs:flex-row items-center gap-1.5 xs:gap-2 sm:gap-3">
                {/* Date Input */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center w-full xs:w-auto flex-1 relative group"
                >
                  <CalendarIcon className="w-3.5 xs:w-4 sm:w-5 text-white absolute left-2" />
                  <input 
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-transparent text-white pl-6 xs:pl-7 sm:pl-8 pr-2 py-1 outline-none font-sfpro text-[10px] xs:text-xs sm:text-sm md:text-base transition-all duration-300 focus:bg-white/10 rounded-full"
                  />
                </motion.div>

                <div className="hidden xs:block w-px h-4 sm:h-5 bg-white/30" />

                {/* City Input */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center w-full xs:w-auto flex-1 relative group"
                >
                  <PaperAirplaneIcon className="w-3.5 xs:w-4 sm:w-5 text-white absolute left-2 rotate-45" />
                  <input 
                    type="text" 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city"
                    className="w-full bg-transparent text-white pl-6 xs:pl-7 sm:pl-8 pr-2 py-1 outline-none font-sfpro text-[10px] xs:text-xs sm:text-sm md:text-base transition-all duration-300 focus:bg-white/10 rounded-full"
                  />
                </motion.div>

                <div className="hidden xs:block w-px h-4 sm:h-5 bg-white/30" />

                {/* Person Input */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center w-full xs:w-auto flex-1 relative group"
                >
                  <UserIcon className="w-3.5 xs:w-4 sm:w-5 text-white absolute left-2" />
                  <select
                    value={persons}
                    onChange={(e) => setPersons(e.target.value)}
                    className="w-full bg-transparent text-white pl-6 xs:pl-7 sm:pl-8 pr-2 py-1 outline-none font-sfpro text-[10px] xs:text-xs sm:text-sm md:text-base appearance-none transition-all duration-300 focus:bg-white/10 rounded-full"
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num} className="text-black">
                        {num} Person{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Search Button */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // Handle search
                    console.log({ date, city, persons });
                  }}
                  className="w-full xs:w-auto mt-1.5 xs:mt-0 bg-[#F4F4F4] text-[#181413] font-poppins font-semibold text-[10px] xs:text-xs sm:text-sm md:text-base px-3 xs:px-4 sm:px-6 py-1 xs:py-1.5 sm:py-2 rounded-full hover:bg-[#e5e5e5] transition-colors"
                >
                  Search
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero; 