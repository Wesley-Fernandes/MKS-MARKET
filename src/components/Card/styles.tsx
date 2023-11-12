import styled from "styled-components";

export const container = styled.li`
  height: 285px;
  width: 218px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  overflow: hidden;

  box-shadow: 0 -2px 8px 2px #00000022;
  background-color: #ffffff;
  
`;

export const image = styled.img`
  min-height: 138px;
  max-height: 138px;
  height: 138px;
`;

export const Informations = styled.div`
  display: flex;
  align-items: center;
  width: 192px;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 300;

  width: 124px;
  font-weight: 400;
`;

export const Price = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 64px;
  height: 26px;
  padding: 0 4px;


  font-size: 13px;
  font-weight: 600;

  background-color: #373737;
  color: #ffffff;
  border-radius: 5px;
`;

export const About = styled.p`
  font-size: 12px;
  font-weight: 100;
  width: 192px;
  font-weight: 400;
`;


export const Footer = styled.button`
  height: 31.91px;
  width: 100%;

  cursor: pointer;

  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 14px;

  background-color: #0f52ba;
  transition: ease-in-out 0.5s filter;

  &:hover{
    filter: brightness(0.9);
  }
`;
export const FooterIcon = styled.img`
  height: 12px;
  width: 13.5px;
`;

export const FooterText = styled.span`
  width: 77px;

  font-weight: 600px;
  font-size: 14px;

  text-transform: uppercase;
  color: #ffffff;
`;
