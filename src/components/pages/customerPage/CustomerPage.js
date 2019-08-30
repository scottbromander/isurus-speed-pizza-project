import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class CustomerPage extends Component {

    state = {
        firstName: '',
        lastName: '',
        address: '',
        disabled: true
    }


    clickSummary = () => {
        const customer = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address
        }
        this.props.dispatch({type: 'ADD_CUSTOMER', payload: customer});
        this.props.history.push('/summary')
    }

    updateForm = (key) => (event) => {
        this.setState({
            [key]: event.target.value
        }, () => {
            if(this.state.firstName && this.state.lastName && this.state.address) {
                this.setState({
                    disabled: false
                })
            } else {
                this.setState({
                    disabled: true
                })
            }
        })
    }

    render() {
        return (
            <div>
                <h1>CustomerPage!</h1>
                <h3>Enter your information!</h3>
                <form onSubmit={this.submitForm}>
                    <input onChange={this.updateForm('firstName')} type="text" placeholder="Enter your first name" />
                    <input onChange={this.updateForm('lastName')} type="text" placeholder="Enter your last name" />
                    <input onChange={this.updateForm('address')} type="text" placeholder="Enter your address" />
                </form>
                <button disabled={this.state.disabled} onClick={this.clickSummary}>Review Your Order</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(CustomerPage);