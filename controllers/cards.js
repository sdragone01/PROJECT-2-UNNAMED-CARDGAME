const Deck = require('../models/decks')

module.exports = {
  create
}

function create(req,res){
  Deck.findById(req.params.id, function(err,deck){
      deck.cards.push(req.body)
      deck.save(function(err){
        res.redirect(`/decks/${deck._id}`)
      })
  })
}




// ////////////////////////////////////////
// // Import Dependencies
// ////////////////////////////////////////
// const express = require("express");
// const Card = require("../models/card");

// /////////////////////////////////////////
// // Create Route
// /////////////////////////////////////////
// const router = express.Router();

// ////////////////////////////////////////
// // Router Middleware
// ////////////////////////////////////////
// // Authorization Middleware
// router.use((req, res, next) => {
//   if (req.session.loggedIn) {
//     next();
//   } else {
//     res.redirect("/user/login");
//   }
// });

// /////////////////////////////////////////
// // Routes
// /////////////////////////////////////////
// router.get("/cards/seed", (req, res) => {
   
//     const startCards = [
//       { name: "Gwargo", level: 2, genre: "Dark",atk_points:7,def_points:3,img:"imghere",description:"badass dude" },

//     ];
  
//     // Delete all cards
//     Card.deleteMany({}).then((data) => {
//       Card.create(startCards).then((data) => {
//         res.json(data);
//       });
//     });
//   });

//   // index route
// router.get("/", (req, res) => {
//     Card.find({username: req.session.username})
//       .then((cards) => {
//         res.render("cards/index.liquid", { cards })
//       })
//       .catch((error) => {
//         res.json({ error })
//       })
//   })

//   router.get("/", (req, res) => {
//     Card.find({}, (err, cards) => {
//       res.render("cards/index.liquid", { cards });
//     });
//   });

//   router.get("/", async (req, res) => {
//     const cards = await Cards.find({});
//     res.render("cards/index.liquid", { cards });
//   });

// // new route
// router.get("/new", (req, res) => {
//     res.render("cards/new.liquid");
//   });

//   // create route
// router.post("/", (req, res) => {
//     // create the new card
//     req.body.username = req.session.username;
//     Card.create(req.body)
//       .then((cards) => {
//         res.redirect("/cards");
//       })
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });

// // edit route
// router.get("/:id/edit", (req, res) => {
//     const id = req.params.id;
//     Card.findById(id)
//       .then((card) => {
//         res.render("cards/edit.liquid", { card });
//       })
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });

//   router.delete("/:id", (req, res) => {
//     const id = req.params.id;
//     Card.findByIdAndRemove(id)
//       .then((card) => {
//         res.redirect("/cards");
//       })
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });

//   //update route
// router.put("/:id", (req, res) => {
//     const id = req.params.id;
//     Card.findByIdAndUpdate(id, req.body, { new: true })
//       .then((card) => {
//         res.redirect("/cards");
//       })
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });

//   // show route
// router.get("/:id", (req, res) => {
//     // get the id from params
//     const id = req.params.id;
  
//     // find the particular card from the database
//     Card.findById(id)
//       .then((card) => {
//         // render the template with the data from the database
//         res.render("cards/show.liquid", { card });
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