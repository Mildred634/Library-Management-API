const express = require("express");
const router = express.Router();

const {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor
} = require("../controllers/author.controller");

// CREATE author
router.post("/", createAuthor);

// GET all authors
router.get("/", getAllAuthors);

// GET single author
router.get("/:id", getAuthorById);

// UPDATE author
router.put("/:id", updateAuthor);

// DELETE author
router.delete("/:id", deleteAuthor);

module.exports = router;
