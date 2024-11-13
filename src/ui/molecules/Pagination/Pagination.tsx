"use client";
import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Button from '@/ui/atoms/Button/Button';
import { IPaginationProps } from '@/app/core/application/models/molecules/Pagination';
import styles from "./Pagination.module.scss";

const Pagination: React.FC<IPaginationProps> = ({
    currentPage,
    totalPages,
    onNext,
    onPrevious,
}) => {

    return (
        <div className={styles.pagination}>
            <Button
                className={styles.paginationBtn}
                type="button"
                onClick={onPrevious}
                icon={<BsChevronLeft />}
            />
            <p>Página {currentPage} de {totalPages}</p>
            <Button
                className={styles.paginationBtn}
                type="button"
                onClick={onNext}
                icon={<BsChevronRight />}
            />
        </div>
    );
};

export default Pagination;