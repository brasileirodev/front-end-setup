/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'small-cell': '320px',
        'medium-cell': '375px',
        'big-cell': '425px',
        tablet: '768px',
        notebook: '1024px',
        'small-monitor': '1280px',
        'big-monitor': '1536px',
      },
    },
  },
  plugins: [],
};
