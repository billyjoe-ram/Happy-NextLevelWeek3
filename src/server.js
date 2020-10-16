// Import lib
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//Starting express
const server = express();
server
    // Using requisiton body
    .use(express.urlencoded({extended: true}))
    // using static files
    .use(express.static('public'))
    // configurate template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    // Create route
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .get('/save-orphanage', pages.saveOrphanage)

// Turning on server
server.listen(5500)