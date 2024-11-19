import TableDataHead from "@/ui/atoms/Th/Th";
import TableDataRow from "@/ui/atoms/Tr/Tr";
import styles from "./TableHeaderRow.module.scss"
const TableHeaderRow: React.FC = () => {
    return (
      <thead>
        <TableDataRow className={styles.tr}>
          <TableDataHead className={styles.th}>Título</TableDataHead>
          <TableDataHead className={styles.th}>Descripción</TableDataHead>
          <TableDataHead className={styles.th}>Fecha de inicio</TableDataHead>
          <TableDataHead className={styles.th}>Fecha de fin</TableDataHead>
          <TableDataHead className={styles.th}>Estado</TableDataHead>
          <TableDataHead className={styles.th}>Organizador</TableDataHead>
          <TableDataHead className={styles.th}>Acciones</TableDataHead>
        </TableDataRow>
      </thead>
    );
  };
  
  export default TableHeaderRow;