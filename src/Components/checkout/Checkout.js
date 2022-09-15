import Header from "../Header/Header";
import {Wrapper,ContentWrapper,Footer,Button} from './Checkout.style'
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import CartProduct from './CartProduct'

export default function Checkout() {

  const{cardItems}=useContext(UserContext);
  const [total,setTotal]=useState("");

  useEffect(()=>{
    let count=0;
    for(let i=0; i < cardItems.length;i++){
      const total = (Number(cardItems[i].pPrice)*(cardItems[i].qtd));
      count +=total;
    }
    setTotal(count);
  },[]);
  
  function valuePrice(value){
    const newValue = ((value)/100).toFixed(2).replace(".",",");
    return newValue
  }

  return (
    <Wrapper>
      <Header/>
      <ContentWrapper>
        {cardItems.map((product,index)=>
        <CartProduct 
        index={index}
        id={product.pId}
        name={product.pName}
        price={product.pPrice}
        image={product.pImage}
        qtd={product.qtd}
        />)}
      </ContentWrapper>
      <Footer>
        <h1>Valor Final R${valuePrice(total)}</h1>
        <Button>Finalizar compra</Button>
      </Footer>
    </Wrapper>
  );
}

