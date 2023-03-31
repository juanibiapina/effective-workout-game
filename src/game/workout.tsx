import produce from 'immer';

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
});
