import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../app/store';

const StartWorkoutRoute = () => {
  const navigate = useNavigate();
  const startWorkout = useStore((state) => state.actions.startWorkout);
  const currentWorkout = useStore((state) => state.game.currentWorkout);

  useEffect(() => {
    if (!currentWorkout) {
      startWorkout();
    }

    navigate('/currentWorkout');
  }, [startWorkout, navigate]);

  return null;
};

export default StartWorkoutRoute;
