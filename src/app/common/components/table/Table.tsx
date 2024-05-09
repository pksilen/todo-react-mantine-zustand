import { Table as MantineTable } from '@mantine/core';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export const Table = ({ children }: Props) => (
  <MantineTable>
    <MantineTable.Tbody>{children}</MantineTable.Tbody>
  </MantineTable>
);
