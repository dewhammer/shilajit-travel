/**
 * Utility function to handle image paths consistently across environments
 * This ensures images work correctly in both development and production
 */
export const getImagePath = (path: string): string => {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    // Check if we're on GitHub Pages (contains github.io in hostname)
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    // For GitHub Pages, we need the repo name in the path
    // For Vercel and local development, we don't need a prefix
    const basePath = isGitHubPages ? '/shilajit-travel' : '';
    return `${basePath}${path}`;
  }
  
  // Server-side rendering or static generation - use environment detection
  // This is a fallback and might not be accurate for all deployment scenarios
  const basePath = process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true' 
    ? '/shilajit-travel' 
    : '';
  
  return `${basePath}${path}`;
}; 