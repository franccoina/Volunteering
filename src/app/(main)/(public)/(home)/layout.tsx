'use client';
import React from "react";
import HeaderOffline from "../../../../ui/organisms/HeaderOffline/HeaderOffline";
import styles from "./Home.module.scss";

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={styles.home}>
            <HeaderOffline />
            {children}
        </div>
    );
};

export default HomeLayout;
