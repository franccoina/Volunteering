"use client"
import { ITrProps } from '@/app/core/application/models/atoms/Tr';
import React from 'react';

const TableDataRow: React.FC<ITrProps> = ({ children, classname }) => {
  return (
    <tr className={classname}>
      {children}
    </tr>
  );
};

export default TableDataRow;