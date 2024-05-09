import { SegmentedControl } from '@mantine/core';
import React, { useState } from 'react';

export type IconRadioButtonProps<T extends string> = {
  readonly icon: React.ReactNode;
  readonly onClick: () => void;
  readonly value: T;
};

export type IconRadioButtonGroupProps<T extends string> = {
  readonly buttons: IconRadioButtonProps<T>[];
  readonly initialValue: string;
};

export const IconRadioButtonGroup = <T extends string>({
  buttons,
  initialValue
}: IconRadioButtonGroupProps<T>) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const data = buttons.map(({ icon, onClick, value }: IconRadioButtonProps<T>) => ({
    label: icon,
    value
  }));

  return <SegmentedControl data={data} onChange={setSelectedValue} value={selectedValue} />;
};
