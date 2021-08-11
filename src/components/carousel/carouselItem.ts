import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const CarouselItem = styled(Carousel.Item)`
  display: flex;
  align-items: center;
  flex-direction: column;
  &.active {
    display: flex;
  }
`;
