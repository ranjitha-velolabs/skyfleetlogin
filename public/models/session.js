var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
// define the schema for our user model
var Account = mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    reg_id: String,
    email: String
});
Account.methods.generateHash = function(password) {
    return bcrypt.hashSync(password);
};

// checking if password is valid
Account.methods.validPassword = function(user,password) {
    return bcrypt.compareSync(password,user.password);
};
// create the model for users and expose it to our app
module.exports = mongoose.model('accounts', Account);