/**
 * Utility function to handle image paths consistently across environments
 * This ensures images work correctly in both development and production
 */
export const getImagePath = (path: string): string => {
  // For production builds (GitHub Pages, Vercel), we need to include the repo name in the path
  const basePath = process.env.NODE_ENV === 'production' ? '/shilajit-travel' : '';
  return `${basePath}${path}`;
}; 