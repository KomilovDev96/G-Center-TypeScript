import styled from "styled-components";
import { convertPxToRem } from "utils";

export default styled.div`
  max-width: ${convertPxToRem(1440)};
  width: 100%;
  padding: 0 ${convertPxToRem(15)};
  margin: 0 auto;
`;
