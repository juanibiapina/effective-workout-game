import produce from 'immer';

import { Game, Cards, Workout } from './types';

export const createWorkout = (pending: Cards): Workout => {
  return {
    pending,
    performed: {},
  };
};

export const performCard = (game: Game, cardId: string): Game => {
  if (!game.currentWorkout) {
    throw new Error('No workout to perform card in');
  }

  const card = game.currentWorkout.pending[cardId];

  if (!card) {
    throw new Error(`Card ${cardId} not found in workout`);
  }

  return produce(game, (draft) => {
    if (!draft.currentWorkout) {
      return;
    }

    delete draft.currentWorkout.pending[cardId];
    draft.currentWorkout.performed[cardId] = card;
  });
};
