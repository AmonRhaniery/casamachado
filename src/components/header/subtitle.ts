import styled from "styled-components";
import { BLACK, YELLOW } from "../../styles/constants";

export const Subtitle = styled.p`
  width: calc(420vw / 14.4);

  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: calc(16vw / 14.4);
  /* identical to box height */
  text-align: center;

  color: ${BLACK};
  background: ${YELLOW};
  border-radius: calc(5vw / 14.4);
  padding: calc(5vw / 14.4) calc(10vw / 14.4);
`;
