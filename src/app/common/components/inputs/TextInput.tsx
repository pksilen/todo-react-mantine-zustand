import { TextInput as MantineTextInput } from '@mantine/core';
import React from 'react';

type Props = Readonly<{
  autoFocus?: boolean;
  className?: string;
  inputProps?: object;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}>;

export const TextInput = ({ autoFocus, className, inputProps, label, onChange, value }: Props) => (
  <MantineTextInput
    autoFocus={autoFocus}
    className={className}
    label={label}
    onChange={onChange}
    value={value}
    variant="filled"
    {...inputProps}
  />
);
