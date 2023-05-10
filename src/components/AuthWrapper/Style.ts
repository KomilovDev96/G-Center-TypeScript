import styled from "styled-components";
import colors from "styles/colors";
import { convertPxToRem } from "utils";

const { white, mainBlue } = colors;

const AuthWrapperStyle = styled.div`
  min-height: 100vh;

  .auth-wrapper__block {
    width: 50%;
    padding: ${convertPxToRem(10)};
  }

  .wrapper {
    height: 100%;
    text-align: center;
  }

  .logo-link {
    width: ${convertPxToRem(100)};
    display: block;
    margin: 0 auto;
    svg {
      width: 100%;
    }
  }
  .auth__title {
    margin: ${convertPxToRem(20)} 0 ${convertPxToRem(10)};
  }

  .auth__text {
    margin-bottom: ${convertPxToRem(20)};
  }

  .auth__sign-up-link {
    color: ${mainBlue};
    margin-left: ${convertPxToRem(5)};
    font-weight: 600;
  }

  .auth-wrapper__slider-side {
    color: ${white};
    background: ${mainBlue};
    text-align: center;
    height: 100vh;
    position: sticky;
    top: 0;

    .slick-slider {
      transform: translateY(50%);
    }
  }

  .slick-dots li button:before {
    color: ${white};
  }

  .slide__img {
    width: 100%;
    max-width: ${convertPxToRem(450)};
    margin: 0 auto;
  }

  .slide__title {
    font-size: ${convertPxToRem(30)};
    color: ${white};
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    .wrapper {
      flex-direction: column !important;
    }
    .auth-wrapper__block {
      width: 100%;
      padding: ${convertPxToRem(30)} ${convertPxToRem(10)};
    }
    .slide__img {
      max-width: ${convertPxToRem(250)};
    }
    .auth-wrapper__slider-side .slick-slider {
      transform: translateY(0);
    }
    .auth__text-bottom {
      margin-top: ${convertPxToRem(30)};
    }
    .auth-wrapper__slider-side {
      height: auto;
      position: relative;
    }
  }
`;

export default AuthWrapperStyle;
