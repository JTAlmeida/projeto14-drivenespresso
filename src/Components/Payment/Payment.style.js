import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 20px;
  align-items: center;
`;
export const ContentWrapper = styled.div`
  min-height: 68vh;
  width: 96vw;
  margin-top: 16vh;
  margin-bottom: 12vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f3f3;
  border-radius: 10px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  overflow: auto;

p{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
  color: #2e2e2e;
}
`;
export const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  min-height: 20%;
  width: 90%;
  background-color: #fafafa;

  h1 {
    font-size: clamp(10px, 18px, 18px);
    font-weight: 700;
    padding: 0 5px;
  }
`;

export const PaymentOptions = styled.div`
height: 90px;
width: 60%;
display: flex;
justify-content: space-around;
`
export const AdressInfo =styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 4px;

span{
  height: 30px;
  width: 100px;
}

p{
  font-size: 14px;
  font-weight: 500;
  color: #2e2e2e;
}
`
export const AdressBox= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
width: 70%;
`
export const QR=styled.div`
img{
  height: 100px;
  width: 100px;
}
`
export const ItemsList =styled.div`
width : 100%;
display: flex;
justify-content: space-between;
margin-top: 20px;

div {
    color: #6f6f70;
    max-width: 100%;
    font-size: clamp(5px, 15px, 15px);
    font-weight: 500;
    padding-bottom: 10px;
  }
`
export const ItemsContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 70%;

h1 {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 5px;
  }
`