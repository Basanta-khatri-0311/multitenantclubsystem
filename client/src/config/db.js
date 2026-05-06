const mongoose = require("mongoose");


exports.connectDb = async () => {
    try {
        const uri = process.env.MONGODB_URI
        await mongoose.connect(uri)
        console.log("Database connected successfully")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}