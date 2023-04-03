import { create, SetState } from 'zustand';
import {
  Game,
  Action as GameAction,
  createGame,
  startWorkout,
  performCard,
} from '../game';
import basicPack from '../packs/basic';
import { L } from 'ts-toolbelt';

type StoreAction<F extends GameAction> = (
  ...args: L.Tail<Parameters<F>>
) => void;

type StoreActions = {
  startWorkout: StoreAction<typeof startWorkout>;
  performCard: StoreAction<typeof performCard>;
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
  set: SetState<Store>,
  func: F
): StoreAction<F> {
  return (...args) => {
    set((store: Store) => ({ game: func(...args)(store.game) }));
  };
}

function createActions(
  set: SetState<Store>,
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

const useStore = create<Store>((set) => ({
  game: createGame(basicPack),
  actions: createActions(set, { startWorkout, performCard }),
}));

export default useStore;
