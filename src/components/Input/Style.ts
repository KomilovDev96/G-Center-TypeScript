import styled from "styled-components";
import colors from "styles/colors";
import { convertPxToRem } from "utils";

const { white } = colors;

const StyledInput = styled.div`
  .ant-row.ant-form-item {
    position: relative;
  }

  .inputActive .ant-form-item-label {
    top: ${convertPxToRem(-10)};
  }

  .ant-form-item-label {
    position: absolute;
    z-index: 9;
    top: ${convertPxToRem(10)};
    left: ${convertPxToRem(20)};
    padding: 0 ${convertPxToRem(5)};
    transition: 0.5s;
    label::after {
      content: "";
    }
    label {
      background: ${white};
      height: auto;
    }
  }

  .ant-input {
    padding: ${convertPxToRem(10)} ${convertPxToRem(20)};
    border-radius: ${convertPxToRem(6)};
  }
`;

export default StyledInput;

export const StyledMainInputeWrapper = styled.div`
  .ant-picker,
  .ant-input,
  .ant-select-selector {
    padding: ${convertPxToRem(10)} ${convertPxToRem(20)};
    border-radius: ${convertPxToRem(6)} !important;
  }
`;
