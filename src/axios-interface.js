import axios from 'axios';

const instance = axios.create({
    baseURL: 'adventurehydro.com/wp-json/wp/v2/posts'
});

export default instance;