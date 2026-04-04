const express = require("express");
const router = express.Router();

// TEST GET
router.get("/", (req, res) => {
  res.send("Attendants route working");
});

// POST ROUTE

const Attendant = require('../models/library.attendant');

router.post("/", async (req, res) => {
  try {
    const attendant = new Attendant(req.body);
    const savedAttendant = await attendant.save();

    res.status(201).json(savedAttendant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;