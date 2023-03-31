import produce from 'immer';

import { Deck, Game } from './types';

export const createGame = (deck: Deck): Game => {
  return {
    deck,
  };
};

export const startWorkout = produce((game) => {
  if (game.currentWorkout) {
    throw new Error('Workout already in progress');
  }

  game.currentWorkout = {
    pending: game.deck,
    performed: {},
  };
});

export const performCard = produce((game, cardId) => {
  if (!game.currentWorkout) {
    return;
  }

  const card = game.currentWorkout.pending[cardId];

  if (!card) {
    throw new Error(`Card ${cardId} not found in workout`);
  }

  delete game.currentWorkout.pending[cardId];
  game.currentWorkout.performed[cardId] = card;

  // reset workout if all cards have been performed
  if (Object.keys(game.currentWorkout.pending).length === 0) {
    game.currentWorkout = null;
  }
});
