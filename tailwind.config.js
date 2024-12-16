/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [	
	'./cmp/**/*.{js,jsx,ts,tsx}' 
    './App.{js,jsx,ts,tsx}',       // Main App component
    './screens/**/*.{js,jsx,ts,tsx}', // Your screen components
    './app/**/*.{js,jsx,ts,tsx}', // Your custom components
    './**/*.html',                   // Add this for web compatibility
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
