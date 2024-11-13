"use client";
import React from "react";
import Button from "../../atoms/Button/Button";
import styles from "./HeaderOffline.module.scss";
import Links from "@/ui/atoms/Link/Link";

const HeaderOffline: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.mainTitle}>VolunteerConnect</h1>
      </div>
      <div className={styles.buttonsContainer}>
        <Button
          className={styles.primaryBtn}
          type="button"
        >
          <Links className={styles.backLink} href="/login" label="Iniciar Sesión" />
        </Button>
        <Button
          className={styles.secondaryBtn}
          type="button"
        >
          <Links className={styles.backLink} href="/signup" label="Registrarse" />
        </Button>
      </div>
    </div>
  );
};

export default HeaderOffline;
