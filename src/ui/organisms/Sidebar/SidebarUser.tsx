'use client';
import React from "react";
import Links from "@/ui/atoms/Link/Link";
import styles from "./Sidebar.module.scss";
import { LuFolderOpen, LuLogOut } from "react-icons/lu";
import { usePathname } from "next/navigation";

const navUserLinks = [
    { name: "Proyectos", href: "/dashboard", icon: <LuFolderOpen /> },
    { name: "Cerrar Sesión", href: "/", icon: <LuLogOut /> }
]

export const Sidebar: React.FC = () => {
    const pathname = usePathname();

    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.titleContainer}>
                <h1 className={styles.mainTitle}>VolunteerConnect</h1>
            </div>
            <div className={styles.linksContainer}>
                {                navUserLinks.map((link) => {
                    const isActive = pathname == (link.href) ? true : false;
                    
                    return (
                        <Links className={isActive ? `${styles.activeLink}` : ""} key={link.name} href={link.href} label={link.name} icon={link.icon} />
                    )
                }
                )}
            </div>
        </div>
    );
};