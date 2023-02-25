const express = require('express')
const getCharDetail= require('../controllers/getCharDetail.js')
const routerDetail = express.Router()

module.exports =routerDetail.get('/:id',getCharDetail);

