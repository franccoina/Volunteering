import styles from "./Label.module.scss"
import React from 'react';
import { ILabelProps } from '@/app/core/application/models/atoms/Label';

const Label: React.FC<ILabelProps> = ({ text, htmlFor, className }) => {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {text}
    </label>
  );
};

export default Label;