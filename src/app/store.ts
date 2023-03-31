import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Game } from '../game/types';
import { createGame } from '../game/game';
import { startingDeck } from '../game/deck';
import { createWorkout } from '../game/workout';

type Actions = {
  startWorkout: () => void;
};

type State = {
  game: Game;
  actions: Actions;
};

const useStore = create(
  immer<State>((set) => ({
    game: createGame(startingDeck),
    actions: {
      startWorkout: () =>
        set((state) => {
          state.game.currentWorkout = createWorkout(state.game.deck);
        }),
    },
  }))
);

export default useStore;
