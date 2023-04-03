import { CardPack, upgradeCard } from '../../game';

// card images
import KneePushUpSVG from './images/knee-push-up.png';

const basicPack: CardPack = {
  name: 'Basic Workout',
  cards: {
    'knee-push-up': {
      id: 'knee-push-up',
      name: 'Knee Push Up',
      description: 'A push up with your knees on the ground (1 repetition)',
      image: KneePushUpSVG,
      effects: [upgradeCard('knee-push-up', 'knee-push-up-10')],
    },
    'knee-push-up-10': {
      id: 'knee-push-up-10',
      name: 'Knee Push Up',
      description:
        'A push up with your knees on the ground (up to 10 repetitions)',
      image: KneePushUpSVG,
      effects: [],
    },
  },
  startingDeck: ['knee-push-up'],
};

export default basicPack;
