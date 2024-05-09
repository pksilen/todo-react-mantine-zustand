import React from 'react';

type Props = {
  readonly children: React.ReactNode;
  readonly className?: string;
};

export const ListItem = ({ children, className }: Props) => (
  <li className={className}>{children}</li>
);
