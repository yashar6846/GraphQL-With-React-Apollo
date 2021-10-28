const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
// const path = requir("path");

const app = express();
//Allow
app.use(cors());

app.use(
  "http://localhost:5000/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// app.use(express.static("public"));

// app.get("*", (req, res) => {
//   res.sendFile(path.reslve(__dirname, "public", "index.html"));
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
