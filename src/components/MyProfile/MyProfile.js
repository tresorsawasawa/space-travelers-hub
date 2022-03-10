import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer.data);
  const reservedRockets = rockets || [];

  return (
    <section className="profile-section">
      <div className="rockets-profile-container">
        <h1>My Rockets</h1>
        <div className="reserv-rockets">
          <ul className="reserv-rockets-list">
            {reservedRockets.length === 0 ? (
              <li style={{ padding: '0.9rem' }}>
                <span className="no-reserved-rocket">No Reserved Rocket</span>
              </li>
            ) : (
              reservedRockets
                .filter((rocket) => rocket.reserved === true)
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
        <h1> Add The Missions profile here</h1>
      </div>
    </section>
  );
};

export default MyProfile;
