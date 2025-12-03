# Vlearni

**Vlearni** is an interactive knowledge-testing platform built with **React** and styled using **Tailwind CSS**. Users can test their knowledge in different categories, including **Frontend Development**, **Backend Development**, **Full Stack Development**, **HR**, **Admin**, and **General Knowledge (GK)**. The platform uses **localStorage** for authentication, with no backend required.

This project is deployed on **Vercel** for seamless hosting and scalability.

## Live

You can view the live demo of the project here:  
[Vlearni Demo](https://vlearni.vercel.app/)

## Features

- **Role-based Access**: Users can choose their role (Frontend Developer, Backend Developer, Full Stack Developer, HR, Admin, or General Knowledge) to access relevant categories.
- **Multiple Categories**: Each role has specific categories of MCQs to help users test their knowledge.
- **React-based Interface**: Built with **React**, offering a dynamic and responsive user experience.
- **Styled with Tailwind CSS**: The user interface is designed with **Tailwind CSS**, a utility-first CSS framework for rapid UI development.
- **Authentication via localStorage**: User login is handled locally using **localStorage**, with no backend required.
- **Real-time Updates**: Automatic deployment updates via **Vercel** whenever changes are made to the repository.

## Categories

Each role has access to specific categories of MCQs:

- **Frontend Developer**: Access to frontend-related topics (HTML, CSS, JavaScript, React, and other frameworks).
- **Backend Developer**: Access to backend technologies such as Node.js, Databases (SQL/NoSQL), and server-side programming.
- **Full Stack Developer**: Access to both frontend and backend categories.
- **HR**: Access to HR-related topics, such as interview questions, management skills, and HR concepts.
- **Admin**: Full access to all categories and user management features.
- **General Knowledge (GK)**: Access to questions on a variety of general knowledge topics (current affairs, history, geography, etc.).

## Technologies Used

- **Frontend**: React, HTML, CSS, JavaScript
- **Styling**: Tailwind CSS (for utility-first styling)
- **User Authentication**: localStorage (for storing user credentials and session data)
- **Deployment**: Vercel
- **Routing**: React Router (for navigation between pages)

## Login Credentials (For Testing)

- For testing purposes, you can log in using the following hardcoded credentials:

- Email: user@learn.com

- Password: learn

**Note: These credentials are hardcoded for testing purposes and cannot be changed by the user. Once logged in, users will be able to access the tests.**

## Authentication (localStorage)

- The application uses localStorage to store the user session. When the user logs in with the provided credentials:

- Hardcoded Credentials: The login form checks if the entered email and password match the hardcoded values.

- Session Persistence: If the login is successful, the user’s session is stored in localStorage under the key currentUser. This allows the user to stay logged in even after page refreshes.

- Logout: The user can log out, which removes the currentUser data from localStorage.

## Deployment

- This project is deployed using Vercel. Each time you push changes to the main branch, Vercel automatically redeploys the application.

## Vercel Deployment Details

- Automatic Deployments: Each change pushed to the GitHub repository triggers an automatic deployment to the live environment on Vercel.

- Build Settings: Vercel automatically detects the build settings for React projects.


---

### Key Points in the 

- **Login**: The login is hardcoded with specific credentials that the user can use to log in for testing purposes.
- **localStorage**: The app uses **localStorage** to store the user session after a successful login.
- **No Registration**: Since registration is not implemented (because the credentials are hardcoded), the README clarifies that users cannot register themselves.
- **Categories and Test**: After login, users can access different test categories based on their role.
- **Vercel Deployment**: Information about automatic deployment on **Vercel**.
