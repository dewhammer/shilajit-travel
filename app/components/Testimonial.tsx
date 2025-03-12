'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { getImagePath } from '../utils/imagePath';
import { useDeviceInfo } from '../utils/deviceDetection';

const Testimonial = () => {
  const { isMobile } = useDeviceInfo();

  return (
    <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12"
        >
          {/* Profile */}
          <div className="flex flex-col xs:flex-row items-center gap-4 xs:gap-6 sm:gap-8">
            <div className="relative w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
              <Image
                src={getImagePath('/images/testimonial.jpg')}
                alt="Steve Jacobs"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="text-center xs:text-left">
              <h4 className="font-outfit font-medium text-2xl xs:text-3xl sm:text-4xl md:text-[38px] text-primary mb-1 sm:mb-2 md:mb-3">
                Steve Jacobs
              </h4>
              <p className="font-outfit text-lg xs:text-xl sm:text-2xl md:text-[28px] text-secondary">
                One of Our Client
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-2xl mt-6 md:mt-0">
            <p className="font-outfit font-light text-lg xs:text-xl sm:text-2xl md:text-[28px] leading-[1.26] text-secondary text-center md:text-left">
              "Embarking on a journey with this travel agency was an absolute 
              game-changer! From seamless planning to unforgettable experiences, every 
              detail was meticulously crafted."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial; 