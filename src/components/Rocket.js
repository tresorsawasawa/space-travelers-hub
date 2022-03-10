import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelRocketBooking } from '../redux/rockets/rockets';

const Rocket = ({
  id, description, name, image, reserved,
}) => {
  const dispatch = useDispatch();
  const bookingRocket = (e) => {
    const { id } = e.target;
    dispatch(bookRocket(+id));
  };

  const cancelReservation = (e) => {
    const { id } = e.target;
    dispatch(cancelRocketBooking(+id));
  };

  return (
    <div className="rocket-container flex-center-center">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="rocket-infos">
        <h3 className="rocket-name">{name}</h3>
        <p className="description">
          {reserved && <span className="isReserved">Reserved</span>}
          {description}
        </p>
        {!reserved && (
          <button
            type="button"
            id={id}
            className="reserve-btn clickable"
            onClick={bookingRocket}
          >
            Reserve Rocket
          </button>
        )}
        {reserved && (
          <button
            type="button"
            id={id}
            className="cancel-reservation-btn clickable"
            onClick={cancelReservation}
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
