import styled from "styled-components";
import { convertPxToRem } from "utils";
import colors from "styles/colors";

const { black } = colors
export default styled.div`
  padding: ${convertPxToRem(30)};
  max-width: ${convertPxToRem(1000)};
  margin: 0 auto;
  h2{
    color: ${black};
    font-size: ${convertPxToRem(35)};
  }
`;
