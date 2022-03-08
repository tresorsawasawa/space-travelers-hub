import axios from 'axios';

import ROCKETS_API from './api';

const fetchRocketsApiData = async () => {
  const getData = await axios.get(ROCKETS_API);
  const Rockets = [];

  getData.data.forEach((rocketItem) => {
    const rocket = {};
    const firstImage = rocketItem.flickr_images[0];
    rocket.id = rocketItem.id;
    rocket.rocket_name = rocketItem.rocket_name;
    rocket.description = rocketItem.description;
    rocket.flickr_images = firstImage;
    Rockets.push(rocket);
  });

  return Rockets;
};

export default fetchRocketsApiData;
