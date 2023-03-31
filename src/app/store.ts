import { create } from 'zustand';
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

const useStore = create<Store>((set) => ({
  game: createGame(startingDeck),
  actions: {
    startWorkout: () =>
      set((store) => ({ ...store, game: startWorkout(store.game) })),
    performCard: (cardId) =>
      set((store) => ({ ...store, game: performCard(store.game, cardId) })),
  },
}));

export default useStore;
