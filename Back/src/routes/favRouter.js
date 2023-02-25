const express = require('express')
const favs= require('../controllers/favController.js')
const routerFav = express.Router()

routerFav.get('/',favs.getFav)
routerFav.post('/',favs.postFav)
routerFav.delete('/:id',favs.deleteFav);


module.exports =routerFav