import { Switch as MantineSwitch } from '@mantine/core';

type Props = Readonly<{
  label: string;
  onClick: () => void;
}>;

export const Switch = ({ label, onClick }: Props) => (
  <MantineSwitch label={label} onClick={onClick} />
);
