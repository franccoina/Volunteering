'use client';
import React from "react";
import Links from "@/ui/atoms/Link/Link";
import styles from "./Auth.module.scss";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={styles.auth}>
            <Links className={styles.backLink} href="/" label="Volver al Inicio"/>
            {children}
        </div>
    );
};

export default AuthLayout;
