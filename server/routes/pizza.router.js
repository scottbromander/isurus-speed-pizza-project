const express = require('express');
const router = express.Router();
const pizzaData = require('../modules/data/pizza.json');

router.get('/', (req,res) => {
    res.send(pizzaData);
});

module.exports = router;