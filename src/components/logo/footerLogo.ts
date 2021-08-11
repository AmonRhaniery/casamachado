import styled from "styled-components";

export const FooterLogo = styled.img`
  right: 40px;
  position: relative;
  height: 30%;
  content: url("nome.jpg");
  opacity: 0.5;

  @media (max-width: 870px) {
    width: 30vw;
    height: unset;
    right: unset;
  }
`;
