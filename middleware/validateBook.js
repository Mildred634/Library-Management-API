module.exports = (req, res, next) => {
  const { title, isbn } = req.body;

  if (!title || !isbn) {
    return res.status(400).json({
      message: "Title and ISBN are required"
    });
  }

  next();
};