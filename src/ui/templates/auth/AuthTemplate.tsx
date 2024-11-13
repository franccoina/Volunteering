'use client'
import FormLogin  from "@/ui/organisms/Form/auth/FormLogin";
import FormSignup from "@/ui/organisms/Form/auth/FormSignup";
import styles from "./AuthTemplate.module.scss"
import { usePathname } from "next/navigation";
import React from "react";

const AuthTemplate: React.FC = () => {
    const pathname = usePathname();

    return (
        <div className={styles.divContainer}>
            <div className={styles.div}>
                {
                    pathname == "/signup" ? (
                        <FormSignup />
                    ) : (
                        <FormLogin />
                    )
                }
            </div>
        </div>

    )
}

export default AuthTemplate;