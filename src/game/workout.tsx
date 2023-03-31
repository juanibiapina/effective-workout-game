import { Cards, Workout } from './types';

export const createWorkout = (pending: Cards): Workout => {
  return {
    pending,
    performed: {},
  };
};

export const performCard = (
  workout: Workout | undefined,
  cardId: string
): Workout => {
  if (!workout) {
    throw new Error('No workout to perform card in');
  }

  const card = workout.pending[cardId];

  if (!card) {
    throw new Error(`Card ${cardId} not found in workout`);
  }

  const { [cardId]: _, ...pending } = workout.pending;

  return {
    pending,
    performed: {
      ...workout.performed,
      [cardId]: card,
    },
  };
};
