# JobHunt

**JobHunt** is a job application platform that connects job seekers with potential employers. It provides functionalities for user registration, login, profile management, job postings and applications. This project consists of two main parts: the **Backend** (API) and the **Frontend** (User Interface).

You can access the deployed frontend here: [JobHunt](https://job-hunt-nayan.vercel.app)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Project Overview

**JobHunt** is a full-stack application with a **Node.js backend** and a **React frontend**. The platform allows users to:

- Register and log in with their credentials.
- Update their profile and upload a profile picture and resume.
- Browse job listings and apply for jobs.
- Employers can post job listings and manage applications.

---

## Technologies Used

### Backend (API)
- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for building the API.
- **MongoDB** (via **Mongoose**): Database for storing user and job data.
- **bcryptjs**: Password hashing for secure authentication.
- **jsonwebtoken**: For creating and verifying JWT tokens.
- **cookie-parser**: Middleware to parse cookies, especially for authentication.
- **cloudinary**: Cloud service for storing profile pictures and resumes.
- **multer**: Middleware for handling file uploads.
- **dotenv**: For environment variable management.
- **helmet**: Security middleware to set HTTP headers.
- **express-rate-limit**: Rate-limiting middleware to prevent abuse.
- **morgan**: HTTP request logger middleware.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS).
  
### Frontend
- **React**: JavaScript library for building the user interface.
- **Redux**: State management tool for handling global application state.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for making API requests.
- **Radix UI**: Set of low-level UI components for building accessible and customizable interfaces.
- **Framer Motion**: Animation library for React.
- **React Router**: Library for routing and navigation in the app.
- **Vite**: Build tool for fast development and bundling.
- **PostCSS**: Tool for transforming CSS with plugins like Autoprefixer.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is provided to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---