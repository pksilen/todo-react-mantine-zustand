import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const ListItem = ({ children, className }: Props) => (
  <li className={className}>{children}</li>
);
