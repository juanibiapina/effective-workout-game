import { CardPack } from '../../game/types';

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
    },
  },
  startingDeck: ['knee-push-up'],
};

export default basicPack;
