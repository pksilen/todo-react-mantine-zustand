import { Title } from '@mantine/core';
import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const Heading2 = ({ children }: Props) => <Title order={2}>{children}</Title>;
