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

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px;
  margin-top: 15px;
  min-height: 30%;
  max-height: 100%;
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
    margin-bottom: 10px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
`;

export const Input = styled.input`
  height: 30px;
  width: 60px;
  padding-left: 6px;
  text-align: center;
  border-radius: 5px;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  font-weight: 400;
  margin: 5px;
  background-color: #fff8e7;

  &::placeholder {
    color: #6f6f70;
    font-size: 18px;
    font-weight: 400;
  }
`;