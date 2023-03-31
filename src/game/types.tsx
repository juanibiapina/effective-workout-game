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
