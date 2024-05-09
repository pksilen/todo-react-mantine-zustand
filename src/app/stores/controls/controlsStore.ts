import { create } from 'zustand';

export type ViewType = 'list' | 'table';

interface State {
  colorScheme: 'dark' | 'light';
  viewType: ViewType;
}

interface Actions {
  activateDarkMode: () => void;
  activateLightMode: () => void;
  showTodosList: () => void;
  showTodosTable: () => void;
}

type ControlsStore = State & { actions: Actions };

export const useControlsStore = create<ControlsStore>()((setState) => ({
  colorScheme: 'light',
  viewType: 'list',

  actions: {
    activateDarkMode: () => setState(() => ({ colorScheme: 'dark' })),
    activateLightMode: () => setState(() => ({ colorScheme: 'light' })),
    showTodosList: () => setState(() => ({ viewType: 'list' })),
    showTodosTable: () => setState(() => ({ viewType: 'table' }))
  }
}));
