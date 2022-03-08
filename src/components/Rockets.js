import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketsDispatcher } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    if (!rocketsData.isDataStored) {
      dispatch(getRocketsDispatcher());
    }
  }, []);

  return (
    <div>
      <h1>Rockets Page</h1>
    </div>
  );
};

export default Rockets;
