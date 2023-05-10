import styled from "styled-components";
import colors from "styles/colors";
import { convertPxToRem } from "utils";

const { mainBlue } = colors;

export default styled.div`
  text-align: center;
  max-width: ${convertPxToRem(400)};
  margin: 0 auto;

  .wrapper,
  & {
    height: 100%;
  }

  .signin__forgot-pass-wrapper {
    margin-bottom: ${convertPxToRem(20)};
  }

  .signin__forgot-pass-wrapper a {
    color: ${mainBlue};
  }
`;
