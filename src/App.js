import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile/MyProfile';
import store from './redux/configureStore';

const App = () => (
  <div className="App">
    <Header />
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </Provider>
  </div>
);

export default App;
