'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { getImagePath } from '../utils/imagePath';
import { useDeviceInfo } from '../utils/deviceDetection';

const blogPosts = [
  {
    id: 1,
    image: '/images/blog-1.jpg',
    date: 'Des 25, 2023',
    title: 'Unveiling the Hottest Travel Destinations of the Year',
    description: 'Dive into a world of wanderlust as we unveil the hottest travel destinations of the year.'
  },
  {
    id: 2,
    image: '/images/blog-2.jpg',
    date: 'Nov 25, 2024',
    title: "Exclusive Peek into the World's Most Luxurious Getaways",
    description: "Indulge in opulence as we provide an exclusive peek into the world's most luxurious getaways."
  }
];

const Blog = () => {
  const { isMobile } = useDeviceInfo();

  return (
    <section id="blog" className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title mb-1 sm:mb-2 md:mb-4"
          >
            Our Blog
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            Our tour memories
          </motion.h3>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] rounded-[15px] xs:rounded-[20px] sm:rounded-[30px] md:rounded-[50px] lg:rounded-[71px] overflow-hidden mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                <Image
                  src={getImagePath(post.image)}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="bg-white/50 rounded-[15px] xs:rounded-[20px] sm:rounded-[30px] md:rounded-[50px] lg:rounded-[71px] p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8">
                <p className="font-poppins text-sm xs:text-base sm:text-lg md:text-xl lg:text-[22px] text-secondary mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                  {post.date}
                </p>
                <h4 className="font-outfit font-semibold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[40px] text-primary mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                  {post.title}
                </h4>
                <p className="font-outfit font-light text-xs xs:text-sm sm:text-base md:text-lg lg:text-[22px] text-secondary">
                  {post.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="button-primary"
          >
            View More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Blog; 