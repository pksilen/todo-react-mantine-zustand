import { Title } from '@mantine/core';

export type Props = Readonly<{
  children: React.ReactNode;
}>;

export const Heading4 = ({ children }: Props) => <Title order={4}>{children}</Title>;
