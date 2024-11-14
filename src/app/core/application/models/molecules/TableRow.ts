export interface ITableRowProps {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
    organizer: string;
    onEdit: () => void;
    onDelete: () => void;
}