import axios from 'axios';

const setAuth = _ => {
    axios.defaults.headers.common['Content-Type'] = 'application/json';
};

export default setAuth;
