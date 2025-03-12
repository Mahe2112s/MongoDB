const IssuedBook = require("../dtos/boot-dto");
const {UserModel,BookModel} = require("../modals/index");


exports.getAllUsers = async(req,res) => {
    const users = await UserModel.find();

    if(users.length === 0){
        return res.status(404).json({
            success: false,
            message: "No User Found",
        });
    }
    res.status(201).json({
        success: true,
        message: "Fetched All Users",
        data: users,
    })
};

exports.getUserById = async(req,res) =>{
    const { id } = req.params;
    // we can use this for findById {_id:id}
    const user = await UserModel.findById(id);

    if(!user){
        return res.status(404).json({
            success: false,
            message: "No user found by the id",
        })
    }
    res.status(200).json({
        success: true.valueOf,
        message: "Found user with the id",
        data : user,

    })
};

exports.addNewUser = async(req,res) => {
    const { id, name, surname, email, subscriptionType, subscriptionDate } = req.body.data;

  const newUser = await UserModel.create({
    name,
    surname,
    email,
    subscriptionType,
    subscriptionDate,
  });

    return res.status(201).json({
      success: true,
      message: "User Added Succesfully",
      data: newUser,
    });
}


exports.updateUserData = async(req,res) => {
    const {id} = req.params;
    const {data} = req.body;
    const updateUser = await UserModel.findOneAndUpdate(
        {_id: id},
        { $set : {
            ...data, },
        },
        { new : true  },
       
    );
    res.status(201).json({
        success: true,
        message: "User Updated",
        data: updateUser,
    });
};

exports.deleteUserById = async(req,res) =>{
    const{ id } = req.params;

    const user = await UserModel.deleteOne({_id:id});
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User Doesn't exist",
        })
    }
    res.status(201).json({
        success: true,
        message: "Deleted User",
        data: user,
    });
}
