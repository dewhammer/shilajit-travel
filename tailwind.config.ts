import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        sfpro: ['SF Pro', 'sans-serif'],
      },
      colors: {
        primary: '#181413',
        secondary: '#959595',
        accent: '#F4F4F4',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.52) 0.01%, rgba(0,0,0,0.55) 100%)',
      },
    },
  },
  plugins: [],
}

export default config 