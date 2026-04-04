const express = require('express');
const router = express.Router();
const { borrowBook } = require('../controllers/borrow.controller');

router.post('/', borrowBook);

module.exports = router;


const { borrowBook, returnBook } = require('../controllers/borrowController');

router.post('/', borrowBook);
router.put('/:id/return', returnBook);