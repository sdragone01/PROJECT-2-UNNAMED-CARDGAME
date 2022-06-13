const express = require('express')
const router = express.Router()
const cardsCtrl = require('../controllers/cards')

router.post('/decks/:id/cards',cardsCtrl.create)

module.exports = router