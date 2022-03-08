import { render } from '@testing-library/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFromApi } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFromApi());
  }, [dispatch]);

  render(
    <div className="clm-row">
      Mission fetched
    </div>,
  );
};

export default Missions;
