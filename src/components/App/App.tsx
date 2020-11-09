import React from 'react';
import NavToolbar from '../NavToolbar/NavToolbar';
import WeatherView from '../WeatherView/WeatherView';
import Footer from '../Footer/Footer';

const App: React.FC = () => {
  return (
    <div data-test="component-app" className="App">
      <NavToolbar />
      <WeatherView />
      <Footer />
    </div>
  );
}

export default App;
