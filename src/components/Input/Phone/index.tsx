import React from "react";
import { IInputProps } from "..";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import StyledPhoneInput from "./Style";
import t from "translate";

function CustomPhoneInput({
  inputValue,
  label,
  name,
  onChange,
  isRequired,
  type,
}: IInputProps) {
  return (
    <StyledPhoneInput>
      <PhoneInput
        inputProps={{
          name: "phone",
          required: isRequired,
          autoFocus: true,
        }}
        specialLabel={t(label)}
        country={"uzb"}
        enableSearch={true}
        value={inputValue}
        onChange={onChange}
      />
    </StyledPhoneInput>
  );
}

export default CustomPhoneInput;
