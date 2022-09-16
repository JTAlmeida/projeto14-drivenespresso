import { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';
import {ProductWrapper,Form,Input} from './Checkout.style'

export default function CartProduct(props){
  
  const {id,name,price,image,qtd} = props;
  const {cartItems,setTotal}= useContext(UserContext);
  const [newQtd,setNewQtd]=useState(qtd);

  function changeQuantity(e){
  e.preventDefault();
  setNewQtd(e.target.value);
    
const findProduct = cartItems.find((product)=> product.pId === id);

let count=0;  

if(findProduct){
    for(let i=0; i < cartItems.length;i++){
      if(cartItems[i].pId === id){
        cartItems[i].qtd = (Number(newQtd))+1;
      }
    }
    console.log(cartItems);
    for(let i=0; i < cartItems.length;i++){
      console.log(cartItems[i].qtd);
      const total2 = (Number(cartItems[i].pPrice)*(cartItems[i].qtd));
      count +=total2;
    }
    setTotal(count);
  }
}

function valuePrice(value){
  const newValue = ((value)/100).toFixed(2).replace(".",",");
  return newValue
}

return (
  <ProductWrapper>
    <img src={image} alt="product image"/>
    <h1>{name}</h1>
    <h3>R$ {valuePrice(price)}</h3>
    <Form>
      <Input
        placeholder={qtd}
        name="amount"
        type="number"
        min="0"
        max="100"
        value={newQtd}
        required
        onChange={changeQuantity}
      />
    </Form>
  </ProductWrapper>
);
}