"use client";
import { GrAddCircle } from "react-icons/gr";
import React from "react";
import Button from "../../atoms/Button/Button";
import styles from "./HeaderOffline.module.scss";

const HeaderOffline: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <h1>VolunteerConnect</h1>
        </div>
        <div className={styles.buttonsContainer}>
          <Button
            className="primaryBtn"
            type="button"
            label={"Iniciar Sesión"}
            icon={<GrAddCircle/>}
          />
          <Button
            className="secondaryBtn"
            type="button"
            label={"Registrarse"}
            icon={<GrAddCircle/>}
            />
        </div>
    </div>
  );
};

export default HeaderOffline;
