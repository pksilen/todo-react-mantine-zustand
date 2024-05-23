import { Button as MantineButton } from '@mantine/core';
import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  variant?: 'text' | 'contained' | 'outlined';
}>;

export const Button = ({ children, className, onClick, variant }: Props) => (
  <MantineButton
    className={className}
    onClick={onClick}
    variant={variant === 'text' ? 'subtle' : 'filled'}
  >
    {children}
  </MantineButton>
);
