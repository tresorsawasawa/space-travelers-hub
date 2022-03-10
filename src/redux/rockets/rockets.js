import fetchRocketsApiData from '../../Data/fetchApiData';
import {
  GET_ROCKETS,
  BOOKING_ROCKET,
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

    default:
      return state;
  }
};

export default rocketsReducer;
