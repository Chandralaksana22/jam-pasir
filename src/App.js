import React from 'react';
import Hourglass from './Hourglass';
import Countdown from './Countdown';

const App = () => {
  return (
    <div>
      <h1 className='mb-5'>Jam Pasir</h1>
      <Hourglass />
      <Countdown />
    </div>
  );
};

export default App;
