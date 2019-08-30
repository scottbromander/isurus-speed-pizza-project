const express = require('express');
const router = express.Router();

const orders = [];

router.get('/', (req,res) => {
    res.send(orders);
});

router.post('/', (req,res) => {
    orders.push(req.body);
    console.log(orders);
    res.sendStatus(201);
})

module.exports = router;