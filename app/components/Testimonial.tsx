'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Profile */}
          <div className="flex items-center gap-8">
            <div className="relative w-32 h-32">
              <Image
                src="/images/testimonial.jpg"
                alt="Steve Jacobs"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div>
              <h4 className="font-outfit font-medium text-[38px] text-primary mb-3">
                Steve Jacobs
              </h4>
              <p className="font-outfit text-[28px] text-secondary">
                One of Our Client
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-2xl">
            <p className="font-outfit font-light text-[28px] leading-[1.26] text-secondary">
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