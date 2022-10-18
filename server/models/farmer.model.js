const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
farmerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    state: String,
    lga: String,
    gender: String,
    phoneNumber: Number,
    email: String,
    password: String
})
const saltRound = 10;
farmerSchema.pre('save', function(next){
    bcrypt.hash(this.password, saltRound, (err, hashedPassword)=>{
        if(err){
            console.log(err)
        }else{
            this.password = hashedPassword;
            next()
        }
    })
})
farmerSchema.methods.validatePassword = function(password, callback){
    bcrypt.compare(password, this.password, (err, same)=>{
        if(!err){
            callback(err, same)
        }else{
            next()
        }
    })
}
const farmerModel = mongoose.model('farmers_tb', farmerSchema);
module.exports = farmerModel;