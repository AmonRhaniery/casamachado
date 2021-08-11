import styled from "styled-components";

export const CarouselContainer = styled.div`
  height: 68vh;
  background-image: url("background.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 870px) {
    height: unset;
  }
`;
