import { ActionIcon } from '@mantine/core';
import React from 'react';

type Props = Readonly<{
  className?: string;
  icon: React.ReactNode;
  onClick?: () => void;
}>;

export const IconButton = ({ className, icon, onClick }: Props) => (
  <ActionIcon className={className} onClick={onClick} variant="outline">
    {icon}
  </ActionIcon>
);
