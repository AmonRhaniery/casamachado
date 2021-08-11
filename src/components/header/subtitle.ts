import styled from "styled-components";
import { BLACK, YELLOW } from "../../styles/constants";

export const Subtitle = styled.p`
  width: calc(420vw / 14.4);
  margin: 0px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: calc(14vh / 9.4);
  /* identical to box height */
  text-align: center;

  color: ${BLACK};
  background: ${YELLOW};
  border-radius: calc(5vw / 14.4);
  padding: calc(5vw / 14.4) calc(10vw / 14.4);

  @media (min-width: 870px) {
    border-radius: 5px;
    padding: calc(5vh / 9.4) calc(10vh / 9.4);
    font-size: calc(14vh / 9.4);
    width: calc(400vh / 9.4);
  }
`;
