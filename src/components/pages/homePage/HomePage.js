import React, { Component } from 'react';

class HomePage extends Component {

    clickOrder = () => {
        this.props.history.push('/pizza')
    }

    render() {
        return (
            <div>
                <h1>HOME!</h1>
                <button onClick={this.clickOrder}>Order Pizza!</button>
            </div>
        )
    }
}

export default HomePage;