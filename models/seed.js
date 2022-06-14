
const mongoose = require("./connection");
const Card = require("./card");

const db = mongoose.connection;

db.on("open", () => {

  const startCards = [
    { name: "Jamboy", level: "0", genre:"Earth",atk_points:"0",def_points:"2",img:"imghere",description:"just a simple jamboy" },

  ];

  Card.deleteMany({})
    .then((deletedCards) => {

      Card.create(startCards)
        .then((newCards) => {
          console.log(newCards);
          db.close();
        })
        .catch((error) => {
          console.log(error);
          db.close();
        });
    })
    .catch((error) => {
      console.log(error);
      db.close();
    });


});