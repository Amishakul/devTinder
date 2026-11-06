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



// Get user by email.

app.get("/user", async (req, res) => {
    // get the emailid from the user which the user wants from the body of the api request done by the user and sent to our server.
    const userEmail = req.body.emailId; // this email id the user wants and will request to us so we will get this email id from the api get /user request body.

    try {
        const user = await User.findOne({emailId: userEmail});
        // it return only one object (collection) if there are two duplicate entries present in the database. It returns the oldest document present among duplicate documents.
        if (!user) {
            res.status(404).send("User not found")
        } else {
            res.send(user); 
        }


        //const users = await User.find({emailId: userEmail}) // It sends back the response as array of objects.
        // if(users.length === 0) {
        //     res.status(404).send("User not found");
        // } else {
        //     res.send(users) // send the response (data) back to the user from the database.
        // }
    } catch (err) {
        res.status(400).send("Something went wrong");
    }
});


// Feed API - GET /feed - get all the users from the database
app.get("/feed", async(req, res) => {
    try {
    const users = await User.find({}); // it returns all the documents.
    res.send(users);
    } catch (err) {
        res.respond(400).send("Something went wrong")
    }

});


// delete a user from the database
app.delete("/user", async(req, res) => {
    const userId = req.body.userId;
    try {
    // const user = await User.findByIdAndDelete({ _id : userId})

    const user = await User.findByIdAndDelete(userId);

    res.send("User deleted successfully")
    } catch (err) {
        res.status(400).send("Something went wrong");
    }
});


// Update data of the user
app.patch("/user", async (req, res) => {
    const userId = req.body.userId // this is the req of user of containing user id
    const data = req.body // this is the req of the user containing the whole json object, id, name, emailId
    
    // console.log(data);

    try {
        const user = await User.findByIdAndUpdate({ _id: userId }, data, {returnDocument: "before"});
        console.log(user);

        res.send("User updated sucessfully")
    } catch (err) {
        res.status(400).send("Something went wrong");
    }
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

