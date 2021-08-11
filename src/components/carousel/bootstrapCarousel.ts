import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import { BLACK } from "../../styles/constants";

export const BootstrapCarousel = styled(Carousel)`
  height: 100%;
  width: 110vh;
  .carousel-inner {
    height: 100%;
  }
  .carousel-control-next-icon {
    background-color: ${BLACK};
    border-radius: 10px;
  }
  .carousel-control-prev-icon {
    background-color: ${BLACK};
    border-radius: 10px;
  }

  @media (min-width: 870px) {
    width: 100%;
  }
`;
