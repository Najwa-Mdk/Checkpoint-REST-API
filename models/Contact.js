// 1 require mongoose
const mongoose = require("mongoose");

// 2 create Schema
const schema = mongoose.Schema

// 3 create collection or models 
const contactSchema = new schema({
    name:{type: String , required: true},
    email: {type: String, required: true, unique: true},
    phone: Number
});

//export
module.exports = Contact = mongoose.model('contact', contactSchema);