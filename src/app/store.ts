import { create } from 'zustand';
import { Game, createGame, startWorkout, performCard } from '../game';
import basicPack from '../packs/basic';

type Actions = {
  startWorkout: () => void;
  performCard: (cardId: string) => void;
};

type Store = {
  game: Game;
  actions: Actions;
};

const useStore = create<Store>((set) => ({
  game: createGame(basicPack),
  actions: {
    startWorkout: () => set((store) => ({ game: startWorkout(store.game) })),
    performCard: (cardId) =>
      set((store) => ({ game: performCard(store.game, cardId) })),
  },
}));

export default useStore;
