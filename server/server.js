const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

//ROUTERS
const pizza = require('./routes/pizza.router');
const orders = require('./routes/order.router');

app.use(express.static('build'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/pizza', pizza);
app.use('/orders', orders);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})