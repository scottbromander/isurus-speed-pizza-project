import axios from 'axios';

const getPizzas = () => {
    return axios({
        method: 'GET',
        url: '/pizza'
    })
}

export {
    getPizzas
}