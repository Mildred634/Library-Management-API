const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  issuedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Attendant',
    required: true
  },
  returnDate: {
    type: Date,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Borrow', borrowSchema);