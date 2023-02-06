// pour creer base de donnees
// 1 require mongoose
const mongoose = require("mongoose");

// connectDB
const connectDB = async () => {
    try {
        // step 1 
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.DB_URI, {useNewUrlParser: true});
        // step 2 
        console.log("Database connected...");
    } catch (error) {
        console.log("Database is not connected !!!", error);
    }
};

// export
module.exports = connectDB;
