import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const toggleMission = (id, mission) => {
    const isUseJoined = mission.reserved ? dispatch(joinMission(id)) : null;
    return isUseJoined;
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
          {missions.map(({
            mission_id: id,
            mission_name: name,
            description,
            reserved,
          }) => (
            <tr key={id}>
              <td className="td-1">{name}</td>
              <td className="td-2">{description}</td>
              <td className="td-3"><span>{reserved ? 'Active memeber' : 'Not a member'}</span></td>
              <td className="td-4">
                <button type="button" id={id} onClick={(e) => toggleMission(e.target.id)}>
                  {reserved ? 'Leave Mission' : 'Join Mission'}
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
