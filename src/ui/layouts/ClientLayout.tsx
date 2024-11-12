'use client';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../themes/GlobalStyling";
import React, { useState } from "react";
import Header from "../organisms/Header/Header";
import { getTheme, toggleTheme } from "@/utils/useTheme";
import ClientTemplate from "../templates/ClientTemplate";
import { ModalProvider } from "../contexts/ModalContext";
import Modal from "../organisms/Modals/Modals";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isView, setIsView] = useState("companies");
    const [view, setView] = useState("vacants");

    const theme = getTheme(isView);

    const handleToggle = () => {
        setView(prev => (prev === "vacants" ? "companies" : "vacants"));
        setIsView(prev => toggleTheme(prev));
    };

    return (
        <ThemeProvider theme={theme}>
            <ModalProvider>
                <GlobalStyle />
                <div className="layout">
                    <h1>Panel de Administración</h1>
                    <Header
                        onToggleTheme={handleToggle}
                        isView={isView}
                    />
                    <ClientTemplate isView={view}>
                        {children}
                    </ClientTemplate>
                </div>
                <Modal />
            </ModalProvider>
        </ThemeProvider>
    );
};

export default ClientLayout;
