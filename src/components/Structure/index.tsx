import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100vw;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

export const Products = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;

  min-width: 218px;
  max-height: 601px;
`;

export const Footer = styled.footer`
  display: flex;
  min-height: 34px;

  align-items: center;
  justify-content: center;
  
  background-color: #EEEEEE;
`;

export const FooterText = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

export const Page = styled.main`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    overflow: hidden;

    background-color: #F9F9F9;
`