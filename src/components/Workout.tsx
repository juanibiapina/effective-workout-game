import React from 'react';
import useStore from '../app/store';
import CardComponent from './CardComponent';

const Workout = () => {
  const currentWorkout = useStore((state) => state.game.currentWorkout);
  const startWorkout = useStore((state) => state.actions.startWorkout);

  if (!currentWorkout) {
    return (
      <div>
        <button onClick={startWorkout}>Start Workout</button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div>Pending</div>
        <div>
          {Object.values(currentWorkout.pending).map((card) => (
            <CardComponent key={card.id} card={card} />
          ))}
        </div>
      </div>
      <div>
        <div>Performed</div>
        <div>
          {Object.values(currentWorkout.performed).map((card) => (
            <CardComponent key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workout;