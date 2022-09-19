import styled from "styled-components";

export const PaymentMethodBox= styled.div`
height:100%;
display: flex;
margin-top:2px;
justify-content: center;
align-items: center;
flex-direction: column;

div{
    max-height: 12px;
}

img{
    height:45px;
    width: 45px;
}
span{
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    color: #2e2e2e;
}

.selectPayment{
    border: 1px solid gray;
    border-radius: 50%;
    width: 12px;
    height: 20px;
    margin-top: 2px;
}
.selectPayment.selected{ 
    border: 1px solid gray;
    border-radius: 50%;
    width: 12px;
    height: 20px;
    margin-top: 2px;
    background-color: green;
}
`
