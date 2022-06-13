const express = require("express")
const Card = require("../models/card")

const router = express.Router()

router.use((req, res, next) => {
    if (req.session.loggedIn) {
      next();
    } else {
      res.redirect("/user/login");
    }
  })

  router.get("/new", (req, res) => {
    res.render("cards/new.liquid");
  });

  router.get("/", (req, res) => {
    // find all the cards
    Fruit.find({ username: req.session.username })
      // render a template after they are found
      .then((cards) => {
        console.log(cards);
        res.render("cards/index.liquid", { cards });
      })
      // send error as json if they aren't
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });
