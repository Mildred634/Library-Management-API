const Borrow = require('../models/Borrow');

exports.borrowBook = async (req, res) => {
  try {
    const borrow = await Borrow.create(req.body);
    res.status(201).json(borrow);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.returnBook = async (req, res) => {
  try {
    const borrow = await Borrow.findById(req.params.id);

    if (!borrow) {
      return res.status(404).json({ message: "Borrow record not found" });
    }

    borrow.returned = true;
    await borrow.save();

    res.json({ message: "Book returned successfully", borrow });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};