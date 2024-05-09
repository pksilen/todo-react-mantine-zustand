import React from 'react';

type Props = {
  readonly icon: React.ReactNode;
};

export const ListItemIcon = ({ icon }: Props) => <span>{icon}</span>;
