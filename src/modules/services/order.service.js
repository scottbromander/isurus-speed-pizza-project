import axios from 'axios';

const getOrders = () => {
    return axios({
        method: 'GET',
        url: '/orders'
    })
}

const postOrder = (order) => {
    return axios({
        method: 'POST',
        url: '/orders',
        data: order
    })
}

export {
    getOrders,
    postOrder
}