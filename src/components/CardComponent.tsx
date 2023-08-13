import React from 'react';

import useStore from '../app/store';

import './CardComponent.css';

const CardComponent: React.FC<{
  cardId: string;
  performable: boolean;
}> = ({ cardId, performable }) => {
  const performExercise = useStore((state) => state.actions.performExercise);
  const card = useStore((state) => state.game.cardPack.cards[cardId]);

  const [performing, setPerforming] = React.useState(false);
  const [repetitions, setRepetitions] = React.useState(1);

  const startPerforming = () => {
    if (performable && !performing) {
      setPerforming(true);
    }
  };

  const submit = () => {
    performExercise({
      cardId,
      sets: [
        {
          repetitions,
        },
      ],
    });
  };

  const cancel = () => {
    setPerforming(false);
  };

  const increaseValue = () => {
    setRepetitions((prevValue) => Math.min(prevValue + 1, 10));
  };

  const decreaseValue = () => {
    setRepetitions((prevValue) => Math.max(prevValue - 1, 1));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    if (newValue >= 0 && newValue <= 10) {
      setRepetitions(newValue);
    }
  };

  return (
    <div className="card" onClick={startPerforming}>
      <div className="title">{card.name}</div>
      <div className="illustration">
        <img src={card.image} alt={card.name} />
      </div>
      <div className="description">{card.description}</div>
      {performing && (
        <div className="performing-actions">
          <button onClick={decreaseValue}>-</button>
          <input
            type="number"
            value={repetitions}
            onChange={handleInputChange}
            min="1"
            max="10"
          />
          <button onClick={increaseValue}>+</button>
          <button onClick={submit}>Submit</button>
          <button onClick={cancel}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default CardComponent;
