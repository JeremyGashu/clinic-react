import Axios from 'axios'

const axios = Axios.create({
    baseURL : 'https://glacial-fjord-81336.herokuapp.com/api',
})

export default axios