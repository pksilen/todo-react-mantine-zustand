import { Button as MantineButton } from '@mantine/core';
import React from 'react';

type Props = {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly onClick: () => void;
  readonly variant?: 'text' | 'contained' | 'outlined';
};

export const Button = ({ children, className, onClick, variant }: Props) => (
  <MantineButton
    className={className}
    onClick={onClick}
    variant={variant === 'text' ? 'subtle' : 'filled'}
  >
    {children}
  </MantineButton>
);
