export interface ILinkProps {
    key?: string;
    href: string;
    label: string;
    target?: '_blank' | '_self';
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
}