var express = require('express')
var router = express.Router()
var decksCtrl = require('../controllers/decks')

router.get('/', decksCtrl.index)
router.get('/new', decksCtrl.new)
router.get('/:id', decksCtrl.show)
router.get('/', decksCtrl.create)

module.exports = router;
