module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
    },
    container: {
      padding: '1rem',
      center: true,
    },
  },
  plugins: [],
};
