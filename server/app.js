const graphqlHTTP = require("express-graphql");
const express = require("express");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//allow cross-origin requests
app.use(cors());

//connect to mongodb database
mongoose.connect(
  "mongodb+srv://shaniakiat:ponpon@cluster0-9uqh9.mongodb.net/test?retryWrites=true&w=majority"
);

mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// callback function is an ES6 function() => {}
app.listen(4000, () => {
  console.log("listening for request on port 4000");
});
