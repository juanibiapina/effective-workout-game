import produce from 'immer';

import { Game } from './types';

export const startWorkout = (game: Game): Game => {
  return produce(game, (draft) => {
    if (draft.currentWorkout) {
      throw new Error('Workout already in progress');
    }

    draft.currentWorkout = {
      pending: draft.deck,
      performed: {},
    };
  });
};

export const performCard = (game: Game, cardId: string): Game => {
  return produce(game, (draft) => {
    if (!draft.currentWorkout) {
      return;
    }

    const card = draft.currentWorkout.pending[cardId];

    if (!card) {
      throw new Error(`Card ${cardId} not found in workout`);
    }

    delete draft.currentWorkout.pending[cardId];
    draft.currentWorkout.performed[cardId] = card;
  });
};
