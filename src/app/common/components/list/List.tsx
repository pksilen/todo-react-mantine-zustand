import React from 'react';

type Props = Readonly<{
  children?: React.ReactNode;
}>;

export const List = ({ children }: Props) => <ul>{children}</ul>;
