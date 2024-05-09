import {
  IconCheck,
  IconCircleDashed,
  IconCircleDashedCheck,
  IconList,
  IconMoon,
  IconPencil,
  IconSun,
  IconTable,
  IconTrash
} from '@tabler/icons-react';

export const ListIcon = IconList;
export const TableIcon = IconTable;
export const DarkModeIcon = IconMoon;
export const LightModeIcon = IconSun;
export const EditIcon = IconPencil;
export const RemoveIcon = IconTrash;
export const CheckIcon = IconCheck;
export const TodoUndoneIcon = () => <IconCircleDashed style={{ color: 'red' }} />;
export const TodoDoneIcon = () => <IconCircleDashedCheck style={{ color: 'green' }} />;
