import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGoals } from '../features/goals/goalsSlice';
import Goal from './Goal';
import Spinner from './Spinner';
import { toast } from 'react-toastify';

function GoalsContainer() {
  const dispatch = useDispatch();

  const { goals, loading, error, message } = useSelector(state => state.goals);

  useEffect(() => {
    dispatch(getGoals());
  }, []);

  console.log(goals);

  if(loading){
    return <Spinner/>
  }
  if(error){
    return toast.error(message);
  }

  if(goals && goals.length < 1) {
    return <h2>No goals added yet!</h2>
  }
  return (
    <>
    {goals.map(goal => (
      <Goal text={goal.text}/>
    ))}
    </>
  );
}

export default GoalsContainer;
