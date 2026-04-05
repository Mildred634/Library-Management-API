Library Management API

A RESTful backend API for managing a library system built with **Node.js, Express, and MongoDB**.

---

Features

Book Management

* Create, update, delete, and fetch books
* Prevent duplicate ISBN entries
* Track book availability status

 Student Management

* Register and manage students

 Attendant Management

* Manage library attendants

Borrow & Return System

* Borrow books with student and attendant tracking
* Return books and update availability automatically

Search Functionality

* Search books by title using query parameters

Validation Middleware

* Ensures required fields (e.g., title, ISBN) are provided
* Prevents invalid data from entering the system

---

 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* Postman

---

 Project Structure

```
library-system/
│── config/
│── controllers/
│── middleware/
│── models/
│── routes/
│── .env
│── .gitignore
│── server.js
│── package.json
```

---

 Installation & Setup

```bash
git clone https://github.com/YOUR_USERNAME/library-management-api.git
cd library-management-api
npm install
```

Create `.env`:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Run server:

```bash
npm run dev
```

---

 API Endpoints

 Books

* POST /books
* GET /books
* GET /books/:id
* PUT /books/:id
* DELETE /books/:id
* GET /books/search?title=xyz

 Borrow

* POST /borrow

Return

* POST /books/:id/return

 Students

* POST /students
* GET /students

Attendants

* POST /attendants
* GET /attendants

---

 Testing

Use Postman:

```
POST http://localhost:3000/borrow
```

```json
{
  "student": "student_id",
  "book": "book_id",
  "issuedBy": "attendant_id",
  "returnDate": "2026-04-10"
}
```

---

Key Concepts

* RESTful API design
* MVC architecture
* Middleware usage
* MongoDB relationships
* Error handling
* Input validation

---
Future Improvements

* Authentication (JWT)
* Role-based access control
* Pagination
* Deployment

---

## 👩‍💻 Author

Nworgu-Chimeremeze Mildred

---

License

This project is for educational purposes.
