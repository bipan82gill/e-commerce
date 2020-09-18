import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://us-central1-e-commerce-5fa7c.cloudfunctions.net/api'
    // 'http://localhost:5001/e-commerce-5fa7c/us-central1/api'
});
export default instance;