const mongoose = require('mongoose');

// schema is a function on top of mongoose.
// Here we are defining the schema of user. bascially what all information we are storing inside user collection.

//We create the Schema object so we can store our specific User rules in it and give those rules to the User model.
// new keyword is not complusory to write.
// mongoose.Schema = constructor used with new to create a Schema object.
// mongoose.Schema → constructor function
// new mongoose.Schema(...) → creates a Schema object
// userSchema → stores that Schema object

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    }

});

// creating model
// const User = mongoose.model("User", userSchema);

// module.exports = User;

module.exports = mongoose.model("User", userSchema);

// Model is the class and we will create new instances from this class. Like if we add new users in this user model, that is known as creating new instances from this class.