import Header from "../Header/Header";
import {Wrapper,ContentWrapper,Footer,Button} from './Checkout.style'
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import CartProduct from './CartProduct'

export default function Checkout() {

  const{cartItems,total,setTotal,setCartItems}=useContext(UserContext);

  useEffect(()=>{
    updateTotal();
   },[...cartItems])

function updateTotal(){
  let count=0;
  for(let i=0; i < cartItems.length;i++){
    const total2 = (Number(cartItems[i].pPrice)*(cartItems[i].qtd));
    count +=total2;
  }
  setTotal(count);
}
  
function valuePrice(value){
    const newValue = ((value)/100).toFixed(2).replace(".",",");
    return newValue
  }

  return (
    <Wrapper>
      <Header/>
      <ContentWrapper>
        {cartItems.map((product,index)=>
        <CartProduct 
        key={index}
        id={index}
        name={product.pName}
        price={product.pPrice}
        image={product.pImage}
        qtd={product.qtd}
        setTotal={setTotal}
        />)}
      </ContentWrapper>
      <Footer>
        <h1>Valor Final R${valuePrice(total)}</h1>
        <Button >Finalizar compra</Button>
      </Footer>
    </Wrapper>
  );
}


