import styled from "styled-components";

export const container = styled.li`
  width: 379px;
  height: 95px;

  display: flex;
  gap: 21px;

  align-items: center;

  background-color: #ffffff;
  border-radius: 8px;
  padding: 23px;
`;

export const image = styled.img`
  height: 57px;
  max-width: 57px;
`;

export const title = styled.span`
  width: 113px;
`;

//Container changer
export const containerChanger = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
`;

export const ChangerLabel = styled.span`
  font-size: 8px;
  font-weight: 400;
  margin-bottom: 4px;
`;


export const CloseButton = styled.button`
    min-height: 18px;
    min-width: 18px;

    position: absolute;
    margin-bottom: 90px;
    right: 50px;

    border: none;
    border-radius: 50%;

    background-color: black;
    color: #ffffff;


    font-size: 12px;
    font-weight: 300;
`;

export const changerAbover = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 50px;
  height: 19px;

  outline: 1px solid #bfbfbf;
  border-radius: 5px;
`;

export const ChangerHud = styled.span`
  min-width: calc(50px / 3 - 1px);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 10px;
`;
export const ChangerButton = styled.button`
  min-width: calc(50px / 3 - 1px);

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
`;

export const ChangerDivisor = styled.hr`
  width: 1px;
  height: 11.5px;
  border-color: #bfbfbf58;
`;

export const price = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
