import { Card } from './types';

// card images
import KneePushUpSVG from '../images/knee-push-up.png';

export const cards: Record<string, Card> = {
  'knee-push-up': {
    id: 'knee-push-up',
    name: 'Knee Push Up',
    description: 'A push up with your knees on the ground (1 repetition)',
    image: KneePushUpSVG,
  },
};
