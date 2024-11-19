'use client';
import React from "react";
import { ModalProvider } from "@/ui/contexts/ModalContext";
import Modal from "@/ui/organisms/Modals/Modals";
import styles from "./dashboard/Dash.module.scss";
import Sidebar from "@/ui/organisms/Sidebar/Sidebar";
import AuthGuard from "./dashboard/guard/AuthGuard";

const DashLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ModalProvider>
            <div className={styles.dashboard}>
                <Modal />
                <Sidebar />
                <AuthGuard>
                    {children}
                </AuthGuard>
            </div>
        </ModalProvider>
    );
};

export default DashLayout;
