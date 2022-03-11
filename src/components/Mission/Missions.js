import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission } from '../../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const toggleMission = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <div className="clm-row">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((data) => (
            <tr key={data.mission_id}>
              <td className="td-1">{data.mission_name}</td>
              <td className="td-2">{data.description}</td>
              <td className="td-3">
                <span className={data.reserved ? 'activeMember' : 'notMember'}>
                  {data.reserved ? 'Active Member' : 'NOT A MEMBER'}
                </span>
              </td>
              <td className="td-4">
                <button
                  type="button"
                  id={data.mission_id}
                  onClick={(e) => toggleMission(e.target.id)}
                  className={data.reserved ? 'LeaveMission' : 'JoinMission'}
                >
                  {data.reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
