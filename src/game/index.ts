import produce from 'immer';

export type Effect = (game: Game) => Game;
export type Action = (...args: any[]) => Effect;

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

export const startWorkout = () =>
  produce((game: Game) => {
    if (game.currentWorkout) {
      throw new Error('Workout already in progress');
    }

    game.currentWorkout = {
      pending: game.deck,
      performed: {},
    };
  });

export const performCard = (cardId: string) => (game: Game) => {
  if (!game.currentWorkout) {
    throw new Error('No workout in progress');
  }

  const card = game.currentWorkout.pending[cardId];
  if (!card) {
    throw new Error(`Card ${cardId} not found in workout`);
  }

  const newGame = produce(game, (draft) => {
    if (!draft.currentWorkout) {
      throw new Error('No workout in progress');
    }

    delete draft.currentWorkout.pending[cardId];
    draft.currentWorkout.performed[cardId] = card;

    // reset workout if all cards have been performed
    if (Object.keys(draft.currentWorkout.pending).length === 0) {
      draft.currentWorkout = undefined;
    }
  });

  return newGame;
};
