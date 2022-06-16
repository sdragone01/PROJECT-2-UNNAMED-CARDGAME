

const express = require("express");
const Deck = require("../models/deck");
const Card = require('../models/card')

const router = express.Router();

router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/user/login");
  }
});



// index route
router.get("/", (req, res) => {
  Deck.find({username: req.session.username})
   
    .then((decks) => {
      res.render("decks/index.liquid", { decks })
    })
    .catch((error) => {
      res.json({ error })
    })
})


// new route
router.get("/new", (req, res) => {
  res.render("decks/new.liquid");
});

//add card to deck 
router.post('/:id', (req, res) => {
  const id = req.params.id;
  console.log("this is the card were adding")
  console.log(req.body)
  req.body.username = req.session.username;
  Deck.findById(id)
    .then((deck) => {
      deck.cardCol.push(req.body.cardId)
      deck.save(function(err) {
        res.redirect(`/decks`)
      })

    })
})




// create route
router.post("/", (req, res) => {
 
  req.body.username = req.session.username;
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
  Card.find({}).then((allCards) => {
    Deck.findById(id)
    .populate('cardCol','name')
      .then((deck) => {
       
        res.render("decks/show.liquid", { deck, allCards });
      })
      
  })
  

    .catch((error) => {
      console.log(error);
      res.json({ error });
    });

});





// router.get ('/:id', (req,res)=>{
//   Deck.findById(req.params.id)
//   .populate('cardCol').exec(function(err,deck){
//     Card.find(
//       {_id:{$nin: deck.cardCol}},
//       function(err,cards){
//         console.log(cards);
//         res.render('decks/show.liquid')
//         })
//       }
//     )
//   })






//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;