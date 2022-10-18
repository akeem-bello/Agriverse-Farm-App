const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
exporterSchema = mongoose.Schema({
    companyName: String,
    companyAddress: String,
    state: String,
    phoneNumber: Number,
    email: String,
    password: String
})
const saltRound = 10;
exporterSchema.pre('save', function(next){
    bcrypt.hash(this.password, saltRound, (err, hashedPassword)=>{
        if(err){
            console.log('err')
        }else{
            this.password = hashedPassword;
            next()
        }
    })
})
exporterSchema.methods.validatePassword = function(password, callback){
    bcrypt.compare(password, this.password, (err, same)=>{
        if(!err){
            callback(err, same)
        }else{
            next()
        }
    })
}
const exporterModel = mongoose.model('exporters_tb', exporterSchema);
module.exports = exporterModel;