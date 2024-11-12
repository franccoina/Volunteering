'use client';
import React from "react";
import OfflineTemplate from "../templates/OfflineTemplate";
import { ModalProvider } from "../contexts/ModalContext";
import Modal from "../organisms/Modals/Modals";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
            <ModalProvider>
                <div className="offlineLayout">
                    <OfflineTemplate>
                        {children}
                    </OfflineTemplate>
                </div>
                <Modal />
            </ModalProvider>
    );
};

export default ClientLayout;
