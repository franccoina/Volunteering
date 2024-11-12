import React from "react";
import Label from "@/ui/atoms/Label/Label";
import Input from "@/ui/atoms/Input/Input";
import { IFormInputProps } from "@/models/molecules/FormInput";

const FormInput: React.FC<IFormInputProps> = ({ text, htmlFor, className, type, placeholder,
    key, name, value, onChange, id, disabled }) => {
    return (
        <div key={key} className={className}>
            <Label htmlFor={htmlFor} text={text}></Label>
            <Input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} id={id} disabled={disabled} />
        </div>
    );
};

export default FormInput;