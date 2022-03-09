import { render } from '@testing-library/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFromApi } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFromApi());
  }, []);

  render(
    <div className="clm-row">
      {missions.map((data) => (
        <div className="mission-row" key={data.itemId}>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
        </div>
      ))}
    </div>,
  );
};

export default Missions;
