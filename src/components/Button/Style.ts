import styled from "styled-components";
import colors from "styles/colors";
import { convertPxToRem } from "utils";

const { mainBlue, white } = colors;

const StyledButton = styled.button`
  width: 100%;
  background: ${mainBlue};
  border: 1px solid ${mainBlue};
  color: ${white};
  border-radius: ${convertPxToRem(6)};
  padding: ${convertPxToRem(10)} ${convertPxToRem(15)};
`;

export default StyledButton;
