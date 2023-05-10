import styled from "styled-components";
import { convertPxToRem } from "utils";

export const StyledDataPicker = styled.div`
  .ant-form-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .ant-form-item-control,
  .ant-picker {
    width: 100%;
  }
  .ant-picker {
    margin-top: ${convertPxToRem(10)};
  }
`;
