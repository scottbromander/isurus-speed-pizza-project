const adminReducer = (state = [], action) => {
    if(action.type === 'SET_ALL_ORDERS') {
        return [
            ...action.payload
        ]
    }

    return state;
}

export default adminReducer;