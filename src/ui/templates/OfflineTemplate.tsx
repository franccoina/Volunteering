"use client";
import React from "react";
import HeaderOffline from "../organisms/Header/HeaderOffline";

const OfflineTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main className="offlineTemplate">
          <HeaderOffline/>
          {children}
    </main>
  );
};

export default OfflineTemplate;
