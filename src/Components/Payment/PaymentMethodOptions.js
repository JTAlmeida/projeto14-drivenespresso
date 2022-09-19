import { PaymentMethodBox } from './PaymentMethodOptions.style'
import { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import ProductsContext from '../../context/ProductsContext';

export default function PaymentMethodOptions({method,img,count,increaseCount,decreaseCount}){
    
    const {setpaymentString}= useContext(UserContext);
    const [selectedPayment, setSelectedPayment] = useState('selectPayment');


    function selected(){
        if(selectedPayment === 'selectPayment' && count === 0){
            setSelectedPayment('selectPayment selected');
            increaseCount(count);
            setpaymentString(method);

        } else {
            decreaseCount(count);
            setSelectedPayment('selectPayment');
        }
    }
    return(
            <PaymentMethodBox>
                <img src={img}/>
                <span>{method}</span>
                <div onClick={()=> selected()} className={selectedPayment}></div>
            </PaymentMethodBox>       
    )
}

