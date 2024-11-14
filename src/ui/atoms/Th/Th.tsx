"use client"
import { IThProps } from '@/app/core/application/models/atoms/Th';
import React from 'react';

const TableDataHead: React.FC<IThProps> = ({ children, classname }) => {
  return (
    <th className={classname}>
      {children}
    </th>
  );
};

export default TableDataHead;