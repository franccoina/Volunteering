import TableDataCell from "@/ui/atoms/Td/Td";
import TableDataRow from "@/ui/atoms/Tr/Tr";
import ActionButtons from "../../ActionButtons/ActionButtons";
import styles from "./TableDataRow.module.scss";
import { ITableRowProps } from "@/app/core/application/models/molecules/TableRow";

const TableRow: React.FC<ITableRowProps> = ({ title, description, startDate, endDate, isActive, organizer, onEdit, onDelete})  => {
    return (
        <TableDataRow className={styles.tr}>
            <TableDataCell className={styles.td}>{title}</TableDataCell>
            <TableDataCell className={styles.td}>{description}</TableDataCell>
            <TableDataCell className={styles.td}>{(startDate).toString()}</TableDataCell>
            <TableDataCell className={styles.td}>{(endDate).toString()}</TableDataCell>
            <TableDataCell className={styles.td}>
                {isActive? (<p className={styles.statusActive}>Active</p>) : (<p className={styles.statusInactive}>Inactive</p>)}
            </TableDataCell>
            <TableDataCell className={styles.td}>{organizer}</TableDataCell>
            <TableDataCell className={styles.td}><ActionButtons onEdit={onEdit} onDelete={onDelete}/></TableDataCell> 
        </TableDataRow>
    );
}

export default TableRow;