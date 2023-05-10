import styled from "styled-components";
import colors from "styles/colors";
import { convertPxToRem } from "utils";

const { greey, mainBlue, white } = colors;

export default styled.div`
  padding: ${convertPxToRem(30)};
  border: 1px solid ${greey};
  border-radius: ${convertPxToRem(6)};
  text-align: center;
  width: 100%;
  margin-right: ${convertPxToRem(15)};
  max-width: ${convertPxToRem(300)};
  &:last-child {
    margin-right: 0;
  }

  .card__title {
    font-size: ${convertPxToRem(35)};
    margin-bottom: 0;
  }

  .card__text {
  }

  .card__price {
    font-size: ${convertPxToRem(18)};
  }

  .card__btn {
    background: transparent;
    border: ${convertPxToRem(1)} solid ${mainBlue};
    color: ${mainBlue};
    font-size: ${convertPxToRem(16)};
    padding: ${convertPxToRem(10)} ${convertPxToRem(15)};
    border-radius: ${convertPxToRem(6)};
    width: 100%;
  }

  .card__btn--active {
    background: ${mainBlue};
    color: ${white};
  }

  @media (max-width: 650px) {
    & {
      margin-bottom: ${convertPxToRem(15)};
      margin-right: 0;
    }
  }
`;
