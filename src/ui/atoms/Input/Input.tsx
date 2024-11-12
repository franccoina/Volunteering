import React from 'react';
import { IInputProps } from '@/app/core/application/models/atoms/Input';
import styles from "./Input.module.scss"

const Input: React.FC<IInputProps> = ({
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
        <input
            className={styles.input}
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
