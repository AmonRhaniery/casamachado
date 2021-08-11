import styled from "styled-components";
import { GRAY } from "../../styles/constants";

export const FooterText = styled.p`
  margin: 0px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  //line-height: 28px;
  display: flex;
  align-items: center;
  color: ${GRAY};

  @media (min-width: 1500px) {
    font-size: 18px;
  }

  @media (max-width: 870px) {
    text-align: center;
  }
`;
