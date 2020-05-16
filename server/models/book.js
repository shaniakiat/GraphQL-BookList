const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//we dont need to add ID because mongoDB will automatically assign ID to each book
const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

module.exports = mongoose.model("Book", bookSchema);
