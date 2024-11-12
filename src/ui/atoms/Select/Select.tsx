import styled from "styled-components";
import Option from "../Option/Option";
import { ISelectProps } from "@/models/atoms/Select";

const StyledSelect = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.borders};
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Select: React.FC<ISelectProps> = ({ value, name, options, onChange }) => {
  return (
    <StyledSelect name={name} onChange={onChange} value={value}>
      <Option value="" disabled placeholder="-- Elige una opción ---"></Option>
        &&
      {options.map((option, index) => (
        <Option key={index} value={option} placeholder={option}></Option>
      ))}
    </StyledSelect>
  );
};

export default Select;