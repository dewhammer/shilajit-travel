'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const locations = [
  {
    id: 1,
    image: '/images/location-1.jpg',
    location: 'Batanghari, East Lampung',
    title: "Banjarrejo's Mountain Tour",
    size: 'large'
  },
  {
    id: 2,
    image: '/images/location-2.jpg',
    location: 'Tanggerang, Central Jakarta',
    title: 'Dufan Beach Tour',
    size: 'small'
  },
  {
    id: 3,
    image: '/images/location-3.jpg',
    location: 'Kudus, Central Java',
    title: 'Safari Park Tourism',
    size: 'small'
  },
  {
    id: 4,
    image: '/images/location-4.jpg',
    location: 'Cikarang, West Brooklyn',
    title: 'Intan Sport Center',
    size: 'medium'
  }
];

const BestLocations = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-[1000px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title mb-4"
          >
            Best Location
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mb-8"
          >
            Tour in Asia
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-outfit font-light text-2xl md:text-[37px] text-secondary mx-auto"
          >
            Extraordinary natural beauty, enjoy the rich culture
            and experience the friendliness of the local people
          </motion.p>
        </div>

        {/* Location Cards - Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative rounded-[20px] md:rounded-[40px] overflow-hidden group cursor-pointer ${
                location.size === 'large' ? 'lg:col-span-4 aspect-[3/2] md:aspect-[2/1]' :
                location.size === 'medium' ? 'lg:col-span-4 aspect-[3/2] md:aspect-[2/1]' :
                'lg:col-span-2 aspect-square'
              }`}
            >
              <Image
                src={location.image}
                alt={location.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 text-white">
                <p className="font-outfit font-light text-lg md:text-[28px] mb-1 md:mb-2">
                  {location.location}
                </p>
                <h4 className="font-outfit font-medium text-xl md:text-[38px] leading-tight">
                  {location.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestLocations; 