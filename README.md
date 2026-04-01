# Used Car Dealership Web Application

A full-stack dealership web application where users can browse vehicles and contact the dealer, while admins can manage inventory with a secure dashboard.

This project demonstrates real-world backend development with authentication, file uploads, database integration, and email functionality.

---

##  Features

### Public Website

* Browse vehicle inventory
* View detailed vehicle pages
* Featured vehicle on homepage
* Contact dealer via email form

### Admin Dashboard

* Secure admin login (session-based)
* Add new vehicles
* Edit vehicle details
* Delete vehicles
* Upload vehicle images

### Backend Functionality

* RESTful routing with Express
* PostgreSQL database integration
* Server-side rendering with EJS
* Email sending using Nodemailer
* Cloud image storage using Cloudinary
* File uploads with Multer
* Environment variable management with dotenv

---

##  Tech Stack

**Backend**

* Node.js
* Express.js

**Database**

* PostgreSQL

**Frontend**

* EJS (Embedded JavaScript Templates)
* Custom CSS

**Cloud Services**

* Cloudinary (image hosting)
* Gmail (email via Nodemailer)

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/used-car-dealership.git
cd used-car-dealership
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Create `.env` file

```env
DATABASE_URL=postgresql://postgres:Future1001@localhost:5432/usedcars
SESSION_SECRET=supersecretkey
NODE_ENV=development

CLOUDINARY_CLOUD_NAME=dtgt843fg
CLOUDINARY_API_KEY=387811145884753
CLOUDINARY_API_SECRET=eQEHdkJ1WwY3iz2nbif0ThZR1t8

EMAIL_USER=samuelkwota.sk@gmail.com
EMAIL_PASS=yyrrvlvamilpbrxz
```

---

### 4. Setup PostgreSQL

Create database:

```sql
CREATE DATABASE usedcars;
```

Create table:

```sql
CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY,
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INT NOT NULL,
  price NUMERIC NOT NULL,
  mileage INT NOT NULL,
  image TEXT
);
```

---

### 5. Run the app

```bash
npm start
```

Open in browser:

```
http://localhost:3000
```

---

## 📂 Project Structure

```
used-car-dealership
│
├── config
│   ├── db.js
│   └── cloudinary.js
│
├── routes
│   ├── vehicleRoutes.js
│   ├── adminRoutes.js
│   └── authRoutes.js
│
├── views
│   ├── partials
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   ├── inventory.ejs
│   ├── vehicle.ejs
│   ├── contact.ejs
│   ├── dashboard.ejs
│   └── editVehicle.ejs
│
├── public
│   ├── css
│   └── images
│
├── server.js
├── package.json
└── README.md
```

---

## 📧 Contact Feature

Users can send inquiries about a vehicle using the **Contact Dealer** form.

* Emails are sent using Nodemailer
* Gmail App Password is required
* Messages include vehicle details and customer info

---

## 🚀 Deployment Notes

* Use Cloudinary for persistent image storage
* Avoid local file uploads on platforms like Render
* Ensure environment variables are set in production

---

## 🧠 What This Project Demonstrates

* Full CRUD operations
* Authentication and sessions
* File upload handling
* Third-party API integration
* Clean MVC-style structure
* Real-world backend architecture

---

## 👨‍💻 Author

Kwota

Backend Development Final Project
