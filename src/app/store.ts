import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { original } from 'immer';
import { Game } from '../game/types';
import { createGame } from '../game/game';
import { startingDeck } from '../game/deck';
import { startWorkout, performCard } from '../game/workout';

type Actions = {
  startWorkout: () => void;
  performCard: (cardId: string) => void;
};

type Store = {
  game: Game;
  actions: Actions;
};

function orig<T>(value: T | undefined): T {
  if (value === undefined) {
    throw new Error('Value is undefined');
  }
  const originalValue = original(value);
  if (originalValue === undefined) {
    throw new Error('Original value is undefined');
  }
  return originalValue;
}

const useStore = create(
  immer<Store>((set) => ({
    game: createGame(startingDeck),
    actions: {
      startWorkout: () =>
        set((store) => {
          store.game = startWorkout(store.game);
        }),

      performCard: (cardId) =>
        set((store) => {
          store.game = performCard(orig(store.game), cardId);
        }),
    },
  }))
);

export default useStore;
