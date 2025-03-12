'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CalendarIcon, UserIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';
import { fadeIn, staggerContainer, scaleIn } from '../utils/animations';

const Hero = () => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [persons, setPersons] = useState('1');

  return (
    <div id="hero" className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
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
        className="relative h-full w-full flex flex-col justify-center items-center"
      >
        <motion.div
          variants={fadeIn('up')}
          className="w-full flex flex-col items-center justify-center"
        >
          <motion.h1 
            variants={fadeIn('up', 0.2)}
            className="font-outfit font-semibold text-4xl sm:text-6xl md:text-8xl lg:text-[149px] leading-[1.1] tracking-[0.29em] text-white mb-4 text-center"
            style={{ transform: 'translateX(0.145em)' }}
          >
            SHILAJIT WARRIOR
          </motion.h1>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            className="font-sfpro text-base sm:text-xl md:text-2xl lg:text-[28px] tracking-[0.25em] text-white mb-8 md:mb-16 text-center"
            style={{ transform: 'translateX(0.125em)' }}
          >
            START YOUR JOURNEY HERE WITH US
          </motion.p>

          {/* Search Box Container - maintains aspect ratio */}
          <motion.div 
            variants={scaleIn}
            className="w-full max-w-[600px] px-4 md:px-8 lg:px-16 mx-auto relative"
          >
            <div className="aspect-[7/1] w-full">
              {/* Search Box Content */}
              <div className="absolute inset-0 bg-white/6 backdrop-blur-md border border-white/11 rounded-full flex items-center">
                <div className="w-full px-[2%] py-[1.5%]">
                  <div className="flex items-center justify-between gap-[2%]">
                    {/* Date Input */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-[4%] flex-1 relative group"
                    >
                      <CalendarIcon className="w-[1.2rem] text-white absolute left-2" />
                      <input 
                        type="date" 
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-transparent text-white pl-8 pr-2 py-1 outline-none font-sfpro text-[0.9rem] md:text-[1rem] transition-all duration-300 focus:bg-white/10 rounded-full"
                      />
                    </motion.div>

                    <div className="w-px h-[1.5rem] bg-white/30" />

                    {/* City Input */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-[4%] flex-1 relative group"
                    >
                      <PaperAirplaneIcon className="w-[1.2rem] text-white absolute left-2 rotate-45" />
                      <input 
                        type="text" 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city"
                        className="w-full bg-transparent text-white pl-8 pr-2 py-1 outline-none font-sfpro text-[0.9rem] md:text-[1rem] transition-all duration-300 focus:bg-white/10 rounded-full"
                      />
                    </motion.div>

                    <div className="w-px h-[1.5rem] bg-white/30" />

                    {/* Person Input */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-[4%] flex-1 relative group"
                    >
                      <UserIcon className="w-[1.2rem] text-white absolute left-2" />
                      <select
                        value={persons}
                        onChange={(e) => setPersons(e.target.value)}
                        className="w-full bg-transparent text-white pl-8 pr-2 py-1 outline-none font-sfpro text-[0.9rem] md:text-[1rem] appearance-none transition-all duration-300 focus:bg-white/10 rounded-full"
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
                      className="bg-[#F4F4F4] text-[#181413] font-poppins font-semibold text-[0.8rem] md:text-[0.9rem] px-6 py-2 rounded-full hover:bg-[#e5e5e5] transition-colors whitespace-nowrap"
                    >
                      Search
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero; 