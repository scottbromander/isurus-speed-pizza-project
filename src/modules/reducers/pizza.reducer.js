const pizzaReducer = (state = [], action) => {

    if(action.type === "SET_PIZZAS") {
        return [
            ...action.payload
        ]
    }

    return state;
}

export default pizzaReducer;