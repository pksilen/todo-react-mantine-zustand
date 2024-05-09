import { Checkbox as MantineCheckbox } from '@mantine/core';

type Props = {
  readonly color: 'success';
  readonly isChecked: boolean;
  readonly onChange: () => void;
};

export const Checkbox = ({ color, isChecked, onChange }: Props) => (
  <MantineCheckbox checked={isChecked} onChange={onChange} />
);
