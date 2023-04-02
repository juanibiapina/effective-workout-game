import produce from 'immer';

export type Card = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type Cards = Record<string, Card>;

export type Deck = Cards;

export type CardPack = {
  name: string;
  cards: Cards;
  startingDeck: Array<string>;
};

export type Workout = {
  pending: Cards;
  performed: Cards;
};

export type Game = {
  cardPack: CardPack;
  deck: Deck;
  currentWorkout?: Workout;
};

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

export const startWorkout = produce((game: Game) => {
  if (game.currentWorkout) {
    throw new Error('Workout already in progress');
  }

  game.currentWorkout = {
    pending: game.deck,
    performed: {},
  };
});

export const performCard = produce((game: Game, cardId: string) => {
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
    game.currentWorkout = undefined;
  }
});
