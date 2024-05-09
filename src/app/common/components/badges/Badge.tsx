import { Badge as MantineBadge } from '@mantine/core';
import React from 'react';

type Props = {
  readonly children: React.ReactNode;
  readonly color: 'error';
  readonly content: React.ReactNode;
};

export const Badge = ({ children, color, content }: Props) => (
  <MantineBadge color="red">{children}</MantineBadge>
);
