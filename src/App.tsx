import React from 'react';
import WeatherDisplay from './components/WeatherDisplay';

const App: React.FC = () => {
  return (
    <div data-test="component-app" className="App">
      <WeatherDisplay />
    </div>
  );
}

export default App;
