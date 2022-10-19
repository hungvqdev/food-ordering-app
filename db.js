const mongoose  = require("mongoose");

var mongoURL = "mongodb+srv://hungvq:Pass1@cluster0.mzvgb.mongodb.net/pizza?retryWrites=true&w=majority"

mongoose.connect(mongoURL)

var db = mongoose.connection

db.on('connected', () => {
    console.log("MongoDB Connection Successfull")
})

db.on('error', () => {
    console.log("MongoDB Connection failed")
})

module.exports = mongoose