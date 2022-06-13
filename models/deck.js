var mongoose = require('mongoose')
var Schema = mongoose.Schema

const cardSchema = new Schema({

        name: {
            type: String,
            required: true,
        },
        level: {
            type: Number,
            maximum: 5,
            minimum: 0,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        atk_points:{
            type: Number,
            maximum:10,
            minimum: 0,
            required: true,
        },
        def_points: {
            type: Number,
            maximum: 10,
            minimum: 0,
            required: true,
        },
        img:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required:true,
    
        },
        username: String,
    
    })

   var deckSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    cardsInDeck: [cardSchema]


})

module.exports = mongoose.model('Deck',deckSchema)


// const { Schema, model } = mongoose

// const deckSchema = new Schema({

//     name: {
//         type: String,
//         required: true,
//     },
//     genre: {
//         type: String,
//         required: true,
//     },
//     cardCol: [{type: Schema.Types.ObjectId, ref: 'Card'}]


// })

// const Deck = model("Deck",deckSchema)

// module.exports = Deck;