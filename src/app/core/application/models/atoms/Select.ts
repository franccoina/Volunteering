export interface ISelectProps {
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    name: string;
    value: string;
    options: any[];
    className?: string;
}