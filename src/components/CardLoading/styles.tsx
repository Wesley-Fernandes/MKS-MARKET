import styled, { keyframes } from "styled-components";

const animation = keyframes`
    from{
        background-position: 0% 0%;
    }

    to{
        background-position: 135% 0%;
    }
`;
export const skeletonCard = styled.li`
  min-height: 285px;
  width: 218px;

  opacity: 0.2;

  background: linear-gradient(
    -90deg,
    #000000 0%,
    #272727 25%,
    #bababa 50%,
    #272727 75%,
    #000000 100%
  );
  box-shadow: 0 -2px 8px 2px #00000022;

  background-size: 400% 400%;

  border-radius: 8px;
  overflow: hidden;

  animation: ${animation} ease-in-out 1.2s infinite;
`;
