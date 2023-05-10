import styled from "styled-components";
import { convertPxToRem } from "utils";

export default styled.div`
  .signup__select {
    margin-left: ${convertPxToRem(10)};
    width: 100%;
  }

  .gender-wrapper {
    flex-direction: column;
    align-items: flex-start;
  }
`;
