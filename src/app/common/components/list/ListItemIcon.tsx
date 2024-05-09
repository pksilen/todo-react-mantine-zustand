import React from 'react';
import classes from './ListItemIcon.module.scss';

type Props = {
  readonly icon: React.ReactNode;
};

export const ListItemIcon = ({ icon }: Props) => <div className={classes.icon}>{icon}</div>;
