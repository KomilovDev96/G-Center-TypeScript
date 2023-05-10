import StyleText from "./Style";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
};

function Text({ children, className }: Props) {
  return <StyleText className={className}>{children}</StyleText>;
}

export default Text;
