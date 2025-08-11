      
# 💻 React Job Posting Platform - An Educational Project

> A simple and interactive job listing application developed for educational purposes. This project demonstrates fundamental React concepts, data fetching (JSON Server), state management, routing (React Router DOM), and modern UI development (Tailwind CSS).


## 📖 Table of Contents

*   [🔍 Project Overview](#-project-overview)
*   [✨ Features](#-features)
*   [🚀 Technologies](#-technologies)
*   [📦 Setup](#-setup)
*   [▶️ Running the Project](#-running-the-project)
*   [🔗 API / Data Source](#-api--data-source)


---

## 🔍 Project Overview

This project serves as an **educational application** developed using React to simulate a basic job listing platform. Its primary goal is to demonstrate the usage of common libraries and concepts within the React ecosystem, such as components, props, state management, routing, and asynchronous operations. Job postings are provided via a simple JSON server.

## ✨ Features

*   **Job Listing:** Display all available job postings on the main page.
*   **Job Detail Page:** View detailed information for each job posting on a dedicated page.
*   **Loading Indicators:** Provide visual feedback to the user during data fetching with loading animations (`react-spinners`).
*   **Notifications:** Show informative messages to the user after actions (e.g., success or error notifications) using `react-toastify`.
*   **Page Routing:** Seamless navigation between different pages within the application (`react-router-dom`).
*   **Styling:** Modern and rapid UI development using Tailwind CSS.
*   **Local API:** Integration with JSON Server to provide mock data in the development environment.

## 🚀 Technologies

Key technologies and libraries used in this project:

*   **Frontend:**
    *   [React.js](https://react.dev/) - A JavaScript library for building user interfaces.
    *   [Vite](https://vitejs.dev/) - A fast development server and build tool.
    *   [React Router DOM](https://reactrouter.com/en/main) - For client-side routing in single-page applications.
    *   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
    *   [React Icons](https://react-icons.github.io/react-icons/) - Popular icon sets as React components.
    *   [React Spinners](https://www.davidhu.io/react-spinners/) - React components for loading animations.
    *   [React Toastify](https://fkhadra.github.io/react-toastify/) - For highly customizable toast notifications.
*   **Mock API:**
    *   [JSON Server](https://github.com/typicode/json-server) - To create a fake REST API with zero coding.
*   **Development Tools:**
    *   [ESLint](https://eslint.org/) - For code quality and style consistency.
    *   [Autoprefixer](https://github.com/postcss/autoprefixer) / [PostCSS](https://postcss.org/) - Tools for processing CSS.

## 📦 Setup

Follow these steps to get your project up and running on your local machine.

### Prerequisites

*   [Node.js](https://nodejs.org/): Version 18 or higher is recommended.
*   [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/).

### Steps

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/[YOUR_GITHUB_USERNAME]/[YOUR_REPO_NAME].git
    cd [YOUR_REPO_NAME]
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

---

## ▶️ Running the Project

This project requires both a frontend development server and a mock API server to serve job postings. You need to run both concurrently.

1.  **Start the Local API Server:**
    From the project's root directory, start JSON Server to serve the data from `src/jobs.json`:
    ```bash
    npm run server
    # or
    yarn server
    ```
    This command will make the job postings data available at `http://localhost:8000/jobs`. Keep this terminal window open.

2.  **Start the React Development Server:**
    In a separate terminal window, also from the project's root directory, start the React application:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will typically open at `http://localhost:5173` (or another available port). Visit this address in your browser to view the application.

**Note:** Ensure you start the `npm run server` command first, otherwise the application will not be able to fetch job postings.

## 🔗 API / Data Source

The project uses static job posting data defined in the `src/jobs.json` file. This data is exposed as a simple REST API via [`json-server`](https://github.com/typicode/json-server).

*   **API Endpoint:** `http://localhost:8000/jobs`
*   This API is used to list job postings and fetch details of a single job.

   
