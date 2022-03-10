import fetchRocketsApiData from '../../Data/fetchApiData';
import {
  GET_ROCKETS,
  BOOKING_ROCKET,
  CANCEL_ROCKET_BOOKING,
} from './rocketsActions';

const initialSate = {
  isDataStored: false,
};

export const getRockets = (data) => ({
  type: GET_ROCKETS,
  payload: data,
});

export const bookRocket = (id) => ({
  type: BOOKING_ROCKET,
  payload: id,
});

export const cancelRocketBooking = (id) => ({
  type: CANCEL_ROCKET_BOOKING,
  payload: id,
});

export const getRocketsDispatcher = () => async (dispatch) => {
  const rockets = await fetchRocketsApiData();
  dispatch(getRockets(rockets));
};

const rocketsReducer = (state = initialSate, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return {
        ...state,
        isDataStored: true,
        data: action.payload,
      };

    case BOOKING_ROCKET:
      return {
        ...state,
        isDataStored: true,
        data: state.data.map((rocket) => {
          const reserved = rocket.id === action.payload
            ? { ...rocket, reserved: true }
            : { ...rocket };

          return reserved;
        }),
      };

    case CANCEL_ROCKET_BOOKING:
      return {
        ...state,
        isDataStored: true,
        data: state.data.map((rocket) => {
          const reserved = rocket.id === action.payload
            ? { ...rocket, reserved: false }
            : { ...rocket };

          return reserved;
        }),
      };

    default:
      return state;
  }
};

export default rocketsReducer;
