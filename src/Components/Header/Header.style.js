import styled from "styled-components";

export const Wrapper = styled.div`
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

export const ItemCount = styled.div`
  position: absolute;
  height: 16px;
  width: 16px;
  right: 22px;
  bottom: 57%;
  border-radius: 10px;
  text-align: center;
  background-color: #988c51;
  color: #f3f3f3;
`;
