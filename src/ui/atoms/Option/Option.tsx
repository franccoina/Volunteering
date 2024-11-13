import { IOptionProps } from "@/app/core/application/models/atoms/Option";
import styles from "./Option.module.scss";

const Option: React.FC<IOptionProps> = ({ title, disabled, value, key, placeholder }) => {
    return (
        <option title={title} className={styles.option} disabled={disabled} key={key} value={value}>
            {placeholder}
        </option>
    );
};

export default Option;