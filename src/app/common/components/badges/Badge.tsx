import { Badge as MantineBadge } from '@mantine/core';
import React from 'react';
import classes from './Badge.module.scss';

type Props = {
  readonly children: React.ReactNode;
  readonly color: 'error';
  readonly content: React.ReactNode;
};

export const Badge = ({ children, color, content }: Props) => (
  <>
    {children}
    <MantineBadge className={classes.badge} color="red">
      {content}
    </MantineBadge>
  </>
);
