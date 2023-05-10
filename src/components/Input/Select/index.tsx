import { Form, Select } from "antd";
import t from "translate";
import { IInputProps } from "..";
import { StyledDataPicker } from "../Datapicker/Styled";
import { StyledMainInputeWrapper } from "../Style";
import StyledSelect from "./Style";

const { Option } = Select;

interface ICustomSelectProps extends IInputProps {
  options: string[];
}

function CustomSelect(props: ICustomSelectProps) {
  const { options, onChange, name, label, isRequired } = props;

  return (
    <StyledSelect>
      <StyledMainInputeWrapper>
        <StyledDataPicker>
          <Form.Item name={name} label={t(label)} required={isRequired}>
            <Select allowClear showSearch onChange={onChange}>
              {options.map((optionValue) => (
                <Option key={optionValue} value={optionValue}>
                  {optionValue}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </StyledDataPicker>
      </StyledMainInputeWrapper>
    </StyledSelect>
  );
}

export default CustomSelect;
