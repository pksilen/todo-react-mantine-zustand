import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { AddTodo } from 'app/components/addtodo/AddTodo';
import { Controls } from 'app/components/controls/Controls';
import { ErrorBoundary } from 'app/components/errorboundary/ErrorBoundary';
import { Header } from 'app/components/header/Header';
import { Todos } from 'app/components/todos/Todos';
import classes from './App.module.scss';

export default function App() {
  return (
    <main className={classes.main}>
      <MantineProvider defaultColorScheme={'light'}>
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
