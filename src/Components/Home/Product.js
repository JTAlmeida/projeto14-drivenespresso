import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext"
import { postProducts } from "../../service/API";
import {ProductWrapper,Form,Input,Button,} from "./Home.style";


export default function Product(props){
    
  
  const {price,productImage,description,name,id,reload,setReload}=props;
  const locallySavedUserProducts = JSON.parse(localStorage.getItem('userItem'));
    
  const {cartItems,setCartItems}=useContext(UserContext);
  const navigate = useNavigate();
  const [qtd,setQtd]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        setQtd(qtd);
      }
  
      function addItemToCart(name,price,image){
        
        setCartItems([
          ...cartItems,
          {            
            pId:cartItems.length,
            pName: name,
            pImage: productImage, 
            pPrice:price,
            qtd:Number(qtd),
            }]);

            if(locallySavedUserProducts === null){
              setReload(!reload);
              localStorage.setItem('userItem', JSON.stringify(cartItems));
            } else if (locallySavedUserProducts && cartItems.length > locallySavedUserProducts.length){
              setReload(!reload);  
              localStorage.setItem('userItem', JSON.stringify(cartItems));
                setCartItems(localStorage.getItem('userItem'));
            }

            const body = {
              pName: name,
              pImage: image, 
              pPrice:price,
              qtd :qtd
            }
           
            postProducts(body).then(()=>{
              console.log('postado');
            }).catch((error)=>{
              console.error(error);
            })
      }

      
      function valuePrice(price){
        const newValue = ((price)/100).toFixed(2).replace(".",",");
        return newValue
      }
    return(
        <>
             <ProductWrapper>
             <img src={productImage} alt="produto"/>
             <h1>{name}</h1>
             <h2>{description}</h2>
             <h3>R${valuePrice(price)}</h3>
             <Form onSubmit={handleSubmit}>
               <Input
                 placeholder="0"
                 name="amount"
                 type="number"
                 min="1"
                 max="100"
                 required
                 value={qtd}
                 onChange={e=> setQtd(e.target.value)}
               />
               <Button type='submit' onClick={()=> {addItemToCart(name,price,productImage,id)}}>Adicionar ao carrinho</Button>
               <Button
                 onClick={() => {
                   navigate("/checkout");
                 }}
               >
                 Comprar
               </Button>
             </Form>
           </ProductWrapper>       
        </>
    )
}
