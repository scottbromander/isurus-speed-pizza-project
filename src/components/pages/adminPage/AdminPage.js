import React, { Component } from 'react';
import { getOrders } from '../../../modules/services/order.service';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import PizzaOrderList from '../../PizzaOrderList/PizzaOrderList';

class AdminPage extends Component {

    componentDidMount() {
        getOrders().then((response) => {
            this.props.dispatch({type: 'SET_ALL_ORDERS', payload: response.data});
        })
    }

    render() {
        const orders = this.props.store.adminReducer.map((item, index) => {
            return <PizzaOrderList key={index} order={item} />
        })

        return (
            <div>
                <h1>AdminPage!</h1>
                {orders}
            </div>
        )
    }
}

export default connect(mapStoreToProps)(AdminPage);