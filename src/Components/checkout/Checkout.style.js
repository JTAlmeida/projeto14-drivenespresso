import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 20px;
  align-items: center;
  overflow-x: hidden;
`;

export const ContentWrapper = styled.div`
  height: 68vh;
  width: 96vw;
  margin-top: 16vh;
  margin-bottom: 12vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: space-between;
  background-color: #f3f3f3;
  border-radius: 10px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  overflow: auto;

  p {
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
  justify-content: space-around;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  max-height: 30%;
  width: 95%;
  border-radius: 15px;
  background-color: #ffffff;

  img {
    max-width: 90%;
    max-height: 35%;
  }

  h1 {
    font-size: clamp(10px, 18px, 18px);
    font-weight: 700;
    padding: 0 5px;
  }

  h2 {
    color: #6f6f70;
    font-size: clamp(10px, 15px, 15px);
    font-weight: 400;
    padding-right: 10px;
  }

  h3 {
    color: #3d8705;
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  min-width: 10%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    max-width: 29px;
    max-height: 29px;
  }
`;

export const Input = styled.input`
  max-width: 20%;
  max-height: 25%;
  min-width: 35px;
  min-height: 20%;
  text-align: center;
  border-radius: 5px;
  border: 2px solid #988c51;
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
  background-color: #fff8e7;

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }

  &::placeholder {
    color: #6f6f70;
    font-size: 18px;
    font-weight: 400;
  }
`;

export const Footer = styled.div`
  height: 10vh;
  width: 96vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: #f3f3f3;
  border-radius: 10px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  position: fixed;
  bottom: 1vh;
  left: 2vw;
  font-size: 20px;
  font-weight: 700;
  color: #2e2e2e;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50%;
  min-width: 20%;
  background-color: #988c51;
  border-radius: 10px;
  color: #fafafa;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;
