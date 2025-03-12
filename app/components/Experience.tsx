'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Experience = () => {
  return (
    <section id="about" className="w-full py-20 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto space-y-32">
      {/* First Experience Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 relative aspect-[4/3]"
        >
          <Image
            src="/images/experience-1.jpg"
            alt="Eiffel Mountain Tour"
            fill
            className="object-cover rounded-[50px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 rounded-[50px]" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-2xl font-light">Cikarang, West Sulawesi</p>
            <h3 className="text-4xl font-medium mt-2">Eiffel Mountain Tour</h3>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 space-y-6"
        >
          <div className="space-y-5">
            <span className="text-gray-500 text-4xl font-light">Memorable</span>
            <h2 className="text-5xl md:text-7xl font-normal text-black">For your best<br />experience</h2>
          </div>
          <p className="text-2xl md:text-3xl font-light text-gray-500 leading-relaxed">
            For your best experience, we curate moments that transcend expectation. 
            Immerse yourself in a world where every detail is meticulously crafted 
            to ensure unparalleled satisfaction.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-black/90 transition-colors">
            Read More
          </button>
        </motion.div>
      </div>

      {/* Second Experience Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 relative aspect-[4/3]"
        >
          <Image
            src="/images/experience-2.jpg"
            alt="Safari Park Tourism"
            fill
            className="object-cover rounded-[50px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 rounded-[50px]" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-2xl font-light">Kudus, Central Java</p>
            <h3 className="text-4xl font-medium mt-2">Safari Park Tourism</h3>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 space-y-6"
        >
          <div className="space-y-5">
            <span className="text-gray-500 text-4xl font-light">Experience</span>
            <h2 className="text-5xl md:text-7xl font-normal text-black">Get your memorable<br />adventure with us</h2>
          </div>
          <p className="text-2xl md:text-3xl font-light text-gray-500 leading-relaxed">
            For your best experience, we curate moments that transcend expectation. 
            Immerse yourself in a world where every detail is meticulously crafted 
            to ensure unparalleled satisfaction.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-black/90 transition-colors">
            Read More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 