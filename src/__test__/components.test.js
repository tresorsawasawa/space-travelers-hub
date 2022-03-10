import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets/Rockets';
import Rocket from '../components/Rockets/Rocket';

it('Test if Rocket render correctly', () => {
  const rocket = {
    id: 1,
    description: 'This is the Falcon1 Rocket',
    image: 'https://test.com',
    name: 'Rocket',
    reserved: false,
  };

  const tree = renderer.create(
    <Provider store={store}>
      <Rocket
        description={rocket.description}
        image={rocket.image}
        name={rocket.name}
        id={rocket.id}
        reserved={rocket.reserved}
      />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('Test if Rockets renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
