import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { AddTodo } from 'app/components/addtodo/AddTodo';
import { Controls } from 'app/components/controls/Controls';
import { ErrorBoundary } from 'app/components/errorboundary/ErrorBoundary';
import { Header } from 'app/components/header/Header';
import classes from './App.module.scss';
import { useControlsStore } from './stores/controls/controlsStore';
import { TodosList } from './components/todos/TodosList';
import { TodosTable } from './components/todos/TodosTable';

export default function App() {
  const viewType = useControlsStore((store) => store.viewType);

  return (
    <main className={classes.main}>
      <MantineProvider defaultColorScheme={'light'}>
        <Header />
        <Controls />
        <ErrorBoundary>
          { viewType === 'list' ?  <TodosList /> : <TodosTable />}
          <AddTodo />
        </ErrorBoundary>
      </MantineProvider>
    </main>
  );
}
