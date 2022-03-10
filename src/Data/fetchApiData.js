import axios from 'axios';

import ROCKETS_API from './api';

const fetchRocketsApiData = async () => {
  const getData = await axios.get(ROCKETS_API);
  const Rockets = [];

  getData.data.forEach((rocketItem) => {
    const firstImage = rocketItem.flickr_images[0];
    Rockets.push({
      id: rocketItem.id,
      rocket_name: rocketItem.rocket_name,
      description: rocketItem.description,
      image: firstImage,
    });
  });

  return Rockets;
};

export default fetchRocketsApiData;
