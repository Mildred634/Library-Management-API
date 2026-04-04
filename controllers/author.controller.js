const Author = require("../models/Author");

exports.createAuthor = async (req, res) => {
    console.log("CREATE AUTHOR HIT");

    try{
        const {name, bio } = req.body;

  const author = new Author ({name, bio});
  const savedAuthor = await author.save();

  res.status(201).json(savedAuthor);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.getAllAuthors = async (req, res) => {
  const authors = await Author.find();
  res.json(authors);
};

exports.getAuthorById = async (req, res) => {
  const author = await Author.findById(req.params.id);
  res.json(author);
};

exports.updateAuthor = async (req, res) => {
  const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(author);
};

exports.deleteAuthor = async (req, res) => {
  await Author.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};