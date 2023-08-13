// internal dependencies
import useStore from '../app/store';
import CardComponent from './CardComponent';

const Workout = () => {
  const currentWorkout = useStore((state) => state.game.currentWorkout);

  if (!currentWorkout) {
    return null;
  }

  return (
    <div>
      <div>
        <div>Pending</div>
        <div>
          {Object.values(currentWorkout.pending).map((cardId) => (
            <CardComponent key={cardId} cardId={cardId} performable={true} />
          ))}
        </div>
      </div>
      <div>
        <div>Performed</div>
        <div>
          {Object.values(currentWorkout.exercises).map((exercise) => (
            <CardComponent key={exercise.cardId} cardId={exercise.cardId} performable={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workout;
