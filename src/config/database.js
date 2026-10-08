const mongoose = require("mongoose");

// To connect our application to mongodb cluster.
// This returns a promise and tells us whether the app is connected to database or not so to handle this we will write this function in async function.

// Here the application is connected to Database not cluster because /devTinder is added.

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://amishakulkarnicom_db_user:42BVT0MWh6ROjnJJ@namastenodesample.egs2ewu.mongodb.net/devTinder");
};

module.exports = connectDB;

// Here now in this code we are just importing the mongoose library and giving it the connection cluster link in a function and exporting this file and function to import it into the app5.js file. We will established the database and cluster connection by handling the promise in app5.js file.