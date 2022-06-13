
const express = require("express");
const Deck = require("../models/deck");
const Card = require('../models/card')

const router = express.Router();


  // index route
router.get("/", (req, res) => {
    Deck.find({})
      .then((decks) => {
        res.render("decks/index.liquid", { decks })
      })
      .catch((error) => {
        res.json({ error })
      })
     
  })

  router.get("/", (req, res) => {
    Deck.find({}, (err, decks) => {
      res.render("decks/index.liquid", { decks });
    });
  });

  router.get("/", async (req, res) => {
    const decks = await Decks.find({});
    res.render("decks/index.liquid", { decks });
  });

// new route
router.get("/new", (req, res) => {
    res.render("decks/new.liquid");
  });

  // create route
router.post("/", (req, res) => {
    // create the new card
    Deck.create(req.body)
      .then((decks) => {
        res.redirect("/decks");
      })
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

// edit route
router.get("/:id/edit", (req, res) => {
    const id = req.params.id;
    Deck.findById(id)
      .then((deck) => {
        res.render("decks/edit.liquid", { deck });
      })
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Deck.findByIdAndRemove(id)
      .then((deck) => {
        res.redirect("/decks");
      })
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

  //update route
router.put("/:id", (req, res) => {
    const id = req.params.id;
    Deck.findByIdAndUpdate(id, req.body, { new: true })
      .then((deck) => {
        res.redirect("/decks");
      })
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

  // show route
router.get("/:id", (req, res) => {
    const id = req.params.id;
    Deck.findById(id)
      .then((deck) => {
       
        res.render("decks/show.liquid", { deck });
      })
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
     
      

  });
//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;