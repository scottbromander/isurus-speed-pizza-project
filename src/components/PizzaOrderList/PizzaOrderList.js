import React, { Component } from 'react';

class PizzaOrderList extends Component {
    render() {
        const pizzas = this.props.order.pizzas.map((item, index) => {
            return (
                <span>{item.name}, </span>
            )
        })

        const customer = this.props.order.customer;

        return (
            <div>
                <h3>{customer.firstName} {customer.lastName}</h3>
                <h6>{customer.address}</h6>
                {pizzas}
            </div>
        )
    }
}

export default PizzaOrderList;