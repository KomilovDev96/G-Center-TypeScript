import styled from "styled-components";
import { convertPxToRem } from "utils";

export const RowWraperRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ${convertPxToRem(-15)};
`;
