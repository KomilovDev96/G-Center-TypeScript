import { DatePicker, Form } from "antd";
import { RangePickerProps } from "antd/lib/date-picker";
import moment from "moment";
import t from "translate";
import { IInputProps } from "..";
import { StyledMainInputeWrapper } from "../Style";
import { StyledDataPicker } from "./Styled";

const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  return current && current > moment().endOf("day");
};

const CustomDatePicker = ({
  label,
  name,
  onChange,
  isRequired = false,
}: IInputProps) => {
  return (
    <StyledDataPicker>
      <StyledMainInputeWrapper>
        <Form.Item label={t(label)} name={name} required={isRequired}>
          <DatePicker
            format={"DD/MM/YYYY"}
            onSelect={(value) => onChange(value.toString())}
            disabledDate={disabledDate}
          />
        </Form.Item>
      </StyledMainInputeWrapper>
    </StyledDataPicker>
  );
};

export default CustomDatePicker;
