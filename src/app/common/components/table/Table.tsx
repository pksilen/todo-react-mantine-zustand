import { Table as MantineTable } from '@mantine/core';
import React from 'react';

type Props = Readonly<{
  children?: React.ReactNode;
}>;

export const Table = ({ children }: Props) => (
  <MantineTable>
    <MantineTable.Tbody>{children}</MantineTable.Tbody>
  </MantineTable>
);
