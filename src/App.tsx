import React from 'react';
import CountdownTimer from './components/CountdownTimer';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>React Countdown Timer (TS)</h1>
      <CountdownTimer />
    </div>
  );
};

export default App;