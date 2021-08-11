import styled from "styled-components";
import { BLACK } from "../../../styles/constants";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: calc(10vw / 14.4);

  width: 100%;
  height: calc(180vw / 9.4);

  background: ${BLACK};
`;
