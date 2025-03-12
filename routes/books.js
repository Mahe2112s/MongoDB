const express = require("express");
const {getAllBooks, getSingleBookById, getIssuedByUser,addNewBook,updateBookById} = require("../controllers/book-controller");
// const { books } = require("../Data/Books.json");
// const { users } = require("../Data/users.json");

// const BookModel = require("../modals/books.modal");
// const UserModel = require("../modals/user.modal");
// Rather than writing in 2 different lines we can place the 2 files in index.js file and import it in single line.
const {UserModel, BookModel} = require("../modals/index");

const router = express.Router();


/**
 * Route : /books
 * Method : GET
 * Description : Get all books
 * Access : Public
 * Parameter : None
 */
router.get("/",getAllBooks)

/**
 * Route : /books/:id
 * Method : GET
 * Description : Get book by it ID
 * Access : Public
 * Parameter : ID(user)
 */

//htpps://localhost:8081/users/id -> this url is always an request.
router.get("/:id",getSingleBookById);

/**
 * Route : /users/
 * Method : POST
 * Description : Creating/Adding a new book
 * Access : Public
 * Parameter : None
 * Data : id ,name,author,genre,price,publisher
 */
/*
router.post("/", (req, res) => {
  const { id, name, author, genre, price, publisher } = req.body;

  const book = books.find((each) => each.id === id);
  if (book) {
    return res.status(404).json({
      success: false,
      message: "Book Already Exist",
    });
  }
  books.push({
    id,
    name,
    author,
    genre,
    price,
    publisher,
  });
  res.status(201).json({
    success: true,
    message: "Book added successfully",
    data: books,
  });
});
*/
router.post("/", addNewBook);
/**
 * Route : /books/:id
 * Method : PUT
 * Description : Updating book by id
 * Access : Public
 * Parameter : id
 */

router.put("/:id", updateBookById);

/**
 * Route : /books/:id
 * Method : DELETE
 * Description : Delete book by id
 * Access : Public
 * Parameter : id
 */

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const book = books.find((each) => each.id === id);

  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book with ID doesn't exist",
    });
  }
  const bookIndex = books.indexOf(book);
  books.splice(bookIndex, 1);
  return res.status(200).json({
    success: true,
    message: "Book deleted successfully",
    data: books,
  });
});

/**
 * Route : /books/issued
 * Method : GET
 * Description : GET all issued books
 * Access : Public
 * Parameter : id
 */
router.get("/issued/by-user",getIssuedByUser);


module.exports = router;
