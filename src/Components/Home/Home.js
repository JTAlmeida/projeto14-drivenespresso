import produto from "../../assets/produto.png";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  ContentWrapper,
  ProductWrapper,
  Form,
  Input,
  Button,
} from "./Home.style";
import { getProducts } from "../../service/API";
import { useEffect, useState } from "react";

export default function Home() {
  const navigate = useNavigate();

  const [products, setProducts]= useState([]);

    useEffect(()=>{
      getProducts().then((products)=>{
        setProducts(products.data);
      })
    },[])

    function valuePrice(price){
      const newValue = ((price)/100).toFixed(2).replace(".",",")
      return newValue
    }

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>{products.map((value,index)=>{
        return(
         <ProductWrapper key={index}>
         <img src={value.pImage} alt="produto" />
         <h1>{value.pName}</h1>
         <h2>{value.description}</h2>
         <h3>R${valuePrice(value.price)}</h3>
         <Form>
           <Input
             placeholder="0"
             name="amount"
             type="number"
             min="1"
             max="100"
             required
           />
           <Button>Adicionar ao carrinho</Button>
           <Button
             onClick={() => {
               navigate("/checkout");
             }}
           >
             Comprar
           </Button>
         </Form>
       </ProductWrapper>
      )})}
      </ContentWrapper>
    </Wrapper>
  );
}


