module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './_includes/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
    fontFamily: {
      display: ['Playfair Display', 'serif', 'system-ui'],
      body: ['Zen Kaku Gothic Antique', 'sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        onion: '#CD6868',
      },
    },
  },
  plugins: [],
};
