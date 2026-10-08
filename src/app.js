const express = require("express");

// instance of an 
// express.js application (creating a server using express process)

// require("express") gives us the Express function, and express() creates an Express application object. We store that application object in app so that we can configure and use our server.
// Right — you are not explicitly creating an object/instance with new in your code.
// You are calling the express() function.
// That function internally creates/returns an Express application object, which gets stored in app.

const app = express();


// request handler function, these all are routes

// app.use("/hello/2", (req, res) => {
//     res.send("Abracadarab!")
// });


// app.use("/hello", (req, res) => {
//     res.send("Hello hello hello!")
// });

// app.use("/user", (req, res) => {
//     res.send("HAHAHAHAHAAH")
// }); // Because of this route other remanining routes below will never get a chance to execute

// This will only handle GET calls to /user

// this req can match /user, /user/xyz, /user/1
// app.get("/user", (req, res) => {
//     res.send({firstname: "Amisha", lastname: "Kulkarni"})
// })


// this route will work for /abc, /ac
// app.get("/ab?c", (req, res) => {
//     res.send({firstname: "Amisha", lastname: "Kulkarni"})

// });

 // can write as many b character as we want
// app.get("/ab+c", (req, res) => {
//     res.send({firstname: "Amisha", lastname: "Kulkarni"})

// });


// start should be from ab and end should be with cd, in between we can write anything
// app.get("/ab*cd", (req, res) => {
//     res.send({firstname: "Amisha", lastname: "Kulkarni"})
// })


// bc is optional
// app.get("/a(bc)?d", (req, res) => {
//     res.send({firstname: "Amisha", lastname: "Kulkarni"})
// })

// can write as much of bc
// app.get("/a(bc)+d", (req, res) => {
//     res.send({firstname: "Amisha", lastname: "Kulkarni"})
// })


//if there is "a" anywhere in the path it will work
// app.get(/a/, (req, res) => {
//     res.send({firstname: "Amisha", lastname: "Kulkarni"})
// })

// it can start with anything but must end with fly word. eg. dragonfly, butterfly
// app.get(/.*fly$/, (req, res) => {
//     res.send({firstname: "Amisha", lastname: "Kulkarni"})
// })


// how to read query parameter in the route handler: http://localhost:7777/user?userid=101&password=testing
// app.get("/user", (req, res) => {
//     console.log(req.query)
//     res.send({firstname: "Amisha", lastname: "Kulkarni"})
// })


// http://localhost:7777/user/123

// : means dynamic

// app.get("/user/:userId", (req, res) => {
//     console.log(req.params);
//     res.send({firstname: "Amisha", lastname: "Kulkarni"})
// });

// http://localhost:7777/user/123/amisha/testing
app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params);
    res.send({firstname: "Amisha", lastname: "Kulkarni"})

})

// app.post("/user", (req, res) => {
//     // saving data to DB
//     res.send("Data sucessfully saved to the database!")

// })

// app.delete("/user", (req, res) => {
//     res.send("Deleted sucessfully!")
// })

// this will match all the HTTP method API calls to /test
// app.use("/test", (req, res) => {
//     res.send("Hello from the server!")
// });

// app.use("/", (req, res) => {
//     res.send("Hello from the dashboard!")
// });

app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777...")
});
// creating a web server on the port 7777, and the application is listening on that server.