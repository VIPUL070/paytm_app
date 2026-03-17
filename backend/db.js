require('dotenv').config()
const mongoose = require("mongoose")

const URL = process.env.MONGO_URL
mongoose.connect(`${URL}/paytm_app`)

const UserSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   password: String,
   username: String,
})

const User = mongoose.model('User', UserSchema)

module.exports = {
    User,
}