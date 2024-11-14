"use client"
import { ITdProps } from '@/app/core/application/models/atoms/Td';
import React from 'react';

const TableDataCell: React.FC<ITdProps> = ({ children, classname }) => {
  return (
    <td className={classname}>
      {children}
    </td>
  );
};

export default TableDataCell;