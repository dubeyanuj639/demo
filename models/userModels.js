var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var func = require('../common/function.js')
var userSchema = new Schema({
  email:{type:String},
  password:{type:String}
});

var User = mongoose.model('User', userSchema);
// ready to go!
module.exports = User

User.findOne().then(data=>{
    console.log("Data :=>",data)
   if(!data){
    func.bcrypt("12345678").then(data=>{
        console.log("bcr==>",data)
        new User({email:"dubeyanuj639@gmail.com",password:data}).save()
    })    
   }
}).catch(err=>{
    console.log("Error :=>",err)
})