const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
// we should first connect to database and then do app.listen. app.listen means you are starting your server, so before listening to any incoming request or starting your server establish the database connection.

// create a server using express

const app = express();

// creating /signup route/endpoint/api

app.post("/signup", async (req, res) => {
    // const userObj = {
    //     firstname : "Amisha",
    //     lastname: "Kulkarni",
    //     emailId: "akshay@saini.com",
    //     password: "akshay@123"
    // }

    // creating a new user with the above data. Creating a new instance of a User model. (creating a object)

    const user = new User({
        firstName: "Stud",
        lastName: "not available",
        emailId: "stud@123.com",
        password: "stud@123",
        // _id: "507f1f77bcf86cd799439011",
    });

    try{
    await user.save(); // data save on to the database
    res.send("User Added successfully!")
    } catch (err) {
        res.status(400).send("Error saving the user:" + err.message);
    }

    // create new instance of our model User, add this database to that model, and then we will save that instance.

    // creating a new user with the above data. Creating a new instance of a user model. (creating a object)

    // const user = new User(userObj); another way of creating an instance from User model



});



connectDB().then(() => {
    console.log("Database connection established...")
    app.listen(7777, () => {
    console.log("Server is sucessfully listening on port 7777...");
});
})
.catch((err) => {
    console.error("Database cannot be connected")

});

