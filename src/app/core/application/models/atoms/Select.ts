export interface ISelectProps {
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    name: string;
    value: string;
    options: string[];
    className?: string;
}