import styled from "styled-components";

export const Container = styled.nav`
  height: 101px;

  background-color: #0f52ba;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 65px;
`;
export const Titles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  height: 40px;
  max-height: 40px;
`;

export const Title = styled.h1`
  color: #ffff;
  width: fit-content;
  font-weight: 600;
  font-size: 40px;
  text-transform: uppercase;
  padding-bottom: 20px;
  padding: 0;
`;

export const SubTitle = styled.span`
  color: #ffff;
  font-weight: 100;
  max-height: 20px;
  font-size: 20px;
  position: relative;
  top: 3px;
  margin-left: 8px;
  text-transform: capitalize;
`;

export const CartButton = styled.button`
  width: 90px;
  height: 45px;

  background-color: #ffffff;

  border: none;
  border-radius: 8px;

  display: flex;
  align-items: center;
  padding-left: 10px;

  cursor: pointer;
  transition: ease-in-out background-color 0.5s;

  
  &:hover {
    background-color: #e4e4e4;
  }
`;

export const CartIcon = styled.img`
  height: 18px;
`;

export const CartText = styled.span`
  font-size: 18px;
  font-weight: 800;
  margin-left: 15.99px;

  transition: ease-in-out color 0.5s;
`;
