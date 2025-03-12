'use client';

import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { useDeviceInfo } from '../utils/deviceDetection';

const menuItems = {
  Menu: ['Home', 'About', 'Blog', 'Contact'],
  Support: ['WhatsApp', 'Instagram', 'Telegram', 'Facebook'],
  FAQ: ['Booking', 'Privacy Policy', 'Payments', 'Terms & Conditions']
};

const Footer = () => {
  const { isMobile } = useDeviceInfo();

  const scrollToSection = (sectionId: string) => {
    // Map menu items to their corresponding section IDs
    const sectionMap: { [key: string]: string } = {
      'home': 'hero',
      'about': 'about',
      'blog': 'blog',
      'contact': 'contact',
    };

    const section = document.getElementById(sectionMap[sectionId.toLowerCase()] || sectionId.toLowerCase());
    if (section) {
      // Prevent default scrolling behavior
      const preventDefaultScroll = (e: Event) => {
        e.preventDefault();
      };
      
      // Add event listener to prevent default scroll
      window.addEventListener('scroll', preventDefaultScroll, { passive: false });
      
      // Get the target position
      const start = window.pageYOffset;
      const end = section.getBoundingClientRect().top + window.pageYOffset;
      const distance = end - start;
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
        const position = start + distance * easeProgress;
        
        window.scrollTo(0, position);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animate);
        } else {
          // Remove event listener when animation is complete
          window.removeEventListener('scroll', preventDefaultScroll);
        }
      }

      requestAnimationFrame(animate);
    }
  };

  return (
    <footer id="contact" className="bg-primary text-white py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Menu Sections */}
          {Object.entries(menuItems).map(([title, items], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="font-outfit font-medium text-lg xs:text-xl sm:text-2xl md:text-[28px] mb-3 sm:mb-4 md:mb-6">
                {title}
              </h3>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                {items.map((item) => (
                  <li key={item}>
                    {title === 'Menu' ? (
                      <button
                        onClick={() => scrollToSection(item)}
                        className="font-outfit text-base xs:text-lg sm:text-xl md:text-[24px] text-[#A1A1A1] hover:text-white transition-colors text-left w-full"
                      >
                        {item}
                      </button>
                    ) : (
                      <a
                        href="#"
                        className="font-outfit text-base xs:text-lg sm:text-xl md:text-[24px] text-[#A1A1A1] hover:text-white transition-colors block"
                      >
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="font-outfit font-medium text-lg xs:text-xl sm:text-2xl md:text-[28px] mb-3 sm:mb-4 md:mb-6">
              Newsletter
            </h3>
            <p className="font-outfit text-sm xs:text-base sm:text-lg md:text-[20px] text-[#A1A1A1] mb-4 sm:mb-6 md:mb-8">
              Stay in the loop with our vibrant newsletter! Dive into curated content, 
              travel insights, and exclusive updates delivered straight to your inbox.
            </p>
            
            {/* Email Input */}
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-2 border-[#464646] rounded-full py-2 xs:py-3 sm:py-3.5 md:py-4 pl-10 xs:pl-12 sm:pl-14 pr-24 xs:pr-28 sm:pr-32 md:pr-36 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors text-xs xs:text-sm sm:text-base md:text-lg"
                  required
                />
                <EnvelopeIcon className="absolute left-3 xs:left-4 sm:left-5 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#A1A1A1]" />
                <button 
                  type="submit"
                  className="absolute right-2 xs:right-2.5 sm:right-3 bg-white text-primary font-outfit font-medium text-xs xs:text-sm sm:text-base md:text-[20px] px-3 xs:px-4 sm:px-6 md:px-8 py-1 xs:py-1.5 sm:py-2 md:py-2.5 rounded-full hover:bg-[#f4f4f4] transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 