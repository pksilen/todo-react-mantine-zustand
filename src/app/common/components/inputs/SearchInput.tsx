import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import React from 'react';

type Props = {
  readonly className: string;
  readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly placeholder: string;
};

export const SearchInput = ({ className, onChange, placeholder }: Props) => (
  <TextInput
    className={className}
    leftSection={<IconSearch />}
    onChange={onChange}
    placeholder={placeholder}
    variant="filled"
  />
);
