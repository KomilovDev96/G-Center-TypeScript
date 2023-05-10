import StyleContainer from "./Style";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

function Container({ children }: Props) {
  return <StyleContainer>{children}</StyleContainer>;
}

export default Container;
