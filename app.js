
const express = require('express');

const server = express();
const router = require('./routes/products');

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views/page');

server.use(express.static(__dirname + '/public'));

server.use('/', router);
server.listen(3000);

console.log('It works!');