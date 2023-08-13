import { Game, CardPack, upgradeCard } from '../../game';

// card images
import KneePushUpSVG from './images/knee-push-up.png';

const noop = (game: Game) => game;

const basicPack: CardPack = {
  name: 'Basic Workout',
  cards: {
    'wall-push-up': {
      id: 'wall-push-up',
      name: 'Wall Push Up',
      description: 'A push up with your hands on a wall',
      image: KneePushUpSVG,
      actions: [(exercise) => {
        if (exercise.sets[0].repetitions >= 10) {
          return upgradeCard('wall-push-up', 'knee-push-up');
        } else {
          return noop
        }
      }],
    },
    'knee-push-up': {
      id: 'knee-push-up',
      name: 'Knee Push Up',
      description: 'A push up with your knees on the ground',
      image: KneePushUpSVG,
      actions: [],
    },
  },
  startingDeck: ['wall-push-up'],
};

export default basicPack;
