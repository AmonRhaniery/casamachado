import styled from "styled-components";
import { BLACK, YELLOW } from "../../styles/constants";

export const Subtitle = styled.p`
  width: calc(344vw / 5);
  margin: 0px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: calc(6vh / 5);
  /* identical to box height */
  text-align: center;

  color: ${BLACK};
  background: ${YELLOW};
  border-radius: calc(5vw / 5);
  padding: calc(5vw / 5) calc(10vw / 5);

  @media (min-width: 500px) {
    border-radius: 5px;
    padding: calc(5vh / 9.4) calc(10vh / 9.4);
    font-size: calc(14vh / 9.4);
    width: calc(400vh / 9.4);
  }
`;
