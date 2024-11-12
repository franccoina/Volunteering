import Option from "../Option/Option";
import { ISelectProps } from "@/app/core/application/models/atoms/Select";
import styles from "./Select.module.scss"

const Select: React.FC<ISelectProps> = ({ value, name, options, onChange }) => {
  return (
    <select title={name} className={styles.select} name={name} onChange={onChange} value={value}>
      <Option title="disabled" value="" disabled placeholder="-- Elige una opción ---"></Option>
        &&
      {options.map((option, index) => (
        <Option title={option} key={index} value={option} placeholder={option}></Option>
      ))}
    </select>
  );
};

export default Select;