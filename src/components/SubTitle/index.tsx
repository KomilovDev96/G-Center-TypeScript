import StyleSubTitle from "./Style";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
};

function SubTitle({ children, className }: Props) {
  return <StyleSubTitle className={className}>{children}</StyleSubTitle>;
}

export default SubTitle;
