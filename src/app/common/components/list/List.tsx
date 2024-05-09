import { List as MantineList } from '@mantine/core';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export const List = ({ children }: Props) => <MantineList>{children}</MantineList>;
