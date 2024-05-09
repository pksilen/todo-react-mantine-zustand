import { Switch as MantineSwitch } from '@mantine/core';

type Props = {
  readonly label: string;
  readonly onClick: () => void;
};

export const Switch = ({ label, onClick }: Props) => (
  <MantineSwitch label={label} onClick={onClick} />
);
