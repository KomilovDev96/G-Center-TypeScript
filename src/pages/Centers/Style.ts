import styled from "styled-components";
import colors from "styles/colors";
import { convertPxToRem } from "utils";

const { greey, white, mainBlue } = colors;

export default styled.div`
  padding: ${convertPxToRem(25)} 0;

  .tab__header {
    border-bottom: ${convertPxToRem(1)} solid ${greey};
  }
  .tab__header,
  .tab__body {
    padding: 0 ${convertPxToRem(20)} ${convertPxToRem(10)};
  }

  .tab__btn {
    padding: ${convertPxToRem(5)} ${convertPxToRem(81)};
    font-size: ${convertPxToRem(16)};
    color: ${white};
    background: ${mainBlue};
    border: none;
    border-radius: ${convertPxToRem(6)};
  }

  @media (max-width: 600px) {
    .tab__header {
      flex-direction: column;
      align-items: flex-start !important;
    }

    .tab__btn {
      margin-top: ${convertPxToRem(15)};
    }
    .tab__body {
      padding: 0 ${convertPxToRem(10)} ${convertPxToRem(10)};
    }
  }
`;
