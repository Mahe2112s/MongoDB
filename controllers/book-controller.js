const {UserModel, BookModel} = require("../modals/index");
const IssuedBook = require("../dtos/boot-dto");


//const getAllBooks = () => {};
//Anytime u interacting with a database use async followed by await
exports.getAllBooks = async(req,res) => {
    const books = await BookModel.find();

    if(books.length === 0){
        return res.status(404).json({
            success : false,
            message : "No Book Found",
        })
    }
    res.status(200).json({
        success: true,
        data: books,
        message:" Books fetced successfully",
    })
};

exports.getSingleBookById = async(req,res) =>{
    const { id } = req.params;
    const book = await BookModel.findById(id);

    if(!book){
        return res.status(404).json({
            success: false,
            Message: "Book Not Found",
        });
    }
    res.status(200).json({
        success:true,
        data: book,
        message: "Book with ${id} found",
    })
};

// exports.getAllIssuedBooks = async(res,req) => {}
exports.getIssuedByUser = async(res,req) =>{
    const users = await UserModel.find({
        issuedBook : {$exists: true},
    }).populate("issuedBook");

    //Data Transfer Object(DTO)
    //We are passing users as object to IssuedBook(not imported in IssuedBooks{boot-dto.js})
    const issuedBooks = users.map((each)=> new IssuedBook(each));

      if (issuedBooks.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Book is not issued yet",
        });
      }
      return res.status(200).json({
        success: true,
        message: "User With Issued Books",
        data: users,
      });
};

exports.addNewBook = async(req,res) => {
    const {data} = req.body;
    if(!data){
        return res.status(404).json({
            success: false,
            message:"No Data To Add A Book",
        });
    }
    //create will create a new row
    await BookModel.create(data);
    const allBooks = await BookModel.find();
    return res.status(201).json({
        success: true,
        message:"Book Added Successfully",
        data: allBooks,
    });
}

exports.updateBookById = async(req,res) =>{
    const {id} = req.params;
    const {data} = req.body;

    //name = "ab"
    //update = "ba"
    //Whem we want to fetch the data after updating some 
    // times the database have some glitches or not refershed and fethec ab so to prevent that we use "new : true"
    //findOneAndUpdate(filter,update,criteria)
    const updatedBook = await BookModel.findOneAndUpdate({
        _id: id,

    },data,{
        new: true,
    });
    return res.status(201).json({
        success: true,
        message: "Book Update successfully with the id",
        data: updatedBook,
    });
}
// 1 way of approach to export
//2nd one in exports.getAllBooks instead of using const
// module.exports = {getAllBooks, getSingleBookById};