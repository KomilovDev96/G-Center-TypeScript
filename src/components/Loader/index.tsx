import { Spin } from "antd";
import StyleLoader from "./Style";

function Loader() {
  return (
    <StyleLoader>
      <Spin size="large" />
    </StyleLoader>
  );
}

export default Loader;
