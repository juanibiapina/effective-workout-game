import React from 'react';

import useStore from '../app/store';

import './CardComponent.css';

const CardComponent: React.FC<{
  cardId: string;
  performable: boolean;
}> = ({ cardId, performable }) => {
  const performCard = useStore((store) => store.actions.performCard);
  const card = useStore((state) => state.game.cardPack.cards[cardId]);

  return (
    <div
      className="card"
      onClick={() => (performable ? performCard(cardId) : undefined)}
    >
      <div className="title">{card.name}</div>
      <div className="illustration">
        <img src={card.image} alt={card.name} />
      </div>
      <div className="description">{card.description}</div>
    </div>
  );
};

export default CardComponent;
