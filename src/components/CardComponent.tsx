import React from 'react';
import { Card } from '../game/types';

import './CardComponent.css';

const CardComponent: React.FC<{
  card: Card;
  onClick?: (id: string) => void;
}> = ({ card, onClick }) => {
  return (
    <div className="card" onClick={() => onClick?.(card.id)}>
      <div className="title">{card.name}</div>
      <div className="illustration">
        <img src={card.image} alt={card.name} />
      </div>
      <div className="description">{card.description}</div>
    </div>
  );
};

export default CardComponent;
