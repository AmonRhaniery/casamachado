import styled from "styled-components";
import { DARK_YELLOW } from "../../styles/constants";

export const Image = styled.img`
  max-height: 65vh;
  box-shadow: 0 0 1em ${DARK_YELLOW};
  border-radius: 1vh;

  @media (max-width: 870px) {
    width: 100%;
    max-height: unset;
    border-radius: 0px;
    object-fit: cover;
    height: 62vh;
  }
`;
