import styled from "styled-components";
import colors from "./colors";

const { black } = colors;

export default styled.div`
  * {
    font-family: "Roboto", sans-serif;
  }

  body {
  }

  ul,
  ol,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  a {
    color: ${black};
  }
  button {
    cursor: pointer;
  }

  button[disabled] {
    opacity: 0.7;
    cursor: auto;
  }

  textarea {
    resize: none;
  }

  .ant-tabs-left
    > .ant-tabs-content-holder
    > .ant-tabs-content
    > .ant-tabs-tabpane,
  .ant-tabs-left
    > div
    > .ant-tabs-content-holder
    > .ant-tabs-content
    > .ant-tabs-tabpane {
    padding-left: 0;
  }
`;
