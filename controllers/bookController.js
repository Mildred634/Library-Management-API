const Book = require("../models/Book");

// CREATE BOOK
exports.createBook = async (req, res) => {
  try {
        const existingBook = await Book.findOne({ isbn: req.body.isbn });

    if (existingBook) {
      return res.status(400).json({ message: "ISBN already exists" });
    }

    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL BOOKS
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find()
      .populate("author")
      .populate("borrowedBy")
      .populate("issuedBy");

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ONE BOOK
exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id)
    .populate("author")
    .populate("borrowedBy")
    .populate("issuedBy");

  res.json(book);
};

// UPDATE BOOK
exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
};

// DELETE BOOK
exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

// BORROW BOOK
exports.borrowBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const { studentId, attendantId } = req.body;

    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (book.status === "OUT") {
      return res.status(400).json({ message: "Book already borrowed" });
    }

    book.status = "OUT";
    book.borrowedBy = studentId;
    book.issuedBy = attendantId;
    book.returnDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await book.save();

    res.json({ message: "Book borrowed successfully", book });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// RETURN BOOK
exports.returnBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    book.status = "IN";
    book.borrowedBy = null;
    book.issuedBy = null;
    book.returnDate = new Date();

    await book.save();

    res.json({ message: "Book returned successfully", book });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  
};

//SEARCH BOOKS

exports.searchBooks = async (req, res) => {
  try {
    const { title } = req.query;

    const books = await Book.find({
      title: { $regex: title, $options: 'i' }
    });

    res.json(books);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};