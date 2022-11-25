const mongoose  = require("mongoose");
const dotenv = require('dotenv')

dotenv.config()

var mongoURL = process.env.DATABASE_URL

mongoose.connect(mongoURL)

var db = mongoose.connection

db.on('connected', () => {
    console.log("MongoDB Connection Successfull")
})

db.on('error', () => {
    console.log("MongoDB Connection failed")
})

module.exports = mongoose