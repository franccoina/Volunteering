import React from 'react';
import { IButtonProps } from '@/app/core/application/models/atoms/Button';
import styles from "./Button.module.scss"

const Button: React.FC<IButtonProps> = ({ label, type, icon, onClick }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {icon}{label}
    </button>
  );
};

export default Button;