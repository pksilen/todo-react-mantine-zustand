import { create } from 'zustand';

export type ViewType = 'list' | 'table';

interface State {
  viewType: ViewType;
}

interface Actions {
  setViewType: (viewType: ViewType) => void;
}

type ControlsStore = State & { actions: Actions };

export const useControlsStore = create<ControlsStore>()((setState) => ({
  viewType: 'list',

  actions: {
    setViewType: (viewType: ViewType) => setState(() => ({ viewType }))
  }
}));
