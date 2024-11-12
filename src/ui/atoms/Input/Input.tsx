import styled from 'styled-components';
import React from 'react';
import { IInputProps } from '@/models/atoms/Input';

const InputStyle = styled.input`
    background-color: #fff; 
    width: 100%;  
    height: 100%;        
    padding: 10px;        
    border: 1px solid #ccc; 
    
    &:focus {
        outline: none;          
    }
    
    &:disabled {
        background-color: #f5f5f5;
        cursor: not-allowed;    
    }
`;

const Input: React.FC<IInputProps> = ({
    className,
    type,
    placeholder,
    value,
    name,
    onChange,
    id,
    key,
    disabled = false
}) => {
    return (
        <InputStyle
            className={className}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            id={id}
            key={key}
            disabled={disabled}
        />
    );
};

export default Input;
