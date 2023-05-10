import styled from "styled-components";
import { convertPxToRem } from "utils";

export default styled.h3`
  font-size: ${convertPxToRem(18)};
  margin: 0;
  font-weight: 700;
`;
