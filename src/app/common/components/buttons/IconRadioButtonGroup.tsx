import { SegmentedControl } from '@mantine/core';
import React, { useState } from 'react';

export type IconRadioButtonProps<T extends string> = Readonly<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: React.FC<any>;
  onClick: () => void;
  value: T;
}>;

export type IconRadioButtonGroupProps<T extends string> = Readonly<{
  buttons: IconRadioButtonProps<T>[];
  initialValue: string;
}>;

export const IconRadioButtonGroup = <T extends string>({
  buttons,
  initialValue
}: IconRadioButtonGroupProps<T>) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const data = buttons.map(({ Icon, onClick, value }: IconRadioButtonProps<T>) => ({
    label: (
      <div data-testid={`${value} toggle`} onClick={onClick}>
        <Icon />
      </div>
    ),
    value
  }));

  return <SegmentedControl data={data} onChange={setSelectedValue} value={selectedValue} />;
};
