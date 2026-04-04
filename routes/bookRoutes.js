const express = require("express");
const router = express.Router();

const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  borrowBook,
  returnBook,
  searchBooks
} = require("../controllers/bookController");


const validateBook = require('../middleware/validateBook');

router.post('/', validateBook, createBook);

// CREATE BOOK
router.post("/", createBook);

// GET ALL BOOKS
router.get("/", getAllBooks);

// GET ONE BOOK
router.get('/search', searchBooks);
router.get("/:id", getBookById);

// UPDATE BOOK
router.put("/:id", updateBook);

// DELETE BOOK
router.delete("/:id", deleteBook);

// BORROW BOOK
router.post("/:id/borrow", borrowBook);

// RETURN BOOK
router.post("/:id/return", returnBook);

//SEARCH BOOK

module.exports = router;