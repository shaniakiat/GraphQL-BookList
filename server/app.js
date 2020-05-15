const graphqlHTTP = require("express-graphql");

const express = require("express");

const app = express();

app.use("/graphql", graphqlHTTP({}));

// callback function is an ES6 function() => {}
app.listen(4000, () => {
  console.log("listening for request on port 4000");
});
