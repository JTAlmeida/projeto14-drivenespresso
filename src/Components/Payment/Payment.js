import cartao from '../../assets/cartao.png'
import pix from '../../assets/pix.png'
import paypal from '../../assets/paypal.png'
import Header from "../Header/Header";
import { ContentWrapper, PaymentOptions, ProductWrapper,Wrapper } from "./Payment.style";
import PaymentMethodOptions from '../Payment/PaymentMethodOptions'
import {  useState } from 'react';
import AdressForms from './AdressForms';



export default function Payment(){   
    
    
    const [count,setCount]=useState(0);
    const [loading,setLoading]=useState(true);


    
    const paymentMethods=[
        {
            id: 1,
            method: 'Crédito',
            img: cartao
        },
        {
            id: 2,
            method: 'Pix',
            img: pix
        },
        {
            id: 3,
            method: 'Paypal',
            img: paypal
        },
    ]

    function increaseCount(){
        if(count === 0){
            setCount(1);
        }
    }

    function decreaseCount(){
        if(count === 1){
            setCount(0);
        }
    }

   
    
    return(
<Wrapper>
    <Header/>
 <ContentWrapper>
    {loading ?
    <>
            <ProductWrapper>
            <h1>Método de Pagamento</h1>
            <PaymentOptions>
                {paymentMethods.map((method,index)=>(
                <PaymentMethodOptions 
                key ={index}
                method={method.method}
                img ={method.img}
                count={count}
                setCount={setCount}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
                />
            ))}
            </PaymentOptions>
        </ProductWrapper>     
        <AdressForms
        setLoading={setLoading}
        />
    
    </>

        : 
        <ProductWrapper> produtos</ProductWrapper> }
</ContentWrapper>
</Wrapper>
    )
}
