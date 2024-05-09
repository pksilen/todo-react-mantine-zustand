import { create } from 'zustand';

export type ViewType = 'list' | 'table';

interface State {
  viewType: ViewType;
}

interface Actions {
  showTodosList: () => void;
  showTodosTable: () => void;
}

type ControlsStore = State & { actions: Actions };

export const useControlsStore = create<ControlsStore>()((setState) => ({
  viewType: 'list',

  actions: {
    showTodosList: () => setState(() => ({ viewType: 'list' })),
    showTodosTable: () => setState(() => ({ viewType: 'table' }))
  }
}));
