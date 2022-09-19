import axios from "axios";
import Payment from "../Components/Payment/Payment";
const URL_BASE = "https://back-drivenespresso.herokuapp.com";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("drivenespresso"));
  const config = {
    header: {
      Authorization: `Bearer ${auth.token}`,
    },
  };
  return config;
}

function postProducts(body) {
  const products = `${URL_BASE}`;
  return axios.post(products,body);
}

function getProducts() {
  const products = `${URL_BASE}`;
  return axios.get(products);
}

function signUp(body) {
  const signUpAPI = `${URL_BASE}/sign-up`;
  return axios.post(signUpAPI, body);
}

function signIn(body) {
  const signInAPI = `${URL_BASE}/sign-in`;
  return axios.post(signInAPI, body);
}

function postPurchase(body){
  const purchase = `${URL_BASE}/payment`;
  return axios.post(purchase,body,createHeaders());
}
export { getProducts, signUp, signIn, postProducts,postPurchase};
