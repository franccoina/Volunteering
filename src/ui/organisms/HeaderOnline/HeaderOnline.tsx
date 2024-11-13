"use client";
import { GrAddCircle } from "react-icons/gr";
import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "@/ui/atoms/Input/Input";
import FormAdd from "../Form/FormAdd";
import { useModalContext } from "@/ui/contexts/ModalContext";
import styles from "./HeaderOnline.module.scss";

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
    <div className={styles.x}>
      <div className={styles.x}>
        <div className={styles.x}>
          <div className={styles.x}>
            <Button
              className={styles.x}
              type="button"
              label={""}
              icon={<GrAddCircle />}
            />
          </div>
          <div className={styles.x}>
            <Button
              className={styles.x}
              type="button"
              label={""}
              icon={<GrAddCircle />}
            />
          </div>
        </div>
        <div className={styles.x}>
          <Input className={styles.x} name="search" value={""} type="text" placeholder="⌕ Buscar..." />
        </div>
      </div>
      <div className={styles.x}>
        <h2> </h2>
        <div className={styles.x}>
          <Button
            className={styles.x}
            type="button"
            label={""}
            icon={<GrAddCircle />}
            onClick={handleModal}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderOnline;
