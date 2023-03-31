import { Cards, Workout } from './types';

export const createWorkout = (pending: Cards): Workout => {
  return {
    pending,
    performed: {},
  };
};
