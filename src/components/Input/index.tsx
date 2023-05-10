import { Form, Input } from "antd";
import { useState } from "react";
import t from "translate";
import StyledInput, { StyledMainInputeWrapper } from "./Style";

export interface IInputProps {
  label: string;
  name: string;
  type?: string;
  onChange: (value: string) => void;
  inputValue: string;
  isRequired?: boolean;
}

export const CustomInput = ({
  label,
  name,
  type,
  onChange,
  inputValue,
  isRequired = false,
}: IInputProps) => {
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const focusHandler = () => {
    setIsInputFocused((isFocused) => !isFocused);
  };

  return (
    <StyledInput>
      <StyledMainInputeWrapper>
        <Form.Item
          className={
            (inputValue || (isInputFocused ? true : "")) && "inputActive"
          }
          label={t(label)}
          name={name}
          required={isRequired}
        >
          <Input
            onChange={({ target }) => onChange(target.value)}
            onBlur={focusHandler}
            onFocus={focusHandler}
            type={type}
          />
        </Form.Item>
      </StyledMainInputeWrapper>
    </StyledInput>
  );
};
