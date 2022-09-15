import axios from "axios";
const URL_BASE = 'http://localhost:5000'


function getProducts(){
    const promise = axios.get(`${URL_BASE}`);
    return promise
}

function postProducts(body){
    const promise =axios.post(`${URL_BASE}`,body);
    return promise
}

export {getProducts,postProducts}