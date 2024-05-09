import { ListItem as MantineListItem } from '@mantine/core';
import React from 'react';

type Props = {
  readonly children: React.ReactNode;
  readonly className?: string;
};

export const ListItem = ({ children, className }: Props) => (
  <MantineListItem className={className}>{children}</MantineListItem>
);
