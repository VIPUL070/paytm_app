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

const AccountsSchema = new mongoose.Schema({
  userId : {
    type: mongoose.Schema.Types.ObjectId, // Ref to user model , exist user can have balance
    ref: 'User', //ref from where userID belong
    required: true
  },
  balance: {
    type: Number,
    required: true
  }
})

const Account = mongoose.model('Account' , AccountsSchema)
const User = mongoose.model('User', UserSchema)

module.exports = {
    User,
    Account
}