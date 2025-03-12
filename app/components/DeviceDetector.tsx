'use client';

import { useEffect } from 'react';
import { getDeviceClasses } from '../utils/deviceDetection';

/**
 * Component that adds device-specific classes to the body element
 * This is a client-side only component
 */
const DeviceDetector = () => {
  useEffect(() => {
    // Add device classes to body
    const deviceClasses = getDeviceClasses();
    document.body.className += ` ${deviceClasses}`;
    
    // Handle resize events to update classes if needed
    const handleResize = () => {
      // Remove old classes
      const oldClasses = document.body.className.split(' ').filter(cls => 
        !cls.startsWith('is-') && !cls.startsWith('browser-') && !cls.startsWith('os-')
      ).join(' ');
      
      // Add new classes
      document.body.className = `${oldClasses} ${getDeviceClasses()}`;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // This component doesn't render anything
  return null;
};

export default DeviceDetector; 