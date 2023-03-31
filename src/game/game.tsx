import produce from 'immer';

import { Deck, Game, CardPack } from './types';

export const createGame = (cardPack: CardPack): Game => {
  return {
    cardPack,
    deck: cardPack.startingDeck.reduce((deck, cardId) => {
      deck[cardId] = cardPack.cards[cardId];
      return deck;
    }, {} as Deck),
    currentWorkout: undefined,
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
