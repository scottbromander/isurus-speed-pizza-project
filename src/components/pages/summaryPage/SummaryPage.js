import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import { postOrder } from '../../../modules/services/order.service';

class SummaryPage extends Component {

    clickSubmitOrder = (event) => {
        postOrder(this.props.store.orderReducer);
        this.props.dispatch({type: 'CLEAR_ORDER'});
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>SummaryPage!</h1>

                <button onClick={this.clickSubmitOrder}>Submit Order</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(SummaryPage);