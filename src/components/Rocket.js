import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({
  id, description, name, image,
}) => (
  <div className="rocket-container flex-center-center">
    <div className="image-container">
      <img src={image} alt={name} />
    </div>
    <div className="rocket-infos">
      <h3 className="rocket-name">{name}</h3>
      <p className="description">{description}</p>
      <button type="button" id={id} className="reserve-btn">Reserve Rocket</button>
    </div>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
