import styled from "styled-components";

export const WppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 180px;

  @media (min-width: 1500px) {
    width: 200px;
  }
`;
