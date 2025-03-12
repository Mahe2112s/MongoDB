const express = require("express");
//npm i dotenv
const dotenv = require("dotenv");
const DbConnection = require("./databaseConnection");

dotenv.config();
// console.log("🔍 MONGO_URI:", process.env.MONGO_URI);

const app = express();

DbConnection();

const port = 3000;

app.use(express.json());

  

app.get("/", (req, res) => {
    console.log("Root route accessed");
  res.status(200).json({
    message: "Server is up and running",
    data: "Hey",
  });
});


// const userRouter = require("./routes/user");
const booksRouter = require("./routes/books");
const usersRouter = require("./routes/user");

app.use("/users",usersRouter);
app.use("/books",booksRouter);

app.get("*", (req, res) => {
  res.status(200).json({
    message: "This route doesn't exist",
  });
});



app.listen(port, () => {
  console.log(`Node starts running on http://localhost:${port}`);
});
