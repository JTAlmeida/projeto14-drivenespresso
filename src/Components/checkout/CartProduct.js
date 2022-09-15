import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import {ProductWrapper,Form,Input} from './Checkout.style'

export default function CartProduct(props){
  
  const {id,name,price,image,qtd} = props;
  const {cardItems}= useContext(UserContext);


/*function handleSubmit(e){
  e.preventDefault();
  set

}*/

  return (
        <ProductWrapper>
          <img src={image} alt="product image"/>
          <h1>{name}</h1>
          <h3>R${price}</h3>
          <Form >
            <Input
              placeholder={qtd}
              name="amount"
              type="number"
              min="0"
              max="100"
              required
            />
          </Form>
        </ProductWrapper>
      );
}