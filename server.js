const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const app = require('liquid-express-views')(express())



app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));



app.get('/',(req,res) => {
    res.send("hello jamboy")
})



app.listen(3000,()=>{
    console.log("listning to port 3000")
})