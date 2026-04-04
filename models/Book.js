const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, 
    required: true 
  },
  

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author"
  },

  status: {
    type: String,
    enum: ["IN", "OUT"],
    default: "IN"
  },

  borrowedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    default: null
  },

  publishedYear:{
    type: Number
  },
  
  isbn: {
  type: String,
  unique: true,
  required: true
},

  issuedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LibraryAttendant",
    default: null
  },

  borrowDate: {
    type: Date
  },

  returnDate: {
    type: Date,
    default: null
  }

}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);



