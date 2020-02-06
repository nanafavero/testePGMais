const mongoose = require("mongoose");

// MODEL - ENTIDADE DO BANCO
const UserSchema = new mongoose.Schema({
    filename: {
        type: Array
    },
    name: {
        type: String
    },
    adress: {
        type: Object
    },
    date: {
        type: String
    }
}, { strict: false });

mongoose.model("User", UserSchema);