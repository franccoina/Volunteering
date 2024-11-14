'use client';
import React from "react";
import { ModalProvider } from "@/ui/contexts/ModalContext";
import Modal from "@/ui/organisms/Modals/Modals";
import styles from "./Dash.module.scss";
import { Sidebar } from "@/ui/organisms/Sidebar/SidebarUser";

const DashLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ModalProvider>
            <div className={styles.dashboard}>
                <Sidebar />
                {children}
                <Modal />
            </div>
        </ModalProvider>
    );
};

export default DashLayout;
