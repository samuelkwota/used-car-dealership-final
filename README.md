# Used Car Dealership Web Application

A full-stack web application that allows users to browse available vehicles while administrators can manage the dealership inventory.

The system was built using Node.js, Express, PostgreSQL, and EJS, with Cloudinary handling image storage.

---

## Features

### Public Website

* View all available vehicles
* Search vehicles by make or model
* Vehicle detail pages
* Featured vehicle on the homepage

### Admin Dashboard

* Secure admin login
* Add new vehicles
* Edit existing vehicles
* Delete vehicles
* Upload vehicle images

### Technical Features

* Express backend server
* PostgreSQL relational database
* Session-based authentication
* Cloud image storage with Cloudinary
* Image uploads using Multer
* EJS dynamic templates
* Responsive layout with shared navigation and footer

---

## Tech Stack

Backend:

* Node.js
* Express.js

Database:

* PostgreSQL

Templating:

* EJS

File Storage:

* Cloudinary

Other Tools:

* Multer
* Express Session
* Dotenv

---

## Installation

1. Clone the repository

```
git clone https://github.com/yourusername/used-car-dealership.git
```

2. Navigate into the project folder

```
cd used-car-dealership
```

3. Install dependencies

```
npm install
```

4. Create a `.env` file

```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SESSION_SECRET=supersecret
DATABASE_URL=your_postgresql_connection_string
```

5. Start the server

```
npm start
```

The application will run at:

```
http://localhost:3000
```

---

## Database

Create a PostgreSQL database called:

```
usedcars
```

Example table structure:

```
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

## Project Structure

```
used-car-dealership
│
├── config
│   ├── cloudinary.js
│   └── db.js
│
├── routes
│   ├── adminRoutes.js
│   ├── authRoutes.js
│   └── vehicleRoutes.js
│
├── views
│   ├── partials
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   ├── dashboard.ejs
│   ├── editVehicle.ejs
│   ├── index.ejs
│   ├── inventory.ejs
│   └── vehicle.ejs
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

## Future Improvements

Possible enhancements:

* Pagination for inventory results
* Vehicle categories (SUV, Sedan, Truck)
* Customer contact form
* Admin analytics dashboard
* Image gallery for vehicles

---

## Author

Kwota

Built as a backend development final project demonstrating full CRUD functionality, authentication, and cloud file storage.
