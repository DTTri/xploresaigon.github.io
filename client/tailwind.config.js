/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#55C1FF',
        background: '#FAFAFA',
        text: '#000000',
        textSecondary: '#7C7C7C',
        input: 'rgba(213,213,213,0.4)',
      },
      borderRadius: {
        poster: '12rem',
      },
      translate: {
        mdouble: '-200%',
        double: '200%',
      },
      padding: {
        full: '100%',
      },
    },
  },
  plugins: [import('@tailwindcss/line-clamp')],
};
