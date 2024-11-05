# CilliBlog

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Key Components](#key-components)
6. [Setup Instructions](#setup-instructions)
7. [Usage](#usage)
8. [Conclusion](#conclusion)

## Project Overview
CilliBlog is a modern blog application that allows users to share their thoughts, ideas, and experiences through blog posts. The application incorporates user authentication and role management, enabling both regular users and administrators to interact with the content in distinct ways.

## Features
- **User Registration and Authentication:** Users can register, log in, and manage their profiles.
- **CRUD Operations on Blogs:** Users can create, view, edit, and delete their blog posts.
- **User Roles:** Different roles (user and admin) for managing content.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Image Uploads:** Users can upload images with their blog posts using Cloudinary.
- **Error Handling and Notifications:** Uses toast notifications for user feedback.

## Technologies Used
### Frontend
- **React:** JavaScript library for building user interfaces.
- **Axios:** For making HTTP requests.
- **React Router:** For routing and navigation.
- **Tailwind CSS:** For styling the application.
- **Zustand:** For state management.
- **React Hot Toast:** For notifications.

### Backend
- **Node.js with Express:** Server-side framework.
- **MongoDB:** NoSQL database for data storage.
- **Cloudinary:** For managing image uploads.

## Project Structure
```
BlogApplication/
├── frontend
│   ├── .gitignore
│   ├── README.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── src
│       ├── components
│       ├── Dashboard
│       ├── Home
│       └── Pages
└── backend
    ├── .env
    ├── package.json
    ├── index.js
    ├── jwt
    ├── middleware
    ├── models
    ├── routes
    ├── server.js
    └── config
```

## Key Components
1. **AuthProvider:** Context for managing user authentication state.
2. **Register Component:** Facilitates user registration.
3. **Login Component:** Manages user login functionality.
4. **Home Component:** The landing page displaying recent blog posts.
5. **Detail Component:** Displays individual blog post details.
6. **NotFound Component:** Renders a 404 error page.
7. **Dashboard Component:** Admin interface for managing blogs and users.

## Setup Instructions
1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd cilliblog
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**
   - Create a `.env` file in the root directory and add your configurations (e.g., backend API URL).

4. **Run the Application:**
   ```bash
   npm start
   ```

## Usage
1. Open the application in your browser at `http://localhost:3000`.
2. Navigate to the registration page to create a new account.
3. Log in to access the dashboard and create blog posts.
4. Browse and read existing blog posts on the home page.

## Conclusion
CilliBlog is a comprehensive blogging platform that allows users to share and manage content effectively. It demonstrates the use of modern web technologies and best practices in building a user-friendly interface.