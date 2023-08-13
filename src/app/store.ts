// external dependencies
import { create, StoreApi } from 'zustand';
import { persist } from 'zustand/middleware';

// internal dependencies
import {
  Game,
  Action as GameAction,
  createGame,
  startWorkout,
  performExercise,
} from '../game';
import basicPack from '../packs/basic';

type StoreAction<F extends GameAction> = (...args: Parameters<F>) => void;

type StoreActions = {
  startWorkout: StoreAction<typeof startWorkout>;
  performExercise: StoreAction<typeof performExercise>;
};

type GameActionsMap = {
  [K in keyof StoreActions]: StoreActions[K] extends StoreAction<infer F>
    ? F
    : never;
};

type Store = {
  readonly game: Game;
  readonly actions: StoreActions;
};

function createStoreAction<F extends GameAction>(
  set: StoreApi<Store>['setState'],
  func: F
): StoreAction<F> {
  return (...args) => {
    set((store: Store) => ({ game: func(...args)(store.game) }));
  };
}

function createActions(
  set: StoreApi<Store>['setState'],
  actionsMap: GameActionsMap
): StoreActions {
  return Object.entries(actionsMap).reduce(
    (actions, [key, func]) => ({
      ...actions,
      [key]: createStoreAction(set, func),
    }),
    {} as StoreActions
  );
}

const useStore = create<Store>()(persist((set) => ({
  game: createGame(basicPack),
  actions: createActions(set, { startWorkout, performExercise }),
}), {
  name: 'effective-workout-state',
  partialize: (state) => ({ game: state.game }),
}));

export default useStore;
