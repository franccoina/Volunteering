import React from 'react';
import styled from 'styled-components';
import { IButtonProps } from '@/models/atoms/Button';

const StyledButton = styled.button`
    cursor: pointer;
    display: flex;
    gap: 5px;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    transition: 1s ease-in-out;

    &:hover {
      transition: background-color 0.3s ease-in-out;
    }
`;

const Button: React.FC<IButtonProps> = ({ className, label, type, icon, onClick }) => {
  return (
    <StyledButton className={className} type={type} onClick={onClick}>
      {icon}{label}
    </StyledButton>
  );
};

export default Button;