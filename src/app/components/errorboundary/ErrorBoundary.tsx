import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { useTodosStore } from 'app/stores/todos/todosStore';
import { Button } from '../../common/components/buttons/Button';
import { Heading3 } from '../../common/components/typography/Heading3';
import classes from './ErrorBoundary.module.scss';

type Props = {
  children: React.ReactNode;
};

export const ErrorBoundary = ({ children }: Props) => {
  const hasError = useTodosStore((store) => store.hasError);
  const { clearError } = useTodosStore((store) => store.actions);

  const errorSection = (
    <section className={classes.error}>
      <Heading3>Something went wrong.</Heading3>
      {hasError && (
        <Button className={classes.button} onClick={clearError}>
          Ok
        </Button>
      )}
    </section>
  );

  return (
    <ReactErrorBoundary fallback={errorSection}>
      {hasError ? errorSection : children}
    </ReactErrorBoundary>
  );
};
