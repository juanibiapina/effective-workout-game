import { Deck, Game } from './types';

export const createGame = (deck: Deck): Game => {
  return {
    deck,
  };
};
