import React from 'react';
import useStore from '../app/store';
import { Card } from '../game/types';

import './CardComponent.css';

const CardComponent: React.FC<{ card: Card }> = ({ card }) => {
  const performCard = useStore((store) => store.actions.performCard);

  return (
    <div className="card" onClick={() => performCard(card.id)}>
      <div className="title">{card.name}</div>
      <div className="illustration">
        <img src={card.image} alt={card.name} />
      </div>
      <div className="description">{card.description}</div>
    </div>
  );
};

export default CardComponent;
