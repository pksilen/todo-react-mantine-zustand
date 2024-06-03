import { useTodosStore } from 'app/stores/todos/todosStore';

export const useTodo = (id: string) => {
  const editableTodoId = useTodosStore((store) => store.editableTodoId);
  const { editTodo, removeTodo, setTodoAsEditable, toggleTodoDone } = useTodosStore(
    (store) => store.actions
  );

  return {
    edit: editTodo(id),
    isEditable: editableTodoId === id,
    remove: () => removeTodo(id),
    setAsEditable: () => setTodoAsEditable(id),
    toggleDone: () => toggleTodoDone(id)
  };
};
