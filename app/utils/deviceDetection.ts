/**
 * Utility functions for device and browser detection
 */

export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  browser: string;
  os: string;
}

/**
 * Detects the user's device type and browser information
 * This function should be used client-side only
 */
export const getDeviceInfo = (): DeviceInfo => {
  // Default values for server-side rendering
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      browser: 'unknown',
      os: 'unknown'
    };
  }

  const userAgent = window.navigator.userAgent;
  
  // Detect mobile devices
  const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) && window.innerWidth < 768;
  
  // Detect tablets
  const isTablet = /iPad|Android|Tablet/i.test(userAgent) || (window.innerWidth >= 768 && window.innerWidth <= 1024);
  
  // Detect desktop
  const isDesktop = !isMobile && !isTablet;
  
  // Detect browser
  let browser = 'unknown';
  if (/Firefox/i.test(userAgent)) browser = 'firefox';
  else if (/Chrome/i.test(userAgent)) browser = 'chrome';
  else if (/Safari/i.test(userAgent)) browser = 'safari';
  else if (/Edge/i.test(userAgent)) browser = 'edge';
  else if (/MSIE|Trident/i.test(userAgent)) browser = 'ie';
  
  // Detect OS
  let os = 'unknown';
  if (/Windows/i.test(userAgent)) os = 'windows';
  else if (/Macintosh|Mac OS X/i.test(userAgent)) os = 'mac';
  else if (/Linux/i.test(userAgent)) os = 'linux';
  else if (/Android/i.test(userAgent)) os = 'android';
  else if (/iPhone|iPad|iPod/i.test(userAgent)) os = 'ios';
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    browser,
    os
  };
};

/**
 * CSS class helper for device-specific styling
 * This function should be used client-side only
 */
export const getDeviceClasses = (): string => {
  const { isMobile, isTablet, browser, os } = getDeviceInfo();
  
  return `${isMobile ? 'is-mobile' : ''} ${isTablet ? 'is-tablet' : ''} browser-${browser} os-${os}`.trim();
};

/**
 * Hook to use device info in components
 * Usage: const deviceInfo = useDeviceInfo();
 */
export const useDeviceInfo = (): DeviceInfo => {
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      browser: 'unknown',
      os: 'unknown'
    };
  }
  
  // In a real implementation, you would use useState and useEffect
  // to handle this properly with React hooks
  return getDeviceInfo();
}; 