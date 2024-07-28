#!/bin/bash

# Install Tailwind CSS via npm
echo "Installing Tailwind CSS..."
npm install -D tailwindcss

# Initialize Tailwind CSS configuration
echo "Initializing Tailwind CSS configuration..."
npx tailwindcss init

# Create Tailwind CSS input file
echo "Creating Tailwind CSS input file..."
mkdir -p src/styles
cat <<EOT > src/styles/tailwind.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOT

# Update the main CSS file
echo "Updating the main CSS file..."
cat <<EOT > src/index.css
@import './styles/tailwind.css';
EOT

# Update tailwind.config.js
echo "Updating tailwind.config.js..."
cat <<EOT > tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOT

# Provide next steps
echo "Tailwind CSS has been successfully installed and configured!"
echo "You can now start your React app with 'npm start' and use Tailwind classes in your components."

# End of script

