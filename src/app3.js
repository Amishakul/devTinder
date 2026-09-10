const express = require("express")

const app = express();

const {adminAuth, userAuth} = require("../middlewares/auth");

// GET /users => It checks all the app.xxx("matching route") functions.
// It goes through all the middleware chains and request handlers which actually gives the response back

// app.use("/", (req, res, next) => {
//     // res.send("Handling / route")
//     next();
// }); // this is middleware

// app.get(
//     "/user",
//     (req, res, next) => {
//         console.log("Handling /user route");
//         next(); // // this is middleware
//     },
//     (req, res, next) => {
//         next(); // // this is middleware
//     }, 
//     (req, res, next) => {
//         res.send("2nd Route Handler");
//     } // this is the response handler
// );



// why middleware is used?


// app.get("/admin/getAllData", (req, res) => {
//     // (logic of checking) Check if the request is authorized:  if the admin is making api call with token, we should validate that token. If the token is invalid we should not send the data back.

//     const token = "xyzabcfgkr";
//     const isAdminAuthorized = token === "xyz";
//     if (isAdminAuthorized) {
//         res.send("All Data Sent")
//     } else {
//         res.status(401).send("Unauthorized request")
//     }
// });

// app.get("/admin/deleteUser", (req, res) => {
//     // (logic of checking)
//     res.send("Deleted a user");
// });



// Handle Auth Middleware for all GET POST,... request.
// Instead of writing the auth logic for each api request we will instead make a middleware and write auth logic in it.

// this middleware will only be called for /admin route not /user route or any other.
app.use("/admin", adminAuth); // importing the adminAuth function from middlewares folder

// (logic of checking) Check if the request is authorized:  if the admin is making api call with token, we should validate that token. If the token is invalid we should not send the data back.

app.post("/user/login", (req, res) => {
    res.send("User Logged in sucessfully")
})


app.get("/user", userAuth, (req, res) => {
    res.send("User Data Sent");
});

app.get("/admin/getAllData", (req, res) => {
    res.send("User Data Sent")
});

app.get("/admin/deleteUser", (req, res) => {
    res.send("Data Deleted")
})

app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777")
});