"use client";
import React from "react";
import Button from "../../atoms/Button/Button";
import FormAdd from "../Form/projects/FormProjects";
import Links from "@/ui/atoms/Link/Link";
import { useModalContext } from "@/ui/contexts/ModalContext";
import styles from "./HeaderOnline.module.scss";
import { GrAddCircle } from "react-icons/gr";
import { LuFileSpreadsheet } from "react-icons/lu";

const HeaderOnline: React.FC = () => {
  const { openModal, setModalContent } = useModalContext();

  const handleModal = () => {
    setModalContent(
      (
        <FormAdd />
      )
    );
    openModal()
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.mainTitle}>Dashboard de Proyectos</h1>
      </div>
      <div className={styles.buttonsContainer}>
        <Button
          className={"secondaryBtn"}
          type="button"
          label="Descargar Reporte"
          icon={<LuFileSpreadsheet />}
        >
        </Button>
        <Button
          className={"secondaryBtn"}
          type="button"
          onClick={handleModal}
          label="Nuevo Proyecto"
          icon={<GrAddCircle />}
        >
        </Button>
        <Links
          href="/"
          className={styles.profileLink}
          label={"Profile"}
          icon={<GrAddCircle />}
        />
      </div>
    </div>
  );
};

export default HeaderOnline;
