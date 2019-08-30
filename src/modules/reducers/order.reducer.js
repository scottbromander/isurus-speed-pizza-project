const initialOrder = {
    pizzas: [],
    customer: {
        firstName: '',
        lastName: '',
        address: ''
    }
}

const orderReducer = (state = initialOrder, action) => {
    if(action.type === "ADD_PIZZA") {
        return {
            ...state,
            pizzas: [
                ...state.pizzas,
                action.payload
            ]
        }
    }

    if(action.type === "ADD_CUSTOMER") {
        return {
            ...state,
            customer: action.payload
        }
    }

    if(action.type === "CLEAR_ORDER") {
        return {
            ...initialOrder
        }
    }

    return state;
}

export default orderReducer;