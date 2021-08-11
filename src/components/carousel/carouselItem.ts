import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const CarouselItem = styled(Carousel.Item)`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  &.active {
    display: flex;
  }
`;
