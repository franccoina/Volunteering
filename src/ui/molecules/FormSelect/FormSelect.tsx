import React from "react";
import Label from "@/ui/atoms/Label/Label";
import Select from "@/ui/atoms/Select/Select";
import { IFormSelectProps } from "@/models/molecules/FormSelect";

const FormSelect: React.FC<IFormSelectProps> = ({ text, htmlFor, className, options, name, value, onChange}) => {
    return (
        <div className={className}>
            <Label htmlFor={htmlFor} text={text}></Label>
            <Select name={name} value={value} onChange={onChange} options={options} />
        </div>
    );
};

export default FormSelect;