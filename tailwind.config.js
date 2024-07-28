// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' for auto-detect based on user preference
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#1a202c', // Customize your dark mode background color
        darkText: '#ffffff', // Customize your dark mode text color
        lightBg: '#f7fafc', // Customize your light mode background color
        lightText: '#2d3748', // Customize your light mode text color
      },
    },
  },
  plugins: [],
};

