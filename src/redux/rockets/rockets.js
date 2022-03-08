import fetchRocketsApiData from '../../Data/fetchApiData';
import {
  GET_ROCKETS,
  BOOKING_ROCKET,
  CANCEL_BOOKING_ROCKETS,
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

export const cancelBookingRocket = (id) => ({
  type: CANCEL_BOOKING_ROCKETS,
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

    case CANCEL_BOOKING_ROCKETS:
      return {
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
