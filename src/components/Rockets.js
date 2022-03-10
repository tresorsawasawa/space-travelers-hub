import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsDispatcher } from '../redux/rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    if (!rocketsData.isDataStored) {
      dispatch(getRocketsDispatcher());
    }
  }, []);

  const rockets = rocketsData.data;
  let rocketsList = [];
  if (rockets) {
    rocketsList = rockets.map((rocket) => (
      <li key={rocket.id} className="rocket-item">
        <Rocket
          className="rocket"
          description={rocket.description}
          image={rocket.image}
          name={rocket.rocket_name}
          id={rocket.id}
          reserved={rocket.reserved}
        />
      </li>
    ));
  }

  return (
    <section>
      <div className="rockets">
        <ul className="rockets-list">
          {rocketsList}
        </ul>
      </div>
    </section>
  );
};

export default Rockets;
