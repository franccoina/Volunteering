import styled from 'styled-components';
import React from 'react';
import { ITextareaProps } from '@/models/atoms/Textarea';

const TextareaStyle = styled.textarea`
    width: 100%;  
    height: 80px;        
    padding: 10px;        
    border: 1px solid ${({ theme }) => theme.colors.borders};
    
    &:focus {
        outline: none;          
    }
    
    &:disabled {
        background-color: ${({ theme }) => theme.colors.bgInactive};
        cursor: not-allowed;    
    }
`;

const Textarea: React.FC<ITextareaProps> = ({
    placeholder,
    value,
    name,
    onChange,
    id,
    key,
    className
}) => {
    return (
        <TextareaStyle
            className={className}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            id={id}
            key={key}
        />
    );
};

export default Textarea;