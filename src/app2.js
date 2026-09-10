const express = require("express")

const app = express();


// "/user" -> is a route path not req
// we can send array of router handlers also.

app.get("/user", [(req, res, next) => {
    // This is Router Handler function
    //res.send("Router Handler 1")
    console.log("Handling the route user!!!")

    next(); // will go to next route handler
    // res.send("Response!!")
}, 
(req, res, next) => {
    console.log("Handling the route user 2!!")
    // res.send("2nd Response!!")
    next();
},
(req, res, next) => {
    console.log("Handling the route user 3!!")
    // res.send("3rd Response!!")
    next();
},
(req, res, next) => {
    console.log("Handling the route user 4!!")
    // res.send("4th Response!!")
    next()
},
(req, res, next) => {
    console.log("Handling the route user 5!!")
    res.send("5th Response!!")
}
]);


// another way of writing route handlers
app.get("/user", (req, res, next) => {
    console.log("Handling the route user!!!")
    next()
});

app.get("/user", (req, res, next) => {
    console.log("Handling the router user 2!!");
    res.send("2nd Route Handler")
});


app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777")
});