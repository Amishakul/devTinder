const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
// we should first connect to database and then do app.listen. app.listen means you are starting your server, so before listening to any incoming request or starting your server establish the database connection.

// create a server using express
const app = express();

// reading the json object request and converting it into javascript object. This is a middleware.

app.use(express.json());

// creating /signup route/endpoint/api

 app.post("/signup", async (req, res) => {
    // console.log(req.body); // this is the req which postman has sent us and our server have recived it. express has converted this in object for us to use. Now, i want to read the data which is present at the body of this request api (req).


    // const userObj = {
    //     firstname : "Amisha",
    //     lastname: "Kulkarni",
    //     emailId: "akshay@saini.com",
    //     password: "akshay@123"
    // }

    // creating a new user with the above data. Creating a new instance of a User model. (creating a object)


    // I can create instance of the user model from the data received from this api. that is from this api request body, from the postman. 

    const user = new User(req.body);

    try{
    await user.save(); // data save on to the database. A document gets created.
    res.send("User Added successfully!")
    } catch (err) {
        res.status(400).send("Error saving the user:" + err.message);
    }

    // create new instance of our model User, add this database to that model, and then we will save that instance.

    // creating a new user with the above data. Creating a new instance of a User model. (creating a object)

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

