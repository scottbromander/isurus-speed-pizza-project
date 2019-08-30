import React, { Component } from 'react';
import { getPizzas } from '../../../modules/services/pizza.service';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class PizzaPage extends Component {

    componentDidMount() {
        getPizzas().then((response) => {
            this.props.dispatch({type: 'SET_PIZZAS', payload:response.data.pizzas});
        })
    }

    clickCustomer = () => {
        this.props.history.push('/customer')
    }

    clickPizza = (event) => {
        const pizzaId = event.target.dataset.id;
        const pizzaObject = this.props.store.pizzaReducer[pizzaId];
        this.props.dispatch({type: 'ADD_PIZZA', payload: pizzaObject});
    }

    render() {
        const pizzaArray = this.props.store.pizzaReducer.map((item, index) => {
            return (
                <div key={index}>
                    <span>{item.name} - {item.price} - </span>
                    <button data-id={index} onClick={this.clickPizza}>Order</button>
                </div>
            )
        })

        let totalPrice = 0;

        const orderedPizzas = this.props.store.orderReducer.pizzas.map((item, index) => {
            totalPrice += parseFloat(item.price);
            return (
                <div key={index}>
                    <p>{item.name} - {item.price}</p>
                </div>
            )
        })

        totalPrice = totalPrice.toFixed(2);

        return (
            <div>
                <h1>PIZZA!</h1>
                {pizzaArray}
                <hr />
                <h3>Pizzas</h3>
                {orderedPizzas}
                <h3>Total:</h3>
                <p>${totalPrice}</p>
                <button onClick={this.clickCustomer}>Enter Your Information</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(PizzaPage);