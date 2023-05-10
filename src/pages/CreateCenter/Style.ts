import styled from "styled-components";
import colors from "styles/colors";
import { convertPxToRem } from "utils";

const { greey } = colors;

export default styled.div`
  padding: ${convertPxToRem(30)};
  max-width: ${convertPxToRem(1000)};
  margin: 0 auto;

  .center__title {
    font-weight: 500;
    margin-bottom: ${convertPxToRem(30)};
  }

  .center__button-wrapper {
    margin-top: ${convertPxToRem(20)};
  }

  .center__button {
    width: 100%;
    background: ${greey};
    border: ${convertPxToRem(1)} solid ${greey};
    border-radius: ${convertPxToRem(6)};
    padding: ${convertPxToRem(10)};
  }

  .center__button--cancel {
    margin-right: ${convertPxToRem(15)};
  }

  @media (max-width: 870px) {
    & {
      padding: ${convertPxToRem(30)} 0;
    }
  }
`;
