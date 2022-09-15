import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext"
import { postProducts } from "../../service/API";
import {ProductWrapper,Form,Input,Button,} from "./Home.style";


export default function Product(props){
    const {price,productImage,description,name,id}=props;

    const {cardItems,setCardItems}=useContext(UserContext);
    const navigate = useNavigate();
    const [qtd,setQtd]=useState("");
  
    function handleSubmit(e){
        e.preventDefault();
        setQtd(qtd);
      }
  
      function addItemToCard(name,price,image){

        setCardItems([
          ...cardItems,
          {
            pId:id,
            pName: name,
            pImage: productImage, 
            pPrice:price,
            qtd:Number(qtd),
            }])

            const body = {
              pName: name,
              pImage: image, 
              pPrice:price,
              qtd :qtd
            }

            console.log(body);
            
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
               <Button type='submit' onClick={()=> {addItemToCard( name, price,productImage)}}>Adicionar ao carrinho</Button>
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