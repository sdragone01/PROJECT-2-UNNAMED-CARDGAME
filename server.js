const express = require("express")
const app = require('liquid-express-views')(express())
const mongoose = require('mongoose')
const mongoURI = "mongodb://127.0.0.1:27017/cards"
const morgan = require("morgan"); //import morgan
const db = mongoose.connection
mongoose.connect(mongoURI);
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });



const cards = require('./models/card.js')


app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));



app.get('/',(req,res) => {
    res.send("hello jamboy")
})



app.listen(3000,()=>{
    console.log("listning to port 3000")
})