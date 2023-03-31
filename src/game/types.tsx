export type Card = {
  id: string;
  name: string;
  description: string;
  image: string;
};
export type Cards = Record<string, Card>;
export type Deck = Cards;
export type Workout = {
  pending: Cards;
  performed: Cards;
};
export type Game = {
  deck: Deck;
  currentWorkout?: Workout;
};
