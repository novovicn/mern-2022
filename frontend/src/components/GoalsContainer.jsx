import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGoals } from '../features/goals/goalsSlice';

function GoalsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoals());
  });

  return <></>;
}

export default GoalsContainer;
