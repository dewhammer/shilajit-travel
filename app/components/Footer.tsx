'use client';

import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const menuItems = {
  Menu: ['Home', 'About', 'Blog', 'Contact'],
  Support: ['WhatsApp', 'Instagram', 'Telegram', 'Facebook'],
  FAQ: ['Booking', 'Privacy Policy', 'Payments', 'Terms & Conditions']
};

const Footer = () => {
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
    <footer id="contact" className="bg-primary text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Menu Sections */}
          {Object.entries(menuItems).map(([title, items], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="font-outfit font-medium text-[28px] mb-6">
                {title}
              </h3>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item}>
                    {title === 'Menu' ? (
                      <button
                        onClick={() => scrollToSection(item)}
                        className="font-outfit text-[24px] text-[#A1A1A1] hover:text-white transition-colors text-left w-full"
                      >
                        {item}
                      </button>
                    ) : (
                      <a
                        href="#"
                        className="font-outfit text-[24px] text-[#A1A1A1] hover:text-white transition-colors block"
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
            <h3 className="font-outfit font-medium text-[28px] mb-6">
              Newsletter
            </h3>
            <p className="font-outfit text-[20px] text-[#A1A1A1] mb-8">
              Stay in the loop with our vibrant newsletter! Dive into curated content, 
              travel insights, and exclusive updates delivered straight to your inbox.
            </p>
            
            {/* Email Input */}
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-2 border-[#464646] rounded-full py-4 pl-14 pr-36 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors text-lg"
                  required
                />
                <EnvelopeIcon className="absolute left-5 w-6 h-6 text-[#A1A1A1]" />
                <button 
                  type="submit"
                  className="absolute right-3 bg-white text-primary font-outfit font-medium text-[20px] px-8 py-2.5 rounded-full hover:bg-[#f4f4f4] transition-colors"
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