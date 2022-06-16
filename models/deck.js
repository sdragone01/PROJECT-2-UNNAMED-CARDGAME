var mongoose = require('mongoose')

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
    cardCol: [{type: Schema.Types.ObjectId, ref: 'Card'}],
    username: String,
    
})

const Deck = model("Deck",deckSchema)

module.exports = Deck;