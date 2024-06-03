import classNames from 'classnames';
import { IconOrButton } from 'app/common/components/buttons/IconOrButton';
import {
  CheckIcon,
  EditIcon,
  RemoveIcon,
  TodoDoneIcon,
  TodoUndoneIcon
} from 'app/common/components/icons/Icons';
import { EditTextInput } from 'app/common/components/inputs/EditTextInput';
import { ListItem } from 'app/common/components/list/ListItem';
import { ListItemIcon } from 'app/common/components/list/ListItemIcon';
import { ListItemText } from 'app/common/components/list/ListItemText';
import { Todo } from 'app/stores/todos/Todo';
import classes from './TodoListItem.module.scss';
import { useTodo } from './useTodo';

type Props = {
  readonly todo: Todo;
};

export const TodoListItem = ({ todo: { id, title, isDone } }: Props) => {
  const { edit, isEditable, remove, setAsEditable, toggleDone } = useTodo(id);
  const titleClasses = classNames(classes.title, isDone && classes.isDone);
  const icon = isDone ? <TodoDoneIcon /> : <TodoUndoneIcon />;

  return (
    <ListItem className={classes.todo}>
      <ListItemIcon icon={icon} />
      {isEditable ? (
        <EditTextInput aria-label="Edit todo" onEditComplete={edit} text={title} />
      ) : (
        <ListItemText className={titleClasses} onDoubleClick={setAsEditable} text={title} />
      )}
      <div className={classes.buttons}>
        <IconOrButton
          icon={<CheckIcon />}
          onClick={toggleDone}
          text={isDone ? 'Mark undone' : 'Mark done'}
        />
        <IconOrButton icon={<EditIcon />} onClick={setAsEditable} text="Edit" />
        <IconOrButton icon={<RemoveIcon />} onClick={remove} text="Remove" />
      </div>
    </ListItem>
  );
};
