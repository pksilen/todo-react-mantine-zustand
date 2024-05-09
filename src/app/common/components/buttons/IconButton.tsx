import { ActionIcon } from '@mantine/core';
import React from 'react';

type Props = {
  readonly className?: string;
  readonly icon: React.ReactNode;
  readonly onClick?: () => void;
};

export const IconButton = ({ className, icon, onClick }: Props) => (
  <ActionIcon className={className} onClick={onClick} variant="outline">
    {icon}
  </ActionIcon>
);
