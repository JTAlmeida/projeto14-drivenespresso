import axios from "axios";
const URL_BASE = 'http://localhost:5000'


function getProducts(){
    const promise = axios.get(`${URL_BASE}`);
    return promise
}

export{getProducts}