Bits & Bots Project

Description
Bits & Bots is a video game website with various functionalities, including a browsing page, game detail pages, a shopping cart, and user authentication. This project uses a React front-end and a Strapi back-end hosted on Strapi Cloud.

Prerequisites
Make sure you have the following software installed on your machine:

- Node.js (version 14.x or later)
- npm (version 6.x or later)
- A code editor like Visual Studio Code

Setup instructions

1. Clone the project
   https://github.com/Jonathan-Hafell/exam-resit
2. Install dependencies
   Cd exam-resit
   Npm install
3. Obtain an API key
   Access the Strapi Cloud Dashboard: Go to “https://celebrated-art-c3e8097696.strapiapp.com/admin/auth/login” and log in.
   Once logged in navigate to the API Keys Section.
   Generate a New API Key: Click on the button to create a new API key. Give it a name, set the appropriate permissions, and copy the generated key.
4. Create a .env File
   Create a .env file in the root directory of the project. Add the following environment variable to the file:
   VITE_API_KEY=”your_generated_api_key_here”
5. Running the Project
   To run the project locally, use the following command:
   Npm run dev

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
