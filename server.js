require("dotenv").config();
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path")
const session = require("express-session");
const MongoStore = require("connect-mongo");

//card variables
const CardRouter = require("./controllers/cards");
const Card = require("./models/card")

//decl variables
const DeckRouter = require("./controllers/decks");
const Deck = require("./models/deck")

//user variables

const UserRouter = require("./controllers/user");



const router = require("liquid-express-views")(express(), {root: [path.resolve(__dirname, 'views/')]})



/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
router.use(morgan("tiny"))
router.use(methodOverride("_method"))
router.use(express.urlencoded({ extended: true }))
router.use(express.static("public"))

router.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    saveUninitialized: true,
    resave: false,
  })
);



  ////////////////////////////////////////////
// CARD Routes
////////////////////////////////////////////

router.use("/cards", CardRouter)

  ////////////////////////////////////////////
// deck Routes
////////////////////////////////////////////

router.use("/decks", DeckRouter)

  ////////////////////////////////////////////
// user Routes
////////////////////////////////////////////

router.use("/user", UserRouter);



router.get("/", (req, res) => {
  res.render("index.liquid");
});

  


const PORT = process.env.PORT;
router.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));