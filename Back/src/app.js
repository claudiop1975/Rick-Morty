const express = require("express");
const bodyParser= require('body-parser')
const cors= require('cors')


const routerCharacter = require('./routes/characterRouter.js')
const routerDetail = require('./routes/detailRouter.js')
const routerFav= require('./routes/favRouter.js')
const app = express();
const PORT= 3001

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));



app.use('/rickandmorty/character/', routerCharacter)
app.use('/rickandmorty/detail/', routerDetail)
app.use('/rickandmorty/fav/', routerFav)

app.listen(PORT,()=>{console.log('servidor escuchando en puerto'+ PORT)})


















































// const http = require('http');
// const url = require('url');
// const db = require('./data');

// // console.log(db);

// const PORT = 3001;

// http.createServer((req, res) => {
//    const parsedUrl = url.parse(req.url, true);
//    console.log(parsedUrl);
// });