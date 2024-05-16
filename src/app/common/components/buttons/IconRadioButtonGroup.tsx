import { SegmentedControl, VisuallyHidden } from '@mantine/core';
import React, { useState } from 'react';

export type IconRadioButtonProps<T extends string> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly Icon: React.FC<any>;
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

  const data = buttons.map(({ Icon, onClick, value }: IconRadioButtonProps<T>) => ({
    label: (
      <div onClick={onClick}>
        <Icon />
        <VisuallyHidden>{value}</VisuallyHidden>
      </div>
    ),
    value
  }));

  return <SegmentedControl data={data} onChange={setSelectedValue} value={selectedValue} />;
};
