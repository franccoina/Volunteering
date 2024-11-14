"use client";
import React from "react";
import Button from "../../atoms/Button/Button";
import { signOut, useSession } from "next-auth/react";
import { useModalContext } from "@/ui/contexts/ModalContext";
import styles from "./HeaderOnline.module.scss";
import { GrAddCircle } from "react-icons/gr";
import { toast } from "react-toastify";
import { LuFileSpreadsheet } from "react-icons/lu";
import { EndpointReports } from '@/app/core/application/dto';
import FormProject from "../Form/projects/FormProjects";
import Dropdown from "@/ui/molecules/Dropdown/Dropdown";
import { IHeaderOnlineProps } from "@/app/core/application/models/organisms/HeaderOnline";
import { useRouter } from "next/navigation";

const HeaderOnline: React.FC<IHeaderOnlineProps> = ({ project }: IHeaderOnlineProps) => {
  const { openModal, setModalContent } = useModalContext();
  const { data: session } = useSession();
  const router = useRouter();

  const handleModal = () => {
    setModalContent(
      (
        <FormProject initialData={project} />
      )
    );
    openModal()
  }

  const handleSignOut = () => {
    signOut();
    router.push('/login');
  };

  if (!session || !session.user || !session.user.email) {
    // Si no hay sesión o no hay email, no renderizamos el componente
    return null;
  }

  const user = session.user;

  const handleDownloadReport = async () => {
    try {
      const res = await fetch(EndpointReports.GET_REPORTS, {
        method: "GET",
      })

      if (!res.ok) {
        throw new Error("Error descargando el reporte");
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "reportes_proyectos.xlsx";
      document.body.appendChild(a);
      a.click();
      a.remove();
      toast.success("Tus proyectos se han descargado con éxito.")
    } catch (error) {
      console.log("Error descargando los reportes", error)
      toast.error("No tienes proyectos creados.")
    }
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
          onClick={handleDownloadReport}
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
        <Dropdown user={user} signOut={handleSignOut} />
      </div>
    </div>
  );
};

export default HeaderOnline;
