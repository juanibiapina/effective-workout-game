import React from 'react';

import useStore from '../app/store';

import './CardComponent.css';

const CardComponent: React.FC<{
  cardId: string;
  onClick?: (id: string) => void;
}> = ({ cardId, onClick }) => {
  const card = useStore((state) => state.game.cardPack.cards[cardId]);

  return (
    <div className="card" onClick={() => onClick?.(cardId)}>
      <div className="title">{card.name}</div>
      <div className="illustration">
        <img src={card.image} alt={card.name} />
      </div>
      <div className="description">{card.description}</div>
    </div>
  );
};

export default CardComponent;
