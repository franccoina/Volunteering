export interface IPaginationProps {
    currentPage: number;
    totalPages: number;
    onNext: () => void;
    onPrevious: () => void;
}