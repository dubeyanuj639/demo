const express = require('express')
const app = express()
const PORT = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/demo', {useNewUrlParser: true});
const userRoutes = require('./Routes/userRoutes')
app.use('/user',userRoutes)
app.listen(PORT,(req,res)=>{
    console.log("Server Connected on Port =>",PORT)
})
