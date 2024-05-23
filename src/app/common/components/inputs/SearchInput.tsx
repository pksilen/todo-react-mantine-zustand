import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import React from 'react';

type Props = Readonly<{
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}>;

export const SearchInput = ({ className, onChange, placeholder }: Props) => (
  <TextInput
    className={className}
    leftSection={<IconSearch />}
    onChange={onChange}
    placeholder={placeholder}
    variant="filled"
  />
);
