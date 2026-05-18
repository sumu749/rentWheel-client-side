# RentWheels

RentWheels is a premium car rental platform where users can browse, book, and manage luxury vehicles with a modern and secure experience.

## Live Website

Client Live Link: https://rentwheel-by-sumu.web.app

## Server Repository

Server Live Link: https://rent-wheel-server-side.vercel.app

---

## Features

- User Authentication with Firebase Email/Password and Google Login
- Protected Routes and Secure API Access using Firebase Admin SDK
- Full Car Management System (Add, Update, Delete Cars)
- Car Booking System with Availability Control
- Prevents Double Booking Automatically
- Modern Responsive UI with Tailwind CSS and React Icons
- Search Cars by Name Functionality
- Real-time Booking Status (Available / Booked)
- SweetAlert2 Premium Confirmation Modals
- Custom 404 Error Page and Global Loading Spinner

---

## Technologies Used

### Frontend

- React
- React Router
- Tailwind CSS
- DaisyUI
- Axios
- Firebase Authentication
- React Hot Toast
- SweetAlert2
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB
- Firebase Admin SDK

---

## Environment Variables

Create a `.env` file in both client and server.

### Client

```env
VITE_API_URL=your_server_url
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Server

```env
DB_USER=your_db_user
DB_PASS=your_db_password

FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY=your_private_key
```

---

## Run Locally

### Client

```bash
npm install
npm run dev
```

### Server

```bash
npm install
nodemon index.js
```

---

## Author

Developed by Sumaiya Alam
