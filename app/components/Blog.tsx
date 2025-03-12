'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
  return (
    <section id="blog" className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title mb-4"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
              <div className="relative aspect-[16/9] rounded-[71px] overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="bg-white/50 rounded-[71px] p-8">
                <p className="font-poppins text-[22px] text-secondary mb-4">
                  {post.date}
                </p>
                <h4 className="font-outfit font-semibold text-[40px] text-primary mb-4">
                  {post.title}
                </h4>
                <p className="font-outfit font-light text-[22px] text-secondary">
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