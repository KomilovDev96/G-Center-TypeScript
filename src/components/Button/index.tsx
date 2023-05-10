import StyledButton from "./Style";

type Props = {
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  isDisabled?: boolean;
  children: string | JSX.Element | JSX.Element[];
};

function CustomButton({ children, className, isDisabled, type }: Props) {
  return (
    <StyledButton disabled={isDisabled} type={type} className={className}>
      {children}
    </StyledButton>
  );
}

export default CustomButton;
