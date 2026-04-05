Library Management API

A RESTful backend API for managing a library system built with Node.js, Express, and MongoDB.

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

* **Node.js**
* **Express.js**
* **MongoDB (Mongoose)**
* **Postman (for API testing)**

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
Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/library-management-api.git
cd library-management-api
```

 Install dependencies

```bash
npm install
```

 Create `.env` file

Add your MongoDB connection string:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Run the server

```bash
npm run dev
```

Server will run on:

```
http://localhost:3000
```

---

API Endpoints

 Books

| Method | Endpoint                | Description      |
| ------ | ----------------------- | ---------------- |
| POST   | /books                  | Create a book    |
| GET    | /books                  | Get all books    |
| GET    | /books/:id              | Get a book by ID |
| PUT    | /books/:id              | Update a book    |
| DELETE | /books/:id              | Delete a book    |
| GET    | /books/search?title=xyz | Search books     |

---

 Borrow

| Method | Endpoint | Description   |
| ------ | -------- | ------------- |
| POST   | /borrow  | Borrow a book |

---

 Return

| Method | Endpoint          | Description   |
| ------ | ----------------- | ------------- |
| POST   | /books/:id/return | Return a book |

---

Students

| Method | Endpoint  |
| ------ | --------- |
| POST   | /students |
| GET    | /students |

---

 Attendants

| Method | Endpoint    |
| ------ | ----------- |
| POST   | /attendants |
| GET    | /attendants |

---

 Testing

Use **Postman** to test endpoints:

Example:

```
POST http://localhost:3000/borrow
```

Body:

```json
{
  "student": "student_id",
  "book": "book_id",
  "issuedBy": "attendant_id",
  "returnDate": "2026-04-10"
}
```

---
Key Concepts Implemented

* RESTful API design
* MVC architecture
* Middleware usage
* MongoDB relationships (refs)
* Error handling
* Input validation

---

 Future Improvements

* Authentication (JWT)
* Role-based access control
* Pagination for large datasets
* Deployment (Render / Railway)

---

 Author
Nworgu-Chimeremeze Mildred

---

 License

This project is for educational purposes.
