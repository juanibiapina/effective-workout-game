import { CardPack } from '../../game';

// card images
import KneePushUpSVG from './images/knee-push-up.png';

const basicPack: CardPack = {
  name: 'Basic Workout',
  cards: {
    'wall-push-up': {
      id: 'wall-push-up',
      name: 'Wall Push Up',
      description: 'A push up with your hands on a wall',
      image: KneePushUpSVG,
      goal: {
        repetitions: 50,
      },
      reward: {
        cardId: 'knee-push-up',
      },
    },
    'knee-push-up': {
      id: 'knee-push-up',
      name: 'Knee Push Up',
      description: 'A push up with your knees on the ground',
      image: KneePushUpSVG,
      goal: {
        repetitions: 20,
      },
    },
  },
  startingDeck: ['wall-push-up'],
};

export default basicPack;
