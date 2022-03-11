import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const reservedRockets = rockets || [];

  const missions = useSelector((state) => state.missionsReducer.missions)
    .filter(({ reserved }) => reserved === true);

  return (
    <section className="profile-section">
      <div className="rockets-profile-container">
        <h1 style={{ paddingBottom: '1rem' }}>My Rockets</h1>
        <div className="reserv-rockets">
          <ul className="reserv-rockets-list">
            {reservedRockets.length === 0 ? (
              <li style={{ padding: '0.9rem' }}>
                <span className="no-reserved-rocket">No Rockets Reserved</span>
              </li>
            ) : (
              reservedRockets
                .filter(({ reserved }) => reserved === true)
                .map((rocket) => (
                  <li key={rocket.id} className="reserved-rocket-item">
                    <span className="name" style={{ paddingLeft: '0.4rem', fontWeight: 'bold' }}>{rocket.rocket_name}</span>
                  </li>
                ))
            )}
          </ul>
        </div>
      </div>
      <div className="missions-profile-container">
        <h1>My Missions</h1>
        {missions.length === 0 ? (
          <li>No Missions joined yet</li>
        ) : (
          missions.map((data) => (
            <li key={data.mission_id}>
              <span>{data.mission_name}</span>
            </li>
          ))
        )}
      </div>
    </section>
  );
};

export default MyProfile;
