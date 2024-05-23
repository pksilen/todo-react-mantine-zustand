import { Checkbox as MantineCheckbox } from '@mantine/core';

type Props = Readonly<{
  color: 'success';
  isChecked: boolean;
  onChange: () => void;
}>;

export const Checkbox = ({ color, isChecked, onChange, ...restOfProps }: Props) => (
  <MantineCheckbox checked={isChecked} onChange={onChange} {...restOfProps} />
);
