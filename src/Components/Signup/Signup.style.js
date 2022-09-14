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
  justify-content: space-evenly;
  background-color: #f3f3f3;
  border-radius: 10px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  overflow: hidden;

  &:hover {
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  a{
    color: #988c51;
  }
`;

export const Input = styled.input`
  height: 50px;
  width: 90%;
  padding: 15px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-weight: 400;

  &::placeholder {
    color: #a9a9a9;
    font-size: 20px;
    font-weight: 400;
  }
`;

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 46px;
width: 90%;
margin-bottom: 36px;
background-color: #988c51;
border-radius: 5px;
color: #fafafa;
font-size: 20px;
font-weight: 700;
cursor: pointer;
`