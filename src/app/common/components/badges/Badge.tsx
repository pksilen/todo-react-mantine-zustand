import { Badge as MantineBadge } from '@mantine/core';
import React from 'react';
import classes from './Badge.module.scss';

type Props = Readonly<{
  children: React.ReactNode;
  color: 'error';
  content: React.ReactNode;
}>;

export const Badge = ({ children, color, content }: Props) => (
  <>
    {children}
    <MantineBadge className={classes.badge} color="red">
      <span title="Undone todo count">{content}</span>
    </MantineBadge>
  </>
);
