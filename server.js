require("dotenv").config(); 

const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());


// IMPORT ROUTES
const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');
const studentRoutes = require('./routes/studentRoutes');
const attendantRoutes = require('./routes/attendantRoutes');
//const borrowRoutes = require('./routes/borrowRoutes');


// USE ROUTES
app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);
app.use('/students', studentRoutes);
app.use('/attendants', attendantRoutes);
//app.use('/borrow', borrowRoutes);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(authorRoutes);
console.log(bookRoutes);
console.log(studentRoutes);
console.log(attendantRoutes);
});


app.get("/test-books", (req, res) => {
  res.send("BOOK ROUTE WORKING");
});

