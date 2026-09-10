const express = require("express");

const app = express();

app.use("/", (err, req, res, next) => {
    if (err) {
        // Log your error
        res.status(500).send("something went wrong")
    }
});

app.get("/getUserData", (req, res) => {
    // Logic of DB call and get user data
    
      // throw new Error("dvbzhjf")
      // res.send("User Data Sent");

    try {
        throw new Error("dvbzhjf");
        res.send("User Data Sent");
    } catch (err) {
        res.status(500).send("Some Error contact support team");
    }   
});

// This is also known as middleware

app.use("/", (err, req, res, next) => {
    if (err) {
        // Log your error
        res.status(500).send("something went wrong")
    }
}); // "/"" means it matches all your routes. Always keep this towards the end this error function.



app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777...");
});