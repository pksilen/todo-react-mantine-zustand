import { MantineProvider } from '@mantine/core';
import { AddTodo } from 'app/components/addtodo/AddTodo';
import { Controls } from 'app/components/controls/Controls';
import { ErrorBoundary } from 'app/components/errorboundary/ErrorBoundary';
import { Header } from 'app/components/header/Header';
import { Todos } from 'app/components/todos/Todos';
import { useControlsStore } from 'app/stores/controls/controlsStore';
import classes from './App.module.scss';

export default function App() {
  const colorScheme = useControlsStore((store) => store.colorScheme);

  return (
    <main className={classes.main}>
      <MantineProvider defaultColorScheme={colorScheme}>
        <Header />
        <Controls />
        <ErrorBoundary>
          <Todos />
          <AddTodo />
        </ErrorBoundary>
      </MantineProvider>
    </main>
  );
}
