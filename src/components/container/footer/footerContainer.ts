import styled from "styled-components";
import { BLACK } from "../../../styles/constants";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: calc(20vw / 9.4);
  padding-right: calc(20vw / 9.4);

  //position: absolute;
  //width: 1438px;
  height: calc(80vw / 9.4);
  //left: 0px;
  //top: 869px;
  background: ${BLACK};
`;
