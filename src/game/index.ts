import { produce } from 'immer';

export type Exercise = {
  cardId: string;
  repetitions: number;
};

export type Effect = (game: Game) => Game;
export type Action = (...args: any[]) => Effect;

export type Goal = {
  repetitions: number;
};

export type UpgradeCardReward = {
  cardId: string;
};

export type Reward = UpgradeCardReward;

export type Card = {
  id: string;
  name: string;
  description: string;
  image: string;
  goal: Goal;
  reward?: Reward;
};

export type Cards = string[];

export type Deck = Cards;

export type CardPack = {
  name: string;
  cards: Record<string, Card>;
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
      deck.push(cardId);
      return deck;
    }, [] as Deck),
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
      performed: [],
    };
  });

export const upgradeCard = (cardId: string, newCardId: string) =>
  produce((game: Game) => {
    // add new card to deck
    game.deck.push(newCardId);

    // remove cardId from deck
    game.deck = game.deck.filter((id) => id !== cardId);
  });

const goalReached = (card: Card, exercise: Exercise) => {
  return exercise.repetitions >= card.goal.repetitions;
};

const applyReward = (card: Card, game: Game) => {
  if (!card.reward) {
    return game;
  }

  return upgradeCard(card.id, card.reward.cardId)(game);
};

export const performExercise = (exercise: Exercise) => (game: Game) => {
  if (!game.currentWorkout) {
    throw new Error('No workout in progress');
  }

  // find card
  const card = game.cardPack.cards[exercise.cardId];
  if (!card) {
    throw new Error(`Card ${exercise.cardId} doesn't exist in card pack`);
  }

  // move card from pending to performed
  const newGame = produce(game, (draft) => {
    if (!draft.currentWorkout) {
      throw new Error('No workout in progress');
    }

    // remove card from pending array
    draft.currentWorkout.pending = draft.currentWorkout.pending.filter(
      (id) => id !== exercise.cardId
    );

    // add card to performed array
    draft.currentWorkout.performed.push(exercise.cardId);

    // reset workout if all cards have been performed
    if (draft.currentWorkout.pending.length === 0) {
      draft.currentWorkout = undefined;
    }
  });

  // check if goal has been reached
  if (goalReached(card, exercise)) {
    return applyReward(card, newGame);
  } else {
    return newGame;
  }
};
