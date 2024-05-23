import { Title } from '@mantine/core';

export type Props = Readonly<{
  children: React.ReactNode;
}>;

export const Heading3 = ({ children }: Props) => <Title order={3}>{children}</Title>;
