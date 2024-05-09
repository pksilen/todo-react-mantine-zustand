import { TextInput as MantineTextInput } from '@mantine/core';
import React from 'react';

type Props = {
  readonly autoFocus?: boolean;
  readonly className?: string;
  readonly inputProps?: object;
  readonly label?: string;
  readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly value: string;
};

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
