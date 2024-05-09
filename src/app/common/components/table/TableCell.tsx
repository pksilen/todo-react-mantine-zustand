import { Table as MantineTable } from '@mantine/core';
import React from 'react';

type Props = {
  readonly children?: React.ReactNode;
  readonly className?: string;
  readonly onDoubleClick?: () => void;
};

export const TableCell = ({ children, className, onDoubleClick }: Props) => (
  <MantineTable.Td className={className} onDoubleClick={onDoubleClick}>
    {children}
  </MantineTable.Td>
);
