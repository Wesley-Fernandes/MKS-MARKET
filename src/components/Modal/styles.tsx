import styled from "styled-components";

export const container = styled.aside`
  width: 486px;
  min-width: 486px;
  height: 100vh;

  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;

  box-shadow: -2px 0 8px 3px #00000021;
  background-color: #0f52ba;
`;

export const header = styled.header`
  height: 101px;
  width: 100%;
  padding-top: 36px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const title = styled.h2`
  color: #ffffff;
  font-weight: 700;
  line-height: 32.91px;
  padding-left: 50px;
`;

export const buttonClose = styled.button`
  min-height: 38px;
  min-width: 38px;

  border: none;
  border-radius: 50%;

  font-weight: 400;
  font-size: 24px;
  line-height: 15px;

  background-color: #000000;
  color: #ffffff;

  cursor: pointer;
  transition: ease-in-out color 0.5s;
  margin-right: 16px;
  &:hover {
    color: red;
  }
`;

export const Products = styled.ul`
  width: calc(100% - 47px);
  height: calc(100% - 97px - 56px - 97px);

  display: flex;
  align-items: center;
  gap: 22px;

  flex-direction: column;
  padding-top: 64px;

`;

export const PriceSeparator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 97px;
  width: calc(100% - 47px);
`;

export const PriceText = styled.div`
  font-size: 28px;
  font-weight: 700;

  color: #ffffff;

  text-transform: capitalize;
`;

export const ButtonBuy = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: capitalize;

  width: 100%;
  height: 97px;

  font-size: 28px;
  font-weight: 700;

  background-color: #000000;
  color: #ffffff;

  border: none;
`;
