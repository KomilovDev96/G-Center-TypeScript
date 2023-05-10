import { Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
import t from "translate";
import { IInputProps } from "..";
import StyledInput, { StyledMainInputeWrapper } from "../Style";

export const CustomTextarea = ({
  label,
  name,
  inputValue,
  onChange,
  isRequired = false,
}: IInputProps) => {
  const [isTextareaFocused, setIsTextareaFocused] = useState<boolean>(false);
  const focusHandler = () => {
    setIsTextareaFocused((isFocused) => !isFocused);
  };
  return (
    <StyledInput>
      <StyledMainInputeWrapper>
        <Form.Item
          className={
            (inputValue || (isTextareaFocused ? true : "")) && "inputActive"
          }
          label={t(label)}
          name={name}
          required={isRequired}
        >
          <TextArea
            onChange={({ target }) => onChange(target.value)}
            onBlur={focusHandler}
            onFocus={focusHandler}
            rows={8}
          />
        </Form.Item>
      </StyledMainInputeWrapper>
    </StyledInput>
  );
};
