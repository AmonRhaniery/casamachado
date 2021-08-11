import styled from "styled-components";
import { BLACK } from "../../../styles/constants";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1% 0px;

  width: 100%;
  height: calc(23vh);

  background: ${BLACK};

  @media (max-width: 500px) {
    padding: 4% 0px;
  }
`;
