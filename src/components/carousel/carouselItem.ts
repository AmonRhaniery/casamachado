import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const CarouselItem = styled(Carousel.Item)`
  //height: calc(500vh / 9.4);
  display: flex;
  align-items: center;
  flex-direction: column;
  &.active {
    display: flex;
  }
`;
