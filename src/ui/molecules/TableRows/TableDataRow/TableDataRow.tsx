import TableDataCell from "@/ui/atoms/Td/Td";
import TableDataRow from "@/ui/atoms/Tr/Tr";
import ActionButtons from "../../ActionButtons/ActionButtons";
import styles from "./TableDataRow.module.scss";
import { ITableRowProps } from "@/app/core/application/models/molecules/TableRow";

const TableRow: React.FC<ITableRowProps> = ({ title, description, startDate, endDate, isActive, organizer, onEdit, onDelete})  => {
    return (
        <TableDataRow classname={styles.tr}>
            <TableDataCell classname={styles.td}>{title}</TableDataCell>
            <TableDataCell classname={styles.td}>{description}</TableDataCell>
            <TableDataCell classname={styles.td}>{(startDate).toString()}</TableDataCell>
            <TableDataCell classname={styles.td}>{(endDate).toString()}</TableDataCell>
            <TableDataCell classname={styles.td}>{isActive? 'Active' : 'Inactive'}</TableDataCell>
            <TableDataCell classname={styles.td}>{organizer}</TableDataCell>
            <TableDataCell classname={styles.td}><ActionButtons onEdit={onEdit} onDelete={onDelete}/></TableDataCell> 
        </TableDataRow>
    );
}

export default TableRow;