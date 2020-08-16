import axios from 'axios';

const API = () => {
    const _http = axios.create({baseURL: BASE_PATH.API_SERVER});
    
    const get = () => {
        return _http.get(url, params);
    }
    const post = () => {
        return _http.post(url, params);
    }
};