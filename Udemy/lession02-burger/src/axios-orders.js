import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-a3a9d-default-rtdb.firebaseio.com/'
})
export default instance;