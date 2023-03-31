import { create } from 'zustand';
import { Game } from '../game/types';
import { createGame, startWorkout, performCard } from '../game/game';
import { startingDeck } from '../game/cards';

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
    startWorkout: () => set((store) => ({ game: startWorkout(store.game) })),
    performCard: (cardId) =>
      set((store) => ({ game: performCard(store.game, cardId) })),
  },
}));

export default useStore;
