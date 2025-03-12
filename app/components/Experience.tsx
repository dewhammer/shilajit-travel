'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { getImagePath } from '../utils/imagePath';
import { useDeviceInfo } from '../utils/deviceDetection';

const Experience = () => {
  const { isMobile } = useDeviceInfo();

  return (
    <section id="about" className="w-full py-10 sm:py-14 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
      {/* First Experience Section */}
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 relative aspect-[4/3]"
        >
          <Image
            src={getImagePath('/images/experience-1.jpg')}
            alt="Eiffel Mountain Tour"
            fill
            className="object-cover rounded-[20px] xs:rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 rounded-[20px] xs:rounded-[30px] sm:rounded-[40px] md:rounded-[50px]" />
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 text-white">
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-light">Cikarang, West Sulawesi</p>
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-medium mt-1 sm:mt-2">Eiffel Mountain Tour</h3>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-6 mt-6 lg:mt-0"
        >
          <div className="space-y-2 sm:space-y-3 md:space-y-5">
            <span className="text-gray-500 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light">Memorable</span>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-black">For your best<br />experience</h2>
          </div>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-500 leading-relaxed">
            For your best experience, we curate moments that transcend expectation. 
            Immerse yourself in a world where every detail is meticulously crafted 
            to ensure unparalleled satisfaction.
          </p>
          <button className="bg-black text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm xs:text-base sm:text-lg md:text-xl font-semibold hover:bg-black/90 transition-colors">
            Read More
          </button>
        </motion.div>
      </div>

      {/* Second Experience Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 relative aspect-[4/3]"
        >
          <Image
            src={getImagePath('/images/experience-2.jpg')}
            alt="Safari Park Tourism"
            fill
            className="object-cover rounded-[20px] xs:rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 rounded-[20px] xs:rounded-[30px] sm:rounded-[40px] md:rounded-[50px]" />
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 text-white">
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-light">Kudus, Central Java</p>
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-medium mt-1 sm:mt-2">Safari Park Tourism</h3>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-6 mt-6 lg:mt-0"
        >
          <div className="space-y-2 sm:space-y-3 md:space-y-5">
            <span className="text-gray-500 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light">Experience</span>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-black">Get your memorable<br />adventure with us</h2>
          </div>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-500 leading-relaxed">
            For your best experience, we curate moments that transcend expectation. 
            Immerse yourself in a world where every detail is meticulously crafted 
            to ensure unparalleled satisfaction.
          </p>
          <button className="bg-black text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm xs:text-base sm:text-lg md:text-xl font-semibold hover:bg-black/90 transition-colors">
            Read More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 