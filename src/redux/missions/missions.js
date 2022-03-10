import axios from 'axios';

const GET_DATA = 'GET_DATA';
const JOIN_MISSION = 'JOIN_MISSION';

const url = 'https://api.spacexdata.com/v3/missions';
const initialState = {
  missions: [],
};

const getMissions = (payload) => ({
  type: GET_DATA,
  payload,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

// ---------------REDUCER------------------

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, missions: action.payload };
    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission.id === action.payload) {
            return { ...mission, reserved: !mission.reserved };
          }
          return mission;
        }),
      };
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
