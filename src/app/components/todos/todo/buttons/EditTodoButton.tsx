import { useTodosStore } from 'app/stores/todos/todosStore';
import { EditIcon } from '../../../../common/components/icons/Icons';
import { TodoButton } from './TodoButton';

type Props = {
  readonly id: string;
};

export const EditTodoButton = ({ id }: Props) => {
  const { setEditableTodo } = useTodosStore((store) => store.actions);
  return <TodoButton icon={<EditIcon />} onClick={() => setEditableTodo(id)} text="Edit" />;
};
