import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 20px;
  align-items: center;
`;

export const Header = styled.div`
  position: absolute;
  top: 1vh;
  left: 2vw;
  display: flex;
  width: 96vw;
  height: 16vh;
  justify-content: space-between;
  align-items: center;
  background-color: #f3f3f3;
  border-radius: 10px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

  img {
    height: 14vh;
  }

  .svg {
    height: 5vh;
    padding-right: 15px;
  }
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
  overflow-y: scroll;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px;
  margin-top: 15px;
  min-height: 30%;
  max-height: 40%;
  width: 30%;
  background-color: #fafafa;

  img {
    max-width: 100%;
    max-height: 100%;
    min-width: 20%;
    min-height: 20%;
  }

  h1 {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 5px;
  }

  h2 {
    color: #6f6f70;
    font-size: clamp(10px, 15px, 15px);
    font-weight: 400;
    padding-bottom: 10px;
  }

  h3 {
    color: #3d8705;
  }
`;

export const Input = styled.input`
  height: 10%;
  width: 15%;
  text-align: center;
  display: flex;
  border: 1px solid #ffffff;
  border-radius: 5px;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  font-weight: 400;
  margin: 5px;

  &::placeholder {
    color: rgba(0, 0, 0, 1);
    font-size: 20px;
    font-weight: 400;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  width: 40%;
  background-color: #988c51;
  color: #fafafa;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
`;
