import styles from "./Home.module.scss";
import Button from "@/ui/atoms/Button/Button";
import Links from "@/ui/atoms/Link/Link";

export default function Home() {
  return (
    <div className={styles.homeContent}>
      <div className={styles.bodyContainer}>
        <h1>Conecta, Colabora, Cambia el Mundo</h1>
        <p>Únete a nuestra comunidad de voluntarios y organizadores. Encuentra proyectos que te apasionen o crea los tuyos propios para hacer una diferencia en tu comunidad.</p>
        <div className={styles.buttonsContainer}>
        <Button
          className={"secondaryBtn"}
          type="button"
        >
          <Links href="/login" label="Explorar Proyectos" />
        </Button>
        <Button
          className={"tertiaryBtn"}
          type="button"
        >
          <Links href="/login" label="Comenzar como Organizador" />
        </Button>
      </div>
      </div>
    </div>
  );
}
