import styled from "styled-components";
import { convertPxToRem } from "utils";

const StyledPhoneInput = styled.div`
  .react-tel-input {
    z-index: 99;
    margin-bottom: ${convertPxToRem(24)};
  }
  .country-list {
    text-align: left;
  }
  .react-tel-input .special-label {
    display: block;
    left: 56px;
    font-size: 14px;
    top: -11px;
  }
  .react-tel-input .form-control {
    padding: ${convertPxToRem(10)} ${convertPxToRem(48)};
    width: 100%;
    height: auto;
  }
`;

export default StyledPhoneInput;
