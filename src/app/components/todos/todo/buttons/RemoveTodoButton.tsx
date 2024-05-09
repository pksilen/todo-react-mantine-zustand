import { useTodosStore } from 'app/stores/todos/todosStore';
import { RemoveIcon } from '../../../../common/components/icons/Icons';
import { TodoButton } from './TodoButton';

type Props = {
  readonly id: string;
};

export const RemoveTodoButton = ({ id }: Props) => {
  const { removeTodo } = useTodosStore((store) => store.actions);
  return <TodoButton icon={<RemoveIcon />} onClick={() => removeTodo(id)} text="Remove" />;
};
