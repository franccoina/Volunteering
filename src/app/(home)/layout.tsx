'use client';
import React from "react";
import HeaderOffline from "../../ui/organisms/HeaderOffline/HeaderOffline";

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="offlineLayout">
            <HeaderOffline />
            {children}
        </div>
    );
};

export default HomeLayout;
