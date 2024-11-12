import styled from "styled-components";
import { IOptionProps } from "@/models/atoms/Option";

const StyledOption = styled.option`
    color: ${({ theme }) => theme.colors.textPrimary};
`;

const Option: React.FC<IOptionProps> = ({ disabled, value, key, placeholder }) => {
    return (
        <StyledOption disabled={disabled} key={key} value={value}>
            {placeholder}
        </StyledOption>
    );
};

export default Option;