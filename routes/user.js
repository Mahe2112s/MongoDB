const express = require("express");
const {getAllUsers,getUserById,addNewUser,deleteUserById,updateUserData} = require("../controllers/user-controller");

const {UserModel,BookModel} = require("../modals/index");

const router = express.Router();
/**
 * Route : /users
 * Method : GET
 * Description : Get all users
 * Access : Public
 * Parameter : None
 */

// ("/users") since it is a route we are not using "/users", "/" would be enough.

router.get("/",getAllUsers);

/**
 * Route : /users/:id
 * Method : GET
 * Description : Get single user by their ID
 * Access : Public
 * Parameter : ID(user)
 */

//htpps://localhost:8081/users/id -> this url is always an request.

router.get("/:id",getUserById);

/**
 * Route : /users/
 * Method : POST
 * Description : Creating a new user
 * Access : Public
 * Parameter : None
 */

router.post("/", addNewUser);

/**
 * Route : /users/:id
 * Method : PUT
 * Description : Updating user by id
 * Access : Public
 * Parameter : id
 */

router.put("/:id",updateUserData);

/**
 * Route : /users/:id
 * Method : DELETE
 * Description : Delete user by id
 * Access : Public
 * Parameter : id
 */

router.delete("/:id",deleteUserById);

/**
 * Route : /users/:id
 * Method : GET
 * Description : GET subscription details by their id
 * Access : Public
 * Parameter : id
 */
router.get("/subscription-details/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((each) => each.id === id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User with ID doesn't exist",
    });
  }
  const returnDays = (data = "") => {
    let date;
    if (data === "") date = new Date();
    else {
      date = new Date(data);
    }
    let days = Math.floor(date / (1000 * 60 * 60 * 24));
    return days;
  };

  const SubscriptionType = (date) => {
    if (user.subscriptionType === "Basic") date = date + 90;
    else if (user.subscriptionType === "Standard") date = date + 180;
    else date = date + 365;
    return date;
  };

  //Jan 1 1970 UTC
  let returnDate = returnDays(user.returnDate);
  let currentDate = returnDays();
  let subscriptionDate = returnDays(user.subscriptionDate);
  let subscriptionExpiry = SubscriptionType(subscriptionDate);

  const data = {
    ...user,
    isSubscriptionExpired: subscriptionExpiry <= currentDate,
    daysLeftForSubscription:
      subscriptionExpiry <= currentDate ? 0 : subscriptionExpiry - currentDate,
    fine:
      returnDate < currentDate
        ? subscriptionExpiry < currentDate
          ? 100
          : 50
        : 0,
  };
  return res.status(200).json({
    success : true,
    message : "Subscription details of user: ",
    data,
  })
});

module.exports = router;
