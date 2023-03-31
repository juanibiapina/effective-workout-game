import React from 'react';
import useStore from "../app/store";
import { Card } from '../game/types';

import './CardComponent.css';

const CardComponent: React.FC<{ card: Card }> = ({ card }) => {
  return (
    <div className="card">
      <div className="title">{card.name}</div>
      <div className="illustration">
        <img src={card.image} alt={card.name} />
      </div>
      <div className="description">{card.description}</div>
    </div>
  );
};

export default CardComponent;
