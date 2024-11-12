import React from "react";

type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'checkbox' | 'radio'; // Agrega más tipos si es necesario

export interface IInputProps {
    type?: InputType;
    placeholder?: string;
    className?: string;
    name: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    key?: string;
    disabled?: boolean;
}