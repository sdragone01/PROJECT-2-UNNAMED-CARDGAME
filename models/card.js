const {Schema, model} = mongoose

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
        type: Image,
        required: true,
    },
    description:{
        type: String,
        required:true,

    },

})

const Card = model("Card",cardSchema)

module.exports = Card;
