import React from 'react';
import useStore from "../app/store";
import CardComponent from "./CardComponent";

const CurrentWorkout = () => {
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
      {Object.values(currentWorkout.pending).map(card => <CardComponent key={card.id} card={card} />)}
    </div>
  );
};

export default CurrentWorkout;
