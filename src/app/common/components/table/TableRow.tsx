import { Table as MantineTable } from '@mantine/core';
import React from 'react';

type Props = Readonly<{
  children?: React.ReactNode;
}>;

export const TableRow = ({ children }: Props) => <MantineTable.Tr>{children}</MantineTable.Tr>;
