const mongoose = require('mongoose')

const { Schema, model } = mongoose

const deckSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },


})

const Deck = model("Deck",deckSchema)

module.exports = Deck;