import styled from "styled-components";
import colors from "styles/colors";
import { convertPxToRem } from "utils";

const { white, imageBg } = colors;

export default styled.div`
  .img-wrapper {
    width: ${convertPxToRem(100)};
    height: ${convertPxToRem(100)};
    border-radius: 50%;
    margin-bottom: ${convertPxToRem(30)};
    overflow: hidden;
    position: relative;
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .img-wrapper:hover > .img-btn,
  .img-wrapper--active > .img-btn {
    opacity: 1;
    transition: 0.2s;
  }

  input[type="file"].img-input {
    display: none;
  }

  .img-btn {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${imageBg};
    color: ${white};
    border: transparent;
  }
`;
