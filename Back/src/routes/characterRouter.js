const express = require('express')
const getCharById= require('../controllers/getCharById.js')
const routerCharacter = express.Router()

module.exports =routerCharacter.get('/:id',getCharById);

