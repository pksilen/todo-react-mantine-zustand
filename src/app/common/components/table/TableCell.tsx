import { Table as MantineTable } from '@mantine/core';
import React from 'react';

type Props = Readonly<{
  children?: React.ReactNode;
  className?: string;
  onDoubleClick?: () => void;
}>;

export const TableCell = ({ children, className, onDoubleClick }: Props) => (
  <MantineTable.Td className={className} onDoubleClick={onDoubleClick}>
    {children}
  </MantineTable.Td>
);
