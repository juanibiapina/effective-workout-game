// internal dependencies
import useStore from '../app/store';
import Workout from './Workout';

const Game = () => {
  const currentWorkout = useStore((state) => state.game.currentWorkout);
  const startWorkout = useStore((state) => state.actions.startWorkout);

  return (
    <div>
      <Workout />
      {!currentWorkout ? <button onClick={() => startWorkout()}>Start Workout</button> : null}
    </div>
  );
};

export default Game;
