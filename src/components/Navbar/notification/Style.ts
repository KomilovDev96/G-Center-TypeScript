import styled from "styled-components";
import { convertPxToRem } from "utils";

export default styled.div`
  margin-right: 10px;
  .notification__btn {
    background: transparent;
    border: transparent;
  }
  .notification__btn-icon {
    height: ${convertPxToRem(18)};
  }
`;
