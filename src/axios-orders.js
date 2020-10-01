import axios from 'axios';

const instance = axios.create({
    // baseURL : 'https://react-my-burger-ace72.firebaseio.com/'
    baseURL : 'https://react-burger-builder-bc28c.firebaseio.com/'
});

export default instance; 