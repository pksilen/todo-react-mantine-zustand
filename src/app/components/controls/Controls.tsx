import { useMantineColorScheme } from '@mantine/core';
import {
  IconRadioButtonGroup,
  IconRadioButtonProps
} from 'app/common/components/buttons/IconRadioButtonGroup';
import {
  DarkModeIcon,
  LightModeIcon,
  ListIcon,
  TableIcon
} from 'app/common/components/icons/Icons';
import { Switch } from 'app/common/components/inputs/Switch';
import { ViewType, useControlsStore } from 'app/stores/controls/controlsStore';
import { useTodosStore } from 'app/stores/todos/todosStore';
import classes from './Controls.module.scss';

type ViewMode = 'dark' | 'light';

export const Controls = () => {
  const { toggleShouldShowUndoneTodosOnly } = useTodosStore((store) => store.actions);
  const { showTodosList, showTodosTable } = useControlsStore((store) => store.actions);
  const { setColorScheme } = useMantineColorScheme();

  const viewTypeButtons: IconRadioButtonProps<ViewType>[] = [
    { Icon: ListIcon, onClick: showTodosList, value: 'list' },
    { Icon: TableIcon, onClick: showTodosTable, value: 'table' }
  ];

  const viewModeButtons: IconRadioButtonProps<ViewMode>[] = [
    { Icon: LightModeIcon, onClick: () => setColorScheme('light'), value: 'light' },
    { Icon: DarkModeIcon, onClick: () => setColorScheme('dark'), value: 'dark' }
  ];

  return (
    <section className={classes.controls}>
      <IconRadioButtonGroup buttons={viewTypeButtons} initialValue="list" />
      <Switch label="Show undone only" onClick={toggleShouldShowUndoneTodosOnly} />
      <IconRadioButtonGroup buttons={viewModeButtons} initialValue="light" />
    </section>
  );
};
