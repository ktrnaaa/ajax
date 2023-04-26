
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
   res.render('index');
})

const products = [
   { name: 'first', id: '1', price: 230 }, { name: 'second', id: '2', price: 800 }, { name: 'third', id: '3', price: 1000 },{ name: 'fourth', id: '4', price: 1600 }
];

router.get('/products', (req, res) => {
   res.json(products)
})

module.exports = router