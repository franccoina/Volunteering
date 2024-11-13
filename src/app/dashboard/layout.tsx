'use client';
import React from "react";
import HeaderOnline from "../../ui/organisms/HeaderOnline/HeaderOnline";
import { ModalProvider } from "@/ui/contexts/ModalContext";
import Modal from "@/ui/organisms/Modals/Modals";
import styles from "./Dash.module.scss";

const DashLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ModalProvider>
            <div className={styles.onlineLayout}>
                <HeaderOnline />
                {children}
                <Modal />
            </div>
        </ModalProvider>
    );
};

export default DashLayout;
