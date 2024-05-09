import {
  IconRadioButtonGroup,
  IconRadioButtonProps
} from 'app/common/components/buttons/IconRadioButtonGroup';
import { Switch } from 'app/common/components/switches/Switch';
import { ViewType, useControlsStore } from 'app/stores/controls/controlsStore';
import { useTodosStore } from 'app/stores/todos/todosStore';
import {
  DarkModeIcon,
  LightModeIcon,
  ListIcon,
  TableIcon
} from '../../common/components/icons/Icons';
import classes from './Controls.module.scss';

type ViewMode = 'dark' | 'light';

export const Controls = () => {
  const { toggleShouldShowUndoneTodosOnly } = useTodosStore((store) => store.actions);

  const { activateDarkMode, activateLightMode, showTodosList, showTodosTable } = useControlsStore(
    (store) => store.actions
  );

  const viewTypeButtons: IconRadioButtonProps<ViewType>[] = [
    { icon: <ListIcon />, onClick: showTodosList, value: 'list' },
    { icon: <TableIcon />, onClick: showTodosTable, value: 'table' }
  ];

  const viewModeButtons: IconRadioButtonProps<ViewMode>[] = [
    { icon: <DarkModeIcon />, onClick: activateLightMode, value: 'light' },
    { icon: <LightModeIcon />, onClick: activateDarkMode, value: 'dark' }
  ];

  return (
    <section className={classes.controls}>
      <IconRadioButtonGroup buttons={viewTypeButtons} initialValue="list" />
      <Switch label="Show undone only" onClick={toggleShouldShowUndoneTodosOnly} />
      <IconRadioButtonGroup buttons={viewModeButtons} initialValue="dark" />
    </section>
  );
};
