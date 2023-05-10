import styled from "styled-components";
import colors from "styles/colors";

const { imageBg } = colors;

export default styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background: ${imageBg};
  display: flex;
  align-items: center;
  justify-content: center;
`;
