import axios from 'axios';

const GET_DATA = 'GET_DATA';
const CHANGE_STATE = 'CHANGE_STATE';

const url = 'https://api.spacexdata.com/v3/missions';
const initialState = {
  missions: [],
};

const getMissions = (payload) => ({
  type: GET_DATA,
  payload,
});

export const changeMission = (id) => ({
  type: CHANGE_STATE,
  payload: id,
});

// ---------------REDUCER------------------

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, missions: action.payload };
    case CHANGE_STATE:
      return [...state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { mission, joined: !mission.joined };
        }
        return mission;
      })];
    default:
      return state;
  }
};

export const fetchMissions = () => async (dispatch) => {
  const request = await axios.get(url);
  const response = await request.data;
  dispatch(getMissions(response));
};

export default missionsReducer;
