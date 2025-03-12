//Data transfer for the book

//This is object
class IssuedBook{
    //Whenever we want to create auto generate one and to pass we have to use _id
    _id;
    name;
    genre;
    price;
    publisher;
    issuedBy;
    issuedDate;
    returnDate;

    //Whenever we create obj, the constructor gets invoked = Here we're usingParamerterised construcor
    constructor(user){
        this._id = user.issuedBook._id;
        this.name = user.issuedBook.name;
        this.genre = user.issuedBook.genre
        this.price = user.issuedBook.price;
        this.publisher = user.issuedBook.publisher;
        this.issuedBy = user.issuedBy;
        this.issuedDate = user.issuedDate;
        this.returnDate = user.returnDate;
    }
};


//var red = new IssuedBook(userObj);
//Exporting this particular class
module.exports = IssuedBook;