//importar pacote/plugin/lib
const express = require('express');
const path = require('path');
const pages = require('./pages.js')
//iniciando express
const server = express();
server
    .use(express.urlencoded({extended: true}))
    .use(express.static('public'))
    //configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    //criar uma rota
    .get('/',pages.index)
    .get('/index',pages.index)
    .get('/orphanage',pages.orphanage)
    .get('/orphanages',pages.orphanages)
    .get('/create-orphanage',pages.createOrphanage)
    .post('/save-orphanage',pages.saveOrphanage)
//ligar servidor
server.listen(5500);