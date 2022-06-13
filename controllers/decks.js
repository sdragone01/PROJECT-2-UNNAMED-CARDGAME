var Deck = require('../models/deck')

module.exports = {
  index,
  show,
  new: newDeck,
  create
}

function index(req,res){
  Deck.find({}, function(err, decks){
    res,render('decks/index',{
      title: 'All Decks', decks
    })
  })
}

function show(req,res){
  Deck.findById(req.params.id,function(err, deck){
    res.render('decks/show',{title: 'Deck Details',deck})
  })
}
function newDeck(req,res){
  res.render('decks/new',{title:'Create Deck'})
}

function create(req,res){
 req.body.cardCol = req.body.cardCol.replace(/\s*,\s*/g,',');
 if (req.body.cardCol) req.body.cardCol = req.body.cardCol.split(',');
 for (let key in req.body){
  if (req.body[key]==='')delete req.body[key];
 }

var deck = new Deck(req.body);
deck.save(function(err){
  if (err) return res.redirect ('/decks/new')
  console.log(deck)
  res.redirect('/decks')
})
}


// const express = require("express");
// const Deck = require("../models/deck");
// const Card = require('../models/card')

// const router = express.Router();


  
   


//   // index route
// router.get("/", (req, res) => {
//     Deck.find({})
//       .then((decks) => {
//         res.render("decks/index.liquid", { decks })
//       })
//       .catch((error) => {
//         res.json({ error })
//       })
//   })

//   router.get("/", (req, res) => {
//     Deck.find({}, (err, decks) => {
//       res.render("decks/index.liquid", { decks });
//     });
//   });

//   router.get("/", async (req, res) => {
//     const decks = await Decks.find({});
//     res.render("decks/index.liquid", { decks });
//   });

// // new route
// router.get("/new", (req, res) => {
//     res.render("decks/new.liquid");
//   });

//   // create route
// router.post("/", (req, res) => {
//     // create the new card
//     Deck.create(req.body)
//       .then((decks) => {
//         res.redirect("/decks");
//       })
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });

// // edit route
// router.get("/:id/edit", (req, res) => {
//     const id = req.params.id;
//     Deck.findById(id)
//       .then((deck) => {
//         res.render("decks/edit.liquid", { deck });
//       })
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });

//   router.delete("/:id", (req, res) => {
//     const id = req.params.id;
//     Deck.findByIdAndRemove(id)
//       .then((deck) => {
//         res.redirect("/decks");
//       })
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });

//   //update route
// router.put("/:id", (req, res) => {
//     const id = req.params.id;
//     Deck.findByIdAndUpdate(id, req.body, { new: true })
//       .then((deck) => {
//         res.redirect("/decks");
//       })
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });

//   function show(req, res) {
//     Deck.findById(req.params.id)
//       .populate('cardCol').exec(function(err, deck) {
      
//         Card.find(
//           {_id: {$nin: deck.cast}},
//           function(err, cards) {
//             console.log(cards);
//             res.render('decks/show', {
//               title: 'Deck Detail', deck, cards
//             });
//           }
//         );
//       });
//   }
//   // show route
// router.get("/:id", (req, res) => {
//     // get the id from params
//     const id = req.params.id;
  
//     // find the particular card from the database
//     Deck.findById(id)
//       .then((deck) => {
//         // render the template with the data from the database
//         res.render("decks/show.liquid", { deck });
//       })
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });
// //////////////////////////////////////////
// // Export the Router
// //////////////////////////////////////////
// module.exports = router;