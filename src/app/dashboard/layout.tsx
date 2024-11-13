'use client';
import React from "react";
import HeaderOnline from "../../ui/organisms/HeaderOnline/HeaderOnline";
import { ModalProvider } from "@/ui/contexts/ModalContext";

const DashLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ModalProvider>
            <div className="onlineLayout">
                <HeaderOnline />
                {children}
            </div>
        </ModalProvider>
    );
};

export default DashLayout;
