var bcrypt = require('bcryptjs');
var saltRounds = 10
module.exports = {
    responseHandler: (res, responseCode, responseMessage, data) => {
        res.send({ responseCode: responseCode, responseMessage: responseMessage, data: data })
    },

    bcrypt: (pass) => {
        return new Promise((resolve,reject)=>{
            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(pass, salt, (err, hashPassword) => { 
                 if(err) reject(err)
                 else resolve(hashPassword)   
                });
            });
        })
   
    },

    jwt: (body, cb) => {
        let token = jwt.sign(body, config.jwtSecretKey)
        cb(null, token)
    },
}