Anunnaki Cuneiform Calculator
This project is a React-based calculator themed around the Anunnaki, featuring cuneiform numerals and styling reminiscent of ancient Mesopotamian artifacts blended with futuristic elements.
Prerequisites
Before you begin, ensure you have the following installed on your local machine:

Node.js (version 14.0.0 or later)
npm (usually comes with Node.js)

You can check if you have Node.js and npm installed by running these commands in your terminal:
Copynode --version
npm --version
If they're not installed, download and install them from nodejs.org.
Setting Up the Project

Create a new React application:
Copynpx create-react-app anunnaki-calculator
cd anunnaki-calculator

Install Tailwind CSS:
Copynpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Replace the content of tailwind.config.js with:
javascriptCopymodule.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

Replace the content of src/index.css with:
cssCopy@tailwind base;
@tailwind components;
@tailwind utilities;

Replace the content of src/App.js with the Anunnaki Calculator code provided.

Running the Application
To run the application:

In the project directory, run:
Copynpm start

Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.
Usage
Use the calculator by clicking on the cuneiform numerals and operation symbols. The "Submit" button (𒉺𒅁𒊒) calculates the result, while the "Clear" button (𒆤𒂊𒊏) resets the calculator.
Enjoy your Anunnaki Cuneiform Calculator!
