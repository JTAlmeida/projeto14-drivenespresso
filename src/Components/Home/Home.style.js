import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 20px;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  height: 80vh;
  width: 96vw;
  margin-top: 16vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #f3f3f3;
  border-radius: 10px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  overflow: auto;
`;

export const FilterBar = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;

  button {
    text-align: center;
    height: 30px;  
    min-width: 20%;
    max-width: 30%;
    background-color: #988c51;
    color: #fafafa;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  padding: 10px;
  margin-top: 15px;
  min-height: 40%;
  max-height: 100%;
  width: 30%;
  background-color: #ffffff;
  margin-bottom: 10px;
  border-radius: 15px;

  img {
    max-width: 90%;
    max-height: 35%;
  }

  h1 {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 5px;
  }

  h2 {
    color: #6f6f70;
    max-width: 100%;
    font-size: clamp(5px, 15px, 15px);
    font-weight: 400;
    padding-bottom: 10px;
  }

  h3 {
    color: #3d8705;
    margin-bottom: 10px;
  }
`;

export const Form = styled.form`
  width: 100%;
  min-height: auto;
  max-height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    max-width: 29px;
    max-height: 29px;
  }
`;

export const Input = styled.input`
  max-width: 20%;
  max-height: 30%;
  min-width: 30px;
  min-height: 25%;
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

export const Button = styled.button`
  text-align: center;
  min-height: 40px;
  width: 100%;
  background-color: #988c51;
  color: #fafafa;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 5px;
`;
