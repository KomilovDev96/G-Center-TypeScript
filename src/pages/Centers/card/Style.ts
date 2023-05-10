import styled from "styled-components";
import colors from "styles/colors";
import { convertPxToRem } from "utils";

const { centerCardShadow } = colors;

export default styled.div`
  box-shadow: 0px 0px 4px ${centerCardShadow};
  border-radius: ${convertPxToRem(6)};
  margin: ${convertPxToRem(20)} 0;
  padding: ${convertPxToRem(10)};

  .card__img {
    width: ${convertPxToRem(65)};
    height: ${convertPxToRem(65)};
    margin-right: ${convertPxToRem(10)};
  }
`;
