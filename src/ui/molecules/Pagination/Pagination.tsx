"use client";
import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Button from '@/ui/atoms/Button/Button';
import styled from 'styled-components';
import { IPaginationProps } from '@/models/molecules/Pagination';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Pagination: React.FC<IPaginationProps> = ({
    currentPage,
    totalPages,
    onNext,
    onPrevious,
}) => {

    return (
        <NavigationContainer>
            <Button
                className='paginationBtn'
                type="button"
                onClick={onPrevious}
                icon={<BsChevronLeft />}
            />
            <p>Página {currentPage} de {totalPages}</p>
            <Button
                className='paginationBtn'
                type="button"
                onClick={onNext}
                icon={<BsChevronRight />}
            />
        </NavigationContainer>
    );
};

export default Pagination;