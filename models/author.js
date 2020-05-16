const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//we dont need to add ID because mongoDB will automatically assign ID to each book
const authorSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("Author", authorSchema);
